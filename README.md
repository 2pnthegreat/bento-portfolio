# Kampanart Poonpanao — Portfolio

Personal portfolio: projects, experience and contact, laid out as a bento grid.

**Live:** https://2pnthegreat-portfolio.vercel.app

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [Motion](https://motion.dev) for animations (all respect `prefers-reduced-motion`)
- Deployed on Vercel: every push to `main` goes live automatically

Site content (name, projects, experience, tools) lives in `data/`, so most text changes don't touch components.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## CV

The CV source is `cv/cv.html`. `npm run cv:pdf` turns it into `public/CV_PDF.pdf` (the Resume link on the site). Steps are in `cv/README.md`.
