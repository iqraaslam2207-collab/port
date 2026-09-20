# Iqra Aslam — Portfolio

Gold-on-black personal site: case studies for Daraz Clone, Roamify Travels, and Holiday Directory.

**GitHub:** [iqraaslam2207-collab](https://github.com/iqraaslam2207-collab)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Netlify)

This app is Next.js, so it needs Netlify (or Vercel) — not GitHub Pages.

1. Push this folder to GitHub (replace the old `port` repo, or create `portfolio`).
2. On [Netlify](https://app.netlify.com): Add new site → Import from Git → pick that repo.
3. Build command: `npm run build`. Netlify detects Next.js. Node 22 is set in `netlify.toml`.
4. After the first deploy, set **Site name** if you want a cleaner URL, then paste that URL into `app/layout.tsx` (`metadataBase`) and into your GitHub profile **Website** field.

## Customize

- `lib/site.ts` — name, email, GitHub, LinkedIn
- `lib/projects.ts` — case studies and screenshots
