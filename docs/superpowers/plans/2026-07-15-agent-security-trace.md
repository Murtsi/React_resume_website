# Agent Security Trace Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local, accessible Agent Security Lab concept that visualizes three LLM-agent request paths without claiming a finished security engine.

**Architecture:** Add one isolated client component that owns the selected scenario and renders a semantic segmented control plus a responsive four-stage trace. Reuse the existing security section and global design tokens, with CSS-only state transitions and a reduced-motion fallback.

**Tech Stack:** Next.js, React 19, TypeScript, CSS, Node test runner

---

### Task 1: Define The Source Contract

**Files:**
- Modify: `tests/portfolio-ui.test.mjs`

- [ ] **Step 1: Write the failing test**

Add a test that reads `components/AgentSecurityTrace.tsx` and `components/SecurityResearch.tsx`, then asserts that the component is mounted, visibly marked `In development`, exposes `Normal request`, `Prompt injection`, and `Tool misuse`, uses `aria-pressed`, and does not claim a production engine.

```js
test('agent security trace stays interactive and clearly in development', () => {
  const trace = read('components/AgentSecurityTrace.tsx')
  const security = read('components/SecurityResearch.tsx')

  assert.match(security, /<AgentSecurityTrace \/>/)
  assert.match(trace, /In development/)
  assert.match(trace, /Normal request/)
  assert.match(trace, /Prompt injection/)
  assert.match(trace, /Tool misuse/)
  assert.match(trace, /aria-pressed=/)
  assert.doesNotMatch(trace, /production-ready|automated vulnerability detection/i)
})
```

- [ ] **Step 2: Run the test and verify failure**

Run: `node --test tests/portfolio-ui.test.mjs`

Expected: FAIL because `components/AgentSecurityTrace.tsx` does not exist.

### Task 2: Build The Trace Component

**Files:**
- Create: `components/AgentSecurityTrace.tsx`

- [ ] **Step 1: Add typed scenario data**

Define `ScenarioId`, `StageState`, scenario copy, outcome tone, and four stage states. Keep all content factual and label the project as an unfinished local concept.

- [ ] **Step 2: Add the segmented control**

Render three real buttons inside `role="group"` with `aria-label="Agent security scenario"` and `aria-pressed={selected === scenario.id}`. Store only the selected scenario ID in component state.

- [ ] **Step 3: Add the semantic trace**

Render an ordered list with stages `Input`, `Agent`, `Policy gate`, and `Tool`. Give every stage a visible state label, and key the list by scenario ID so CSS state motion replays only after a deliberate scenario change.

- [ ] **Step 4: Run the source-contract test**

Run: `node --test tests/portfolio-ui.test.mjs`

Expected: FAIL only because the component is not mounted yet.

### Task 3: Mount And Style The Concept

**Files:**
- Modify: `components/SecurityResearch.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Mount the component**

Import `AgentSecurityTrace` and render `<AgentSecurityTrace />` after the existing SQL injection disclosure article.

- [ ] **Step 2: Add restrained component styling**

Add styles for the lab header, segmented control, outcome line, four-stage ordered list, stage nodes, and solid connectors. Reuse `--bg-surface`, `--bg-elevated`, `--border`, `--text-*`, and accent variables. Do not add gradients, 3D transforms, glow-heavy shadows, or a runtime dependency.

- [ ] **Step 3: Add responsive behavior**

At widths below 760px, stack the scenario buttons and trace stages vertically. Ensure all buttons remain at least 44px high and long labels wrap without overflow.

- [ ] **Step 4: Add reduced-motion behavior**

Extend the existing `prefers-reduced-motion: reduce` block so connector and state animations complete instantly while the selected outcome remains visible.

- [ ] **Step 5: Run focused checks**

Run: `node --test tests/portfolio-ui.test.mjs`

Expected: all tests pass.

Run: `npx tsc --noEmit`

Expected: exit code 0.

### Task 4: Verify The Local Demo

**Files:**
- Verify only; no planned source changes

- [ ] **Step 1: Run static verification**

Run: `npm run lint`

Expected: exit code 0 with the repository's current installed toolchain.

Run: `npm run build`

Expected: production build completes. Record any existing Next/SWC version warning separately from feature failures.

- [ ] **Step 2: Start the local app**

Run: `npm run dev`

Expected: local URL is printed and the app responds with HTTP 200.

- [ ] **Step 3: Verify desktop behavior**

At 1280px, select all three scenarios and verify the outcome text and trace states update. Confirm keyboard focus is visible and the page has no console errors.

- [ ] **Step 4: Verify mobile behavior**

At 390px, 375px, and 320px, verify the trace is vertical, labels do not overlap, buttons remain usable, and `scrollWidth <= innerWidth`.

- [ ] **Step 5: Verify reduced motion**

Emulate reduced motion and verify the final trace state appears without continued animation.

- [ ] **Step 6: Commit the implementation**

```bash
git add components/AgentSecurityTrace.tsx components/SecurityResearch.tsx app/globals.css tests/portfolio-ui.test.mjs docs/superpowers/plans/2026-07-15-agent-security-trace.md
git commit -m "Add local agent security trace concept"
```
