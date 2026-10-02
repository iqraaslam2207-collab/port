# Iqra Aslam — Portfolio

Gold-on-black personal site with live case studies from [iqraaslam2207-collab](https://github.com/iqraaslam2207-collab).

**Live:** [iqraaslam2207-collab.github.io/port](https://iqraaslam2207-collab.github.io/port/)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

This app is a static Next.js export (`output: "export"`).

### GitHub Pages (this repo)

Push to the `portfolio-next` branch. The workflow builds with `GITHUB_PAGES=true` (so assets live under `/port`) and publishes the `out/` folder to `gh-pages`.

Site: `https://iqraaslam2207-collab.github.io/port/`

### Netlify

Import this repo, production branch `portfolio-next`. Build command `npm run build`, publish directory `out`. Do **not** set `GITHUB_PAGES` — Netlify serves the site at the domain root.

## Customize

- `lib/site.ts` — name, email, GitHub, LinkedIn
- `lib/projects.ts` — case studies and screenshots
