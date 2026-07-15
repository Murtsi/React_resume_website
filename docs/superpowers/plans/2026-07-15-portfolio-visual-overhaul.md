# Portfolio Visual Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio more distinctive, evidence-led, responsive, and keyboard-accessible while keeping its calm technical character.

**Architecture:** Keep portfolio content in `lib/data.ts`, keep the single-page section composition in `app/page.tsx`, and add a small shared visual/interaction contract in `app/globals.css`. Project cards remain data-driven, but the featured project receives an evidence image and the modal becomes a semantic dialog with focus restoration.

**Tech Stack:** Next.js App Router, React 19, TypeScript, CSS custom properties, Node `node:test`, Playwright browser checks.

---

### Task 1: Establish UI contract tests

**Files:**
- Create: `tests/portfolio-ui.test.mjs`

- [ ] Write source-level assertions for section headings, keyboard-capable project triggers, dialog semantics, responsive grid rules, reduced-motion support, and the concise security copy.
- [ ] Run `node --test tests/portfolio-ui.test.mjs` and confirm it fails against the current implementation.

### Task 2: Refresh portfolio content and narrative order

**Files:**
- Modify: `lib/data.ts`
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `public/manifest.json`
- Modify: `public/sitemap.xml`
- Modify: `README.md`

- [ ] Replace broad security claims with the concise SQL-injection case note and label broader AI security topics as interests.
- [ ] Add project evidence fields (`eyebrow`, `outcome`, `image`, and accurate status/link labels) and move Projects before Expertise in the page narrative.
- [ ] Align metadata, manifest, README, sitemap date, and footer-facing product language with the current page.

### Task 3: Fix structure, interaction, and responsive behavior

**Files:**
- Modify: `components/Nav.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/Expertise.tsx`
- Modify: `components/Certifications.tsx`
- Modify: `components/Experience.tsx`
- Modify: `components/Contact.tsx`
- Modify: `components/SecurityResearch.tsx`
- Modify: `app/globals.css`

- [ ] Add visible `h2` headings and `aria-labelledby` relationships for every major section.
- [ ] Render project cards as keyboard-operable buttons, add focus styles, and implement dialog labelling, focus entry, Escape close, and focus restoration.
- [ ] Add `aria-current`, scroll offset, reduced-motion rules, readable footer text, 44px touch targets, and mobile-safe grid tracks.
- [ ] Omit empty credential dates and avoid arbitrary line breaks in contact values.

### Task 4: Rework visual hierarchy and proof presentation

**Files:**
- Modify: `components/Hero.tsx`
- Modify: `components/Projects.tsx`
- Modify: `components/SecurityResearch.tsx`
- Modify: `app/globals.css`
- Remove: `components/GitHubProjectsSection.js`

- [ ] Use a shorter hero with a proof-led featured project preview and natural action labels.
- [ ] Feature one project with the existing screenshot asset, remove unexplained tech bars, and keep remaining work compact.
- [ ] Give the security note a distinct research-note treatment without decorative badges or target details.
- [ ] Remove the stale visual implementation so one design system remains.

### Task 5: Verify locally

**Files:**
- No additional files.

- [ ] Run `node --test tests/portfolio-ui.test.mjs`.
- [ ] Run `npm run lint` and `npm run build` after a clean `.next` build output.
- [ ] Use Playwright at 1280px, 390px, 375px, and 320px to verify no horizontal overflow, heading order, modal keyboard behavior, and visual screenshots.
