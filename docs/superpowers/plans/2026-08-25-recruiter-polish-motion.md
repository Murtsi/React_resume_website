# Recruiter Polish and Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the portfolio and blog calmer, easier to scan, and more polished during scroll and route transitions.

**Architecture:** Keep page content server-rendered. Add one small client observer for reveal and progress behavior, and one client blog link for transient navigation feedback. Use native CSS for motion and route skeletons so no new runtime dependency is required.

**Tech Stack:** Next.js 16, React 19, TypeScript, native CSS, IntersectionObserver.

---

### Task 1: Lock behavioral contracts

**Files:**
- Modify: `tests/portfolio-ui.test.mjs`

- [ ] Add source-contract tests for the reveal controller, reading progress, loading route, transition link, reduced type scale, and corrected border trail.
- [ ] Run `node --test tests/portfolio-ui.test.mjs` and confirm the new assertions fail because these elements do not exist yet.

### Task 2: Add motion and loading components

**Files:**
- Create: `components/ScrollExperience.tsx`
- Create: `components/BlogPostLink.tsx`
- Create: `components/RouteLoader.tsx`
- Create: `app/loading.tsx`
- Create: `app/blog/loading.tsx`
- Modify: `app/layout.tsx`

- [ ] Implement an IntersectionObserver that marks `[data-reveal]` content once and updates `--reading-progress` without React scroll-state rendering.
- [ ] Implement a blog link that exposes a short four-dot pending state while navigation resolves.
- [ ] Add portfolio/blog skeleton routes sharing the route loader.
- [ ] Mount the scroll controller once in the root layout.

### Task 3: Apply hierarchy and article refinements

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `app/globals.css`

- [ ] Add reveal markers to major content groups without hiding semantic content before JavaScript loads.
- [ ] Use the transition link for blog cards and the disclosure link.
- [ ] Add the article progress element and compact article header treatment.
- [ ] Reduce hero, blog, article, section, feature, and contact heading sizes.
- [ ] Replace the masked translating border with a corner-origin border highlight.
- [ ] Add skeleton, loader, reveal, progress, and reduced-motion styles.

### Task 4: Verify and run locally

**Files:**
- Test: `tests/portfolio-ui.test.mjs`

- [ ] Run `node --test tests/portfolio-ui.test.mjs`, `npx tsc --noEmit`, and `npm run build`.
- [ ] Inspect `/`, `/blog`, and `/blog/security-disclosure-checkout` at desktop and mobile sizes for overflow, type scale, reveal behavior, loading presentation, and console errors.
- [ ] Restart `npm run dev` and provide the local URL.
