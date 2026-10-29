/*
 * German reading syllables (Lesesilben) for Lesefuchs.
 * Source file: bundled into js/syllables.js with `npm run build`.
 * Uses the TeX hyphenation patterns for new German orthography (de-1996)
 * from the "hyphen" package, then applies two reading-syllable rules that
 * hyphenation leaves out on purpose: a single vowel at the start is its own
 * syllable (I-gel, O-ma), and a lone consonant before a vowel moves to the
 * next syllable when the first syllable is that short (E-ner-gie).
 */
const { hyphenateSync } = require("hyphen/de-1996");

const VOWEL = "aeiouyäöü";
const isV = c => VOWEL.includes((c || "").toLowerCase());
const DIPH = /^(ei|ai|au|eu|äu|ie|aa|ee|oo)/i;

function splitCore(core) {
  if (core.length < 3) return [core];
  let parts = hyphenateSync(core, { hyphenChar: "­", minWordLength: 3 }).split("­").filter(Boolean);
  // rule 1: single starting vowel + single consonant + vowel -> own syllable (I-gel, A-bend, O-ma)
  const p0 = parts[0];
  if (isV(p0[0]) && !DIPH.test(p0) && p0.length >= 3 && !isV(p0[1]) && isV(p0[2]) && p0[1].toLowerCase() !== "h") {
    parts = [p0[0], p0.slice(1), ...parts.slice(1)];
  }
  // rule 2: first syllable is vowel+consonant and the next starts with a vowel -> move the consonant (En-er-gie -> E-ner-gie)
  if (parts.length > 1 && parts[0].length === 2 && isV(parts[0][0]) && !isV(parts[0][1]) && isV(parts[1][0])) {
    parts = [parts[0][0], parts[0][1] + parts[1], ...parts.slice(2)];
  }
  return parts;
}

/** Split one display token (may carry punctuation or hyphens) into syllables. */
function syllables(token) {
  const m = String(token || "").match(/^([^\p{L}]*)([\p{L}][\p{L}\-]*[\p{L}]|[\p{L}])([^\p{L}]*)$/u);
  if (!m) return [String(token || "")];
  const [, pre, core, post] = m;
  const out = [];
  core.split("-").forEach((part, i, arr) => {
    const s = splitCore(part);
    if (i < arr.length - 1) s[s.length - 1] += "-";
    out.push(...s);
  });
  if (pre) out[0] = pre + out[0];
  if (post) out[out.length - 1] += post;
  return out;
}

const HARD = /sch|ch|ck|pf|tz|qu|ng|ie|ei|eu|äu|[äöüß]|^sp|^st|str/i;
/** How hard a word is to read for a beginner (higher = harder). */
function difficulty(token) {
  const core = String(token || "").replace(/[^\p{L}\-]/gu, "");
  if (core.length < 5) return 0;
  const syl = syllables(core).length;
  let score = syl * 2 + core.length / 3;
  const hits = (core.match(new RegExp(HARD.source, "gi")) || []).length;
  score += hits;
  if (core.length >= 10) score += 2;
  return score;
}

/** Pick the hardest distinct words from a text (for pre-reading practice). */
function hardWords(text, max = 6) {
  const seen = new Set(), list = [];
  for (const tok of String(text || "").split(/\s+/)) {
    const core = tok.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
    const key = core.toLowerCase();
    if (!core || seen.has(key) || core.includes("-")) continue;
    seen.add(key);
    list.push({ w: core, d: difficulty(core), syl: syllables(core).length });
  }
  list.sort((a, b) => b.d - a.d);
  const hard = list.filter(x => x.d >= 8 || (x.syl >= 3 && x.w.length >= 7));
  // short texts: fill up to 4 words with the next hardest longer words
  const fill = list.filter(x => !hard.includes(x) && x.d >= 7 && x.w.length >= 6);
  return hard.concat(fill.slice(0, Math.max(0, 4 - hard.length))).slice(0, max).map(x => x.w);
}

module.exports = { syllables, difficulty, hardWords };
