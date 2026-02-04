# Antti Murtokangas - Professional Portfolio

A modern, corporate-grade portfolio website built with Next.js 14+, React 19, and Tailwind CSS. Optimized for job applications with a professional design that stands out in the current job market.

## 🎯 Live Preview

Visit your portfolio at **http://localhost:3000** (currently running)

---

## ✨ What's New in v2.0

### 📦 Package Updates
All dependencies have been updated to their latest stable versions:
- **Next.js**: 14.2.4 → 15.1.2
- **React**: 18.2.0 → 19.0.0
- **Tailwind CSS**: 3.4.4 → 3.4.1
- **React Icons**: 4.4.0 → 5.0.1
- **Plus 10+ more modern dependencies**

### 🎨 Design Overhaul - Corporate & Professional

#### **Modern Color Palette**
- **Primary Blue**: Professional, trustworthy color (#5865f2)
- **Secondary Slate**: Modern, clean backgrounds
- **Accent Green**: Highlights and success states
- Full dark mode support with carefully balanced contrast

#### **Improved Typography**
- **Font Stack**: Inter (body) + Poppins (headings)
- Better hierarchy and readability
- Optimized line heights and spacing
- Professional letter-spacing

#### **Enhanced Components**

1. **Navigation Bar**
   - Sticky positioning with glassmorphic backdrop blur
   - Responsive mobile menu
   - Smooth scrolling navigation
   - Theme toggle button with smooth transitions

2. **Hero Section**
   - Two-column layout (content + image)
   - Professional headline with subheading
   - Skill badges instead of plain text
   - Call-to-action buttons (Get In Touch, View My Work)
   - Social media icons with hover effects

3. **Professional Overview Section**
   - Grid layout of skill checkmarks
   - Organized technical expertise cards
   - Better information hierarchy

4. **Experience & Education**
   - Timeline-style work experience display
   - Clean education cards with dates
   - Language proficiency bars (visual indicators)
   - Icon-based section headers

5. **Contact Section**
   - Professional contact cards
   - Gradient background
   - Direct CTA button
   - Footer with copyright

### ✨ Modern Features

- **Smooth Animations**: Fade-in, slide-up animations on scroll
- **Responsive Design**: Mobile-first, optimized for all devices
- **Dark Mode**: Toggle between light and dark themes
- **Glassmorphism**: Subtle backdrop blur effects
- **Performance**: Image optimization, lazy loading
- **Accessibility**: ARIA labels, keyboard navigation, focus states
- **SEO**: Meta tags, Open Graph, structured data

### 🔄 Layout Improvements

```
Old Layout:
- Cluttered horizontal cards
- Dark backgrounds everywhere
- Limited spacing
- Overlapping elements

New Layout:
- Clean grid systems (1 col mobile, 2 col tablet, etc.)
- Alternating background colors (white/gray sections)
- Generous whitespace
- Clear visual hierarchy
- Professional card designs
```

### 📱 Mobile Optimization

- Responsive typography that scales with screen size
- Touch-friendly interactive elements (48px+ targets)
- Mobile-first navigation with hamburger menu
- Optimized spacing for small screens
- Readable on all devices

### 🚀 Performance

- Next.js 15 with React 19 for faster rendering
- Image optimization with Next.js Image component
- CSS optimized with modern Tailwind CSS
- Minimal bundle size
- Fast page loads

---

## 📋 File Structure

```
├── components/
│   ├── Navigation.js          # Sticky nav with dark mode
│   ├── HeroSection.js         # Professional landing
│   ├── OffersSection.js       # Skills overview
│   ├── SkillCard.js           # Reusable skill cards
│   ├── ExperienceEducationSection.js  # Timeline + education
│   └── ContactSection.js      # CTA and social links
├── pages/
│   ├── _app.js               # App configuration
│   ├── _document.js          # HTML structure
│   └── index.js              # Main page
├── styles/
│   └── globals.css           # Global styles + animations
├── public/                    # Static assets
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

---

## 🛠️ Customization Guide

### Update Your Information

**Hero Section** - Edit the headlines and description:
```javascript
// components/HeroSection.js
<h1>Your Name</h1>
<p>Your Title & Description</p>
```

**Contact Links** - Update your social media:
```javascript
// components/ContactSection.js
const contactLinks = [
  { href: "mailto:your.email@example.com", ... },
  { href: "https://linkedin.com/in/yourprofile", ... },
  // Add your links
];
```

### Modify Colors

Edit the Tailwind configuration:
```javascript
// tailwind.config.js
colors: {
  primary: { /* Your primary color palette */ },
  secondary: { /* Your secondary color palette */ },
  accent: { /* Your accent color palette */ }
}
```

### Add Sections

1. Create a new component in `components/`
2. Import it in `pages/index.js`
3. Add it to the main layout

---

## 📊 Color System

### Primary (Blue) - Main Brand Color
- Inspires trust and professionalism
- Used for buttons, links, accents
- 50-900 shade range for flexibility

### Secondary (Slate) - Backgrounds
- Clean, neutral backgrounds
- Perfect for card backgrounds
- Less intrusive than pure white/black

### Accent (Green) - Success/Highlights
- Call attention to key information
- Proficiency indicators
- Interactive elements

---

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start              # Start production server

# Testing
npm test               # Run tests once
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report

# Linting
npm run lint           # Check for issues
```

---

## 📦 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15.1.2 | React framework |
| React | 19.0.0 | UI library |
| Tailwind CSS | 3.4.1 | Styling |
| React Icons | 5.0.1 | Icon library |
| Framer Motion | 10.16.16 | Animations |
| TypeScript | 5.3.3 | Type safety |
| Jest | 29.7.0 | Testing |

---

## 🎓 Design Principles

### 1. **Professional Appearance**
- Corporate color scheme
- Proper spacing and typography
- Clean, organized layouts
- No distracting animations

### 2. **User Experience**
- Clear navigation
- Logical content flow
- Easy to scan information
- Mobile-friendly

### 3. **Accessibility**
- WCAG 2.1 compliant
- Keyboard navigation
- Screen reader support
- High contrast in dark mode

### 4. **Performance**
- Fast load times
- Optimized images
- Minimal CSS
- Efficient JavaScript

---

## 🎯 Job Application Ready

This portfolio is specifically designed to impress employers:

✅ **Professional Look** - Corporate design, not flashy
✅ **Easy to Navigate** - Clear sections, logical flow
✅ **Shows Skills** - Organized technical expertise
✅ **Experience Highlighted** - Timeline format is easy to scan
✅ **Multiple CTAs** - Easy ways to contact you
✅ **Social Proof** - LinkedIn and GitHub links prominent
✅ **Mobile Friendly** - Works on all devices
✅ **Fast Load** - Optimized for performance
✅ **SEO Optimized** - Easy to find online
✅ **Dark Mode** - Respects user preferences

---

## 🔧 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Upload from AWS console
- **Docker**: Create a container
- **Traditional Server**: Run `npm build && npm start`

---

## 📈 Future Enhancements

Potential additions to consider:
- [ ] Blog section for technical articles
- [ ] Project showcase with detailed case studies
- [ ] Contact form with email notifications
- [ ] Testimonials section
- [ ] Resume/CV download
- [ ] Analytics integration
- [ ] Newsletter signup
- [ ] Search functionality

---

## ✅ Quality Checklist

Before submitting to job applications:

- [ ] All links work correctly
- [ ] Mobile responsive on all devices
- [ ] Dark mode toggle works smoothly
- [ ] No console errors
- [ ] Fast load times
- [ ] SEO meta tags filled
- [ ] Social media links correct
- [ ] Email address correct
- [ ] Professional photo included
- [ ] No spelling mistakes

---

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Dark Mode Not Working
Check that the dark mode class is applied:
```javascript
document.documentElement.classList.add('dark');
```

### Images Not Loading
Ensure images are in the `public/` folder:
```
public/
  ├── omakuva.jpg
  ├── code.png
  └── automation.png
```

---

## 📞 Support

For issues or questions:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Check Tailwind CSS docs: https://tailwindcss.com/docs
3. Review component code and comments

---

## 📄 License

This portfolio is free to use and modify for personal use.

---

**Happy job hunting! 🚀**

Your portfolio is now modern, professional, and ready to impress employers.
