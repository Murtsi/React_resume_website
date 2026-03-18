# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Antti Murtokangas Portfolio** - A modern Next.js-based resume/portfolio website showcasing professional experience in fiber optic networks, automation engineering, and web development. The site features smooth animations, dark mode support, and responsive design.

- **Live Site**: https://www.anttimurtokangas.com
- **Framework**: Next.js 15.1.2 with React 19
- **Styling**: Tailwind CSS 3.4 with custom color scheme
- **Deployment**: Vercel

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint code
npm lint

# Run tests
npm test

# Watch mode for tests
npm test:watch

# Coverage report
npm test:coverage
```

## Architecture Overview

### Project Structure

```
├── pages/
│   ├── _app.js              # Next.js app wrapper
│   ├── _document.js         # HTML document wrapper
│   ├── index.js             # Home page (main portfolio)
│   └── api/                 # API routes
├── components/              # Reusable React components
│   ├── HeroSection.js       # Header with intro and CTA
│   ├── QuickStatsSection.js # Animated stats/counters
│   ├── WhatICanOfferSection.js     # Core competencies
│   ├── OffersSection.js     # Technical expertise areas
│   ├── ExperienceEducationSection.js # Work & education timeline
│   ├── GitHubProjectsSection.js     # GitHub projects showcase
│   ├── ContactSection.js    # Contact form
│   ├── Navigation.js        # Header nav with dark mode toggle
│   ├── TestimonialsSection.js       # Testimonials (optional)
│   └── SkillCard.js         # Individual skill card component
├── utils/
│   └── translations.js      # i18n content (currently English only)
├── styles/
│   └── globals.css          # Global styles & animations
├── tailwind.config.js       # Tailwind color scheme & animation config
└── public/                  # Static assets
```

### Component Architecture

Each major section is a self-contained React component:

- **Uses `react-intersection-observer`** for scroll-based animations (fade-in when in view)
- **Dark mode support** via Tailwind's `dark:` prefix
- **Responsive grid layouts** with `grid-cols-1 md:grid-cols-3` patterns
- **Hover effects** and transitions for interactivity
- **Staggered animations** using inline `animationDelay` styles

## Design System

### Color Scheme

The site uses a warm, professional palette centered on orange with complementary accents:

**Tailwind Color Variables** (defined in `tailwind.config.js`):
- **`primary`**: Warm orange tones (#e8825f at 500) - used for main CTAs and accents
- **`secondary`**: Warm neutral browns - supporting backgrounds
- **`accent`**: Soft light blue (#6fc7ff at 500) - contrast accents and secondary highlights
- **`warm`**: Bright orange (#ff7e1a at 500) - highlights and emphasis

### Animation System

Custom animations defined in `tailwind.config.js` and `styles/globals.css`:

- `fade-in` (0.8s) - opacity fade on scroll
- `slide-up` (0.6s) - entrance from bottom
- `slide-down` (0.6s) - entrance from top
- `slide-left` / `slide-right` - directional slide entrances
- `float` (3s infinite) - gentle floating effect
- `glow` (2s infinite) - shadow pulse effect
- `shimmer` (2s infinite) - shimmer overlay
- `scale-bounce` (0.6s) - bounce scale effect

**Usage Pattern**:
```jsx
className="animate-fade-in"  // Built-in Tailwind
className="animate-slide-up" // Custom, with optional animationDelay
style={{ animationDelay: '0.2s' }} // For staggered effects
```

## Key Development Patterns

### 1. Page Content Structure

The home page (`pages/index.js`) imports and renders section components sequentially:
- Navigation → Hero → Stats → Offers (2 variations) → Projects → Experience/Education → Contact
- Dark mode state managed at page level, passed to Navigation

### 2. Content Management

All text content lives in `utils/translations.js`:
- Organized by section (hero, offers, contact, etc.)
- Easy to update without touching components
- Structure: `translations.en[sectionName][key]`

### 3. Scroll-triggered Animations

Most sections use `react-intersection-observer` hook:
```jsx
const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
className={`${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}
```

### 4. Responsive Design

Standard Tailwind breakpoints:
- `grid-cols-1` - mobile (default)
- `md:grid-cols-2` - tablet/medium
- `lg:grid-cols-3` - desktop/large
- Spacing uses consistent `gap-6` to `gap-12` patterns

### 5. Dark Mode

- Enabled/disabled via `Navigation` component (state at page level)
- Applied via `document.documentElement.classList.add('dark')`
- All colors have dark variants: `text-gray-900 dark:text-white`

## Content Areas (For Updates)

### Expertise Areas (`OffersSection.js`)

Currently displays 3 skill cards:
1. **Fiber Network Applications** - telecom platforms (iMaster, Altiplano, etc.)
2. **Automation Engineering** - industrial tools (Codesys, Eplan, Cognex, Visual Components, etc.)
3. **Hobbyist Coding** - web tech (React, Python, Tailwind, etc.)

To modify: Update `utils/translations.js` → `offers2` section, or modify tools array in component.

### Experience & Education (`ExperienceEducationSection.js`)

- **Work Experience**: 5 past roles with descriptions
- **Education**: Currently pursuing Automation Engineering degree + past qualifications
- **Languages**: 4 languages with proficiency bars

Update by modifying the `workExperience` and `education` arrays in the component.

## Common Tasks

### Update Contact Information
- **Email**: `HeroSection.js` socialLinks array
- **LinkedIn/GitHub**: Same location
- **Contact form**: `ContactSection.js`

### Add/Modify Skills
- Technical tools: `utils/translations.js` → `offers2.automationTools`, `.webTools`, etc.
- Soft skills: `WhatICanOfferSection.js` → `professionalAttributes` array

### Adjust Color Scheme
1. Modify color values in `tailwind.config.js` (primary, secondary, accent, warm)
2. Update theme meta tag in `pages/index.js` (for browser UI)
3. Theme colors affect:
   - Hero section badges and buttons
   - Skill cards and hover states
   - Stats section gradient
   - Text and borders throughout

### Add New Section
1. Create component in `/components` (use existing sections as templates)
2. Import in `pages/index.js`
3. Add to render order in `<main>`
4. Add content to `utils/translations.js` if needed
5. Use `react-intersection-observer` for scroll animations

## Key Dependencies

- **Next.js**: Framework and routing
- **React 19**: UI library
- **Tailwind CSS**: Utility-first styling
- **react-intersection-observer**: Scroll-based animations
- **@heroicons/react**: SVG icon set
- **Firebase**: Analytics/hosting support
- **Framer Motion**: Additional animation library (installed but not heavily used)

## Git Workflow

**Feature Branch**: `claude/improve-resume-website-[SESSION_ID]`

All development changes should be committed to this branch with clear commit messages explaining the changes. Follow this format:
```
Descriptive title of changes

- Bullet points explaining what changed
- Why the change was made

https://claude.ai/code/session_[SESSION_ID]
```

Push only to the designated branch. Do not push to main without explicit approval.

## Notes for Future Development

- The site is **production-ready** and deployed on Vercel
- Dark mode is fully supported across all components
- Animations are performant and respect `prefers-reduced-motion` (in globals.css)
- Consider mobile-first approach when adding new sections
- Test responsive design at 375px (mobile), 768px (tablet), and 1920px (desktop)
- All text content is in one file (`translations.js`) for easy management
