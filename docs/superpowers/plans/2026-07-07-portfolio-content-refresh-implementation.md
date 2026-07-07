# Portfolio Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio content, add a Security Research note, and lightly reposition the page toward AI-assisted security research and LLM/AppSec interests.

**Architecture:** Keep portfolio content centralized in `lib/data.ts`. Add one small presentational component for the Security Research note and render it between Projects and Certifications.

**Tech Stack:** Next.js, React, TypeScript, inline style conventions already used by the project, Tailwind global CSS tokens.

---

### Task 1: Content Contract

**Files:**
- Read: `lib/data.ts`
- Read: `app/page.tsx`

- [ ] **Step 1: Run the failing content contract**

Run a Node assertion that expects the new nav link, project names, removed Portfolio project, AI security expertise copy, and Security Research section import/render to exist. Before implementation, it should fail because the site still has the old data.

```powershell
$data = Get-Content -Raw -Encoding utf8 -LiteralPath 'lib\data.ts'
$page = Get-Content -Raw -Encoding utf8 -LiteralPath 'app\page.tsx'
$checks = @(
  @('security nav', $data.Contains("{ label: 'security', href: '#security' }")),
  @('tarppi id', $data.Contains("id: 'tarppi'")),
  @('tyohakuri id', $data.Contains("id: 'tyohakuri'")),
  @('kauppaagentit', $data.Contains('KauppaAgentit')),
  @('no portfolio project', -not $data.Contains("id: 'portfolio'")),
  @('ai security expertise', $data.Contains('AI Security & AppSec Research')),
  @('responsible disclosure text', $data.Contains('unauthenticated SQL injection vulnerability')),
  @('security component render', $page.Contains('<SecurityResearch />'))
)
$failed = @($checks | Where-Object { -not $_[1] })
if ($failed.Count -gt 0) {
  Write-Error ('Missing: ' + (($failed | ForEach-Object { $_[0] }) -join ', '))
  exit 1
}
```

Expected: FAIL with missing content names.

### Task 2: Data Updates

**Files:**
- Modify: `lib/data.ts`

- [ ] **Step 1: Update nav, hero, projects, security research data, and security expertise**

Modify `lib/data.ts` so it contains the new project order, no Portfolio or Fament project, a Security Research nav link, AI security positioning, and a `securityResearch` data object with the responsible disclosure text.

- [ ] **Step 2: Run the content contract again**

Run the same command from Task 1. It should still fail until the page renders the new component.

### Task 3: Security Research Component

**Files:**
- Create: `components/SecurityResearch.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Add the component**

Create a wide research-note style component that reads from `securityResearch`, uses the existing visual tokens, does not render badges, and does not reuse the project card modal pattern.

- [ ] **Step 2: Render the component**

Import and render `SecurityResearch` between `Projects` and `Certifications`.

- [ ] **Step 3: Run the content contract**

Run the same command from Task 1. Expected: PASS.

### Task 4: Verification

**Files:**
- Verify: full project

- [ ] **Step 1: Run TypeScript/build verification**

Run `npm run build`. Expected: build exits with code 0.

- [ ] **Step 2: Run a local visual smoke test**

Start the dev server and use Playwright to confirm the page renders the new nav link, project order, Security Research section, and no Portfolio card.
