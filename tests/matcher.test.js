// Run with: node --test tests/
const test = require("node:test");
const assert = require("node:assert/strict");
const M = require("../js/matcher.js");

const target = text => text.split(/\s+/).map(M.norm).filter(Boolean);
/** one final result per string; an array of arrays = several listening sessions */
const sess = (...chunks) => [chunks.map(t => ({ text: t, final: true }))];
function run(text, sessions, opts) {
  const T = target(text);
  const toks = M.buildTokens(sessions, new Set(T));
  const a = M.align(toks, T, opts);
  return { T, a, s: a.items.map(x => (x ? x.s : null)), r: a.items.map(x => (x ? x.r : null)) };
}

test("normalizes umlauts, ß, punctuation and numbers", () => {
  assert.equal(M.norm("Kälter."), "kälter");
  assert.equal(M.norm("„Draußen“"), "draussen");
  assert.equal(M.norm("20"), "zwanzig");
  assert.equal(M.norm("112"), "hundertzwölf");
  assert.equal(M.norm("21"), "einundzwanzig");
  assert.equal(M.norm("200"), "zweihundert");
  assert.equal(M.norm("13:20"), "dreizehnuhrzwanzig");
  assert.equal(M.norm("15"), "fünfzehn");
  assert.equal(M.norm("eins-eins-zwei"), "einseinszwei");
});

test("Kölner Phonetik treats d/t and similar sounds alike", () => {
  assert.equal(M.koeln("Winterschlaf"), M.koeln("Winderschlaf"));
  assert.equal(M.koeln("Müller"), M.koeln("Mueller"));
  assert.notEqual(M.koeln("Haus"), M.koeln("Hund"));
});

test("perfect reading: all confirmed", () => {
  const { s, a } = run("Im Herbst werden die Tage kürzer", sess("im Herbst werden die Tage kürzer"));
  assert.deepEqual(s, ["ok", "ok", "ok", "ok", "ok", "ok"]);
  assert.equal(a.last, 5);
});

test("compound word recognized as two pieces is confirmed", () => {
  const { s, r } = run("oder in einem Laubhaufen liegen", sess("oder in einem Laub haufen liegen"));
  assert.deepEqual(s, ["ok", "ok", "ok", "ok", "ok"]);
  assert.equal(r[3], "syllables");
});

test("syllable-by-syllable reading of a long word (3 pieces) is confirmed", () => {
  const { s, r } = run("bald hält er seinen Winterschlaf", sess("bald hält er seinen win ter schlaf"));
  assert.deepEqual(s, ["ok", "ok", "ok", "ok", "ok"]);
  assert.equal(r[4], "syllables");
});

test("slow syllables misheard as other words still count as read (sound match)", () => {
  // Chrome often turns slow syllables into real words: "win der schlaf"
  const { s } = run("seinen Winterschlaf", sess("seinen win der schlaf"));
  assert.deepEqual(s, ["ok", "ok"]);
});

test("five syllable pieces work in slow-reader mode", () => {
  const { s } = run("viele Arbeiterinnen", sess("viele ar bei te rin nen"), { slow: true });
  assert.deepEqual(s, ["ok", "ok"]);
});

test("a long pause splits the recognition into sessions without losing words", () => {
  const sessions = [[{ text: "Igel fressen am liebsten", final: true }], [{ text: "Käfer Würmer und Schnecken", final: true }]];
  const { s } = run("Igel fressen am liebsten Käfer, Würmer und Schnecken.", sessions);
  assert.deepEqual(s, Array(8).fill("ok"));
});

test("a word lost in a recognition restart is 'unsure', not 'skipped'", () => {
  const sessions = [[{ text: "Igel fressen am", final: true }], [{ text: "Käfer Würmer und Schnecken", final: true }]];
  const { s, r } = run("Igel fressen am liebsten Käfer, Würmer und Schnecken.", sessions);
  assert.equal(s[3], "unsure");
  assert.equal(r[3], "gap");
  assert.ok(!s.includes("wrong"));
});

test("one missing word inside a phrase is 'unsure' (recognizers drop short words)", () => {
  const { s, r } = run("Sie suchen ihr Futter in der Nacht", sess("sie suchen ihr Futter in Nacht"));
  assert.equal(s[5], "unsure");
  assert.equal(r[5], "missing");
});

