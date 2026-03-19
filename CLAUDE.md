# CLAUDE.md — Portfolio Site Rules
# Last updated: 2026-03-19
# DO NOT IGNORE THIS FILE. Read it fully before touching any code.

## WHO THIS SITE IS FOR
Antti Murtokangas
- Automation Engineering student @ SEAMK
- Fiber optic technician & technical support (day job)
- ML/AI + backend developer (personal projects)
- NOT a frontend developer. Frontend is a supporting skill only.

## MCP TOOL USAGE — MANDATORY
Every time you make changes to this project, you MUST:
1. Use `context7` to check for latest Next.js 15 / Tailwind v4 patterns FIRST
2. Use `ui-ux-pro-max` for any design system or spacing decisions
3. Use `frontend-design` for any layout or responsive grid changes
4. Use `magic` for complex components (cards, timeline, skill matrix)
Never write from memory. Always pull live docs via context7.

## DESIGN SYSTEM — DO NOT CHANGE THESE VALUES
```css
--bg-canvas:    #0D1117;
--bg-surface:   #161B22;
--border:       #21262D;
--text-primary: #E6EDF3;
--text-muted:   #8B949E;
--accent-green: #3FB950;
--accent-blue:  #58A6FF;
--accent-amber: #D29922;
--accent-purple:#BC8CFF;
Fonts: JetBrains Mono (headings/labels/code), Inter (body only)
NO serif fonts. NO display fonts. Ever.

BANNED PATTERNS — NEVER REINTRODUCE THESE
If you find any of these in the codebase, remove them immediately:

 Numbered section labels (01, 02, 03...)

 Animated counting stats

 "Let's Work Together" or any variation

 "What I Bring" or "I'm always looking for opportunities"

 Serif or display fonts

 Gradient blobs / particle canvas / glassmorphism

 Skill pill/badge tags

 Dark navy + orange/terracotta color palette

 Centered hero with photo + social icon row

 Framer Motion, GSAP, or scroll-triggered animations

 Ghost/watermark section numbers in the background

COMPONENT RULES
Project cards = terminal windows (3-dot title bar, monospace filename, dark surface)

Experience = git log format (commit hash, date, role, tools on next line)

Skills = const skills = {} code block with syntax highlighting colors

Section headers = code comments (// or /* */ style) in accent-green

CTA = terminal command style (> ./command) NOT a rounded button

CONTENT HIERARCHY (most → least visual weight)
ML/AI projects

Fiber optic / tech support experience

Automation engineering studies

Backend skills

Frontend skills (last — supporting role only)

COPY RULES
Write like a technical spec, not a marketing page

No motivational fluff, no agency-speak

Every sentence must be specific and factual

If unsure what to write, leave a TODO comment — do NOT generate filler copy

ANIMATION RULES
CSS only. Allowed:

Blinking cursor █ in hero

Single border-trace on card :hover

Smooth scroll
Nothing else. No entrance animations. No JS-driven motion.

TECH STACK
Next.js 15 (App Router)

Tailwind CSS v4

TypeScript strict mode

next/font for Google Fonts (JetBrains Mono + Inter)

next/image for all images

NO animation libraries

NO canvas/WebGL backgrounds

WHEN IN DOUBT
Choose the MORE minimal and technical option.
Ask: "Does this look like it came from an AI portfolio template?"
If yes → remove it.

text

***

The `CLAUDE.md` is the key part most people skip — without it, Claude forgets your rules the moment you start a new conversation and falls back to defaults. With this file in the repo root, it gets picked up automatically in every Claude Code session.