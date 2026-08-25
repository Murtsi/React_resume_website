# Portfolio and Blog Redesign Implementation Plan

## 1. Simplify the data and routes

- Add typed blog post data and article sections in `lib/blog.ts`.
- Update portfolio data and navigation for the clean homepage plus disclosure link.
- Remove Agent Security Lab imports, components, styles, and stale CV/test references.

## 2. Rebuild the app shell

- Update metadata and typography in `app/layout.tsx`.
- Replace `app/page.tsx` with the portfolio composition.
- Rework navigation into a dock-inspired client component with theme toggle.
- Replace global CSS with the unified dark/light token system, responsive layout, restrained motion, and progressive blur / border-beam utilities.

## 3. Add the separate blog

- Create `/blog` index with latest post emphasis and dated list structure.
- Create static `/blog/[slug]` article route with metadata, readable sections, back navigation, and responsive typography.
- Keep the disclosure detail exclusively in the article.

## 4. Verify locally

- Update focused source tests for new routes and removed lab.
- Run `npm test` equivalent test command, TypeScript/build checks, and start `npm run dev`.
- Inspect desktop and mobile output and fix layout or accessibility regressions before handoff.
