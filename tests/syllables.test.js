const test = require("node:test");
const assert = require("node:assert/strict");
const S = require("../js/syllables.js");

const cases = {
  Winterschlaf: "Win-ter-schlaf", Schnecken: "Schne-cken", Laubhaufen: "Laub-hau-fen",
  Igel: "I-gel", Oma: "O-ma", Abend: "A-bend", Energie: "E-ner-gie", Eier: "Ei-er",
  Fenster: "Fens-ter", Zucker: "Zu-cker", Apfel: "Ap-fel", Arbeiterinnen: "Ar-bei-te-rin-nen",
  Marienkäfer: "Ma-ri-en-kä-fer", Feuerwehrleute: "Feu-er-wehr-leu-te", Ende: "En-de", Uhr: "Uhr",
};

for (const [word, expected] of Object.entries(cases)) {
  test(`syllables: ${word}`, () => assert.equal(S.syllables(word).join("-"), expected));
}

test("punctuation stays attached to the first/last syllable", () => {
  assert.deepEqual(S.syllables("„Danke!“"), ["„Dan", "ke!“"]);
  assert.deepEqual(S.syllables("Laubhaufen."), ["Laub", "hau", "fen."]);
});

test("hyphenated compounds keep their hyphen", () => {
  assert.equal(S.syllables("Schokoladen-Kleeschen").join("|"), "Scho|ko|la|den-|Klee|schen");
});

test("hard words: long words come first, short words are left out", () => {
  const hw = S.hardWords("Der Igel baut im Winter ein Nest im Laubhaufen. Er hält seinen Winterschlaf.");
  assert.ok(hw.includes("Winterschlaf"));
  assert.ok(hw.includes("Laubhaufen"));
  assert.ok(!hw.includes("Nest"));
  assert.ok(!hw.includes("Igel"));
});
