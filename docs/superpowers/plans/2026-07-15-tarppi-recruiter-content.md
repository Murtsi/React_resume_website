# Tarppi Recruiter Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the private Pentesting Tool visual with Tarppi and make the English portfolio copy concise, credible, and useful to recruiters.

**Architecture:** Keep content in `lib/data.ts` and derive the featured project from `hero.featured.projectId`. Reuse the existing featured-card and dialog UI, changing only the asset, data selection, status copy, and recruiter-facing text.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Next Image, CSS, Node `node:test`.

---

### Task 1: Lock the featured-project contract

**Files:**
- Modify: `tests/portfolio-ui.test.mjs`

- [x] **Step 1: Add a failing Tarppi contract test**

Add this test:

```js
test('Tarppi is the only featured project image', () => {
  const data = read('lib/data.ts')
  const projects = read('components/Projects.tsx')

  assert.match(data, /projectId: 'tarppi'/)
  assert.match(data, /image: '\/tarppi-preview\.png'/)
  assert.match(data, /liveUrl: 'https:\/\/www\.tarppi\.site\/'/)
  assert.doesNotMatch(data, /pentest-tool-preview\.png/)
  assert.match(projects, /hero\.featured\.projectId/)
})
```

- [x] **Step 2: Run the test and confirm it fails**

Run: `node --test tests/portfolio-ui.test.mjs`

Expected: the new test fails because Pentesting Tool is still featured and Tarppi has no image.

### Task 2: Replace the private visual with Tarppi

**Files:**
- Create: `public/tarppi-preview.png`
- Delete: `public/pentest-tool-preview.png`
- Modify: `lib/data.ts`
- Modify: `components/Hero.tsx`
- Modify: `components/Projects.tsx`

- [x] **Step 1: Copy the supplied screenshot into the project**

Copy `C:\Users\antti\AppData\Local\Temp\codex-clipboard-1ce05ece-edcc-4951-a5f2-11acc463f4ae.png` to `public/tarppi-preview.png`. Preserve the 1906 x 948 image without generating a replacement.

- [x] **Step 2: Remove the Pentesting Tool preview**

Delete `public/pentest-tool-preview.png` after confirming `lib/data.ts` no longer references it.

- [x] **Step 3: Define Tarppi as the featured proof**

Use this hero data:

```ts
featured: {
  projectId: 'tarppi',
  label: 'Live project',
  status: 'tarppi.site',
  title: 'Tärppi',
  summary: 'Tracks Kide.app and Tiketti events, helps reserve tickets to cart, and sends Telegram alerts.',
  href: '#projects',
  linkLabel: 'View the project',
},
```

Update `Hero.tsx` to render `hero.featured.status` and `hero.featured.linkLabel` instead of the hard-coded private-source strings.

- [x] **Step 4: Make project selection data-driven**

Import `hero` in `Projects.tsx` and use:

```ts
const featuredProject =
  projects.find((project) => project.id === hero.featured.projectId) ?? projects[0]
```

- [x] **Step 5: Update Tarppi project evidence**

Use these fields:

```ts
description: 'Live event monitor and ticket reservation assistant for Kide.app and Tiketti.',
fullDescription:
  'Tärppi is a React and TypeScript app that collects events from Kide.app and Tiketti, ranks them by relevance, tracks selected events, reserves tickets to cart when sales open, and sends Telegram notifications. The backend runs on Railway with PostgreSQL, and the web app is deployed through Vercel.',
outcome: 'Live at tarppi.site and connected to both ticket platforms.',
image: '/tarppi-preview.png',
imageAlt: 'Tärppi dashboard with event search, tracking, and Telegram notification controls',
linkLabel: 'Open Tärppi',
liveUrl: 'https://www.tarppi.site/',
```

Remove `image` and `imageAlt` from Pentesting Tool.

- [x] **Step 6: Run the contract tests**

Run: `node --test tests/portfolio-ui.test.mjs`

Expected: all tests pass.

### Task 3: Tighten all recruiter-facing copy

**Files:**
- Modify: `lib/data.ts`
- Modify: `components/Projects.tsx`
- Modify: `components/Expertise.tsx`
- Modify: `components/Experience.tsx`
- Modify: `components/Certifications.tsx`
- Modify: `components/Contact.tsx`
- Modify: `components/SecurityResearch.tsx`
- Modify: `app/layout.tsx`
- Modify: `public/manifest.json`

- [x] **Step 1: Replace the hero positioning**

Use:

```ts
label: 'Automation Engineering Student · Technical Support · Software Projects',
subtitle: [
  'I study Automation Engineering at SEAMK and work in technical support for fiber-network services.',
  'Outside work and studies, I build TypeScript and Python applications. Tärppi is my latest live project.',
],
```

- [x] **Step 2: Rewrite the private and research projects**

Use factual positioning:

