/* Lesefuchs app. Uses LFMatch (matcher.js), LFSyl (syllables.js) and LF_TEXTS (texts.js). */
(function () {
"use strict";
const M = window.LFMatch, SY = window.LFSyl;
const MODEL = "claude-sonnet-5-5";
const $ = id => document.getElementById(id);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} },
};
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const canListen = !!SR, canSpeak = "speechSynthesis" in window;
const ICON = {
  spk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 17c0-4 3-8 8-8s8 4 8 8"/><path d="M2 17h20"/><circle cx="17" cy="7" r="2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
};
const SKILL = { Finden: "Informationen finden", Schließen: "Mitdenken", Wortschatz: "Wörter verstehen", Reihenfolge: "Reihenfolge" };
const LEVELS = { 1: { w: "40–60", q: 4, d: "very easy: 4–7 words per sentence, present tense, everyday words" }, 2: { w: "60–85", q: 5, d: "easy: short sentences, everyday words, at most two longer words" }, 3: { w: "85–120", q: 6, d: "start of cycle 3.1: short clear sentences, a few compound words" }, 4: { w: "120–150", q: 6, d: "cycle 3.1–3.2: some longer sentences and compound words" } };
const fmtNum = n => String(Math.round(n * 10) / 10).replace(".", ",");
const pct = x => x == null ? "–" : Math.round(x * 100) + " %";
const today = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const dayOf = t => { const d = new Date(t); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const clean = w => String(w).replace(/^[^\p{L}\d]+|[^\p{L}\d]+$/gu, "");

/* ---------------- settings & stored data ---------------- */
const DEF = { slow: true, autoLevel: true, level: 1, levelSince: 0, syl: false };
const settings = () => Object.assign({}, DEF, store.get("lf_settings", {}));
const saveSettings = s => store.set("lf_settings", s);
const hist = () => store.get("lf_hist", []).filter(h => h && h.v === 2);
const addHist = e => { const h = store.get("lf_hist", []); h.push(Object.assign({ v: 2, d: Date.now() }, e)); store.set("lf_hist", h.slice(-400)); };
const trusted = () => new Set(store.get("lf_trusted", []));
const setTrusted = s => store.set("lf_trusted", [...s].slice(-300));
const getKey = () => store.get("lf_key", "");
function addStars(n, why) {
  if (!n) return;
  store.set("lf_stars", (store.get("lf_stars", 0) || 0) + n);
  toast("+" + n + (n === 1 ? " Stern" : " Sterne") + (why ? " · " + why : ""));
  renderBadges();
}
let toastT = null;
function toast(msg) {
  const t = $("toast"); t.innerHTML = ICON.star; t.append(el("span", null, msg)); t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2600);
}

/* old generated texts used word levels */
const LV_OLD = { Leicht: 2, Mittel: 3, Schwer: 4 };
function allTexts() {
  const gen = store.get("lf_texts", []).map(t => Object.assign({}, t, { level: typeof t.level === "number" ? t.level : (LV_OLD[t.level] || 3), generated: true }));
  return [...gen, ...window.LF_TEXTS];
}
const countWords = t => t.split(/\s+/).filter(w => /\p{L}|\d/u.test(w)).length;

