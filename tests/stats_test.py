"""Privacy test for the visitor counter: run with  python3 tests/stats_test.py
Loads the site as https://leseflitzi.eu (served from this folder) and records every request
that leaves the site. Checks what GoatCounter receives and that nothing else is sent."""
import os, re, sys, json, mimetypes
from urllib.parse import urlparse, parse_qs
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK = open(os.path.join(ROOT, "tests", "e2e_test.py")).read().split('MOCK = r"""')[1].split('"""')[0]
TEXTWORDS = set(w.lower() for w in re.findall(r"[A-Za-zÄÖÜäöüß]{5,}", open(os.path.join(ROOT, "js", "texts.js"), encoding="utf8").read()))
ALLOWED_EVENTS = re.compile(r"^(lesen-start|lesen-fertig)-(genau|fluessig)$|^(woerter-start|quiz-fertig)$")
fails = []
def check(c, m):
    print(("  ok   " if c else "  FAIL ") + m)
    if not c: fails.append(m)

def site(route):
    path = urlparse(route.request.url).path.lstrip("/") or "index.html"
    f = os.path.join(ROOT, path)
    if not os.path.isfile(f): return route.fulfill(status=404, body="")
    route.fulfill(status=200, body=open(f, "rb").read(), content_type=mimetypes.guess_type(f)[0] or "application/octet-stream")

def run(b, *, dnt=False, block=False, host="https://leseflitzi.eu/", ua=None, referer=None, url_suffix=""):
    ctx = b.new_context(viewport={"width": 1024, "height": 1300}, extra_http_headers={"DNT": "1"} if dnt else {}, user_agent=ua) if ua else \
          b.new_context(viewport={"width": 1024, "height": 1300}, extra_http_headers={"DNT": "1"} if dnt else {})
    ctx.add_init_script(MOCK.replace("window.__mock", "window.__mock") + ("\nObject.defineProperty(navigator,'doNotTrack',{get:()=> '1'});" if dnt else "")
                        + "\nObject.defineProperty(navigator,'webdriver',{get:()=>false});")
    sent, other = [], []
    ctx.route("https://leseflitzi.eu/**", site)
    def gc(route):
        sent.append(route.request.url)
        return route.abort() if block else route.fulfill(status=200, body=b"GIF89a", content_type="image/gif")
    ctx.route("https://leseflitzi.goatcounter.com/**", gc)
    pg = ctx.new_page(); errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.on("request", lambda r: other.append(r.url) if not r.url.startswith(("https://leseflitzi.eu/", "https://leseflitzi.goatcounter.com/", "data:")) else None)
    pg.goto(host + url_suffix, referer=referer); pg.wait_for_selector("#cardsLevel .textcard")
    pg.evaluate("localStorage.setItem('lf_consent', JSON.stringify({v:2, mode:'cloud', d:Date.now()}))"); pg.reload(); pg.wait_for_selector("#cardsLevel .textcard")
    # read a text with the (mock) microphone, practise words, take the quiz
    pg.locator("#cardsLevel .textcard").first.click(); pg.click("[data-mode=genau]"); pg.click("#startBtn"); pg.wait_for_timeout(100)
    pg.evaluate("__emit([{t:'Mein Hund Bobo ich habe einen Hund er heißt Bobo', final:true}])"); pg.wait_for_timeout(50)
    pg.evaluate("__lesefuchs.L.tFirst -= 20000"); pg.click("#startBtn"); pg.wait_for_selector("#result:not([hidden]) .praise", timeout=5000)
    ok_app = True
    if pg.locator("#result button", has_text="Schwere Wörter").count():
        pg.locator("#result button", has_text="Schwere Wörter").first.click(); pg.wait_for_timeout(100)
    pg.goto(host); pg.wait_for_selector("#cardsLevel .textcard")
    pg.locator("#cardsLevel .textcard").first.click(); pg.click("[data-mode=verstehen]"); pg.wait_for_timeout(100)
    if not pg.locator("#quiz:not([hidden])").count(): pg.click("#startBtn"); pg.wait_for_timeout(100)
    for i in range(12):
        if pg.locator("#report:not([hidden])").count(): break
        if pg.locator(".opt").count(): pg.locator(".opt").first.click()
        elif pg.locator("textarea.answer").count(): pg.fill("textarea.answer", "Bobo ist müde")
        pg.click("#qNext"); pg.wait_for_timeout(50)
    ok_app = pg.locator("#report:not([hidden])").count() == 1
    for p in ["eltern.html", "info.html"]:
        pg.goto(host + p); pg.wait_for_timeout(150)
    ctx.close()
    return sent, other, errs, ok_app

with sync_playwright() as p:
    b = p.chromium.launch()
    print("Live site, normal visit from Facebook")
    sent, other, errs, ok = run(b, referer="https://m.facebook.com/groups/123/posts/456", url_suffix="?ref=fb-eltern")
    q = [parse_qs(urlparse(u).query) for u in sent]
    views = [x for x in q if "e" not in x]; events = [x for x in q if "e" in x]
    check(len(views) >= 4 and len(events) >= 3, f"page views ({len(views)}) and events ({len(events)}) are counted")
    check(all(set(x) <= {"p", "r", "q", "s", "rnd"} for x in views), "page views send only page, referring site, campaign, screen width")
    check(all(set(x) <= {"p", "e", "rnd"} and ALLOWED_EVENTS.match(x["p"][0]) for x in events), "events send only a fixed name: " + ", ".join(sorted({x['p'][0] for x in events})))
    check(views[0].get("r", [""])[0] == "https://m.facebook.com/" and views[0].get("q", [""])[0] == "?ref=fb-eltern", "referrer shortened to the website, campaign tag kept")
    leaked = [w for u in sent for w in re.findall(r"[A-Za-zÄÖÜäöüß]{5,}", u) if w.lower() in TEXTWORDS and w.lower() not in ("lesen", "start", "genau", "fertig", "eltern", "woerter", "quiz")]
    check(not leaked, "no words from the texts or answers are sent" + (f" (found {leaked[:5]})" if leaked else ""))
    check(not any(k in u for u in sent for k in ("Bobo", "transcript", "score", "level", "accuracy", "wpm")), "no reading results, scores or levels are sent")
    check(not other, "no requests to any other service" + (f": {other[:3]}" if other else ""))
    check(ok and not errs, "app works normally")

    print("Counter unreachable (blocked)")
    sent, other, errs, ok = run(b, block=True)
    check(ok and not errs, "app works normally when GoatCounter is down")

    print("Do Not Track")
    sent, other, errs, ok = run(b, dnt=True)
    check(not sent and ok, "nothing is counted with Do Not Track")

    print("Local test copy")
    import http.server, threading, functools
    h = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT); h.log_message = lambda *a: None
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 8790), h); threading.Thread(target=srv.serve_forever, daemon=True).start()
    ctx = b.new_context(); hits = []
    ctx.on("request", lambda r: hits.append(r.url) if "goatcounter" in r.url else None)
    pg = ctx.new_page(); pg.goto("http://127.0.0.1:8790/"); pg.wait_for_selector("#cardsLevel .textcard"); pg.wait_for_timeout(300)
    check(not hits, "nothing is counted on a local copy"); ctx.close(); srv.shutdown()
    b.close()
print("ALL PASSED" if not fails else f"{len(fails)} FAILED"); sys.exit(1 if fails else 0)
