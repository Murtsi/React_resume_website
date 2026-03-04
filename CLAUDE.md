# CLAUDE.md — Portfolio Context

## Project
Antti Murtokangas personal portfolio/resume website.
- **Live**: https://www.anttimurtokangas.com
- **Deploy**: Vercel (auto-deploy from `main`)

## Stack
- **Framework**: Next.js 15 (Pages Router, not App Router)
- **UI**: Tailwind CSS 3.4 with custom design tokens
- **Language**: JavaScript (no TypeScript despite `typescript` in devDeps — files are `.js`)
- **Animations**: Tailwind custom keyframes + `react-intersection-observer` for scroll triggers
- **Icons**: `@heroicons/react` (24/outline) — do NOT use `react-icons`
- **Analytics**: `@vercel/analytics` + `@vercel/speed-insights` in `_app.js`
- **Testing**: Jest + Testing Library

## Architecture
```
pages/
  index.js          — single-page app, all sections rendered here
  _app.js           — analytics, global styles
  _document.js      — HTML shell, Google Fonts
components/         — one file per section, all receive `t` (translations) prop
utils/translations.js — all copy/text in English, keyed as `translations['en']`
styles/globals.css  — Tailwind + 11 custom keyframe animations
public/             — static assets (CVs, images, fonts)
```

## Design Tokens (tailwind.config.js)
- **Primary**: warm orange/brown (`primary-600` = `#e8825f`)
- **Accent**: cool blue (`accent-500` = `#6fc7ff`)
- **Warm**: vibrant orange (`warm-500` = `#ff7e1a`)
- **Dark mode**: class-based via `document.documentElement.classList`
- **Custom fonts**: `font-burtons` (display), `font-poppins` (headings), `font-sans` (Inter body)

## Active Components (rendered in index.js)
1. `Navigation` — sticky nav, dark mode toggle, mobile hamburger
2. `HeroSection` — hero with badges, tech stack, CTAs, social links
3. `QuickStatsSection` — animated counters (3 stats)
4. `WhatICanOfferSection` — competency cards + attributes (id: "offers")
5. `OffersSection` — technical expertise with 4 cards (id: "about")
6. `GitHubProjectsSection` — 3 featured projects (id: "projects")
7. `ExperienceEducationSection` — work + education timelines (id: "portfolio")
8. `ContactSection` — contact methods + footer (id: "contact")

## Unused Components (do not use)
- `TestimonialsSection.js` — not rendered, has static testimonial content
- `SkillCard.js` — only used in unit test, no real usage

## Key Conventions
- Dark mode default: `useState(true)` in index.js
- Scroll navigation: `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`
- All external links: `target="_blank" rel="noopener noreferrer"`
- Section IDs: `about`, `projects`, `portfolio`, `contact` (nav targets)
- Animations: `animate-fade-in`, `animate-slide-up` Tailwind classes; delayed via inline `style={{ animationDelay }}`

## SEO / Meta
- Canonical: `https://www.anttimurtokangas.com`
- OG image: `/omakuva.jpg` (800x800 profile photo)
- JSON-LD: Person schema in index.js `<Head>`
- `public/robots.txt` and `public/sitemap.xml` present

## Performance Notes
- `background.jpg` (3.7MB) is in public/ but NOT used anywhere — safe to delete
- Font weights trimmed to Inter 400/500/600/700 + Poppins 600/700/800
- No `next/image` currently used — consider for `omakuva.jpg` if added to UI

## Removed Dependencies
- `firebase` — was imported but never used
- `react-icons` — was imported but never used (use `@heroicons/react` instead)
- After editing package.json, run: `npm install` to sync node_modules

## Test Status
- `__tests__/Navigation.test.js` — tests `About`, `Projects`, `Experience`, `Contact` nav links
- `__tests__/SkillCard.test.js` — tests unused SkillCard component
- Run tests: `npm test`
