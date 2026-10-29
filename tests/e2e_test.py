"""
End-to-end test: runs the real app in headless Chromium with a simulated
SpeechRecognition (scripted transcripts, pauses, restarts).
Run: python3 tests/e2e_test.py   (needs: pip install playwright; playwright install chromium)
"""
import http.server, threading, functools, os, sys, time, json
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOTS = os.environ.get("SHOTS")  # optional folder for screenshots

MOCK = r"""
window.__mock = { inst: [] };
class MockSR {
  constructor(){ this.continuous=false; window.__mock.inst.push(this); window.__mock.cur=this; this.ended=false; }
  start(){ setTimeout(()=>this.onstart&&this.onstart(),5); }
  stop(){ setTimeout(()=>{ if(!this.ended){ this.ended=true; this.onend&&this.onend(); } },80); }
  abort(){ if(!this.ended){ this.ended=true; this.onend&&this.onend(); } }
}
window.SpeechRecognition = MockSR; window.webkitSpeechRecognition = MockSR;
window.__emit = (items, resultIndex) => {
  const inst = window.__mock.cur;
  const results = items.map(x => { const alts=[{transcript:x.t, confidence:x.c==null?0.9:x.c}].concat((x.alts||[]).map(a=>({transcript:a,confidence:0.5}))); alts.isFinal=!!x.final; return alts; });
  inst.onresult({ resultIndex: resultIndex||0, results });
};
window.__endSession = () => { const i = window.__mock.cur; if(!i.ended){ i.ended=true; i.onend&&i.onend(); } };
window.__say = (alts) => { const i = window.__mock.cur; const r = alts.map(a=>({transcript:a, confidence:0.8})); r.isFinal=true; i.onresult({resultIndex:0, results:[r]}); i.ended=true; i.onend&&i.onend(); };
"""

failures = []
def check(cond, msg):
    print(("  ok   " if cond else "  FAIL ") + msg)
    if not cond: failures.append(msg)

def serve():
    h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    h.log_message = lambda *a: None
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), h)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv

