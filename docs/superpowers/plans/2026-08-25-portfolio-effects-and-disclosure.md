# Portfolio Effects and Disclosure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Compact the portfolio navigation, sharpen the Tärppi presentation, add restrained interaction polish, and replace the disclosure article with a factual humanized version of the supplied report.

**Architecture:** Preserve the existing server-rendered portfolio and blog routes. Implement the viewport veil and hover behavior in CSS, keep navigation behavior in the existing client component, and store the public disclosure narrative in the typed blog data model.

**Tech Stack:** Next.js 16, React 19, TypeScript, Next Image, native CSS, Lenis.

---

### Task 1: Lock the new behavior

**Files:**
- Modify: `tests/portfolio-ui.test.mjs`

- [ ] Add failing assertions that CV controls and the SEAMK availability block are absent.
- [ ] Add failing assertions for Tärppi quality and contain rendering, viewport blur veil, targeted hover behavior, and factual disclosure content.
- [ ] Run `node --test tests/portfolio-ui.test.mjs` and confirm the new assertions fail for missing behavior.

### Task 2: Compact navigation and hero

**Files:**
- Modify: `components/Nav.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] Remove CV actions from the dock, mobile menu, and hero.
- [ ] Remove the SEAMK and availability block from the hero proof panel.
- [ ] Reduce the dock width while preserving desktop links, mobile menu access, theme persistence, active state, and 44px targets.

### Task 3: Improve image and interaction quality

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] Render the Tärppi image at quality 90 using its native aspect ratio and contain behavior.
- [ ] Add a fixed progressive blur veil that fades near the page end and is removed for reduced motion.
- [ ] Add one staggered hero-line entrance and restrained hover feedback to interactive work, disclosure, expertise, and certification elements.

### Task 4: Rewrite the disclosure

**Files:**
- Modify: `lib/blog.ts`

- [ ] Replace the short case note with a longer first-person account grounded in the supplied report.
- [ ] Remove the reusable payload, target identity, placeholder details, speculative data access claims, and generic industry commentary.
- [ ] Keep the confirmed report date, affected field, payment impact, testing boundaries, responsible reporting path, remediation advice, and unconfirmed remediation status.
- [ ] Run the Humanizer anti-AI pass and remove promotional, formulaic, and repetitive language.

### Task 5: Verify locally

**Files:**
- Test: `tests/portfolio-ui.test.mjs`

- [ ] Run tests, TypeScript, production build, and `git diff --check`.
- [ ] Inspect portfolio, blog index, and article in the browser for image sharpness, navigation proportions, hover behavior, veil behavior, overflow, and console errors.
- [ ] Keep the local development server running on port 3000 for user review.
