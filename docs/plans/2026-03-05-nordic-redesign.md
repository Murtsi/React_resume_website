# Nordic Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the portfolio site to a "Quiet Authority" Nordic minimalism aesthetic — warm cream light mode, deep navy dark mode, Cormorant Garamond display font, DM Sans body, terracotta accent, restrained animations.

**Architecture:** Replace all Tailwind color token values in-place (primary → terracotta, accent → navy-compatible), add two new Google Fonts, then rewrite each component one at a time. Merge the two redundant competency sections (WhatICanOffer + Offers) into a single ExpertiseSection. No new dependencies needed.

**Tech Stack:** Next.js 15 Pages Router, Tailwind CSS 3.4, JavaScript (.js files), @heroicons/react, react-intersection-observer, Google Fonts (Cormorant Garamond + DM Sans)

---

## Task 1: Update Google Fonts in _document.js

**Files:**
- Modify: `pages/_document.js`

**Step 1: Read the file**

Run: `cat pages/_document.js` or use Read tool.

**Step 2: Replace the Google Fonts import**

Find the existing `<link>` tags loading Inter/Poppins and replace with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
  rel="stylesheet"
/>
```

Remove any existing Inter or Poppins link tags.

**Step 3: Verify**

Run: `npm run build` — should complete with no errors.

**Step 4: Commit**

```bash
git add pages/_document.js
git commit -m "feat: swap fonts to Cormorant Garamond + DM Sans"
```

---

## Task 2: Update tailwind.config.js — colors and fonts

**Files:**
- Modify: `tailwind.config.js`

**Step 1: Read the file**

Read `tailwind.config.js` fully first.

**Step 2: Replace the full config**

Replace the entire file content with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terracotta accent — used sparingly
        primary: {
          50:  '#fdf4f1',
          100: '#fae5de',
          200: '#f4c9ba',
          300: '#eca48f',
          400: '#de7a5e',
          500: '#c4674a',
          600: '#a8543a',
          700: '#8c422c',
          800: '#733320',
          900: '#5c2716',
        },
        // Warm cream backgrounds (light mode)
        cream: {
          50:  '#fdfcfb',
          100: '#f7f4ef',
          200: '#f0ede8',
          300: '#e4e0db',
          400: '#d4cfc9',
          500: '#c0b9b1',
          600: '#a89f97',
          700: '#8c847c',
          800: '#6b6560',
          900: '#4a4540',
        },
        // Nordic navy (dark mode)
        navy: {
          50:  '#e8f0f8',
          100: '#c5d7eb',
          200: '#8fa3b8',
          300: '#5a7490',
          400: '#2d506e',
          500: '#1e3347',
          600: '#132336',
          700: '#0d1b2a',
          800: '#0a1520',
          900: '#060e17',
        },
        // Keep accent as alias for compatibility
        accent: {
          50:  '#fdf4f1',
          100: '#fae5de',
          200: '#f4c9ba',
          300: '#eca48f',
          400: '#de7a5e',
          500: '#c4674a',
          600: '#a8543a',
          700: '#8c422c',
          800: '#733320',
          900: '#5c2716',
        },
        warm: {
          50:  '#fdfcfb',
          100: '#f7f4ef',
          200: '#f0ede8',
          300: '#e4e0db',
          400: '#d4cfc9',
          500: '#c0b9b1',
          600: '#a89f97',
          700: '#8c847c',
          800: '#6b6560',
          900: '#4a4540',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        poppins: ['"DM Sans"', 'sans-serif'], // fallback alias
        burtons: 'burtons',
      },
      fontSize: {
        xs:   ['11px', { lineHeight: '16px', letterSpacing: '0.08em' }],
        sm:   ['13px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '28px' }],
        lg:   ['18px', { lineHeight: '28px' }],
        xl:   ['20px', { lineHeight: '30px' }],
        '2xl':['24px', { lineHeight: '32px' }],
        '3xl':['30px', { lineHeight: '38px' }],
        '4xl':['40px', { lineHeight: '48px' }],
        '5xl':['56px', { lineHeight: '60px', letterSpacing: '-0.02em' }],
        '6xl':['72px', { lineHeight: '76px', letterSpacing: '-0.03em' }],
        '7xl':['96px', { lineHeight: '96px', letterSpacing: '-0.04em' }],
        '8xl':['120px',{ lineHeight: '120px', letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '3px',
        md: '4px',
        lg: '6px',
        xl: '8px',
        '2xl': '12px',
      },
      animation: {
        'fade-in':    'fadeIn 0.9s ease-out both',
        'slide-up':   'slideUp 0.7s ease-out both',
        'reveal':     'reveal 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'float':      'float 4s ease-in-out infinite',
        'underline-grow': 'underlineGrow 0.3s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        underlineGrow: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
```

