# Lesefuchs – review notes (October 2026)

## 1. Why correct slow reading was marked wrong (old version)

| # | Cause in the old code | Effect | Fix in this version |
|---|---|---|---|
| 1 | Only 2 recognized pieces could be joined back into one word | "Win… ter… schlaf" (3 pieces) became wrong/extra words | Up to 3 pieces (5 in slow-reader mode) are joined; pieces that *sound* like the word (Kölner Phonetik) also count |
| 2 | Any transcript difference above a small threshold = "wrong" | Chrome turns slow syllables into other real words ("win der schlaf") | Three states: confirmed / please check / likely wrong. Similar-sounding, partial, short or low-confidence words are "please check", never "wrong" |
| 3 | Chrome ends a listening session after a pause and restarts | Words spoken in the restart gap were marked "skipped" | Words missing exactly at a restart are "please check (not heard)"; one or two missing words are never "skipped" in slow-reader mode |
| 4 | Pressing *Fertig* threw away results Chrome had not finished | Last words lost; half-words judged as final | The app asks Chrome to finish, waits up to 2.5 s for final results, and treats unfinished (interim) words as "please check" |
| 5 | A global duplicate filter compared every final result with the previous one | Real repeated phrases could be deleted | Duplicates are collapsed only within one listening session (Android's cumulative results) or for ≥3 repeated words across a restart |
| 6 | Words per minute subtracted every red word | False errors also made him look slower | Speed = words reached ÷ real reading time (pauses included). Accuracy is a separate number from confirmed words only |
| 7 | Live colouring showed red while he was still reading | Unstable interim guesses flashed as errors | During reading only green (confirmed) and the blue "now" marker are shown; judgement happens after the final results |
| 8 | "äh", "oh" etc. were not handled / later filtered too broadly | Hesitations became wrong words; "Oh·ren" lost its first syllable | Only clear hesitation sounds (äh, ähm, hm…) are ignored |

Self-corrections ("Kefer … Käfer") and repetitions ("die die Tage") are recognized and shown as positive notes, not errors.

## 2. What "likely wrong" means

Ordinary speech-to-text (Chrome's included) guesses the most likely *real word*. It cannot tell how well a word was pronounced, and it often "repairs" small mistakes. So:

- **confirmed** = the recognizer produced this word (or its syllables / an alternative containing it);
- **please check** = evidence is weak or missing – not counted for or against him;
- **likely wrong** = a clearly different, final word, or several words in a row not read. Even this is a hint for a parent, not a verdict.

Parents can correct any word (✓ / ✗ in the review list, or tap the word). A word marked ✓ after the recognizer doubted it goes on a "often misheard" list and is not marked "likely wrong" again.

## 3. Speech-to-text options compared

| Option | Cost | Pronunciation scoring | Notes for a child reading German |
|---|---|---|---|
| **Chrome Web Speech API** (used now) | free | no | Audio goes to Google. No word timings; confidence often missing on Android; ends sessions after pauses. Fine for "which words were read", weak for pronunciation |
| **Microsoft Azure Speech – Pronunciation Assessment** | paid per audio time, has a free tier | yes: accuracy, fluency and prosody scores against a reference text | The best fit on paper because it compares speech with the expected text. Needs an Azure account and a small server or a short-lived token (a long-term key must not sit in the browser). Check that German is supported for pronunciation assessment and test with children's voices first – models are trained mostly on adult speech |
| **Google Cloud / Whisper-type transcription APIs** | paid | no | Better transcripts and word timings, but still "nearest real word". Not worth the cost for this use |
| **Vosk (offline, open source)** | free | no | Has a German model and runs on-device, so no audio leaves the tablet. Lower accuracy than cloud services; a large download for a tablet |

Recommendation: keep Chrome for now (free, works), improve the matching (done), and rely on the parent review. If real-world testing still shows many uncertain words, try Azure Pronunciation Assessment for a week with a small budget before building anything around it.

## 4. Privacy and API key

- **Audio**: Chrome sends microphone audio to Google for transcription. Lesefuchs never records or stores audio.
- **Progress data** stays in the tablet's browser storage. Nothing goes to GitHub. "Delete all Lesefuchs data" in the parent area wipes it.
- **Claude API key** (optional): stored in the browser's localStorage on this device only and sent only to `api.anthropic.com`.
  - Risk: localStorage is shared by every page on `dminkova.github.io` – any other GitHub Pages site in this account could read it. Keep other Pages sites trustworthy, or move Lesefuchs to its own domain later.
  - Set a monthly **spend limit** in the Anthropic console and use a key made only for Lesefuchs, so a leak costs little and can be revoked.
  - Text generation and the key are in the **parent area** behind a small maths check, so the child cannot spend credit or see the key by accident (it is a child gate, not security).
- **Content Security Policy**: the page may only load its own files and only talk to `api.anthropic.com`. Fonts are self-hosted (no Google Fonts request).
- **What is sent to Anthropic** when checking answers: the text, the questions and his answers. No name.

## 5. Tests

- `npm test` – 51 unit tests: compound words, syllable pieces (3 and 5), misheard syllables, pauses and restarts, words lost in a restart, missing short words, skipped runs, self-correction, false starts, repetitions, fillers, interim/partial transcripts, Android cumulative duplicates, restart duplicates, alternatives, trusted words, numbers, accuracy summary; German reading syllables.
- `python3 tests/e2e_test.py` – runs the real app in headless Chromium with simulated speech: syllable reading with a pause and restart (no false errors, correct time), parent correction, word practice, quiz, fluency attempts, progress, parent gate, phone layout, no console/CSP errors.

## 6. Still needs real-world testing

1. **His real voice on the Android tablet** – how often words end up "please check". If above ~20 %, tell me which words and what was heard.
2. **Chrome restarts on Android** during long pauses: does the app always continue listening?
3. **Timing**: compare the shown time with a stopwatch once.
4. **German text-to-speech voice** on the tablet (parent area shows whether one is found).
5. **Level steps**: whether moving up after two 95 % readings feels right, or is too fast/slow.
6. **Session length**: whether 10–15 minutes works in practice.