test("a skipped run of words is 'wrong' (skipped)", () => {
  const { s, r } = run("Er muss viel fressen denn bald hält er seinen Winterschlaf", sess("er muss viel bald hält er seinen Winterschlaf"));
  assert.deepEqual(s.slice(3, 5), ["wrong", "wrong"]);
  assert.equal(r[3], "skipped");
  assert.equal(s[5], "ok");
});

test("slow-reader mode is more lenient with two missing words", () => {
  const { s } = run("Er muss viel fressen denn bald hält er", sess("er muss viel bald hält er"), { slow: true });
  assert.deepEqual(s.slice(3, 5), ["unsure", "unsure"]);
});

test("self-correction: wrong try then right word counts as correct with a note", () => {
  const { a, s } = run("liebsten Käfer Würmer", sess("liebsten Kefer Käfer Würmer"));
  assert.deepEqual(s, ["ok", "ok", "ok"]);
  assert.ok(a.items[1].notes.includes("selfcorr"));
});

test("false start on a long word is a self-correction, not an error", () => {
  const { a, s } = run("seinen Winterschlaf", sess("seinen win Winterschlaf"));
  assert.deepEqual(s, ["ok", "ok"]);
  assert.ok(a.items[1].notes.includes("selfcorr"));
});

test("repeated words are not errors", () => {
  const { a, s } = run("die Tage kürzer", sess("die die Tage Tage kürzer"));
  assert.deepEqual(s, ["ok", "ok", "ok"]);
  assert.ok(a.items[0].notes.includes("repeat") || a.items[1].notes.includes("repeat"));
});

test("hesitation fillers are ignored", () => {
  const { s } = run("die Nächte kälter", sess("die äh Nächte ähm kälter"));
  assert.deepEqual(s, ["ok", "ok", "ok"]);
});

test("a clearly different final word is 'wrong' (likely incorrect)", () => {
  const { s, r } = run("Sie sieht ein Haus am Berg", sess("sie sieht ein Hund am Berg"));
  assert.equal(s[3], "wrong");
  assert.equal(r[3], "different");
});

test("a similar-sounding word is 'unsure', never a definite error", () => {
  const { s } = run("die Tage kürzer und", sess("die Tage kurzer und"));
  assert.equal(s[2], "unsure");
});

test("ending differences are 'unsure' (recognizer may be wrong)", () => {
  const { s } = run("in einem Versteck", sess("in einen Versteck"));
  assert.equal(s[1], "unsure");
});

test("an interim (not final) different word is only 'tentative'", () => {
  const T = target("seinen Winterschlaf");
  const toks = M.buildTokens([[{ text: "seinen", final: true }, { text: "windows", final: false }]], new Set(T));
  const a = M.align(toks, T);
  assert.equal(a.items[0].s, "ok");
  assert.ok(!a.items[1] || a.items[1].s !== "wrong");
});

test("a partial transcript only reaches as far as he has read", () => {
  const { a, s } = run("Im Herbst werden die Tage kürzer und die Nächte kälter", sess("im Herbst werden"));
  assert.equal(a.last, 2);
  assert.deepEqual(s.slice(0, 3), ["ok", "ok", "ok"]);
  assert.equal(s[3], null);
});

test("an unfinished long word at the very end is not counted as read or wrong", () => {
  const { s } = run("seinen Winterschlaf", sess("seinen Winters"));
  assert.notEqual(s[1], "wrong");
});

test("an unfinished word followed by more reading is 'unsure' (partial)", () => {
  const { s, r } = run("seinen Winterschlaf Igel", sess("seinen Winters Igel"));
  assert.equal(s[1], "unsure");
  assert.equal(s[2], "ok");
});

test("Android cumulative duplicates are collapsed", () => {
  const sessions = [[
    { text: "im Herbst", final: true },
    { text: "im Herbst werden die", final: true },
    { text: "im Herbst werden die Tage kürzer", final: true },
  ]];
  const toks = M.buildTokens(sessions, new Set());
  assert.equal(toks.map(t => t.w).join(" "), "im herbst werden die tage kürzer");
});

test("a repeated restart prefix (>=3 words) across sessions is collapsed", () => {
  const sessions = [[{ text: "im Herbst werden die Tage", final: true }], [{ text: "werden die Tage kürzer", final: true }]];
  const toks = M.buildTokens(sessions, new Set());
  assert.equal(toks.map(t => t.w).join(" "), "im herbst werden die tage kürzer");
});

