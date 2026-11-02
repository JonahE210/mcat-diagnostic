# MCAT Half-Length Diagnostic

A timed, half-length MCAT practice exam for one user. When it's done, it shows which subject and which topic in the 6-month study schedule to reinforce for every missed question.

## Run it

```bash
cd mcat-diagnostic
python3 server.py
```

Then open http://localhost:8000. Only Python 3 is needed (no installs). Finished attempts are saved to `data/attempts.json`.
You can also open `public/index.html` directly without the server. Results are then saved in that browser only.

## Format (mirrors the real MCAT at half length)

| Section | Questions | Layout | Time |
|---|---|---|---|
| Chemical & Physical Foundations | 30 | 5 passages + 8 discretes | 48 min |
| CARS | 26 | 4 passages | 45 min |
| Biological & Biochemical Foundations | 30 | 5 passages + 8 discretes | 48 min |
| Psychological, Social & Biological Foundations | 30 | 5 passages + 8 discretes | 48 min |

Optional breaks: 5 / 15 / 5 min. Exam tools: highlight, strikethrough, flag for review, navigation, section review screen, periodic table (science sections), and AAMC-style Alt-key shortcuts.

## Files

- `public/q_*.js`: the questions, one file per section. Each question has a correct answer, an explanation, a subject, an AAMC content category, and `plan` topics.
- `public/plan.js`: generated from the 6-month tab of "MCAT Study Schedules.xlsx" (topic → scheduled date + Khan Academy link).
- `public/app.js`: the exam engine and results page. `server.py` is a tiny stdlib server.

The questions are original and written to match AAMC style and the AAMC content outline. They are not copied from any commercial or AAMC bank. Scaled scores are a rough estimate.