/* ---------------- speech ---------------- */
function germanVoice() { try { return speechSynthesis.getVoices().find(v => /^de/i.test(v.lang)); } catch (e) { return null; } }
function say(text, rate, onend) {
  try {
    if (!canSpeak) { onend && onend(); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE"; u.rate = rate || 0.9;
    const v = germanVoice(); if (v) u.voice = v;
    if (onend) { u.onend = onend; u.onerror = onend; }
    speechSynthesis.speak(u);
  } catch (e) { onend && onend(); }
}
const stopSpeaking = () => { try { canSpeak && speechSynthesis.cancel(); } catch (e) {} };

/* ---------------- navigation ---------------- */
const SCREENS = ["home", "menu", "read", "practice", "quiz", "report", "parent"];
let screen = "home";
function show(id) {
  if (screen === "read" && id !== "read") leaveRead();
  stopSpeaking(); stopOneShot();
  screen = id;
  for (const s of SCREENS) $(s).hidden = s !== id;
  window.scrollTo(0, 0);
  if (id === "home") renderHome();
  if (id === "parent") openParent();
  updateTimeBanner();
}
document.addEventListener("click", e => { const g = e.target.closest("[data-go]"); if (g) show(g.dataset.go); });

/* ---------------- session time (10–15 minutes) ---------------- */
setInterval(() => {
  if (document.hidden || screen === "home" || screen === "parent") return;
  const t = store.get("lf_time", {}); const k = today();
  t[k] = (t[k] || 0) + 10;
  for (const d of Object.keys(t)) if (d < dayOf(Date.now() - 40 * 864e5)) delete t[d];
  store.set("lf_time", t);
  updateTimeBanner();
}, 10000);
const minutesToday = () => Math.floor((store.get("lf_time", {})[today()] || 0) / 60);
function updateTimeBanner() {
  const m = minutesToday();
  for (const id of ["timeMsg", "timeMsg2"]) {
    const b = $(id); if (!b) continue;
    if (m >= 15) { b.hidden = false; b.textContent = "Du hast heute schon " + m + " Minuten geübt. Super! Für heute ist das genug."; }
    else b.hidden = true;
  }
}

/* ---------------- home ---------------- */
let CUR = null; // current text
function renderBadges() {
  const b = $("badges"); b.innerHTML = "";
  const st = settings();
  const s1 = el("span", "badge"); s1.innerHTML = '<span class="star">' + ICON.star + "</span>"; s1.append(el("span", null, String(store.get("lf_stars", 0) || 0)));
  b.append(s1, el("span", "badge", "Stufe " + st.level), el("span", "badge", "Heute: " + minutesToday() + " Min."));
}
function renderHome() {
  renderBadges();
  const st = settings();
  $("srBanner").hidden = canListen;
  const msg = store.get("lf_levelmsg", null);
  $("levelMsg").hidden = !msg;
  if (msg) { $("levelMsg").textContent = msg; store.del("lf_levelmsg"); }
  const done = new Set(hist().map(h => h.tid));
  const texts = allTexts();
  const mine = texts.filter(t => t.level === st.level);
  $("forYouTitle").textContent = "Texte für dich · Stufe " + st.level;
  const card = t => {
    const b = el("button", "textcard" + (done.has(t.id) ? " done" : ""));
    b.append(el("span", "label", t.type + (t.generated ? " · neu" : "")), el("span", "tc-title", t.title), el("span", "tc-meta", countWords(t.title + " " + t.text) + " Wörter · Stufe " + t.level + (done.has(t.id) ? " · geübt" : "")));
    b.onclick = () => openMenu(t);
    return b;
  };
  const cl = $("cardsLevel"); cl.innerHTML = ""; mine.forEach(t => cl.append(card(t)));
  if (!mine.length) cl.append(el("p", "muted", "Keine Texte auf dieser Stufe."));
  const ca = $("cardsAll"); ca.innerHTML = ""; texts.forEach(t => ca.append(card(t)));
  // next up
  const next = mine.find(t => !done.has(t.id)) || mine[0];
  const nu = $("nextUp"); nu.innerHTML = "";
  if (next) {
    nu.hidden = false;
    nu.append(el("span", "label", "Heute üben"), el("p", "hint", "„" + next.title + "“: zuerst genau lesen, dann schwere Wörter üben, dann Fragen."));
    const b = el("button", "btn", "Los geht's"); b.onclick = () => openMenu(next); nu.append(b);
  } else nu.hidden = true;
  renderProgress();
}

/* ---------------- menu ---------------- */
function openMenu(t) {
  CUR = t;
  $("menuTitle").textContent = t.title;
  $("menuMeta").textContent = t.type + " · " + countWords(t.title + " " + t.text) + " Wörter · Stufe " + t.level;
  show("menu");
}
document.querySelectorAll(".mode").forEach(b => b.addEventListener("click", () => {
  const m = b.dataset.mode;
  if (m === "woerter") openPractice(practiceWordsForText(CUR), "menu");
  else openRead(m);
}));

/* ---------------- reading ---------------- */
const R = { mode: "genau", passage: null, words: [], tIdx: [], tNorm: [], over: {}, res: null, attempts: [], committed: true, running: false, stopping: false };
/** first sentences of the text, about 30–50 words, for repeated fluency reading */
function fluencyPassage(t) {
  const sentences = t.text.replace(/\n+/g, " ").match(/[^.!?]+[.!?]+[“"]?(\s|$)|[^.!?]+$/g) || [t.text];
  let out = "", n = 0;
  for (const s of sentences) {
    const k = countWords(s);
    if (n >= 30 && n + k > 50) break;
    out += s; n += k;
    if (n >= 45) break;
  }
  return out.trim();
}
function openRead(mode) {
  R.mode = mode; R.attempts = [];
  const t = CUR;
  R.passage = mode === "fluessig" ? { title: "", text: fluencyPassage(t) } : { title: t.title, text: t.text };
  $("sylOn").checked = settings().syl;
  setupAttempt();
  show("read");
}
function setupAttempt() {
  stopListening(true);
  Object.assign(R, { over: {}, res: null, running: false, stopping: false, committed: true });
  L.reset();
  const m = R.mode;
  $("readLbl").textContent = m === "genau" ? "Genau lesen" : m === "fluessig" ? "Flüssig lesen · " + (R.attempts.length + 1) + ". Mal von 3" : "Verstehen";
  $("readHint").textContent = m === "genau" ? "Lies laut, langsam und genau. Fang mit der Überschrift an. Du hast Zeit."
    : m === "fluessig" ? (R.attempts.length ? "Lies das Stück noch einmal. Versuch, ein bisschen flüssiger zu lesen." : "Lies dieses kurze Stück laut. Du liest es dreimal.")
    : "Lies den Text in Ruhe. Laut oder leise. Danach kommen Fragen.";
  const listening = canListen && m !== "verstehen";
  $("startBtn").textContent = m === "verstehen" ? "Fertig gelesen" : "Start";
  $("startBtn").classList.remove("stop");
  $("clock").hidden = m !== "fluessig"; $("clock").textContent = "0:00";
  $("pacerBox").hidden = m !== "fluessig";
  $("listenState").hidden = !listening;
  $("legend").hidden = m === "verstehen";
  $("result").hidden = true; $("controls").hidden = false; $("readHint").hidden = false; $("heard").textContent = "";
  setListen(false, "bereit");
  const last = R.attempts[R.attempts.length - 1];
  if (last && last.wpm) { const v = Math.max(10, Math.min(80, Math.round(last.wpm + 2))); $("paceWpm").value = v; $("paceVal").textContent = v; }
  renderSheet();
}
function renderSheet() {
  const sh = $("sheet"); sh.innerHTML = ""; R.words = []; R.tIdx = []; R.tNorm = [];
  const syl = $("sylOn").checked;
  let i = 0;
  const paras = (R.passage.title ? [R.passage.title] : []).concat(R.passage.text.split(/\n\s*\n/));
  paras.forEach((para, pi) => {
    const p = el("p", pi === 0 && R.passage.title ? "title" : null);
    for (const tok of para.trim().split(/\s+/)) {
      const sp = el("span", "w"); sp.dataset.i = i;
      if (syl && /\p{L}/u.test(tok)) SY.syllables(tok).forEach((s, k) => sp.append(el("span", "s" + (k % 2), s)));
      else sp.textContent = tok;
      const isWord = /\p{L}|\d/u.test(tok);
      R.words.push({ tok, isWord, el: sp, j: isWord ? R.tIdx.length : -1 });
      if (isWord) { R.tIdx.push(i); R.tNorm.push(M.norm(tok)); }
      p.append(sp, " "); i++;
    }
    sh.append(p);
  });
  paint();
}
$("sylOn").addEventListener("change", () => { const s = settings(); s.syl = $("sylOn").checked; saveSettings(s); renderSheet(); });

/** colors on the sheet: live (only confirmed + pointer) or final (all three states) */
function paint() {
  const res = R.res, live = R.running && L.live;
  const curJ = live ? L.live.last + 1 : -1;
  for (const w of R.words) {
    if (!w.isWord) { w.el.className = "w"; continue; }
    let cls = "w";
    if (res) {
      const it = res.items[w.j], s = R.over[w.j] || (w.j <= res.last && it ? it.s : null);
      if (w.j <= res.last && s) { cls += " " + s; if (it && !R.over[w.j] && (it.r === "missing" || it.r === "skipped" || it.r === "gap")) cls += " miss"; }
    } else if (live) {
      const it = L.live.items[w.j];
      if (w.j <= L.live.last && it && it.s === "ok") cls += " ok";
      if (w.j === curJ) cls += " cur";
    }
    if (w.el.classList.contains("pace")) cls += " pace";
    w.el.className = cls;
  }
  if (curJ >= 0 && curJ < R.tIdx.length) {
    const e = R.words[R.tIdx[curJ]].el, r = e.getBoundingClientRect();
    if (r.bottom > innerHeight - 150) e.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
/* parent correction: tap a word after reading (✓ → wahrscheinlich falsch → prüfen) */
$("sheet").addEventListener("click", e => {
  const span = e.target.closest(".w"); if (!span || R.running || R.stopping || !R.res || R.committed) return;
  const w = R.words[+span.dataset.i]; if (!w || !w.isWord || w.j > R.res.last) return;
  const cur = R.over[w.j] || (R.res.items[w.j] ? R.res.items[w.j].s : "unsure");
  const next = { ok: "wrong", wrong: "unsure", unsure: "ok" }[cur] || "ok";
  setOverride(w.j, next);
});
function setOverride(j, s) {
  const it = R.res.items[j], base = it ? it.s : "unsure";
  if (s === base) delete R.over[j]; else R.over[j] = s;
  const tn = R.tNorm[j], tr = trusted();
  if (s === "ok" && base !== "ok") tr.add(tn);
  if (s === "wrong") tr.delete(tn);
  setTrusted(tr);
  paint(); renderResult();
}

/* --- listening engine --- */
let rec = null, oneShot = null;
const L = {
  sessions: [], tFirst: 0, reach: [], live: null, pending: false, autoT: null, restarts: 0,
  reset() { this.sessions = []; this.tFirst = 0; this.reach = []; this.live = null; this.pending = false; clearTimeout(this.autoT); this.restarts = 0; },
};
function setListen(on, txt) { $("micDot").classList.toggle("on", on); $("listenTxt").textContent = txt; }
function newSession() {
  const r = new SR();
  r.lang = "de-DE"; r.continuous = true; r.interimResults = true; r.maxAlternatives = 3;
  const idx = L.sessions.length; L.sessions.push([]);
  r.onstart = () => setListen(true, L.tFirst ? "Ich höre zu…" : "Ich höre zu. Fang an!");
  r.onresult = e => {
    const arr = L.sessions[idx];
    for (let k = e.resultIndex; k < e.results.length; k++) {
      const res = e.results[k], alts = [];
      for (let a = 1; a < res.length; a++) alts.push(res[a].transcript);
      arr[k] = { text: res[0].transcript, final: res.isFinal, conf: res[0].confidence || 0, alts };
    }
    // drop stale interim entries beyond the current list, keep finals
    for (let k = arr.length - 1; k >= e.results.length; k--) if (arr[k] && !arr[k].final) arr.splice(k, 1);
    if (!L.tFirst && arr.some(x => x && x.text.trim())) L.tFirst = performance.now();
    scheduleLive();
  };
  r.onerror = e => {
    if (e.error === "not-allowed" || e.error === "service-not-allowed") {
      R.running = false; stopTimers();
      setListen(false, "Mikrofon blockiert");
      problem(location.protocol === "https:" ? "The microphone is blocked. Tap the icon left of the web address, allow the microphone, then press Start again." : "Chrome blocks the microphone when the page is opened from a file. Open Lesefuchs from its https:// address.");
      $("startBtn").textContent = "Start"; $("startBtn").classList.remove("stop");
    } else if (e.error === "network") { setListen(false, "keine Verbindung"); $("heard").textContent = "Die Spracherkennung braucht Internet."; }
  };
  r.onend = () => {
    if (rec !== r) return;
    if (R.running && !R.stopping) { L.restarts++; try { rec = newSession(); } catch (err) {} }
    else { rec = null; if (L.onStopped) { const f = L.onStopped; L.onStopped = null; f(); } }
  };
  r.start();
  return r;
}
function scheduleLive() {
  if (L.pending) return; L.pending = true;
  setTimeout(() => { L.pending = false; liveUpdate(); }, 350);
}
function liveUpdate() {
  if (!R.running) return;
  const toks = M.buildTokens(L.sessions.map(s => s.filter(Boolean)), new Set(R.tNorm));
  const a = M.align(toks, R.tNorm, { slow: settings().slow, trusted: trusted() });
  const now = performance.now();
  for (let j = 0; j <= a.last; j++) if (L.reach[j] == null) L.reach[j] = now;
  L.live = a;
  const tail = toks.slice(-10).map(t => t.raw).join(" ");
  $("heard").textContent = tail ? "Gehört: … " + tail : "";
  paint();
  clearTimeout(L.autoT);
  const n = R.tNorm.length;
  if (n && a.last === n - 1 && toks.length && toks[toks.length - 1].final) {
    L.autoT = setTimeout(() => { if (R.running) finishReading(); }, settings().slow ? 4000 : 2200);
  }
}
let tickT = null, paceT = null, wake = null;
function tick() {
  if (!L.tFirst) return;
  const s = (performance.now() - L.tFirst) / 1000;
  $("clock").textContent = Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0");
}
function stopTimers() {
  clearInterval(tickT); clearInterval(paceT); tickT = paceT = null; clearTimeout(L.autoT);
  R.words.forEach(w => w.el.classList.remove("pace"));
  try { wake && wake.release(); wake = null; } catch (e) {}
}
$("startBtn").addEventListener("click", () => {
  if (R.mode === "verstehen") { startQuiz(); return; }
  if (R.stopping) return;
  if (R.running) finishReading(); else startReading();
});
function startReading() {
  if (!R.committed) commitResult();
  R.res = null; R.over = {}; L.reset();
  R.running = true;
  R.tStart = performance.now();
  $("startBtn").textContent = "Fertig"; $("startBtn").classList.add("stop");
  $("result").hidden = true; $("readHint").hidden = true;
  paint();
  tickT = setInterval(tick, 250);
  if (R.mode === "fluessig" && $("paceOn").checked) startPacer();
  try { navigator.wakeLock && navigator.wakeLock.request("screen").then(w => (wake = w)).catch(() => {}); } catch (e) {}
  if (canListen) { try { rec = newSession(); } catch (e) { problem("Speech recognition could not start. Reload the page and try again."); } }
  else setListen(false, "kein Zuhören");
}
function stopListening(silent) {
  if (rec) { const r = rec; rec = null; try { r.onend = null; r.abort(); } catch (e) {} }
  if (silent) { R.running = false; R.stopping = false; stopTimers(); }
}
function finishReading() {
  if (!R.running) return;
  R.stopping = true; stopTimers();
  $("startBtn").textContent = "Einen Moment…";
  setListen(false, "fertig");
  const done = () => { clearTimeout(guard); finalize(); };
  const guard = setTimeout(() => { L.onStopped = null; if (rec) { try { rec.onend = null; rec.abort(); } catch (e) {} rec = null; } finalize(); }, 2500);
  if (rec) { L.onStopped = done; try { rec.stop(); } catch (e) { done(); } } else done();
}
function finalize() {
  if (!R.stopping) return;
  R.running = false; R.stopping = false;
  $("startBtn").textContent = "Start"; $("startBtn").classList.remove("stop");
  const toks = M.buildTokens(L.sessions.map(s => s.filter(Boolean)), new Set(R.tNorm));
  if (!L.tFirst || !toks.length) {
    problem(canListen ? "Ich habe nichts gehört. Ist das Mikrofon an? Halte das Tablet näher und drück noch einmal Start." : "Without speech recognition, open Lesefuchs in Chrome.");
    $("readHint").hidden = false;
    return;
  }
  const a = M.align(toks, R.tNorm, { slow: settings().slow, trusted: trusted() });
  const lastT = a.last >= 0 ? (L.reach[a.last] != null ? L.reach[a.last] : performance.now()) : performance.now();
  const secs = Math.max(1, (lastT - L.tFirst) / 1000);
  R.res = { items: a.items, last: a.last, secs, total: R.tNorm.length, restarts: L.restarts };
  R.committed = false;
  $("heard").textContent = "";
  paint();
  if (a.last < 2) { problem("Das war noch zu kurz. Lies ein paar Sätze und drück dann Fertig."); R.res = null; R.committed = true; paint(); return; }
  renderResult();
  $("controls").hidden = true;
  $("result").scrollIntoView({ behavior: "smooth", block: "start" });
}
function problem(msg) { const P = $("result"); P.hidden = false; P.innerHTML = ""; P.append(el("p", "err-note", msg)); }

function currentStats() {
  const r = R.res, sum = M.summarize(r.items, r.last, R.over);
  const wpm = sum.reached / (r.secs / 60);
  let selfcorr = 0, syllables = 0;
  for (let j = 0; j <= r.last; j++) { const it = r.items[j]; if (!it) continue; if (it.notes.includes("selfcorr")) selfcorr++; if (it.r === "syllables") syllables++; }
  return Object.assign(sum, { wpm, secs: r.secs, selfcorr, syllables });
}
const PRAISE = ["Super gelesen!", "Toll gemacht!", "Prima!", "Klasse gelesen!", "Stark!"];
function renderResult() {
  if (!R.res) return;
  const st = currentStats(), P = $("result"); P.hidden = false; P.innerHTML = "";
  P.append(el("p", "praise", PRAISE[Math.floor(Math.random() * PRAISE.length)]));
  const tiles = el("div", "stats");
  const tile = (v, l, main) => { const d = el("div", "stat" + (main ? " main" : "")); d.append(el("b", null, v), el("span", "small muted", l)); return d; };
  const time = Math.floor(st.secs / 60) + ":" + String(Math.round(st.secs % 60)).padStart(2, "0");
  if (R.mode === "fluessig") tiles.append(tile(Math.round(st.wpm), "Wörter pro Minute", true), tile(pct(st.accuracy), "sicher richtig"), tile(time, st.reached + " Wörter"));
  else tiles.append(tile(pct(st.accuracy), "sicher richtig gelesen", true), tile(st.reached + (st.reached < R.res.total ? " / " + R.res.total : ""), "Wörter gelesen"), tile(Math.round(st.wpm), "Wörter pro Minute"));
  P.append(tiles);
  const good = [];
  if (st.selfcorr) good.push("Du hast dich " + st.selfcorr + "× selbst verbessert. Das machen gute Leser!");
  if (st.syllables) good.push(st.syllables + " lange Wörter hast du in Silben gelesen. Prima!");
  good.forEach(g => P.append(el("p", "hint", g)));

  // fluency: attempts
  if (R.mode === "fluessig") {
    const all = R.attempts.slice();
    if (!R.committed) all.push({ wpm: st.wpm, accuracy: st.accuracy, secs: st.secs });
    if (all.length > 1) {
      const tb = el("table", "attempts");
      tb.innerHTML = "<tr><th>Mal</th><th>Wörter/Min.</th><th>sicher richtig</th></tr>";
      all.forEach((x, i) => {
        const tr = el("tr");
        const d = i ? Math.round(x.wpm) - Math.round(all[i - 1].wpm) : 0;
        const c1 = el("td", null, (i + 1) + "."), c2 = el("td", null, String(Math.round(x.wpm))), c3 = el("td", null, pct(x.accuracy));
        if (i && d > 0) c2.append(el("span", "up", " +" + d));
        tr.append(c1, c2, c3); tb.append(tr);
      });
      P.append(tb);
      const first = all[0], now = all[all.length - 1];
      P.append(el("p", "hint", now.wpm > first.wpm + 0.5 || (now.accuracy || 0) > (first.accuracy || 0) + 0.02 ? "Flüssiger als beim ersten Mal! Super!" : "Gut geübt! Jedes Mal lesen hilft deinem Kopf."));
    }
  }

  // parent review
  const review = [];
  for (let j = 0; j <= R.res.last; j++) {
    const it = R.res.items[j], s = R.over[j] || (it ? it.s : "unsure");
    if ((it && it.s !== "ok") || R.over[j]) review.push({ j, it, s });
  }
  if (review.length) {
    const box = el("div", "review");
    box.append(el("span", "label", "Für Eltern · bitte prüfen"),
      el("p", "note", "The microphone was not sure about these words. Tap ✓ if he read the word correctly, ✗ if not. Uncertain words are not counted as mistakes."));
    review.slice(0, 30).forEach(x => {
      const row = el("div", "rv");
      row.append(el("span", "rw", clean(R.words[R.tIdx[x.j]].tok)));
      const why = !x.it ? "" : x.it.r === "gap" || x.it.r === "missing" ? "nicht gehört" : x.it.r === "skipped" ? "wahrscheinlich ausgelassen" : x.it.heard ? "gehört: „" + x.it.heard + "“" : "";
      row.append(el("span", "rh", (x.it && x.it.s === "wrong" ? "wahrscheinlich falsch · " : "") + why));
      const rb = el("span", "rb");
      const yes = el("button", "yes", "✓"), no = el("button", "no", "✗");
      yes.setAttribute("aria-label", "richtig"); no.setAttribute("aria-label", "falsch");
      yes.setAttribute("aria-pressed", String(x.s === "ok")); no.setAttribute("aria-pressed", String(x.s === "wrong"));
      yes.onclick = () => setOverride(x.j, "ok"); no.onclick = () => setOverride(x.j, "wrong");
      rb.append(yes, no); row.append(rb); box.append(row);
    });
    P.append(box);
  }
  if (st.unsureRate > 0.2 || R.res.restarts > 3) P.append(el("p", "banner", "Die Spracherkennung war heute oft unsicher. Die Zahlen sind nur ein Hinweis. (Recognition was often uncertain this time: treat the numbers as a rough guide.)"));

  // next steps
  const row = el("div", "row");
  const btn = (txt, cls, fn) => { const b = el("button", "btn" + (cls ? " " + cls : ""), txt); b.onclick = fn; row.append(b); };
  if (R.mode === "genau") {
    btn("Schwere Wörter üben", "", () => { commitResult(); openPractice(practiceWordsFromResult(), "read"); });
    btn("Nochmal lesen", "ghost", () => { commitResult(); setupAttempt(); });
    btn("Zu den Fragen", "ghost", () => { commitResult(); startQuiz(); });
  } else if (R.mode === "fluessig") {
    const n = R.attempts.length + 1;
    if (n < 3) btn("Nochmal lesen (" + (n + 1) + ". Mal)", "", () => { commitResult(); setupAttempt(); });
    btn(n < 3 ? "Fertig für heute" : "Fertig, super geübt!", n < 3 ? "ghost" : "", () => { commitResult(); show("menu"); });
  }
  P.append(row);
}
function commitResult() {
  if (R.committed || !R.res) return;
  R.committed = true;
  const st = currentStats();
  const wrongWords = [];
  for (let j = 0; j <= R.res.last; j++) { const s = R.over[j] || (R.res.items[j] ? R.res.items[j].s : "unsure"); if (s === "wrong") wrongWords.push(clean(R.words[R.tIdx[j]].tok)); }
  addHist({ kind: "read", mode: R.mode, tid: CUR.id, title: CUR.title, level: CUR.level, words: st.reached, secs: Math.round(st.secs), wpm: Math.round(st.wpm * 10) / 10, acc: st.accuracy, unsure: st.unsure, unsureRate: st.unsureRate, wrong: st.wrong, selfcorr: st.selfcorr, attempt: R.attempts.length + 1 });
  const bank = store.get("lf_bank", {});
  for (const w of wrongWords) { const k = w.toLowerCase(); bank[k] = bank[k] || { w, errors: 0, mastered: 0 }; bank[k].errors++; bank[k].last = Date.now(); }
  store.set("lf_bank", bank);
  let stars = 1, why = "fertig gelesen";
  if (R.mode === "fluessig" && R.attempts.length) {
    const first = R.attempts[0];
    if (st.wpm > first.wpm + 0.5 || (st.accuracy || 0) > (first.accuracy || 0) + 0.02) { stars++; why = "flüssiger als vorher"; }
  }
  R.attempts.push({ wpm: st.wpm, accuracy: st.accuracy, secs: st.secs });
  R.lastWrong = wrongWords;
  addStars(stars, why);
  evaluateLevel();
}
function leaveRead() { stopListening(true); commitResult(); R.res = null; }
$("readBack").addEventListener("click", () => show("menu"));

let paceI = 0;
function startPacer() {
  paceI = 0;
  const spans = R.words.map(w => w.el);
  const step = () => { spans.forEach(s => s.classList.remove("pace")); if (paceI >= spans.length) { clearInterval(paceT); paceT = null; return; } spans[paceI++].classList.add("pace"); };
  step(); paceT = setInterval(step, 60000 / (+$("paceWpm").value));
}
$("paceWpm").addEventListener("input", () => { $("paceVal").textContent = $("paceWpm").value; });

/* ---------------- word practice ---------------- */
function tipsFor(w) {
  const l = w.toLowerCase(), t = [], noSch = l.replace(/sch/g, "");
  if (/sch/.test(l)) t.push("sch = “sh”");
  if (/^sp/.test(l)) t.push("sp at the start = “shp”");
  if (/^st/.test(l)) t.push("st at the start = “sht”");
  if (/ei/.test(l)) t.push("ei = “eye”");
  if (/ie/.test(l)) t.push("ie = long “ee”");
  if (/eu|äu/.test(l)) t.push("eu/äu = “oy”");
  if (/[aou]ch/.test(noSch)) t.push("ch after a/o/u: from the back of the throat");
  else if (/ch/.test(noSch)) t.push("ch: a soft hiss, like a whispered “h”");
  if (/ä/.test(l)) t.push("ä ≈ “e” in “bed”");
  if (/ö/.test(l)) t.push("ö: say “e” with round lips");
  if (/ü/.test(l)) t.push("ü: say “ee” with round lips");
  if (/z/.test(l)) t.push("z = “ts”");
  if (/w/.test(l)) t.push("w = “v”");
  if (/^v/.test(l)) t.push("v at the start usually = “f”");
  return t.slice(0, 3);
}
function practiceWordsForText(t) {
  const text = t.title + " " + t.text;
  const inText = new Set(text.split(/\s+/).map(w => clean(w).toLowerCase()));
  const bank = store.get("lf_bank", {});
  const due = Object.values(bank).filter(b => inText.has(b.w.toLowerCase()) && b.errors > b.mastered).map(b => b.w);
  return [...new Set([...due, ...SY.hardWords(text, 6)])].slice(0, 8);
}
function practiceWordsFromResult() {
  const wrong = R.lastWrong || [];
  const tr = trusted();
  const hard = SY.hardWords(R.passage.title + " " + R.passage.text, 5).filter(w => !tr.has(M.norm(w)));
  return [...new Set([...wrong, ...hard])].slice(0, 8);
}
let practiceReturn = "menu";
function openPractice(words, from) {
  practiceReturn = from;
  const list = $("practiceList"); list.innerHTML = "";
  if (!words.length) list.append(el("p", "hint", "In diesem Text gibt es keine besonders schweren Wörter. Super!"));
  words.forEach(w => list.append(practiceCard(w)));
  show("practice");
}
$("practiceBack").addEventListener("click", () => show(practiceReturn === "read" ? "menu" : practiceReturn));
$("practiceDone").addEventListener("click", () => show("menu"));
function practiceCard(word) {
  const card = el("div", "pcard");
  const syl = SY.syllables(word);
  const wd = el("div", "pword");
  const spans = syl.map((s, k) => { const sp = el("span", "syl s" + (k % 2), s); wd.append(sp); return sp; });
  card.append(wd);
  if (syl.length > 1) card.append(el("p", "pdots", syl.join(" · ")));
  const tips = tipsFor(word); if (tips.length) card.append(el("p", "ptip", "For parents: " + tips.join(" · ")));
  const row = el("div", "row"), fb = el("span", "pfb");
  let tries = 0;
  if (canSpeak) {
    const b1 = el("button", "icon-btn"); b1.innerHTML = ICON.spk; b1.append(el("span", null, "Ganzes Wort"));
    b1.onclick = () => say(word, 0.85);
    const b2 = el("button", "icon-btn"); b2.innerHTML = ICON.slow; b2.append(el("span", null, "Langsam"));
    b2.onclick = () => {
      // speak slowly and light up the syllables one after another
      const per = Math.max(450, 900 * (word.length / syl.length) / 4);
      spans.forEach(s => s.classList.remove("on"));
      let k = 0; const step = () => { spans.forEach(s => s.classList.remove("on")); if (k < spans.length) { spans[k++].classList.add("on"); setTimeout(step, per); } };
      step(); say(word, 0.5);
    };
    row.append(b1, b2);
  }
  if (canListen) {
    const b3 = el("button", "icon-btn"); b3.innerHTML = ICON.mic; const lbl = el("span", null, "Jetzt du!"); b3.append(lbl);
    b3.onclick = () => {
      if (oneShot) { stopOneShot(); return; }
      stopSpeaking();
      fb.textContent = ""; fb.className = "pfb";
      b3.classList.add("live"); lbl.textContent = "Sag das Wort…";
      listenOnce(alts => {
        const target = M.norm(word);
        let best = "none";
        for (const t of alts) {
          const ws = M.words(t).map(M.norm).filter(Boolean), joined = ws.join("");
          if (joined === target || ws.includes(target)) { best = "ok"; break; }
          if (M.sameSound(joined, target) || M.sim(joined, target) >= 0.75) best = "close";
        }
        tries++;
        if (best === "ok" || best === "close") { fb.textContent = "Super! ✓"; fb.className = "pfb ok"; markMastered(word, card); }
        else if (tries < 2) { fb.textContent = "Gut geübt! Hör noch einmal genau hin und sag es noch einmal."; fb.className = "pfb half"; }
        else { fb.textContent = "Das Mikrofon versteht es schwer. Mama/Papa, war es richtig?"; fb.className = "pfb half"; parentBtns(); }
      }, () => { b3.classList.remove("live"); lbl.textContent = "Jetzt du!"; });
    };
    row.append(b3);
  }
  const pb = el("span", "row");
  function parentBtns() {
    pb.innerHTML = "";
    const y = el("button", "btn small", "War richtig"); y.onclick = () => { fb.textContent = "Super! ✓"; fb.className = "pfb ok"; markMastered(word, card); pb.innerHTML = ""; };
    const n = el("button", "btn ghost small", "Nochmal üben"); n.onclick = () => { tries = 0; fb.textContent = ""; pb.innerHTML = ""; };
    pb.append(y, n);
  }
  if (!canListen) { const y = el("button", "btn small ghost", "Geschafft"); y.onclick = () => markMastered(word, card); row.append(y); }
  card.append(row, fb, pb);
  return card;
}
function markMastered(word, card) {
  if (card.classList.contains("done")) return;
  card.classList.add("done");
  const bank = store.get("lf_bank", {}), k = word.toLowerCase();
  bank[k] = bank[k] || { w: word, errors: 0, mastered: 0 };
  bank[k].mastered++; store.set("lf_bank", bank);
  addHist({ kind: "practice", tid: CUR && CUR.id, word });
  addStars(1, "Wort geübt");
}
function listenOnce(onAlts, onEnd) {
  try {
    const r = new SR(); r.lang = "de-DE"; r.interimResults = false; r.continuous = false; r.maxAlternatives = 5;
    let got = false;
    r.onresult = e => { got = true; const res = e.results[0]; const alts = []; for (let a = 0; a < res.length; a++) alts.push(res[a].transcript); onAlts(alts); };
    r.onerror = () => {};
    r.onend = () => { oneShot = null; if (!got) onAlts([]); onEnd && onEnd(); };
    oneShot = r; r.start();
  } catch (e) { oneShot = null; onEnd && onEnd(); }
}
function stopOneShot() { if (oneShot) { try { oneShot.stop(); } catch (e) {} } }

/* ---------------- quiz ---------------- */
const Q = { answers: [], qi: 0, rep: null };
function startQuiz() { stopListening(true); Q.answers = CUR.questions.map(() => null); Q.qi = 0; show("quiz"); renderQ(); }
$("quizBack").addEventListener("click", () => { show("menu"); });
function renderQ() {
  stopOneShot();
  const qs = CUR.questions, q = qs[Q.qi], P = $("qpanel"); P.innerHTML = "";
  const dots = $("dots"); dots.innerHTML = "";
  qs.forEach((_, i) => dots.append(el("span", "dot" + (i === Q.qi ? " now" : (Q.answers[i] != null && Q.answers[i] !== "" ? " done" : "")))));
  const top = el("div", "row spread"); top.append(el("span", "label", "Frage " + (Q.qi + 1) + " von " + qs.length), el("span", "skill", SKILL[q.skill] || q.skill)); P.append(top);
  P.append(el("p", "qtext", q.q));
  if (canSpeak) { const b = el("button", "icon-btn"); b.innerHTML = ICON.spk; b.append(el("span", null, "Vorlesen")); b.onclick = () => say(q.q + (q.kind === "mc" ? " " + q.options.map((o, i) => "ABCD"[i] + ": " + o).join(". ") : "")); P.append(b); }
  if (q.kind === "mc") {
    const o = el("div", "opts");
    q.options.forEach((t, i) => { const b = el("button", "opt"); b.setAttribute("aria-pressed", String(Q.answers[Q.qi] === i)); b.append(el("span", "ltr", "ABCD"[i] || String(i + 1)), el("span", null, t)); b.onclick = () => { Q.answers[Q.qi] = i; renderQ(); }; o.append(b); });
    P.append(o);
  } else {
    const ta = el("textarea", "answer"); ta.id = "ans" + Q.qi; ta.placeholder = "Sag oder schreib deine Antwort…"; ta.value = Q.answers[Q.qi] || ""; ta.oninput = () => { Q.answers[Q.qi] = ta.value; };
    if (canListen) {
      const mb = el("button", "icon-btn"); mb.innerHTML = ICON.mic; const lbl = el("span", null, "Antwort sagen"); mb.append(lbl);
      mb.onclick = () => {
        if (oneShot) { stopOneShot(); return; }
        stopSpeaking();
        const before = ta.value.trim();
        mb.classList.add("live"); lbl.textContent = "Ich höre zu… (tippen zum Stoppen)";
        listenOnce(alts => { if (alts[0]) { ta.value = (before ? before + " " : "") + alts[0]; Q.answers[Q.qi] = ta.value; } }, () => { mb.classList.remove("live"); lbl.textContent = "Antwort sagen"; });
      };
      P.append(mb);
    }
    P.append(ta);
  }
  const d = el("details", "peek"); d.append(el("summary", null, "Text anzeigen"), el("div", "peektext", CUR.text)); P.append(d);
  $("qPrev").disabled = Q.qi === 0;
  $("qNext").textContent = Q.qi === qs.length - 1 ? "Fertig, Antworten prüfen" : "Weiter";
}
$("qPrev").addEventListener("click", () => { if (Q.qi > 0) { Q.qi--; renderQ(); } });
$("qNext").addEventListener("click", () => { if (Q.qi < CUR.questions.length - 1) { Q.qi++; renderQ(); } else finishQuiz(); });
function finishQuiz() {
  stopOneShot();
  const qs = CUR.questions;
  Q.rep = { res: qs.map((q, i) => q.kind === "mc" ? { v: Q.answers[i] === q.answer ? "richtig" : "falsch", fb: "" } : { v: (Q.answers[i] || "").trim() ? "wait" : "falsch", fb: "" }), kid: "", parent: "", ai: "pending", saved: false };
  show("report"); renderReport(); analyze();
}
async function analyze() {
  const qs = CUR.questions;
  if (!getKey()) { Q.rep.ai = "off"; Q.rep.res.forEach(r => { if (r.v === "wait") r.v = "judge"; }); renderReport(); return; }
  const list = qs.map((q, i) => {
    const a = Q.answers[i]; const child = q.kind === "mc" ? (a == null ? "(no answer)" : q.options[a]) : ((a || "").trim() || "(no answer)");
    return (i + 1) + ". [" + q.skill + ", " + (q.kind === "mc" ? "multiple choice" : "open") + "] " + q.q + "\nCorrect answer: " + (q.kind === "mc" ? q.options[q.answer] : q.answer) + "\nChild's answer: " + child;
  }).join("\n\n");
  const prompt = "You are a warm, encouraging German reading teacher checking the answers of an 8-year-old in Luxembourg (cycle 3.1; German is not his first language). Open answers may come from speech recognition, so ignore spelling, missing punctuation and odd word splits. Judge understanding: a short answer that shows he understood is \"richtig\"; partly right is \"teilweise\"; wrong or empty is \"falsch\". Multiple-choice answers are right only if they match the correct answer.\n\nTEXT:\n" + CUR.title + "\n" + CUR.text + "\n\nQUESTIONS:\n" + list +
    "\n\nReply with only JSON:\n{\"results\":[{\"verdict\":\"richtig|teilweise|falsch\",\"feedback\":\"one short warm sentence in simple German for the child (max 12 words); if not fully right, give the right answer from the text\"}],\"kid_summary\":\"1–2 encouraging sentences in simple German\",\"parent_report\":\"For the parent, in English, 3–5 sentences: how he did by skill (finding information, inferring, vocabulary, order of events) and 2 concrete practice ideas for this week.\"}\n\"results\" must have exactly " + qs.length + " entries, in question order.";
  try {
    const j = await callClaude(prompt);
    (j.results || []).forEach((x, i) => { const rr = Q.rep.res[i]; if (!rr || !x) return; if (qs[i].kind === "open" && ["richtig", "teilweise", "falsch"].includes(x.verdict)) rr.v = x.verdict; rr.fb = String(x.feedback || ""); });
    Q.rep.res.forEach(r => { if (r.v === "wait") r.v = "judge"; });
    Q.rep.kid = String(j.kid_summary || ""); Q.rep.parent = String(j.parent_report || ""); Q.rep.ai = "done";
  } catch (e) { Q.rep.ai = "err"; Q.rep.err = errCopy(e); Q.rep.res.forEach(r => { if (r.v === "wait") r.v = "judge"; }); }
  renderReport();
}
const quizScore = () => Q.rep.res.reduce((a, r) => a + (r.v === "richtig" ? 1 : r.v === "teilweise" ? 0.5 : 0), 0);
function renderReport() {
  const qs = CUR.questions, rep = Q.rep, pending = rep.res.some(r => r.v === "wait" || r.v === "judge");
  const T = $("repTop"); T.innerHTML = "";
  T.append(el("span", "label", CUR.title));
  const row = el("div", "row"); row.append(el("span", "score", fmtNum(quizScore()) + " / " + qs.length), el("span", "muted", pending ? "Punkte (noch nicht fertig)" : "Punkte")); T.append(row);
  if (rep.kid) { T.append(el("p", "kidsay", rep.kid)); if (canSpeak) { const b = el("button", "icon-btn"); b.innerHTML = ICON.spk; b.append(el("span", null, "Vorlesen")); b.onclick = () => say(rep.kid); T.append(b); } }
  const Lst = $("repList"); Lst.innerHTML = "";
  const map = { richtig: ["ok", "Richtig"], teilweise: ["half", "Teilweise"], falsch: ["no", "Noch nicht"], wait: ["wait", "Wird geprüft…"], judge: ["wait", "Eltern: bitte bewerten"] };
  qs.forEach((q, i) => {
    const r = rep.res[i], d = el("div", "res");
    d.append(el("span", "pill " + map[r.v][0], map[r.v][1]), el("p", "q", (i + 1) + ". " + q.q));
    const a = Q.answers[i]; d.append(el("p", "a", "Antwort: " + (q.kind === "mc" ? (a == null ? "–" : q.options[a]) : ((a || "").trim() || "–"))));
    if (r.v !== "richtig" && r.v !== "wait") d.append(el("p", "fb", "Richtig ist: " + (q.kind === "mc" ? q.options[q.answer] : q.answer)));
    if (r.fb) d.append(el("p", "fb", r.fb));
    if (r.v === "judge") { const j = el("div", "judge"); for (const [v, l] of [["richtig", "Richtig"], ["teilweise", "Teilweise"], ["falsch", "Falsch"]]) { const b = el("button", null, l); b.onclick = () => { r.v = v; renderReport(); }; j.append(b); } d.append(j); }
    Lst.append(d);
  });
  const P = $("repParent"); P.innerHTML = ""; P.append(el("h3", null, "For parents"));
  if (rep.ai === "pending") { const p = el("p", "muted"); p.append(el("span", "spin"), document.createTextNode("Claude is checking his answers…")); P.append(p); }
  else if (rep.ai === "done") rep.parent.split(/\n+/).filter(Boolean).forEach(t => P.append(el("p", null, t)));
  else if (rep.ai === "err") P.append(el("p", "err-note", rep.err + " Mark the open answers yourself using the model answers above."));
  else P.append(el("p", "muted", "Mark the open answers yourself using the model answers above. (With a Claude API key in the parent area, answers are checked automatically.)"));
  if (!pending && !rep.saved) {
    rep.saved = true;
    const sc = quizScore();
    addHist({ kind: "quiz", tid: CUR.id, title: CUR.title, level: CUR.level, score: sc, of: qs.length });
    addStars(sc / qs.length >= 0.99 ? 3 : sc / qs.length >= 0.5 ? 2 : 1, "Fragen beantwortet");
    evaluateLevel();
  }
}

/* ---------------- adaptive level ---------------- */
function evaluateLevel() {
  const st = settings(); if (!st.autoLevel) return;
  const ev = hist().filter(h => h.d > (st.levelSince || 0) && h.level === st.level);
  const reads = ev.filter(h => h.kind === "read" && h.mode === "genau" && h.acc != null && h.unsureRate < 0.35 && h.words >= 20).slice(-2);
  const quizzes = ev.filter(h => h.kind === "quiz").slice(-2);
  const lastQ = quizzes[quizzes.length - 1];
  let to = st.level;
  if (st.level < 4 && reads.length >= 2 && reads.every(r => r.acc >= 0.95) && lastQ && lastQ.score / lastQ.of >= 0.75) to = st.level + 1;
  else if (st.level > 1 && ((reads.length >= 2 && reads.every(r => r.acc < 0.85)) || (quizzes.length >= 2 && quizzes.every(q => q.score / q.of < 0.5)))) to = st.level - 1;
  if (to === st.level) return;
  const from = st.level;
  st.level = to; st.levelSince = Date.now(); saveSettings(st);
  store.set("lf_levelmsg", to > from ? "Super! Du bist jetzt auf Stufe " + to + ". Die Texte werden ein bisschen länger." : "Wir lesen jetzt kürzere Texte (Stufe " + to + "). So übst du ganz entspannt.");
  if (to > from) addStars(3, "neue Stufe");
}

/* ---------------- progress ---------------- */
const median = a => { if (!a.length) return null; const s = a.slice().sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const mean = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
function renderProgress() {
  const P = $("progress"); P.innerHTML = "";
  const h = hist();
  const reads = h.filter(x => x.kind === "read" && x.words >= 10);
  const quizzes = h.filter(x => x.kind === "quiz");
  if (!reads.length && !quizzes.length) { P.append(el("p", "muted", "Noch keine Übungen. Nach dem ersten Lesen siehst du hier, wie du besser wirst.")); return; }
  const now = Date.now(), wk = 7 * 864e5;
  const inRange = (a, from, to) => a.filter(x => x.d >= from && x.d < to);
  const firstTries = a => a.filter(x => (x.attempt || 1) === 1);
  const thisW = { r: inRange(firstTries(reads), now - wk, now + 1), q: inRange(quizzes, now - wk, now + 1) };
  const lastW = { r: inRange(firstTries(reads), now - 2 * wk, now - wk), q: inRange(quizzes, now - 2 * wk, now - wk) };
  const tiles = el("div", "tiles");
  const tile = (v, lbl, d, unit) => {
    const t = el("div", "tile"); t.append(el("b", null, v == null ? "–" : v), el("span", "small muted", lbl));
    if (d != null && isFinite(d)) { const up = d > 0; t.append(el("span", "delta " + (up ? "pos" : "neg"), (up ? "↑ +" : d < 0 ? "↓ " : "± ") + (Math.round(d * 10) / 10).toString().replace(".", ",") + (unit || "") + " zur Vorwoche")); }
    return t;
  };
  const wpmA = median(thisW.r.map(x => x.wpm)), wpmB = median(lastW.r.map(x => x.wpm));
  const accA = mean(thisW.r.filter(x => x.acc != null).map(x => x.acc)), accB = mean(lastW.r.filter(x => x.acc != null).map(x => x.acc));
  const qA = mean(thisW.q.map(x => x.score / x.of)), qB = mean(lastW.q.map(x => x.score / x.of));
  tiles.append(
    tile(wpmA == null ? null : Math.round(wpmA), "Tempo (Wörter/Min.)", wpmA != null && wpmB != null ? wpmA - wpmB : null),
    tile(accA == null ? null : Math.round(accA * 100) + " %", "sicher richtig", accA != null && accB != null ? (accA - accB) * 100 : null, " %"),
    tile(qA == null ? null : Math.round(qA * 100) + " %", "Fragen richtig", qA != null && qB != null ? (qA - qB) * 100 : null, " %"));
  P.append(el("span", "label", "Diese Woche"), tiles);
  // per-day charts
  const days = [...new Set(reads.map(x => dayOf(x.d)))].sort().slice(-14);
  if (days.length) {
    const wpmD = days.map(d => median(firstTries(reads).filter(x => dayOf(x.d) === d).map(x => x.wpm)) ?? median(reads.filter(x => dayOf(x.d) === d).map(x => x.wpm)));
    const accD = days.map(d => mean(reads.filter(x => dayOf(x.d) === d && x.acc != null).map(x => x.acc * 100)));
    P.append(el("span", "label", "Tempo pro Tag (Wörter pro Minute)"), lineChart(days, wpmD, null, "W/min"));
    P.append(el("span", "label", "Sicher richtig gelesen pro Tag (%)"), lineChart(days, accD, 100, "%"));
  }
  const bank = Object.values(store.get("lf_bank", {}));
  const mastered = bank.filter(b => b.mastered > 0).length;
  const stars = store.get("lf_stars", 0) || 0;
  P.append(el("p", "hint", [reads.length ? "Du hast " + reads.length + "× laut gelesen." : "", mastered ? mastered + " schwere Wörter geübt." : "", stars ? stars + " Sterne gesammelt." : ""].filter(Boolean).join(" ")));
  // recent list
  const list = el("div", "hist");
  h.filter(x => x.kind !== "practice").slice(-8).reverse().forEach(x => {
    const d = el("div");
    const dt = new Date(x.d).toLocaleDateString("de-LU", { day: "numeric", month: "short" });
    const mode = x.kind === "quiz" ? "Fragen" : x.mode === "fluessig" ? "Flüssig " + (x.attempt || 1) + "." : "Genau";
    d.append(el("span", null, dt + " · " + mode + " · " + x.title));
    const right = el("span");
    if (x.kind === "quiz") right.textContent = fmtNum(x.score) + "/" + x.of;
    else { right.textContent = Math.round(x.wpm) + " W/min · " + pct(x.acc); if (x.unsureRate > 0.2) right.append(el("span", "flag", " ⚠")); }
    d.append(right); list.append(d);
  });
  P.append(el("span", "label", "Zuletzt"), list);
  P.append(el("p", "note", "For parents: speed counts every word he reached, including pauses; accuracy counts only words the microphone was sure about (⚠ = many uncertain words). These are trends from automatic speech recognition, not a reading assessment."));
}
function lineChart(labels, vals, fixedMax, unit) {
  const W = 600, H = 170, pl = 38, pr = 14, pt = 20, pb = 26;
  const vs = vals.filter(v => v != null);
  const top = fixedMax || Math.max(20, Math.max(...vs, 1));
  const raw = top / 4, mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map(f => f * mag).find(x => x >= raw);
  const max = fixedMax || Math.ceil(top / step) * step;
  const x = i => labels.length === 1 ? pl + (W - pl - pr) / 2 : pl + i * (W - pl - pr) / (labels.length - 1);
  const y = v => pt + (H - pt - pb) * (1 - v / max);
  let g = "";
  for (let v = 0; v <= max; v += step) g += '<line x1="' + pl + '" x2="' + (W - pr) + '" y1="' + y(v) + '" y2="' + y(v) + '" stroke="var(--line)" stroke-width="1"/><text x="' + (pl - 6) + '" y="' + (y(v) + 4) + '" text-anchor="end" font-size="11" fill="var(--muted)">' + v + "</text>";
  const pts = vals.map((v, i) => v == null ? null : [x(i), y(v)]).filter(Boolean);
  const line = pts.map(p => p.join(",")).join(" ");
  let marks = pts.map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (i === pts.length - 1 ? 5 : 3) + '" fill="var(--blue)"/>').join("");
  const lastV = vs[vs.length - 1];
  if (pts.length) marks += '<text x="' + Math.min(pts[pts.length - 1][0], W - pr - 4) + '" y="' + Math.max(12, pts[pts.length - 1][1] - 10) + '" text-anchor="end" font-size="13" font-weight="700" fill="var(--ink)">' + Math.round(lastV) + "</text>";
  const lab = (i, anchor) => '<text x="' + x(i) + '" y="' + (H - 6) + '" text-anchor="' + anchor + '" font-size="11" fill="var(--muted)">' + labels[i].slice(8) + "." + labels[i].slice(5, 7) + ".</text>";
  const xl = labels.length > 1 ? lab(0, "start") + lab(labels.length - 1, "end") : lab(0, "middle");
  const c = el("div", "chart");
  c.innerHTML = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + unit + ' per day">' + g + (pts.length > 1 ? '<polyline points="' + line + '" fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-linejoin="round"/>' : "") + marks + xl + "</svg>";
  return c;
}

/* ---------------- Claude API ---------------- */
async function callClaude(prompt, signal, maxTokens) {
  const key = getKey(); if (!key) throw { code: "nokey" };
  let r;
  try {
    r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", signal, headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" }, body: JSON.stringify({ model: MODEL, max_tokens: maxTokens || 3000, messages: [{ role: "user", content: prompt }] }) });
  } catch (e) { if (e && e.name === "AbortError") throw { code: "cancelled" }; throw { code: "network" }; }
  if (!r.ok) { let msg = ""; try { msg = (await r.json()).error.message || ""; } catch (e) {} throw { code: "http" + r.status, message: msg }; }
  const j = await r.json();
  const text = (j.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  const a = text.indexOf("{"), b = text.lastIndexOf("}");
  if (a < 0 || b < a) throw { code: "invalid_json" };
  try { return JSON.parse(text.slice(a, b + 1)); } catch (e) { throw { code: "invalid_json" }; }
}
function errCopy(e) {
  const c = e && e.code;
  if (c === "nokey") return "Add a Claude API key in the parent area first.";
  if (c === "network") return "Couldn't reach Claude. Check the internet connection.";
  if (c === "http401") return "The API key wasn't accepted.";
  if (c === "http429") return "Too many requests. Wait a minute and try again.";
  if (c === "invalid_json") return "Claude's answer came back incomplete. Try again.";
  if (c && c.startsWith("http")) return "Claude returned an error" + (e.message ? ": " + e.message : ".");
  return "Something went wrong. Try again.";
}

/* ---------------- parent area ---------------- */
let gateAns = 0;
$("parentBtn").addEventListener("click", () => show("parent"));
function openParent() {
  const a = 6 + Math.floor(Math.random() * 4), b = 6 + Math.floor(Math.random() * 4);
  gateAns = a * b; $("gateQ").textContent = "What is " + a + " × " + b + "?";
  $("gateA").value = ""; $("gateErr").textContent = "";
  $("gate").hidden = false; $("parentArea").hidden = true;
}
$("gateGo").addEventListener("click", () => {
  if (+$("gateA").value !== gateAns) { $("gateErr").textContent = "Not quite."; return; }
  $("gate").hidden = true; $("parentArea").hidden = false; fillParent();
});
function fillParent() {
  const st = settings();
  $("setSlow").checked = st.slow; $("setAuto").checked = st.autoLevel; $("setLevel").value = String(st.level);
  $("apiKey").value = getKey(); $("keyNote").textContent = "";
  $("genNote").textContent = getKey() ? "Level " + st.level + " (" + LEVELS[st.level].w + " words). Takes about 15–30 seconds." : "Needs a Claude API key (below).";
  const tl = $("trustedList"); tl.innerHTML = "";
  const tr = [...trusted()];
  if (!tr.length) tl.append(el("span", "note", "None yet."));
  tr.forEach(w => { const b = el("button", "btn ghost small", w + " ✕"); b.onclick = () => { const s = trusted(); s.delete(w); setTrusted(s); fillParent(); }; tl.append(b); });
  $("voiceNote").textContent = canSpeak ? (germanVoice() ? "German voice for “listen” buttons: found." : "No German voice found for the “listen” buttons. On Android: Settings → Text-to-speech → Google → install German.") : "This browser cannot read words aloud.";
}
$("setSlow").addEventListener("change", () => { const s = settings(); s.slow = $("setSlow").checked; saveSettings(s); });
$("setAuto").addEventListener("change", () => { const s = settings(); s.autoLevel = $("setAuto").checked; saveSettings(s); });
$("setLevel").addEventListener("change", () => { const s = settings(); s.level = +$("setLevel").value; s.levelSince = Date.now(); saveSettings(s); fillParent(); });
$("saveKey").addEventListener("click", () => { const k = $("apiKey").value.trim(); if (!k) { $("keyNote").textContent = "Paste a key first."; return; } store.set("lf_key", k); $("keyNote").className = "ok-note"; $("keyNote").textContent = "Saved."; fillParent(); $("keyNote").textContent = "Saved."; });
$("clearKey").addEventListener("click", () => { store.del("lf_key"); $("apiKey").value = ""; $("keyNote").className = "note"; $("keyNote").textContent = "Key removed."; });
$("testKey").addEventListener("click", async () => {
  const k = $("apiKey").value.trim(); if (k) store.set("lf_key", k);
  $("keyNote").className = "note"; $("keyNote").textContent = "Testing…";
  try { await callClaude('Reply with only this JSON: {"ok":true}', undefined, 50); $("keyNote").className = "ok-note"; $("keyNote").textContent = "Works."; }
  catch (e) { $("keyNote").className = "err-note"; $("keyNote").textContent = errCopy(e); }
});
$("wipeBtn").addEventListener("click", () => {
  if ($("wipeBtn").dataset.armed !== "1") { $("wipeBtn").dataset.armed = "1"; $("wipeBtn").textContent = "Tap again to delete everything"; return; }
  ["lf_hist", "lf_bank", "lf_trusted", "lf_stars", "lf_time", "lf_settings", "lf_texts", "lf_key", "lf_syl", "lf_levelmsg"].forEach(k => store.del(k));
  $("wipeBtn").dataset.armed = ""; $("wipeBtn").textContent = "Delete all Lesefuchs data on this device"; $("wipeNote").textContent = "Deleted.";
  fillParent();
});
let genCtl = null;
$("genBtn").addEventListener("click", async () => {
  if (!getKey()) { $("genNote").textContent = errCopy({ code: "nokey" }); return; }
  const st = settings(), lv = LEVELS[st.level], type = $("ttype").value, topic = $("topic").value.trim() || "Tiere";
  genCtl = new AbortController();
  $("genBtn").disabled = true; $("genStop").hidden = false; $("genNote").textContent = "Writing a text about “" + topic + "”…";
  const prompt = "Write a German reading exercise for an 8-year-old pupil in Luxembourg (cycle 3.1). German is not his first language and he reads slowly, so the text must build confidence.\nLevel: " + lv.d + ". Length: " + lv.w + " words. Topic: " + topic + ". Text type: " + (type === "Sachtext" ? "Sachtext (simple non-fiction, facts must be correct)" : "Geschichte (short story)") + ".\nRules: natural, correct German; present tense mostly; everyday words; write numbers as words; 1–3 paragraphs separated by a blank line; a short title; no real people's names; age-appropriate and fun.\nThen write " + lv.q + " questions in German in the style of the Luxembourg ÉpStan tests: mostly multiple-choice with exactly 4 short options (vary the position of the correct one) and " + (lv.q >= 6 ? "2 open questions" : "1 open question") + " answerable in one short sentence. Each question has one skill: \"Finden\" (stated information), \"Schließen\" (infer why / how someone feels), \"Wortschatz\" (meaning of a word in context), \"Reihenfolge\" (order of events). Use at least one Schließen and one Wortschatz.\nReply with only JSON:\n{\"title\":\"…\",\"type\":\"" + type + "\",\"text\":\"paragraph\\n\\nparagraph\",\"questions\":[{\"kind\":\"mc\",\"skill\":\"Finden\",\"q\":\"…\",\"options\":[\"…\",\"…\",\"…\",\"…\"],\"answer\":2},{\"kind\":\"open\",\"skill\":\"Schließen\",\"q\":\"…\",\"answer\":\"model answer\"}]}";
  try {
    const t = validateText(await callClaude(prompt, genCtl.signal));
    if (!t) throw { code: "invalid_json" };
    t.id = "g" + Date.now(); t.level = st.level;
    store.set("lf_texts", [t, ...store.get("lf_texts", [])].slice(0, 20));
    $("genNote").textContent = "Done: “" + t.title + "” is now in the list for level " + st.level + ".";
  } catch (e) { $("genNote").textContent = e && e.code === "cancelled" ? "Cancelled." : errCopy(e); }
  finally { $("genBtn").disabled = false; $("genStop").hidden = true; genCtl = null; }
});
$("genStop").addEventListener("click", () => genCtl && genCtl.abort());
function validateText(r) {
  if (!r || typeof r.text !== "string" || !Array.isArray(r.questions)) return null;
  const qs = r.questions.filter(q => q && typeof q.q === "string").map(q => {
    if (q.kind === "mc" && Array.isArray(q.options) && q.options.length >= 2) { const a = Number(q.answer); return { kind: "mc", skill: SKILL[q.skill] ? q.skill : "Finden", q: q.q, options: q.options.map(String), answer: a >= 0 && a < q.options.length ? a : 0 }; }
    return { kind: "open", skill: SKILL[q.skill] ? q.skill : "Schließen", q: q.q, answer: String(q.answer || "") };
  });
  if (qs.length < 3) return null;
  return { title: String(r.title || "Neuer Text").slice(0, 80), type: r.type === "Sachtext" ? "Sachtext" : "Geschichte", text: r.text.trim().slice(0, 2000), questions: qs };
}

/* ---------------- start ---------------- */
if (canSpeak) { try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (e) {} }
// testing hook: lets automated tests drive the app with simulated speech results
window.__lesefuchs = { R, L, settings, hist, M };
show("home");
})();
