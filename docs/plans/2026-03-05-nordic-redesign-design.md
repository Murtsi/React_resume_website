# Portfolio Redesign — Quiet Authority (Nordic Minimalism)
Date: 2026-03-05

## Direction
Approach A: "Quiet Authority" — warm Nordic light default, deep fjord-blue dark mode. Restrained, editorial. Design steps back and lets content breathe.

## Color System

### Light Mode
- Background:  #F7F4EF (warm cream)
- Surface:     #FFFFFF (cards, elevated)
- Surface alt: #F0EDE8 (section variation)
- Text:        #1A1714 (warm near-black)
- Text muted:  #6B6560
- Text faint:  #9D9590
- Accent:      #C4674A (terracotta — used sparingly)
- Accent hover:#A8543A
- Border:      #E4E0DB

### Dark Mode (Nordic Fjord)
- Background:  #0D1B2A (deep midnight navy)
- Surface:     #132336
- Surface alt: #0A1520
- Text:        #EDE9E4 (warm cream)
- Text muted:  #8FA3B8 (cool steel blue-grey)
- Text faint:  #5A7490
- Accent:      #D4784E (terracotta, lighter)
- Accent hover:#E8865C
- Border:      #1E3347

Accent appears ONLY on: name/logo, nav link hover, active indicators, one CTA. Everywhere else is monochromatic.

## Typography

- Display: Cormorant Garamond (variable, 300–700) — headings, section numbers, stats
- Body: DM Sans (300/400/500) — all UI text, nav, body copy

### Scale
- H1 name:       96px / weight 300 (light and large)
- Section H2:    56px / weight 400 Cormorant
- Subsection H3: 24px / weight 500 DM Sans
- Body:          16px / weight 400 / line-height 1.7
- Labels:        11px / weight 500 / uppercase / tracking-widest
- Stat numbers:  120px+ / weight 300 Cormorant

### Key moves
- Name renders thin (weight 300) and very large
- Section numbers (01, 02...) appear faintly behind section titles in Cormorant
- No bold body text — contrast from size, not weight

## Layout

- Default: light mode
- Max width: max-w-5xl (tighter than current max-w-6xl)
- Hero: asymmetric — name and title left-anchored, social links float right on desktop
- Section dividers: thin horizontal rules + uppercase label, not background color swaps
- Section numbers faint behind H2 headings
- Stats: large Cormorant numbers, horizontal rule above, no card boxes
- Projects: vertical list (not 3-col grid), project name large, description small
- Contact: typographic only — no cards, just links as styled text

## Motion
- Page load: staggered clip-path reveals on hero text lines (not fade-in)
- Scroll: opacity + 12px translateY, 600ms ease-out, triggerOnce
- Hover: no scale bounce — underline-grow on nav, opacity shift on icons
- Dark/light toggle: smooth 300ms background-color transition

## Component Plan

| Component | Change |
|-----------|--------|
| Navigation | Terracotta name, underline-only nav links, no bg box on dark toggle |
| HeroSection | Asymmetric layout, thin large Cormorant name, clip-path reveal |
| QuickStatsSection | Large Cormorant numbers, horizontal rules, no gradient bar |
| WhatICanOfferSection | Merge with OffersSection — one unified expertise section |
| OffersSection | Merged into above |
| GitHubProjectsSection | Vertical list layout, not 3-col card grid |
| ExperienceEducationSection | Cleaner timeline, section number, better typography |
| ContactSection | Typographic — no icon cards, styled link list |

## Fonts to Add
Add to _document.js:
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap
```

## Tailwind Config Changes
- Add `cormorant` font family
- Add `dm-sans` font family
- Update color tokens to new palette (keep existing token names, change values)
- Add `cream` color scale for backgrounds
- Add `navy` color scale for dark mode