test("a genuinely repeated short phrase is kept", () => {
  const sessions = [[{ text: "Oh nein oh nein", final: true }]];
  const toks = M.buildTokens(sessions, new Set(["oh", "nein"]));
  assert.equal(toks.length, 4);
});

test("an alternative transcript containing the right word confirms it", () => {
  const T = target("liebsten Käfer");
  const toks = M.buildTokens([[{ text: "liebsten Kefir", final: true, alts: ["liebsten Käfer"] }]], new Set(T));
  const a = M.align(toks, T);
  assert.equal(a.items[1].s, "ok");
  assert.equal(a.items[1].r, "alt");
});

test("words the parent confirmed as often misheard are not marked wrong again", () => {
  const { s } = run("ein Haus am Berg", sess("ein Hund am Berg"), { trusted: new Set(["haus"]) });
  assert.notEqual(s[1], "wrong");
});

test("number read as digits matches the spelled number", () => {
  const { s } = run("die Nummer eins-eins-zwei", sess("die Nummer 112"));
  assert.deepEqual(s, ["ok", "ok", "ok"]);
  const b = run("zwanzig Menschen", sess("20 Menschen"));
  assert.deepEqual(b.s, ["ok", "ok"]);
});

test("summary separates accuracy from uncertainty", () => {
  const { a } = run("Sie sieht ein Haus am Berg und", sess("sie sieht ein Hund am Berg"));
  const sum = M.summarize(a.items, a.last, {});
  assert.equal(sum.reached, 6);
  assert.equal(sum.wrong, 1);
  assert.equal(sum.ok, 5);
  assert.equal(Math.round(sum.accuracy * 100), 83);
  const fixed = M.summarize(a.items, a.last, { 3: "ok" });
  assert.equal(fixed.accuracy, 1);
});

test("a long realistic slow reading: no false 'wrong' marks", () => {
  const text = "Für den Winter baut sich der Igel ein Nest. Er sammelt dafür trockenes Laub und Gras. Oft liegt das Nest unter einer Hecke oder in einem Laubhaufen.";
  const sessions = [
    [{ text: "für den Winter baut sich der", final: true }],
    [{ text: "Igel ein Nest er sammelt dafür tro cke nes", final: true }],
    [{ text: "Laub und Gras oft liegt das das Nest unter einer", final: true }],
    [{ text: "Hecke oder in einem Laub hau fen", final: true }],
  ];
  const { s } = run(text, sessions, { slow: true });
  assert.ok(!s.includes("wrong"), "unexpected wrong: " + s.join(","));
  assert.ok(s.filter(x => x === "ok").length >= s.length - 1);
});

test("syllable pieces that look like interjections (Oh-ren) are kept", () => {
  const { s } = run("Er hat lange Ohren", sess("er hat lan ge Oh ren"));
  assert.deepEqual(s, ["ok", "ok", "ok", "ok"]);
});

test("'1 Banane' read as 'eine Banane' is correct", () => {
  const { s } = run("1 Banane und 2 Gläser Milch", sess("eine Banane und zwei Gläser Milch"));
  assert.deepEqual(s, ["ok", "ok", "ok", "ok", "ok", "ok"]);
});

test("clock times match whether heard as digits or words", () => {
  assert.deepEqual(run("um 13:20 Uhr", sess("um 13:20 Uhr")).s, ["ok", "ok", "ok"]);
  assert.deepEqual(run("Abfahrt 13:20", sess("Abfahrt dreizehn Uhr zwanzig")).s, ["ok", "ok"]);
});

test("a date read as an ordinal is correct (14. -> vierzehnten)", () => {
  const { s } = run("Samstag, 14. November", sess("Samstag vierzehnten November"));
  assert.deepEqual(s, ["ok", "ok", "ok"]);
});

test("a number written as digits matches the spoken number word", () => {
  assert.deepEqual(run("Ein Tisch kostet 2 Euro", sess("ein Tisch kostet zwei Euro")).s, ["ok", "ok", "ok", "ok", "ok"]);
  assert.deepEqual(run("bis 18 Uhr", sess("bis achtzehn Uhr")).s, ["ok", "ok", "ok"]);
});
