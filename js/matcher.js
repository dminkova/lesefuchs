/*
 * Lesefuchs matcher: turns Chrome speech-recognition output into word-level
 * reading results. Pure functions, no DOM, so they can be tested in Node.
 *
 * Three result states per text word:
 *   "ok"     – confirmed: the recognizer heard this word (exactly, as an
 *              alternative, or as syllable pieces that join up to it)
 *   "unsure" – needs a parent's check: heard something similar, a part of it,
 *              nothing at all for one or two words, or a short/low-confidence word
 *   "wrong"  – likely incorrect: a clearly different final word, or a run of
 *              several words that were not read
 * Speech transcription cannot judge pronunciation; "wrong" is a hint, never a diagnosis.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.LFMatch = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const NUM = {"0":"null","1":"eins","2":"zwei","3":"drei","4":"vier","5":"fünf","6":"sechs","7":"sieben","8":"acht","9":"neun","10":"zehn","11":"elf","12":"zwölf","13":"dreizehn","14":"vierzehn","15":"fünfzehn","16":"sechzehn","17":"siebzehn","18":"achtzehn","19":"neunzehn","20":"zwanzig","30":"dreißig","40":"vierzig","50":"fünfzig","100":"hundert","1000":"tausend"};
  const DIGIT = ["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun"];
  // only clear hesitation sounds; "oh", "ah", "em" can be syllables (Oh-ren, Em-ma)
  const FILLERS = new Set(["äh","ähm","äm","öh","öhm","hm","hmm","mhm","ehm"]);

  /** Normalize one token: lower case, letters and digits only, numbers spelled out, ß→ss. */
  function norm(w) {
    w = String(w || "").toLowerCase().replace(/[^\p{L}\d]/gu, "");
    if (!w) return "";
    if (/^\d+$/.test(w)) w = NUM[w] || w.split("").map(d => DIGIT[+d]).join("");
    return w.replace(/ß/g, "ss");
  }
  const words = text => String(text || "").split(/[\s\-–—\/]+/).filter(Boolean);

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    let p = new Array(n + 1); for (let j = 0; j <= n; j++) p[j] = j;
    for (let i = 1; i <= m; i++) {
      const c = [i];
      for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      p = c;
    }
    return p[n];
  }
  const sim = (a, b) => (a || b) ? 1 - lev(a, b) / Math.max(a.length, b.length) : 1;

  /** Kölner Phonetik: a German sound code, so "winder" and "winter" sound alike. */
  function koeln(word) {
    const s = String(word || "").toLowerCase().replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "s").replace(/[^a-z]/g, "");
    const has = (set, ch) => ch !== "" && set.includes(ch);
    let out = "";
    for (let i = 0; i < s.length; i++) {
      const c = s[i], prev = s[i - 1] || "", next = s[i + 1] || "";
      let code = "";
      if (has("aeijouy", c)) code = "0";
      else if (c === "h") code = "";
      else if (c === "b") code = "1";
      else if (c === "p") code = next === "h" ? "3" : "1";
      else if (c === "d" || c === "t") code = has("csz", next) ? "8" : "2";
      else if (has("fvw", c)) code = "3";
      else if (has("gkq", c)) code = "4";
      else if (c === "c") {
        if (i === 0) code = has("ahkloqrux", next) ? "4" : "8";
        else code = has("sz", prev) ? "8" : (has("ahkoqux", next) ? "4" : "8");
      }
      else if (c === "x") code = has("ckq", prev) ? "8" : "48";
      else if (c === "l") code = "5";
      else if (c === "m" || c === "n") code = "6";
      else if (c === "r") code = "7";
      else if (c === "s" || c === "z") code = "8";
      out += code;
    }
    out = out.replace(/(.)\1+/g, "$1");
    return out ? out[0] + out.slice(1).replace(/0/g, "") : "";
  }
  const kCache = new Map();
  const koelnC = w => { let v = kCache.get(w); if (v === undefined) { v = koeln(w); if (kCache.size > 5000) kCache.clear(); kCache.set(w, v); } return v; };
  const sameSound = (a, b) => { const x = koelnC(a); return x.length > 0 && x === koelnC(b); };
  /* similarity, skipped (returns 0) when the lengths alone rule out a match >= min */
  const simAtLeast = (a, b, min) => { const L = Math.max(a.length, b.length); if (!L) return 1; if (Math.abs(a.length - b.length) / L > 1 - min) return 0; return sim(a, b); };

  const normText = t => words(t).map(norm).filter(Boolean).join(" ");

  /**
   * Chrome (especially on Android) can repeat earlier text in later results.
   * Inside one listening session, a result whose text starts with the previous
   * result's full text replaces it. Across a restart, the first result is only
   * collapsed when it repeats at least 3 words of the previous session's end.
   */
  function dedupeSession(results) {
    const out = [];
    for (const r of results) {
      const n = normText(r.text);
      if (!n) continue;
      const prev = out[out.length - 1];
      if (prev) {
        const pn = normText(prev.text);
        if (n === pn || n.startsWith(pn + " ")) { out[out.length - 1] = r; continue; }
      }
      out.push(r);
    }
    return out;
  }

  /**
   * sessions: [[{text, final, conf, alts:[string]}]] – one array per Chrome listening session.
   * Returns a flat token list {w, raw, final, conf, alts:Set, sess}.
   */
  function buildTokens(sessions, targetSet) {
    const toks = [];
    let prevTail = "";
    (sessions || []).forEach((res, si) => {
      let rs = dedupeSession(res || []);
      if (rs.length && prevTail) {
        const first = normText(rs[0].text).split(" ");
        const tail = prevTail.split(" ");
        // drop a repeated prefix of >=3 words that equals the previous session's last words
        let k = Math.min(first.length, tail.length);
        while (k >= 3) {
          if (first.slice(0, k).join(" ") === tail.slice(-k).join(" ")) {
            const keep = first.slice(k).join(" ");
            rs = [{ ...rs[0], text: keep }, ...rs.slice(1)];
            break;
          }
          k--;
        }
      }
      for (const r of rs) {
        const alts = new Set();
        for (const a of r.alts || []) for (const w of words(a)) { const n = norm(w); if (n) alts.add(n); }
        for (const w of words(r.text)) {
          const n = norm(w);
          if (!n) continue;
          if (FILLERS.has(n) && !(targetSet && targetSet.has(n))) continue;
          toks.push({ w: n, raw: w, final: !!r.final, conf: +r.conf || 0, alts, sess: si });
        }
      }
      const all = rs.map(r => normText(r.text)).join(" ").trim();
      if (all) prevTail = all;
    });
    return toks;
  }

  /* How one heard token relates to a target word (string evidence only). */
  function relate1(h, t) {
    if (h.w === t) return { c: 0, k: "exact" };
    if (h.alts && h.alts.has(t)) return { c: 0.1, k: "alt" };
    if (t.startsWith("ein") && h.w === "eins") return { c: 0, k: "exact" };
    const ls = simAtLeast(h.w, t, 0.7), ss = sameSound(h.w, t);
    if (ss || ls >= 0.7) return { c: 0.35, k: ss ? "sound" : "similar" };
    if (h.w.length >= 2 && t.startsWith(h.w)) return { c: 0.7, k: "partial" };
    return { c: 1, k: "different" };
  }
  /* Several heard pieces for one target word (syllable or compound reading). */
  function relateN(pieces, t) {
    const joined = pieces.join("");
    if (joined === t) return { c: 0.02 * pieces.length, k: "syllables" };
    if (Math.abs(joined.length - t.length) > Math.max(3, t.length * 0.4)) return null;
    if (koelnC(joined)[0] !== koelnC(t)[0]) return null; // must start with the same sound
    const ls = simAtLeast(joined, t, 0.62), ss = sameSound(joined, t);
    if (ss || ls >= 0.8) return { c: 0.15 * pieces.length + (1 - ls), k: "syllables" };
    if (ls >= 0.62) return { c: 0.45, k: "syllables-similar" };
    return null;
  }

  /**
   * Align heard tokens to the beginning of the target text (target words after
   * the last aligned one count as "not read yet").
   * opts: {slow:boolean, trusted:Set of words the parent confirmed are often misheard}
   */
  function align(tokens, target, opts) {
    opts = opts || {};
    const slow = !!opts.slow, trusted = opts.trusted || new Set();
    const K = slow ? 5 : 3;
    const H = tokens, T = target, m = H.length, n = T.length;
    const INF = 1e9, DEL = 0.45; // skipping a text word is cheaper than inventing an extra heard word
    const D = [], B = [], Bk = [];
    for (let i = 0; i <= m; i++) { D.push(new Float64Array(n + 1).fill(INF)); B.push(new Int8Array(n + 1)); Bk.push(new Int8Array(n + 1)); }
    const insCost = (i, j) => { // heard token i-1 inserted before target j
      const w = H[i - 1].w;
      if (FILLERS.has(w)) return 0.05;
      if (i >= 2 && H[i - 2].w === w) return 0.2;              // repeated word
      if (j >= 1 && T[j - 1] === w) return 0.2;                 // re-read the last word
      if (j < n && (T[j].startsWith(w) || sim(w, T[j]) >= 0.5)) return 0.3; // false start / self-correction
      return 0.6;
    };
    D[0][0] = 0;
    for (let j = 1; j <= n; j++) { D[0][j] = D[0][j - 1] + DEL; B[0][j] = 2; }
    for (let i = 1; i <= m; i++) { D[i][0] = D[i - 1][0] + insCost(i, 0); B[i][0] = 3; }
    const joinCache = new Map();
    const joinedAt = (i, k) => { const key = i * 8 + k; let v = joinCache.get(key); if (v === undefined) { v = H.slice(i - k, i).map(x => x.w); joinCache.set(key, v); } return v; };
    const BAND = 30; // a reader never skips 30+ words or adds 30+ extra words in a row
    const r1 = new Map();
    const rel1 = (h, j) => { const key = h.w + "|" + j + "|" + (h.alts.size ? [...h.alts].join(",") : ""); let v = r1.get(key); if (!v) { v = relate1(h, T[j]); r1.set(key, v); } return v; };
    for (let i = 1; i <= m; i++) {
      const jlo = Math.max(1, Math.floor(i / K) - BAND), jhi = Math.min(n, i + BAND);
      for (let j = jlo; j <= jhi; j++) {
        let best = D[i - 1][j - 1] + rel1(H[i - 1], j - 1).c, bb = 1, bk = 1;
        const del = D[i][j - 1] + DEL; if (del < best) { best = del; bb = 2; }
        const ins = D[i - 1][j] + insCost(i, j); if (ins < best) { best = ins; bb = 3; }
        for (let k = 2; k <= K && k <= i; k++) {
          const r = relateN(joinedAt(i, k), T[j - 1]);
          if (!r) continue;
          const v = D[i - k][j - 1] + r.c;
          if (v < best) { best = v; bb = 4; bk = k; }
        }
        D[i][j] = best; B[i][j] = bb; Bk[i][j] = bk;
      }
    }
    // best end column: the furthest target word that keeps the cost lowest
    let J = 0, bv = D[m][0];
    for (let j = 1; j <= n; j++) if (D[m][j] <= bv + 1e-9) { bv = D[m][j]; J = j; }

    // backtrack
    const items = Array.from({ length: n }, () => null);
    const ops = []; // in reverse
    let i = m, j = J;
    while (i > 0 || j > 0) {
      const b = i === 0 ? 2 : j === 0 ? 3 : B[i][j];
      if (b === 1) { ops.push({ op: "m", j: j - 1, from: i - 1, to: i - 1 }); i--; j--; }
      else if (b === 4) { const k = Bk[i][j]; ops.push({ op: "m", j: j - 1, from: i - k, to: i - 1 }); i -= k; j--; }
      else if (b === 2) { ops.push({ op: "d", j: j - 1, before: i - 1 }); j--; }
      else { ops.push({ op: "i", h: i - 1, j }); i--; }
    }
    ops.reverse();

    // classify matches
    for (const o of ops) {
      if (o.op !== "m") continue;
      const toks = H.slice(o.from, o.to + 1), t = T[o.j];
      const heard = toks.map(x => x.raw).join(" ");
      const tentative = toks.some(x => !x.final);
      let it;
      if (toks.length === 1) {
        const r = relate1(toks[0], t);
        if (r.k === "exact" || r.k === "alt") it = { s: "ok", r: r.k };
        else if (r.k === "sound" || r.k === "similar") it = { s: "unsure", r: r.k };
        else if (r.k === "partial") it = { s: "unsure", r: "partial" };
        else if (tentative) it = { s: "unsure", r: "tentative" };
        else if (t.length <= 3 || toks[0].w.length <= 2) it = { s: "unsure", r: "short" };
        else if (toks[0].conf > 0 && toks[0].conf < 0.5) it = { s: "unsure", r: "lowconf" };
        else it = { s: "wrong", r: "different" };
      } else {
        const r = relateN(toks.map(x => x.w), t);
        it = r && r.k === "syllables" ? { s: "ok", r: "syllables" } : { s: "unsure", r: "syllables-similar" };
      }
      if (it.s === "ok" && tentative && it.r !== "exact" && it.r !== "syllables") it = { s: "unsure", r: "tentative" };
      if (it.s !== "ok" && trusted.has(t)) it = (it.r === "different") ? { s: "unsure", r: "trusted" } : { s: "ok", r: "trusted" };
      it.heard = heard; it.notes = [];
      items[o.j] = it;
    }
    // deletions: single/short runs -> unsure; longer runs or runs inside one session -> skipped
    const threshold = slow ? 3 : 2;
    for (let x = 0; x < ops.length; x++) {
      if (ops[x].op !== "d") continue;
      let y = x; while (y + 1 < ops.length && ops[y + 1].op === "d") y++;
      const run = ops.slice(x, y + 1);
      const hb = run[0].before, ha = (() => { for (let z = y + 1; z < ops.length; z++) { const o = ops[z]; if (o.op === "m") return o.from; if (o.op === "i") return o.h; } return -1; })();
      const gap = hb >= 0 && ha >= 0 && H[hb].sess !== H[ha].sess; // words fell into a recognition restart
      const longRun = run.length >= threshold;
      for (const o of run) {
        const t = T[o.j];
        let it;
        if (gap && run.length <= 4) it = { s: "unsure", r: "gap" };
        else if (longRun) it = { s: "wrong", r: "skipped" };
        else it = { s: "unsure", r: "missing" };
        if (it.s === "wrong" && trusted.has(t)) it = { s: "unsure", r: "missing" };
        it.heard = ""; it.notes = [];
        items[o.j] = it;
      }
      x = y;
    }
    // insertions: notes for self-correction and repetition
    for (let x = 0; x < ops.length; x++) {
      const o = ops[x];
      if (o.op !== "i") continue;
      const w = H[o.h].w;
      if (FILLERS.has(w)) continue;
      const next = ops.slice(x + 1).find(z => z.op !== "i");
      const prevM = ops.slice(0, x).reverse().find(z => z.op === "m");
      if (prevM && T[prevM.j] === w && items[prevM.j]) { if (!items[prevM.j].notes.includes("repeat")) items[prevM.j].notes.push("repeat"); continue; }
      if (next && next.op === "m" && items[next.j]) {
        const t = T[next.j];
        if (t.startsWith(w) || sim(w, t) >= 0.4) { if (!items[next.j].notes.includes("selfcorr")) items[next.j].notes.push("selfcorr"); }
      }
    }
    return { items, last: J - 1 };
  }

  /** Count results up to the last word reached. overrides: {index: "ok"|"unsure"|"wrong"} */
  function summarize(items, last, overrides) {
    overrides = overrides || {};
    let ok = 0, unsure = 0, wrong = 0;
    for (let j = 0; j <= last; j++) {
      const s = overrides[j] || (items[j] && items[j].s) || "unsure";
      if (s === "ok") ok++; else if (s === "wrong") wrong++; else unsure++;
    }
    const reached = Math.max(0, last + 1);
    return { reached, ok, unsure, wrong, accuracy: ok + wrong ? ok / (ok + wrong) : null, unsureRate: reached ? unsure / reached : 0 };
  }

  return { norm, words, koeln, sim, lev, sameSound, dedupeSession, buildTokens, align, summarize, FILLERS };
});