def main():
    srv = serve()
    url = f"http://127.0.0.1:{srv.server_address[1]}/index.html"
    with sync_playwright() as p:
        b = p.chromium.launch()
        ctx = b.new_context(viewport={"width": 800, "height": 1100})
        ctx.add_init_script(MOCK)
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
        page.goto(url)
        page.wait_for_selector("#cardsLevel .textcard")

        print("Home")
        check(page.locator("#cardsLevel .textcard").count() == 4, "level 1 shows 4 short texts")
        if SHOTS: page.screenshot(path=f"{SHOTS}/home.png", full_page=True)

        print("Accuracy mode: slow syllable reading with a pause/restart")
        page.locator("#cardsLevel .textcard", has_text="Mein Hund Bobo").click()
        page.click("[data-mode=genau]")
        page.click("#startBtn")
        page.wait_for_timeout(50)
        page.evaluate("__emit([{t:'Mein Hund Bo bo ich habe einen Hund er heißt Bobo', final:true}])")
        page.wait_for_timeout(600)
        # pause: Chrome ends the session, app restarts a new one
        page.evaluate("__endSession()")
        page.wait_for_timeout(100)
        check(page.evaluate("__mock.inst.length") >= 2, "app restarted listening after the pause")
        page.evaluate("__emit([{t:'Bobo ist klein und braun er hat lan ge Oh ren', final:true}, {t:'jeden Mor', final:false}])")
        page.wait_for_timeout(1500)
        page.evaluate("__emit([{t:'Bobo ist klein und braun er hat lan ge Oh ren', final:true}, {t:'jeden Mor gen bellt er laut', final:true}])")
        page.wait_for_timeout(500)
        page.click("#startBtn")  # Fertig
        page.wait_for_selector("#result:not([hidden]) .praise", timeout=4000)
        res = page.evaluate("(()=>{const R=__lesefuchs.R;const s=__lesefuchs.M.summarize(R.res.items,R.res.last,R.over);return {s, secs:R.res.secs, items:R.res.items.slice(0,R.res.last+1).map(x=>x&&x.s)}})()")
        check(res["s"]["wrong"] == 0, f"no false 'wrong' marks (got {res['items']})")
        check(res["s"]["reached"] == 24, f"reached all 24 words incl. title (got {res['s']['reached']})")
        check(res["s"]["accuracy"] == 1, "confirmed accuracy 100 %")
        check(1.8 <= res["secs"] <= 3.5, f"reading time includes the pause (secs={res['secs']:.2f})")
        check(page.locator(".w.wrong").count() == 0, "no red words on the sheet")
        if SHOTS: page.screenshot(path=f"{SHOTS}/result_accuracy.png", full_page=True)

        print("Word practice from the result")
        page.locator("#result button", has_text="Schwere Wörter üben").click()
        page.wait_for_selector("#practice:not([hidden])")
        n_cards = page.locator(".pcard").count()
        check(n_cards >= 1, f"practice shows hard words ({n_cards})")
        check(page.locator(".pcard .pword .s1").count() >= 1, "syllables in alternating colours")
        page.locator(".pcard").first.locator("button", has_text="Jetzt du!").click()
        word = page.locator(".pcard").first.locator(".pword").inner_text().replace("\n", "")
        page.wait_for_timeout(50)
        page.evaluate(f"__say(['{word}'])")
        page.wait_for_timeout(200)
        check(page.locator(".pcard.done").count() == 1, f"saying the word '{word}' marks it as practised")
        if SHOTS: page.screenshot(path=f"{SHOTS}/practice.png", full_page=True)
        page.click("#practiceDone")

        print("Likely-wrong word and parent correction")
        page.click("[data-mode=genau]")
        page.click("#startBtn"); page.wait_for_timeout(50)
        page.evaluate("__emit([{t:'Mein Hund Bobo ich habe einen Katze er heißt Bobo Bobo ist klein und braun', final:true}])")
        page.wait_for_timeout(500)
        page.click("#startBtn")
        page.wait_for_selector("#result:not([hidden]) .praise", timeout=4000)
        st = page.evaluate("(()=>{const R=__lesefuchs.R;return __lesefuchs.M.summarize(R.res.items,R.res.last,R.over)})()")
        check(st["wrong"] == 1, f"'Katze' for 'Hund' is likely wrong (wrong={st['wrong']})")
        check(page.locator(".rv").count() >= 1, "parent review list shown")
        page.locator(".rv", has_text="Hund").locator("button.yes").click()
        st2 = page.evaluate("(()=>{const R=__lesefuchs.R;return __lesefuchs.M.summarize(R.res.items,R.res.last,R.over)})()")
        check(st2["wrong"] == 0 and st2["accuracy"] == 1, "✓ by parent corrects the score")
        check("hund" in page.evaluate("JSON.parse(localStorage.getItem('lf_trusted')||'[]')"), "word saved as 'often misheard'")
        page.locator("#result button", has_text="Zu den Fragen").click()

        print("Comprehension quiz without API key")
        page.wait_for_selector("#quiz:not([hidden])")
        for i in range(4):
            if page.locator(".opt").count():
                page.locator(".opt").nth(1).click()
            else:
                page.fill("textarea.answer", "Weil er müde ist")
            page.click("#qNext")
        page.wait_for_selector("#report:not([hidden])")
        check(page.locator(".judge").count() == 1, "open answer waits for parent judgement")
        page.locator(".judge button", has_text="Richtig").click()
        check("4 / 4" in page.locator("#repTop .score").inner_text(), "score 4/4 after parent marks the open answer")
        page.locator("#report button", has_text="Fertig").first.click()

        print("Fluency mode: three attempts compared")
        page.locator("#cardsLevel .textcard", has_text="Schnee").click()
        page.click("[data-mode=fluessig]")
        passage_words = page.evaluate("__lesefuchs.R.tNorm.length")
        check(30 <= passage_words <= 50, f"fluency passage is short ({passage_words} words)")
        texts = page.evaluate("__lesefuchs.R.words.filter(w=>w.isWord).map(w=>w.tok).join(' ')")
        for k, delay in enumerate([2500, 1500]):
            page.click("#startBtn"); page.wait_for_timeout(30)
            page.evaluate(f"__emit([{{t:{json.dumps(texts.split(' ')[0])}, final:false}}])")
            page.wait_for_timeout(delay)
            page.evaluate(f"__emit([{{t:{json.dumps(texts)}, final:true}}])")
            page.wait_for_timeout(450)
            page.click("#startBtn")
            page.wait_for_selector("#result:not([hidden]) .praise", timeout=4000)
            if k == 0:
                page.locator("#result button", has_text="Nochmal lesen").click()
        check(page.locator("table.attempts tr").count() == 3, "attempt table lists both readings")
        check(page.locator("#result", has_text="Flüssiger als beim ersten Mal").count() == 1, "improvement is praised")
        if SHOTS: page.screenshot(path=f"{SHOTS}/fluency.png", full_page=True)
        page.locator("#result button", has_text="Fertig").click()

        print("Progress and history")
        if page.locator("#menu:not([hidden])").count(): page.locator("#menu [data-go=home]").click()
        page.wait_for_selector("#home:not([hidden])")
        h = page.evaluate("JSON.parse(localStorage.getItem('lf_hist')).filter(x=>x.v===2)")
        reads = [x for x in h if x["kind"] == "read"]
        check(len(reads) == 4, f"4 readings stored ({len(reads)})")
        check(all("wpm" in x and "acc" in x and "unsureRate" in x for x in reads), "speed, accuracy and uncertainty stored separately")
        check(page.locator("#progress svg").count() >= 1, "progress chart drawn")
        check((page.evaluate("+localStorage.getItem('lf_stars')") or 0) > 0, "stars collected")
        if SHOTS: page.screenshot(path=f"{SHOTS}/home_after.png", full_page=True)

        print("Parent area gate and settings")
        page.click("#parentBtn")
        q = page.locator("#gateQ").inner_text()
        a, bnum = [int(x) for x in q.replace("What is ", "").replace("?", "").split(" × ")]
        page.fill("#gateA", "1"); page.click("#gateGo")
        check(page.locator("#parentArea").is_hidden(), "wrong answer keeps the parent area closed")
        page.fill("#gateA", str(a * bnum)); page.click("#gateGo")
        check(page.locator("#parentArea").is_visible(), "right answer opens the parent area")
        check(page.locator("#trustedList button", has_text="hund").count() == 1, "misheard-word list shows 'hund'")

        print("Phone width layout")
        page.set_viewport_size({"width": 390, "height": 844})
        page.locator("#parent [data-go=home]").click()
        page.wait_for_timeout(200)
        overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
        check(not overflow, "no horizontal scrolling at 390 px")
        if SHOTS: page.screenshot(path=f"{SHOTS}/phone_home.png", full_page=True)

        real_errors = [e for e in errors if "favicon" not in e]
        check(not real_errors, "no console errors or CSP violations" + (": " + " | ".join(real_errors[:3]) if real_errors else ""))
        b.close()
    srv.shutdown()
    print("\n" + ("ALL PASSED" if not failures else f"{len(failures)} FAILED"))
    sys.exit(1 if failures else 0)

if __name__ == "__main__":
    main()
