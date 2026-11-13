# Lesen üben

Private German read-aloud practice app for one child (not public, not indexed).
Runs as a static site on GitHub Pages; open in Google Chrome and allow the microphone.

- `index.html`, `css/app.css`, `js/app.js` – the app
- `js/matcher.js` – speech-to-text alignment (tested)
- `js/syllables.js` – German reading syllables (built from `src/syllables.src.js`)
- `js/texts.js` – 100 texts, levels 1–4, with questions

```
npm install && npm test        # unit tests
python3 tests/e2e_test.py      # browser test
```