**Step 3: Verify build**

Run: `npm run build` — no errors expected.

**Step 4: Commit**

```bash
git add tailwind.config.js
git commit -m "feat: Nordic design tokens — terracotta, cream, navy palette + new fonts"
```

---

## Task 3: Update globals.css

**Files:**
- Modify: `styles/globals.css`

**Step 1: Read the file**

Read `styles/globals.css` fully.

**Step 2: Replace entire file**

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* Base */
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: #F7F4EF;
  color: #1A1714;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
}

body.dark {
  background-color: #0D1B2A;
  color: #EDE9E4;
}

* { box-sizing: border-box; }

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h4, h5, h6 {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  line-height: 1.4;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}

/* Scrollbar */
::-webkit-scrollbar       { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #E4E0DB; border-radius: 3px; }
.dark ::-webkit-scrollbar-thumb { background: #1E3347; }

/* Selection */
::selection { background-color: #C4674A; color: white; }

/* Focus */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #C4674A;
  outline-offset: 3px;
  border-radius: 2px;
}

button { cursor: pointer; }

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Utility: section number watermark */
.section-number {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-size: clamp(80px, 12vw, 160px);
  line-height: 1;
  letter-spacing: -0.04em;
  color: #E4E0DB;
  pointer-events: none;
  user-select: none;
}

.dark .section-number {
  color: #1E3347;
}

/* Divider */
.nordic-divider {
  width: 100%;
  height: 1px;
  background: #E4E0DB;
}

.dark .nordic-divider {
  background: #1E3347;
}
```

**Step 3: Verify**

Run: `npm run build`

**Step 4: Commit**

```bash
git add styles/globals.css
git commit -m "feat: Nordic globals — cream/navy base, Cormorant headings, DM Sans body"
```

---

## Task 4: Redesign Navigation.js

**Files:**
- Modify: `components/Navigation.js`
- Test: `__tests__/Navigation.test.js` (must still pass)

**Step 1: Run existing tests first**

Run: `npm test -- --testPathPattern=Navigation` — note current pass/fail state.

**Step 2: Read the file**

Read `components/Navigation.js`.

**Step 3: Replace with Nordic design**

```jsx
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About',      id: 'about' },
    { label: 'Projects',   id: 'projects' },
    { label: 'Experience', id: 'portfolio' },
    { label: 'Contact',    id: 'contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-cream-100/95 dark:bg-navy-700/95 backdrop-blur-sm border-b border-cream-300 dark:border-navy-500'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo — terracotta accent */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-cormorant text-xl font-light text-primary-500 dark:text-primary-400 tracking-tight hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
            aria-label="Go to home"
          >
            AM
          </button>

          {/* Desktop nav — underline style */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative text-xs font-medium uppercase tracking-widest text-cream-800 dark:text-navy-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 py-1 group"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-px bg-primary-500 dark:bg-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-cream-700 dark:text-navy-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              aria-pressed={darkMode}
            >
              {darkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-cream-700 dark:text-navy-200"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-cream-300 dark:border-navy-500 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left text-xs font-medium uppercase tracking-widest text-cream-800 dark:text-navy-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

**Step 4: Run tests**

Run: `npm test -- --testPathPattern=Navigation`
Expected: all Navigation tests pass (they test nav link presence by label text).

**Step 5: Commit**

```bash
git add components/Navigation.js
git commit -m "feat: Nordic Navigation — terracotta monogram, underline nav, scroll-aware bg"
```

---

## Task 5: Redesign HeroSection.js

**Files:**
- Modify: `components/HeroSection.js`

**Step 1: Read the file**

Read `components/HeroSection.js`.

**Step 2: Replace with Nordic asymmetric hero**

```jsx
import { EnvelopeIcon, LinkIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';

export default function HeroSection({ t }) {
  const socialLinks = [
    { href: "mailto:antti.murtsi@gmail.com",                           icon: EnvelopeIcon,          label: "Email",    ariaLabel: "Send email to Antti" },
    { href: "https://www.linkedin.com/in/antti-murtokangas-562725158/", icon: LinkIcon,              label: "LinkedIn", ariaLabel: "Visit LinkedIn profile" },
    { href: "https://github.com/Murtsi",                               icon: CodeBracketSquareIcon, label: "GitHub",   ariaLabel: "Visit GitHub profile" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-24 pb-20 relative overflow-hidden">
      {/* Faint section watermark */}
      <span className="section-number absolute right-6 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        01
      </span>

      <div className="max-w-5xl mx-auto w-full">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-8 animate-fade-in">
          Portfolio — 2026
        </p>

        {/* Name — large, light weight Cormorant */}
        <div className="overflow-hidden mb-6">
          <h1
            className="font-cormorant font-light text-7xl lg:text-8xl text-cream-900 dark:text-cream-100 leading-none animate-reveal"
            style={{ animationDelay: '0.1s' }}
          >
            {t.hero.title}
          </h1>
        </div>

        {/* Thin rule */}
        <div
          className="nordic-divider mb-8 animate-fade-in"
          style={{ animationDelay: '0.25s' }}
        />

        {/* Role + description — split layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-14">
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl font-light text-cream-900 dark:text-cream-100 leading-snug">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-base text-cream-700 dark:text-navy-200 leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </div>

        {/* CTAs + social — horizontal row */}
        <div
          className="flex flex-wrap items-center gap-6 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 text-white text-sm font-medium tracking-wide transition-colors duration-200"
          >
            Get In Touch
          </a>

          <a
            href="/CV-Antti-Murtokangas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium uppercase tracking-widest text-cream-800 dark:text-navy-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors border-b border-cream-400 dark:border-navy-400 pb-0.5"
          >
            Download CV
          </a>

          {/* Divider */}
          <span className="hidden sm:block w-px h-5 bg-cream-400 dark:bg-navy-400" />

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-600 dark:text-navy-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.ariaLabel}
                  title={link.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Verify**

Run: `npm test` — all tests pass.

**Step 4: Commit**

```bash
git add components/HeroSection.js
git commit -m "feat: Nordic Hero — large Cormorant name, asymmetric grid, minimal CTAs"
```

---

## Task 6: Redesign QuickStatsSection.js

**Files:**
- Modify: `components/QuickStatsSection.js`

**Step 1: Read the file**

Read `components/QuickStatsSection.js`.

**Step 2: Replace with typography-driven stats**

```jsx
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function QuickStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    { number: 3,  suffix: '+', label: 'Years professional\nexperience' },
    { number: 5,  suffix: '+', label: 'Industry platforms\nmastered' },
    { number: 4,  suffix: '',  label: 'Languages\nspoken' },
  ];

  useEffect(() => {
    if (!inView) return;
    const timers = stats.map((stat, i) => {
      const steps = 40;
      const delay = i * 150;
      let step = 0;
      return setTimeout(() => {
        const id = setInterval(() => {
          step++;
          setCounts(prev => {
            const next = [...prev];
            next[i] = step >= steps ? stat.number : Math.floor((step / steps) * stat.number);
            return next;
          });
          if (step >= steps) clearInterval(id);
        }, 1000 / steps);
      }, delay);
    });
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 border-t border-b border-cream-300 dark:border-navy-500">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Large Cormorant number */}
              <p className="font-cormorant font-light text-8xl leading-none text-cream-900 dark:text-cream-100 mb-3">
                {counts[i]}{stat.suffix}
              </p>
              {/* Rule */}
              <div className="w-8 h-px bg-primary-500 mb-3" />
              {/* Label */}
              <p className="text-xs font-medium uppercase tracking-widest text-cream-700 dark:text-navy-300 whitespace-pre-line leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Commit**

```bash
git add components/QuickStatsSection.js
git commit -m "feat: Nordic Stats — large Cormorant counters, ruled dividers, no gradient bar"
```

---

## Task 7: Merge WhatICanOffer + Offers into single ExpertiseSection (rewrite OffersSection.js)

The two sections cover near-identical ground. Consolidate into one clean section in `OffersSection.js`. `WhatICanOfferSection.js` will be removed from index.js rendering but file kept.

**Files:**
- Modify: `components/OffersSection.js`
- Modify: `pages/index.js` (remove WhatICanOfferSection import and usage)

**Step 1: Read both files**

Read `components/OffersSection.js` and `pages/index.js`.

**Step 2: Replace OffersSection.js**

```jsx
import { useInView } from 'react-intersection-observer';

const expertise = [
  {
    number: '01',
    title: 'Fiber Network Operations',
    description: 'Technical support for fiber optic infrastructure. Daily work with iMaster, Altiplano (Nokia OSS), Optopro Fiber, and Keycom. Network troubleshooting, fault detection, and customer support in live telecom environments.',
    tags: ['iMaster', 'Altiplano', 'Optopro Fiber', 'Keycom'],
  },
  {
    number: '02',
    title: 'Industrial Automation',
    description: 'Pursuing Bachelor\'s in Automation Engineering at SeAMK. PLC programming with Codesys, SCADA systems, electrical design with Eplan, machine vision with Cognex, production simulation with Visual Components.',
    tags: ['Codesys', 'Eplan', 'Cognex', 'Visual Components', 'SCADA'],
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Self-taught development using React, Next.js, and Tailwind CSS. Python for automation scripts. Building modern, responsive applications — this portfolio included.',
    tags: ['React', 'Next.js', 'Tailwind', 'Python', 'JavaScript'],
  },
  {
    number: '04',
    title: 'Leadership & Communication',
    description: 'Production supervision at Olvi managing quality and teams. IT support with customer-facing experience across diverse environments. 4 languages: Finnish (native), English (fluent), German and Estonian (intermediate).',
    tags: ['Team Leadership', 'Technical Support', 'Multilingual'],
  },
];

export default function OffersSection({ t }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      {/* Section watermark */}
      <span className="section-number absolute -left-4 top-16 select-none pointer-events-none hidden lg:block">
        02
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Expertise
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100">
            What I Bring
          </h2>
        </div>

        {/* Expertise list — horizontal rule separated */}
        <div className="space-y-0">
          {expertise.map((item, i) => (
            <div
              key={i}
              className={`group border-t border-cream-300 dark:border-navy-500 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 transition-opacity duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="font-cormorant font-light text-2xl text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3">
                <h3 className="font-cormorant font-light text-2xl text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-sm text-cream-700 dark:text-navy-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="lg:col-span-3 flex flex-wrap gap-2 content-start">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium uppercase tracking-wider text-cream-600 dark:text-navy-300 border border-cream-300 dark:border-navy-500 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {/* Closing rule */}
          <div className="border-t border-cream-300 dark:border-navy-500" />
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Update index.js — remove WhatICanOfferSection**

In `pages/index.js`, find and remove:
- The `import WhatICanOfferSection from '../components/WhatICanOfferSection';` line
- The `<WhatICanOfferSection t={t} />` JSX element

Keep `<OffersSection t={t} />` in place.

**Step 4: Verify**

Run: `npm test` and `npm run build` — no errors.

**Step 5: Commit**

```bash
git add components/OffersSection.js pages/index.js
git commit -m "feat: merge expertise sections into single Nordic list layout"
```

---

## Task 8: Redesign GitHubProjectsSection.js

**Files:**
- Modify: `components/GitHubProjectsSection.js`

**Step 1: Read the file**

Read `components/GitHubProjectsSection.js`.

**Step 2: Replace with vertical list layout**

```jsx
import { useInView } from 'react-intersection-observer';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    index: '01',
    title: 'API Scanner',
    year: '2024',
    description: 'Client-side web security auditing tool. Detects 49+ secret patterns (AWS keys, JWTs, tokens), analyzes headers, and performs active security testing including SQL injection, XSS, and path traversal — all without external data transmission.',
    technologies: ['React', 'TypeScript', 'Vite', 'Security'],
    link: 'https://github.com/Murtsi/API-Scanner',
  },
  {
    index: '02',
    title: 'Kidehiiri — Automated Ticket Buyer',
    year: '2024',
    description: 'Intelligent ticket acquisition for Kide.app events. Monitors availability in real-time, auto-reserves with fallback modes. ML-powered event scoring using heuristics and Random Forest classification (BUY / MAYBE / SKIP).',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'ML'],
    link: 'https://github.com/Murtsi/Kidehiiri-public',
  },
  {
    index: '03',
    title: 'React Resume Website',
    year: '2025',
    description: 'This portfolio — built with Next.js, React, and Tailwind CSS. Dark mode, smooth scroll, animated stats, and a Nordic minimalist redesign. Deployed on Vercel.',
    technologies: ['Next.js', 'React', 'Tailwind', 'JavaScript'],
    link: 'https://github.com/Murtsi',
  },
];

export default function GitHubProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-28 px-6 lg:px-8 bg-cream-200 dark:bg-navy-800 relative overflow-hidden"
    >
      {/* Watermark */}
      <span className="section-number absolute right-6 top-16 select-none pointer-events-none hidden lg:block">
        03
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Selected Work
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100">
            Projects
          </h2>
        </div>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block border-t border-cream-400 dark:border-navy-500 py-10 transition-opacity duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
                {/* Index + year */}
                <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="font-cormorant font-light text-2xl text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {project.index}
                  </span>
                  <span className="text-xs font-medium text-cream-500 dark:text-navy-300 self-center lg:self-start">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-cormorant font-light text-2xl text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300 flex items-start gap-2">
                    {project.title}
                    <ArrowUpRightIcon className="w-4 h-4 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </h3>
                </div>

                {/* Description + tags */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-cream-700 dark:text-navy-200 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium uppercase tracking-wider text-cream-600 dark:text-navy-300 border border-cream-400 dark:border-navy-500 px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
          <div className="border-t border-cream-400 dark:border-navy-500" />
        </div>

        {/* GitHub link */}
        <div className="mt-12">
          <a
            href="https://github.com/Murtsi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-cream-700 dark:text-navy-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors border-b border-cream-400 dark:border-navy-400 pb-0.5"
          >
            All Projects on GitHub
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Verify**

Run: `npm test` and `npm run build`.

**Step 4: Commit**

```bash
git add components/GitHubProjectsSection.js
git commit -m "feat: Nordic Projects — vertical list layout, indexed, no card grid"
```

---

## Task 9: Redesign ExperienceEducationSection.js

**Files:**
- Modify: `components/ExperienceEducationSection.js`

**Step 1: Read the file**

Read `components/ExperienceEducationSection.js`.

**Step 2: Replace with clean Nordic timeline**

```jsx
import { useInView } from 'react-intersection-observer';

const workExperience = [
  {
    title: 'Network Specialist — Technical Support',
    company: 'Leading Fiber Optic Operator',
    year: '2025 – Present',
    description: 'Fiber optic network infrastructure support using iMaster, Altiplano (Nokia OSS), Optopro Fiber, and Keycom. Fault detection, analysis, and customer technical resolution.',
  },
  {
    title: 'Production Supervisor',
    company: 'Olvi Oyj',
    year: '2023',
    description: 'Beverage production line supervision, automation system control, process optimization, quality control, and team leadership.',
  },
  {
    title: 'Production Line Operator',
    company: 'Keitele Timber Oy',
    year: 'Summer 2022',
    description: 'PLC-controlled automated line operation, parameter optimization, and fault resolution in high-throughput production environment.',
  },
  {
    title: 'Assembler',
    company: 'Tikli Group Oy',
    year: '2018, 2021',
    description: 'Smoke extraction system assembly, quality assurance, and fire protection installation.',
  },
  {
    title: 'IT Support',
    company: 'Alajärvi High School',
    year: '2017 – 2018',
    description: 'IT infrastructure maintenance, server management, Google Workspace administration, and user support.',
  },
];

const education = [
  {
    degree: "Bachelor's in Automation Engineering",
    school: 'SeAMK — Seinäjoki University of Applied Sciences',
    year: 'Ongoing',
    status: 'In Progress',
  },
  {
    degree: 'Automation in Wind Power Sector',
    school: 'Professional Development Course',
    year: '2024',
    status: 'Completed',
  },
  {
    degree: 'Leadership Training — Military Police Officer',
    school: 'Finnish Defence Forces',
    year: '2019–2020',
    status: 'Completed',
  },
  {
    degree: 'Vocational Qualification in Business IT',
    school: 'Järviseutu Vocational Institute',
    year: '2015–2018',
    status: 'Completed',
  },
];

const languages = [
  { name: 'Finnish',  level: 'Native',       pct: 100 },
  { name: 'English',  level: 'Fluent',        pct: 95  },
  { name: 'German',   level: 'Intermediate',  pct: 60  },
  { name: 'Estonian', level: 'Intermediate',  pct: 55  },
];

function TimelineRow({ title, subtitle, year, note, status, delay, inView }) {
  return (
    <div
      className={`border-t border-cream-300 dark:border-navy-500 py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 transition-opacity duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="sm:col-span-8">
        <p className="text-base font-medium text-cream-900 dark:text-cream-100">{title}</p>
        <p className="text-xs font-medium uppercase tracking-wider text-primary-500 dark:text-primary-400 mt-1">
          {subtitle}
        </p>
        {note && (
          <p className="text-sm text-cream-600 dark:text-navy-300 mt-2 leading-relaxed">{note}</p>
        )}
      </div>
      <div className="sm:col-span-4 sm:text-right">
        <span className="text-xs font-medium text-cream-500 dark:text-navy-300">{year}</span>
        {status && (
          <span className={`block mt-1 text-xs font-medium uppercase tracking-wider ${
            status === 'In Progress'
              ? 'text-primary-500 dark:text-primary-400'
              : 'text-cream-500 dark:text-navy-400'
          }`}>
            {status}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ExperienceEducationSection() {
  const { ref: workRef,  inView: workInView  } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: eduRef,   inView: eduInView   } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: langRef,  inView: langInView  } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      <span className="section-number absolute -left-4 top-16 select-none pointer-events-none hidden lg:block">
        04
      </span>

      <div className="max-w-5xl mx-auto space-y-24">

        {/* Work */}
        <div ref={workRef}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Experience
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100 mb-12">
            Work History
          </h2>
          <div>
            {workExperience.map((job, i) => (
              <TimelineRow
                key={i}
                title={job.title}
                subtitle={job.company}
                note={job.description}
                year={job.year}
                delay={`${i * 60}ms`}
                inView={workInView}
              />
            ))}
            <div className="border-t border-cream-300 dark:border-navy-500" />
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Education
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100 mb-12">
            Academic Background
          </h2>
          <div>
            {education.map((edu, i) => (
              <TimelineRow
                key={i}
                title={edu.degree}
                subtitle={edu.school}
                year={edu.year}
                status={edu.status}
                delay={`${i * 60}ms`}
                inView={eduInView}
              />
            ))}
            <div className="border-t border-cream-300 dark:border-navy-500" />
          </div>
        </div>

        {/* Languages */}
        <div ref={langRef}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Languages
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100 mb-12">
            Communication
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {languages.map((lang, i) => (
              <div
                key={i}
                className={`transition-opacity duration-700 ${langInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-cormorant font-light text-3xl text-cream-900 dark:text-cream-100 mb-1">
                  {lang.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-cream-600 dark:text-navy-300 mb-3">
                  {lang.level}
                </p>
                {/* Progress bar — thin */}
                <div className="w-full h-px bg-cream-300 dark:bg-navy-500 relative">
                  <div
                    className="absolute left-0 top-0 h-px bg-primary-500 dark:bg-primary-400 transition-all duration-1000"
                    style={{ width: langInView ? `${lang.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
```

**Step 3: Verify**

Run: `npm test` and `npm run build`.

**Step 4: Commit**

```bash
git add components/ExperienceEducationSection.js
git commit -m "feat: Nordic Experience — clean timeline rows, Cormorant headings, language bars"
```

---

## Task 10: Redesign ContactSection.js

**Files:**
- Modify: `components/ContactSection.js`

**Step 1: Read the file**

Read `components/ContactSection.js`.

**Step 2: Replace with typographic contact**

```jsx
import { useInView } from 'react-intersection-observer';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function ContactSection({ t }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const links = [
    { label: 'Email',    href: 'mailto:antti.murtsi@gmail.com',                            display: 'antti.murtsi@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antti-murtokangas-562725158/', display: 'linkedin.com/in/antti-murtokangas' },
    { label: 'GitHub',   href: 'https://github.com/Murtsi',                                display: 'github.com/Murtsi' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 px-6 lg:px-8 bg-cream-200 dark:bg-navy-800 relative overflow-hidden"
    >
      <span className="section-number absolute right-6 top-16 select-none pointer-events-none hidden lg:block">
        05
      </span>

      <div className="max-w-5xl mx-auto">
        <div className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Contact
          </p>
          <h2 className="font-cormorant font-light text-5xl lg:text-6xl text-cream-900 dark:text-cream-100 mb-6 max-w-xl leading-tight">
            {t.contact.title}
          </h2>
          <p className="text-base text-cream-700 dark:text-navy-200 max-w-md leading-relaxed mb-16">
            {t.contact.description}
          </p>

          {/* Contact links — list style */}
          <div className="space-y-0 max-w-xl">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-cream-400 dark:border-navy-500 py-5 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-200"
                aria-label={link.label}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-cream-500 dark:text-navy-300 mb-1">
                    {link.label}
                  </p>
                  <p className="text-base text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {link.display}
                  </p>
                </div>
                <ArrowUpRightIcon className="w-4 h-4 text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
              </a>
            ))}
            <div className="border-t border-cream-400 dark:border-navy-500" />
          </div>

          {/* Email CTA */}
          <div className="mt-12">
            <a
              href="mailto:antti.murtsi@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary-500 hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 text-white text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {t.contact.button}
            </a>
          </div>

          {/* Footer */}
          <p className="text-xs text-cream-500 dark:text-navy-400 mt-16">
            © 2026 Antti Murtokangas
          </p>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Verify**

Run: `npm test` and `npm run build`.

**Step 4: Commit**

```bash
git add components/ContactSection.js
git commit -m "feat: Nordic Contact — typographic list layout, no icon cards"
```

---

## Task 11: Update index.js — background and dark mode class

**Files:**
- Modify: `pages/index.js`

**Step 1: Read index.js**

Read `pages/index.js` fully.

**Step 2: Update body background class application**

Find the `useEffect` that sets dark mode class and ensure it also sets body background:

```js
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }
}, [darkMode]);
```

Also verify the main wrapper div uses cream background:
```jsx
<div className="min-h-screen bg-cream-100 dark:bg-navy-700 text-cream-900 dark:text-cream-100">
```

Remove the `WhatICanOfferSection` import line and JSX usage if not done in Task 7.

**Step 3: Final verification**

Run: `npm test` — all tests pass.
Run: `npm run build` — build succeeds.

**Step 4: Commit**

```bash
git add pages/index.js
git commit -m "feat: update root layout to Nordic cream/navy background"
```

---

## Task 12: Final verification pass

**Step 1: Run full test suite**

Run: `npm test`
Expected: all tests pass (Navigation + SkillCard).

**Step 2: Run build**

Run: `npm run build`
Expected: no errors, no warnings about missing classes.

**Step 3: Visual check list**
- [ ] Light mode: warm cream background visible, not white
- [ ] Dark mode toggle: switches to deep navy
- [ ] Nav: terracotta "AM" monogram, underline on hover
- [ ] Hero: large thin Cormorant name, asymmetric layout
- [ ] Stats: large Cormorant numbers, no gradient bar
- [ ] Expertise: horizontal rule list, no card grid
- [ ] Projects: vertical numbered list
- [ ] Experience: clean timeline rows
- [ ] Contact: list of links, no icon cards
- [ ] Section watermark numbers visible in background

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Nordic Quiet Authority portfolio redesign"
```
