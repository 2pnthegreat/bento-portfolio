# Kampanart Poonpanao — Portfolio

[![E2E tests](https://github.com/2pnthegreat/bento-portfolio/actions/workflows/e2e.yml/badge.svg)](https://github.com/2pnthegreat/bento-portfolio/actions/workflows/e2e.yml)

Personal portfolio: projects, experience and contact, laid out as a bento grid.

**Live:** https://2pnthegreat-portfolio.vercel.app

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [Motion](https://motion.dev) for animations (all respect `prefers-reduced-motion`)
- Deployed on Vercel
- [Playwright](https://playwright.dev) end-to-end tests, run on GitHub Actions

Site content (name, projects, experience, tools) lives in `data/`, so most text changes don't touch components.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Testing

End-to-end tests are in `e2e/` and cover what a visitor does:

| File | What it checks |
| --- | --- |
| `home.spec.ts` | Name, role, Resume link, the three projects, stats card numbers |
| `navigation.spec.ts` | Navbar → About timeline; project card → case-study page |
| `theme.spec.ts` | Dark mode toggle switches theme and remembers it after reload |
| `mobile.spec.ts` | 375px screen: no sideways scroll, mobile menu opens |

Run them (Playwright builds and starts the site first):

```bash
npx playwright install chromium   # first time only
npm run test:e2e
```

Open the last HTML report with `npx playwright show-report`.

The same tests run on every push and pull request via `.github/workflows/e2e.yml`; the report is attached to each run as an artifact.
