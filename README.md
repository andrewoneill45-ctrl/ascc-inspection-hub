# ASCC Inspection Hub

Private SLT preparation site for the All Saints Catholic College Ofsted inspection (7–8 July 2026, renewed framework).

## What's inside

- **Password landing page** (password set in `js/app.js` as a SHA-256 hash)
- **Dashboard** — headline statistics and self-evaluation summary
- **Self-Evaluation** — all eight areas with evidence, owned weaknesses and priorities to Jan 2027
- **Results & Trends** — interactive charts: P8/A8 vs national, disadvantaged, SEND, GCSE 2025 subjects
- **Year Groups** — Y11 mock trajectory, Y10 Lenten, KS3 on-track data
- **Attendance & Behaviour** — benchmarked charts and lines to hold
- **Connections** — interactive force-directed graph of how the school's systems, areas, outcomes and owned risks link together
- **Framework** — the renewed Ofsted framework reference, mapped to our self-assessment
- **Innovation & Press** — 60+ media items grouped by category
- **✦ Ask** — Claude-powered Q&A over the school data, with rich formatted answers and generated charts

## Deploy (GitHub → Netlify)

1. Create a **private** GitHub repository and push this folder:
   ```bash
   git init && git add -A && git commit -m "ASCC Inspection Hub"
   git branch -M main
   git remote add origin git@github.com:YOUR-USER/ascc-inspection-hub.git
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import an existing project → GitHub** → pick the repo. Build settings are read from `netlify.toml` (no build command needed).
3. In Netlify: **Site configuration → Environment variables → Add**:
   - `ANTHROPIC_API_KEY` = your Claude API key (from console.anthropic.com)
   - optional: `CLAUDE_MODEL` (defaults to `claude-sonnet-4-5`)
4. Deploy. The Ask feature calls `/.netlify/functions/ask`; the key never reaches the browser.

## Local preview

Static pages work by opening `index.html` or `python3 -m http.server`. The Ask feature needs the Netlify function — use `npx netlify-cli dev` with `ANTHROPIC_API_KEY` in your shell, or test after deploying.

## Security notes

- The password gate is client-side (hash-checked). It deters casual access but is **not** strong security — keep the repo **private**, don't share the URL beyond SLT, and the site is marked `noindex`.
- The knowledge base in `netlify/functions/ask.mjs` contains unpublished, provisional school data — another reason the repo must stay private.
- 2025 figures are internal SISRA estimates; 2026 figures are predictions. Present as provisional alongside published 2023/24 data.

## Changing the password

Hash the new password (`echo -n "NewPassword" | shasum -a 256`) and replace `PASS_HASH` at the top of `js/app.js`.
