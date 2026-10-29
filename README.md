# Lesefuchs

German read-aloud coach for primary school (Luxembourg, Zyklus 3). Runs as a static site on GitHub Pages – no server.

**Live:** https://dminkova.github.io/lesefuchs/ (open in Google Chrome, allow the microphone)

## What it does
- **Genau lesen** – careful reading without a clock. Chrome listens; each word ends up *confirmed*, *please check* or *likely wrong*. Parents can correct any word.
- **Schwere Wörter üben** – long or tricky words split into reading syllables in alternating colours, read aloud normally or slowly, then repeated by the child.
- **Flüssig lesen** – a short passage read three times; speed and accuracy compared across attempts.
- **Verstehen** – ÉpStan-style questions; open answers checked by Claude if an API key is set, otherwise by the parent.
- Progress by day and week (speed, accuracy and comprehension kept separate), stars for effort and improvement, automatic level steps (1–4, from 40–60 words up).

## Files
- `index.html`, `css/app.css`, `js/app.js` – the app
- `js/matcher.js` – speech-to-text alignment and word classification (pure, tested)
- `js/syllables.js` – German reading syllables (built from `src/syllables.src.js`, uses TeX de-1996 hyphenation patterns)
- `js/texts.js` – built-in texts with levels and questions
- `docs/NOTES.md` – review findings, speech-service comparison, privacy notes

## Development
```
npm install        # only needed to rebuild syllables.js or run tests
npm run build      # rebuild js/syllables.js
npm test           # unit tests
python3 tests/e2e_test.py   # browser test (needs playwright + chromium)
```

Speech recognition cannot judge pronunciation reliably. The numbers show trends; they are not a reading assessment.
