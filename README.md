# portfolio2 — Bhyri Anush Goud

Cinematic, editorial portfolio. React 19 + Vite 6 + TypeScript, plain CSS design system, no backend, no secrets.

## Run on your Mac
```bash
# 1. one-time: install Node 20+ (https://nodejs.org or `brew install node`)
cd ~/Downloads/portfolio2        # wherever you unzipped it
npm install
npm run dev                      # opens at http://localhost:5173
```
Production check: `npm run build && npm run preview`.

## Structure
```
portfolio2/
├─ index.html              metadata, OG tags, fonts, favicon link
├─ public/
│  ├─ hero.mp4 / hero.webm hero video (cropped, audio removed)
│  ├─ hero-poster.jpg      poster / fallback if video fails
│  ├─ portrait.jpg         your portrait (resized to 1000px)
│  └─ favicon.svg          PLACEHOLDER "AG" monogram
└─ src/
   ├─ data/profile.ts      ALL content lives here — edit this first
   ├─ components/          Navbar, Hero, About, Experience, Projects, ProjectCover, Contact, Icon, Reveal
   ├─ hooks/               useReveal, usePrefersReducedMotion
   └─ styles/              tokens.css (palette/type/spacing), base.css, nav.css, hero.css, sections.css
```

## Replace media
- Video: overwrite `public/hero.mp4` (+ optional `hero.webm`) and `public/hero-poster.jpg` (a frame, ~1600px wide).
  Keep it under ~1 MB, no audio: `ffmpeg -i in.mp4 -an -vf scale=1600:-2 -crf 24 -movflags +faststart public/hero.mp4`
- Portrait: overwrite `public/portrait.jpg`.
- Favicon: replace `public/favicon.svg`. Link-preview image: uncomment `og:image` in `index.html` with your deployed absolute URL.
- Project covers: original SVGs in `src/components/ProjectCover.tsx`.

## Missing / to confirm (search `TODO` and `PLACEHOLDER` in `src/data/profile.ts`)
1. **GitHub URL** — not provided. Set `profile.github`; until then the site shows a dashed "GitHub — add link" chip.
2. **Project links** — none exist, so none are shown ("Private client work"). Add `links: { live, github }` to a project when real.
3. **PhonePe project date** — résumé header says "Mar 2024", body says "April 2024 – Present". Site uses Apr 2024 – Present.
4. **Google Pay project dates** — résumé gives only "Jun 2021"; site shows `[end date TBC]`.
5. **Which employer each project belongs to** — not stated on the résumé, so projects are shown separately from the timeline.
6. **"Multi Cloud" title** — you asked for it, but the résumé only evidences GCP. The site claims no AWS/Azure skills; add them to `skillGroups` if true.
7. **Gap Jun 2017 (B.Tech) → Jun 2021** — résumé lists no activity. Nothing invented; add an entry if you want one.
8. **"Bilingual"** on the résumé — languages not named, so omitted.
9. **Phone number** — deliberately NOT published (spam/scraping risk). Add to Contact if you want it.
10. **Education grades** — shown as written (65% / 70%); the résumé's "distinction" wording is omitted. Remove the `note` fields if you'd rather not show grades.
11. **Verified Cloud-ID link** (`s.cloudhire.ai/...`) is from your résumé header; remove it from `profile.cloudId` if unwanted.

## Deploy (free options)
**Netlify (easiest):** `npm run build`, then drag the `dist/` folder onto https://app.netlify.com/drop.
**Vercel:** `npm i -g vercel && vercel` (framework auto-detected: Vite; output `dist`).
**GitHub Pages / Cloudflare Pages:** push to GitHub, connect the repo, build command `npm run build`, output `dist`.
Single-page site, so no rewrite rules are required.

## GitHub Pages note
Project sites are served from `/<repo-name>/`. Build with the matching base (case-sensitive), e.g.
`VITE_BASE=/Portfolio/ npm run build`, or set `base: '/Portfolio/'` in `vite.config.ts`.
All media go through `src/assets.ts` (`asset("hero.mp4")`) so they follow the base automatically.