```ts
// Työhakuri
description: 'Private prototype that collects Finnish job listings and compares them with a user profile.',
fullDescription:
  'A React dashboard with a FastAPI backend, Supabase authentication, Railway deployment, and job ingestion. Experimental LangGraph and Gemini analysis helps review job fit and tailor applications.',
outcome: 'Private prototype in active development; no public demo or project repository.',

// KauppaAgentit
description: 'Finnish adaptation of TradingAgents for experimenting with OMXH market analysis.',
fullDescription:
  'A Finnish adaptation of the open-source TradingAgents framework. The repository adds Finnish prompts, CLI workflows, PostgreSQL storage, and evaluation runs for OMXH research.',
outcome: 'Public repository with Finnish prompts and evaluation runs.',

// Pentesting Tool
description: 'Private Python CLI for practicing security checks in authorized environments.',
fullDescription:
  'A personal learning tool that groups basic reconnaissance, service checks, JWT inspection, and report generation into one workflow. Source remains private.',
outcome: 'Built for learning and authorized practice; source remains private.',
stack: ['Python', 'Security checks', 'CLI', 'Reporting'],
```

- [x] **Step 3: Replace broad expertise claims**

Keep five evidence-based areas:

```ts
{
  id: 'fiber',
  label: 'Network Support',
  description: 'Current technical support work includes fault diagnosis, service provisioning, and OSS tools in a fiber-operator environment.',
  tools: ['iMaster', 'Altiplano', 'Nokia OSS', 'OTDR', 'Keycom'],
  accent: 'green',
},
{
  id: 'automation',
  label: 'Industrial Automation',
  description: 'Coursework and hands-on exercises in PLC programming, SCADA, electrical design, machine vision, and simulation.',
  tools: ['Codesys', 'SCADA', 'Eplan', 'Cognex', 'Visual Components'],
  accent: 'blue',
},
{
  id: 'software',
  label: 'Software Projects',
  description: 'Personal TypeScript, React, Python, and FastAPI projects with PostgreSQL and cloud deployments.',
  tools: ['TypeScript', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
  accent: 'amber',
},
{
  id: 'ai',
  label: 'Applied AI',
  description: 'Gemini, LangGraph, scikit-learn, and agent workflows used in private prototypes and research projects.',
  tools: ['Gemini', 'LangGraph', 'scikit-learn', 'Agent workflows'],
  accent: 'purple',
},
{
  id: 'security',
  label: 'Application Security',
  description: 'One responsibly disclosed SQL injection finding and a private Python learning tool for authorized environments.',
  tools: ['SQL injection', 'Responsible disclosure', 'Python'],
  accent: 'green',
},
```

- [x] **Step 4: Shorten section introductions**

Use:

```text
Projects: A live service, private prototypes, and open-source experiments.
Expertise: Skills from current work, engineering studies, and personal projects.
Experience: Current technical support work, earlier production roles, and engineering studies.
Credentials: Selected certificates with direct verification links.
Contact: Email, GitHub, and LinkedIn.
Security: One SQL injection finding reported through the operator's official channel.
```

- [x] **Step 5: Tighten the disclosure copy**

Use:

```ts
title: 'SQL injection in a checkout flow',
meta: 'Responsible disclosure · Finnish fitness platform',
body:
  "I found an unauthenticated SQL injection in the promo-code validation of a public membership checkout. Testing showed it could be used to bypass payment. I reported the issue through the operator's official channel and coordinated the disclosure with them.",
```

- [x] **Step 6: Align metadata and manifest**

Use the title `Antti Murtokangas - Automation Engineering Student` and this description:

```text
Automation Engineering student at SEAMK with technical support experience and practical TypeScript and Python projects, including the live Tarppi event-monitoring service.
```

### Task 4: Verify and commit locally

**Files:**
- Modify: `tests/portfolio-ui.test.mjs`
- Modify: `docs/superpowers/plans/2026-07-15-tarppi-recruiter-content.md`

- [x] **Step 1: Run source, type, and lint checks**

Run:

```powershell
node --test tests/portfolio-ui.test.mjs
npx tsc --noEmit --incremental false --pretty false
npm run lint
```

Expected: all tests pass with no TypeScript or lint errors.

- [x] **Step 2: Run a clean production build**

Stop the dev server, remove only the verified workspace `.next` directory, and run `npm run build`.

Expected: the static `/` route builds successfully.

- [x] **Step 3: Verify responsive behavior**

Check 1280 x 720, 390 x 844, 375 x 812, and 320 x 740. Confirm no document-level horizontal overflow, the Tarppi screenshot remains legible, and the next section is visible below the hero.

- [x] **Step 4: Verify the dialog**

Open Tarppi details, confirm the `tarppi.site` action, press Escape, and confirm focus returns to the Tarppi card.

- [x] **Step 5: Commit locally**

Stage the implementation, tests, asset replacement, and plan. Commit with:

```powershell
git commit -m "Feature Tarppi and tighten portfolio copy"
```

Do not push.
