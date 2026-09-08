# Iqra Aslam — Portfolio

Sleek, engineering-driven personal site. Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide**.

**Live:** [iqraaslam2207-collab.github.io/port](https://iqraaslam2207-collab.github.io/port/)

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The Vite `base` is `/port/` so GitHub Pages can host this as a project site.

## Swap content

All copy, projects, tech categories, experience, and social links live in one file:

[`src/data/site.js`](src/data/site.js)

- Add a LinkedIn URL to `site.linkedin` to show that icon in the hero.
- Replace `public/resume.html` (or point `resumeUrl` at a PDF in `public/`).
- Drop project screenshots into `public/images/` and update the `projects` array.

## Deploy

Pushes to `main` build the site and publish it to the `gh-pages` branch.

In the GitHub repo: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `/ (root)`**.

## Structure

```
src/
  components/   Navbar, Hero, About, TechStack, TechBadge,
                Projects, ProjectCard, Experience, Contact, Footer
  data/site.js  editable content
```
