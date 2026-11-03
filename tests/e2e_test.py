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
        check(page.locator("#cardsLevel .textcard").count() == 15, "level 1 shows all 15 level-1 texts")
        if SHOTS: page.screenshot(path=f"{SHOTS}/home.png", full_page=True)

        print("Accuracy mode: slow syllable reading with a pause/restart")
        page.locator("#cardsLevel .textcard", has_text="Mein Hund Bobo").click()
        page.click("[data-mode=genau]")
        page.click("#startBtn")
        page.wait_for_timeout(50)
        check(page.locator("#consent").is_visible(), "parent consent screen appears before the microphone is used")
        check(page.evaluate("__mock.inst.length") == 0, "microphone not started before consent")
        q = page.locator("#consentQ").inner_text().split(":")[1].replace("= ?", "")
        ca, cb = [int(x) for x in q.split("×")]
        page.fill("#consentA", "1"); page.click("#consentYes")
        check(page.locator("#consent").is_visible() and page.locator("#consentErr").inner_text() != "", "wrong sum: consent not accepted")
        page.fill("#consentA", str(ca * cb)); page.click("#consentYes")
        page.wait_for_timeout(50)
        check(page.locator("#consent").is_hidden() and page.evaluate("__mock.inst.length") == 1, "after consent, listening starts")
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
        n_say = page.locator("#sheet .sayw").count()
        check(n_say >= 1, f"speaker buttons next to doubtful words ({n_say})")
        hund_btn = page.locator("#sheet .sayw[aria-label='Wort anhören: Hund']")
        check(hund_btn.count() >= 1, "'Hund' has a speaker button")
        before = page.evaluate("JSON.stringify(__lesefuchs.R.over)")
        hund_btn.first.click()
        check(page.evaluate("JSON.stringify(__lesefuchs.R.over)") == before, "tapping the speaker does not change the marking")
        if SHOTS: page.screenshot(path=f"{SHOTS}/say_buttons.png", full_page=True)
        page.locator(".rv", has_text="Hund").locator("button.yes").click()
        st2 = page.evaluate("(()=>{const R=__lesefuchs.R;return __lesefuchs.M.summarize(R.res.items,R.res.last,R.over)})()")
        check(st2["wrong"] == 0 and st2["accuracy"] == 1, "✓ by parent corrects the score")
        check(page.locator("#sheet .sayw[aria-label='Wort anhören: Hund']").count() == 0, "speaker button disappears once the word is marked correct")
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
        stars_before = page.evaluate("+localStorage.getItem('lf_stars')")
        with page.expect_download() as dl:
            page.click("#exportBtn")
        path = dl.value.path()
        backup = json.load(open(path))
        check(backup["app"] == "leseflitzi" and "lf_hist" in backup["data"] and "lf_key" not in backup["data"], "progress saved to a file (without the API key)")
        page.evaluate("localStorage.clear()")
        page.set_input_files("#importFile", path)
        page.wait_for_timeout(300)
        check(page.evaluate("+localStorage.getItem('lf_stars')") == stars_before and "Loaded" in page.locator("#backupNote").inner_text(), "progress loaded back from the file")
        page.evaluate("localStorage.setItem('lf_consent', JSON.stringify({v:1, mic:true, d:Date.now()}))")

        print("Phone width layout")
        page.set_viewport_size({"width": 390, "height": 844})
        page.locator("#parent [data-go=home]").click()
        page.wait_for_timeout(200)
        overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
        check(not overflow, "no horizontal scrolling at 390 px")
        if SHOTS: page.screenshot(path=f"{SHOTS}/phone_home.png", full_page=True)

        print("Recipe, invitation and timetable texts")
        page.locator("#cardsLevel .textcard", has_text="Bananen-Milchshake").click()
        check(page.locator("[data-mode=fluessig]").is_hidden(), "recipe: no 'Flüssig lesen' mode")
        page.click("[data-mode=genau]")
        check(page.locator("#sheet .li").count() == 3 and page.locator("#sheet .stp").count() == 5, "recipe shows ingredient list and numbered steps")
        page.click("#startBtn"); page.wait_for_timeout(50)
        spoken = "Bananen Milchshake Zutaten für zwei Gläser eine Banane zwei Gläser kalte Milch ein Löffel Honig So geht es Schäle die Banane Schneide sie in kleine Stücke Gib die Banane die Milch und den Honig in einen Mixer Mixe alles eine Minute lang Gieße den Shake in die Gläser Achtung ein Erwachsener hilft dir beim Mixer"
        page.evaluate(f"__emit([{{t:{json.dumps(spoken)}, final:true}}])")
        page.wait_for_timeout(500)
        page.click("#startBtn")
        page.wait_for_selector("#result:not([hidden]) .praise", timeout=4000)
        st = page.evaluate("(()=>{const R=__lesefuchs.R;return __lesefuchs.M.summarize(R.res.items,R.res.last,R.over)})()")
        check(st["wrong"] == 0 and st["reached"] == st["ok"] + st["unsure"] and st["unsure"] <= 1, f"numbers read as words ('eine Banane', 'zwei Gläser') are not errors ({st})")
        if SHOTS: page.screenshot(path=f"{SHOTS}/recipe.png", full_page=True)
        page.locator("#result button", has_text="Zu den Fragen").click()
        page.wait_for_selector("#quiz:not([hidden])")
        page.locator("details.peek summary").click()
        check(page.locator(".peektext .stp").count() == 5, "'Text anzeigen' in the quiz keeps the recipe layout")
        page.click("#quizBack")
        page.locator("#menu [data-go=home]").click()
        page.locator("#home details summary", has_text="Alle Texte").click()
        page.locator("#cardsAll .textcard", has_text="Mit dem Bus ins Schwimmbad").click()
        visible = page.evaluate("[...document.querySelectorAll('.mode')].filter(b=>!b.hidden).map(b=>b.dataset.mode)")
        check(visible == ["woerter", "verstehen"], f"timetable offers word practice and questions only ({visible})")
        page.click("[data-mode=verstehen]")
        check(page.locator("#sheet table tr").count() == 5, "timetable is shown as a table")
        overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
        check(not overflow, "timetable does not cause sideways scrolling on a phone")
        if SHOTS: page.screenshot(path=f"{SHOTS}/timetable_phone.png", full_page=True)

        print("Without microphone (parent declined)")
        page.goto(url); page.wait_for_selector("#cardsLevel .textcard")
        page.evaluate("localStorage.setItem('lf_consent', JSON.stringify({v:1, mic:false, d:Date.now()}))")
        page.reload(); page.wait_for_selector("#cardsLevel .textcard")
        n_before = page.evaluate("__mock.inst.length")
        page.evaluate("document.querySelector('#home details').open=true")
        page.locator("#cardsAll .textcard", has_text="Mein Hund Bobo").click()
        page.click("[data-mode=genau]")
        check("Eltern" in page.locator("#readHint").inner_text(), "reading hint tells parents to tap misread words")
        page.click("#startBtn")
        page.evaluate("__lesefuchs.L.tFirst -= 30000")
        page.click("#startBtn")
        page.wait_for_selector("#result:not([hidden]) .praise", timeout=4000)
        check(page.evaluate("__mock.inst.length") == n_before, "no microphone used after declining")
        page.locator("#sheet .w", has_text="Hund").nth(1).click()
        st = page.evaluate("(()=>{const R=__lesefuchs.R;return __lesefuchs.M.summarize(R.res.items,R.res.last,R.over)})()")
        check(st["wrong"] == 1 and page.locator("#sheet .sayw").count() == 1, "parent taps a misread word: red with a speaker button")
        page.locator("#result button", has_text="Schwere Wörter üben").click()
        check(page.locator(".pcard button", has_text="Jetzt du!").count() == 0 and page.locator(".pcard button", has_text="Geschafft").count() >= 1, "word practice without microphone buttons")
        page.goto(url)

        print("Info page (legal notice, privacy, licences)")
        page.goto(url)
        page.wait_for_selector("#cardsLevel .textcard")
        page.click("text=Impressum · Datenschutz · Lizenzen")
        page.wait_for_selector("#de h1", state="attached")
        check(page.locator("#en").is_visible(), "opens in the browser language (English here)")
        visible = page.evaluate("['de','fr','en'].filter(l=>!document.getElementById(l).hidden)")
        check(len(visible) == 1, f"info page shows one language ({visible})")
        page.click("[data-lang=fr]")
        check(page.locator("#fr").is_visible() and page.locator("#de").is_hidden(), "language switch to French works")
        check("hallo@leseflitzi.eu" in page.locator("#fr").inner_text() and "aol.com" not in page.content(), "contact email hallo@leseflitzi.eu shown, AOL address gone")
        overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
        check(not overflow, "info page fits on a phone")
        if SHOTS: page.screenshot(path=f"{SHOTS}/info_phone.png", full_page=True)

        print("Fair level changes")
        page.goto(url); page.wait_for_selector("#cardsLevel .textcard")
        def level_after(reads):
            page.evaluate("""(reads)=>{localStorage.setItem('lf_settings', JSON.stringify({level:2, levelSince:0, autoLevel:true, slow:true}));
              localStorage.setItem('lf_hist', JSON.stringify(reads.map((r,i)=>Object.assign({v:2,d:Date.now()-1000*(10-i),kind:'read',mode:'genau',level:2,words:60,tid:'x',title:'x'},r))));
              __lesefuchs.evaluateLevel();}""", reads)
            return page.evaluate("JSON.parse(localStorage.getItem('lf_settings')).level")
        check(level_after([{"acc":0.7,"unsureRate":0.1}]*2) == 2, "two weak readings: level stays")
        check(level_after([{"acc":0.7,"unsureRate":0.3}]*3) == 2, "weak readings with many uncertain words: level stays")
        check(level_after([{"acc":0.7,"unsureRate":0.1}]*3) == 1, "three clearly weak readings: level goes down")
        check(level_after([{"acc":0.7,"unsureRate":0.5,"manual":True}]*3) == 1, "parent-marked readings count")

        real_errors = [e for e in errors if "favicon" not in e]
        check(not real_errors, "no console errors or CSP violations" + (": " + " | ".join(real_errors[:3]) if real_errors else ""))
        # ---------- on-device speech recognition (mocked Chrome with language pack) ----------
        print("On-device speech recognition")
        ctx2 = b.new_context(viewport={"width": 800, "height": 1100})
        ctx2.add_init_script(MOCK + """
          window.__installed = false;
          MockSR.available = async (o) => (o && o.processLocally && o.langs[0]==='de-DE') ? (window.__installed ? 'available' : 'downloadable') : 'unavailable';
          MockSR.install = async () => { window.__installed = true; return true; };
          MockSR.prototype.processLocally = false;""")
        p2 = ctx2.new_page(); errs2 = []
        p2.on("pageerror", lambda e: errs2.append(str(e)))
        p2.goto(url); p2.wait_for_selector("#cardsLevel .textcard")
        p2.locator("#cardsLevel .textcard").first.click(); p2.click("[data-mode=genau]"); p2.click("#startBtn"); p2.wait_for_timeout(100)
        check(p2.locator("#consentLocal").is_visible(), "consent offers 'on this device' when Chrome supports it")
        check("device" in p2.locator("#consentText").inner_text() and "Google" in p2.locator("#consentYes").inner_text(), "on-device message first, online via Google as the alternative")
        q = p2.locator("#consentQ").inner_text().split(":")[1].replace("= ?", ""); qa, qb = [int(x) for x in q.split("×")]
        p2.fill("#consentA", str(qa * qb)); p2.click("#consentLocal"); p2.wait_for_timeout(200)
        check(p2.evaluate("window.__installed") and p2.evaluate("__lesefuchs.speechMode()") == "device", "German language pack installed, mode 'on this device'")
        check(p2.evaluate("__mock.inst.length") == 1 and p2.evaluate("__mock.cur.processLocally") is True, "recogniser started with processLocally = true")
        check(not errs2, "no errors in on-device flow")
        ctx2.close()

        # ---------- devices: iPhone, Android tablet, desktop ----------
        print("Devices")
        devices = {
          "iPhone": dict(viewport={"width": 390, "height": 844}, user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1", is_mobile=True, has_touch=True),
          "Android tablet": dict(viewport={"width": 800, "height": 1280}, user_agent="Mozilla/5.0 (Linux; Android 14; Tab) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36", is_mobile=True, has_touch=True),
          "Desktop Edge": dict(viewport={"width": 1366, "height": 800}, user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0"),
        }
        expect = {"iPhone": "Apple", "Android tablet": "Google", "Desktop Edge": "Microsoft"}
        for name, opts in devices.items():
            c3 = b.new_context(**opts); c3.add_init_script(MOCK); p3 = c3.new_page(); e3 = []
            p3.on("pageerror", lambda e: e3.append(str(e)))
            p3.goto(url); p3.wait_for_selector("#cardsLevel .textcard")
            ok_home = not p3.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
            p3.locator("#cardsLevel .textcard").first.click(); p3.click("[data-mode=genau]")
            ok_read = not p3.evaluate("document.documentElement.scrollWidth > window.innerWidth + 1")
            p3.click("#startBtn"); p3.wait_for_timeout(100)
            prov = next((x for x in ["Apple", "Google", "Microsoft"] if x in p3.locator("#consentText").inner_text()), "?")
            p3.click("#consentNo"); p3.wait_for_timeout(50)   # reading starts right away
            p3.evaluate("__lesefuchs.L.tFirst -= 20000"); p3.click("#startBtn")
            p3.wait_for_selector("#result:not([hidden]) .praise", timeout=4000)
            check(ok_home and ok_read and prov == expect[name] and not e3, f"{name}: layout fits, provider '{prov}', no-microphone reading works")
            if SHOTS: p3.screenshot(path=f"{SHOTS}/device_{name.replace(' ','_')}.png")
            c3.close()
        b.close()
    srv.shutdown()
    print("\n" + ("ALL PASSED" if not failures else f"{len(failures)} FAILED"))
    sys.exit(1 if failures else 0)

if __name__ == "__main__":
    main()
