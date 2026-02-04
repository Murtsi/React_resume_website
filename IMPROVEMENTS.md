# Antti Murtokangas - Resume Website

A modern, responsive React portfolio website built with **Next.js**, **Tailwind CSS**, and enhanced with animations, accessibility features, and testing capabilities.

## 🚀 Live Development

Your website is currently running live! Access it at:
- **Local URL**: [http://localhost:3000](http://localhost:3000)

## ✨ Recent Improvements

### Code Structure
- **Refactored Components**: Split the monolithic `index.js` into 6 reusable components:
  - `Navigation.js` - Navigation bar with dark mode toggle
  - `HeroSection.js` - Landing hero section with social links
  - `OffersSection.js` - Skills and expertise showcase
  - `SkillCard.js` - Reusable skill card component
  - `ExperienceEducationSection.js` - Work experience, education, and languages
  - `ContactSection.js` - Contact information and links

### Accessibility Enhancements
- ✓ Added proper `aria-label` attributes to all interactive elements
- ✓ Improved focus visible states with proper outline styling
- ✓ Better semantic HTML structure with proper heading hierarchy
- ✓ Keyboard navigation support for all buttons and links
- ✓ Reduced motion support for users who prefer reduced animations

### Performance Optimizations
- ✓ Added `will-change` CSS properties to frequently animated elements
- ✓ Optimized image loading with `priority` flag on hero image
- ✓ Smooth scrolling behavior
- ✓ Lazy loading of intersection-observed sections

### Enhanced Animations
- ✓ New `slideInUp` animation for content reveal
- ✓ New `slideInDown` animation for top-down content
- ✓ New `pulse-glow` animation for emphasis
- ✓ Prefixes-reduced-motion support for accessibility

### Testing Setup
- ✓ Jest testing framework configured
- ✓ React Testing Library integration
- ✓ Sample tests for `Navigation` and `SkillCard` components
- ✓ Test coverage configuration

## 📋 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Production Build
```bash
npm run build
npm start
```
Creates an optimized production build and starts the server

### Testing
```bash
npm test              # Run tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Linting
```bash
npm run lint
```

## 🛠️ Project Structure

```
├── components/           # Reusable React components
│   ├── Navigation.js
│   ├── HeroSection.js
│   ├── OffersSection.js
│   ├── SkillCard.js
│   ├── ExperienceEducationSection.js
│   └── ContactSection.js
├── __tests__/           # Jest test files
│   ├── Navigation.test.js
│   └── SkillCard.test.js
├── pages/               # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── public/              # Static assets
├── styles/              # Global CSS with Tailwind
├── jest.config.json     # Jest configuration
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## 📦 Tech Stack

- **Framework**: Next.js 14.2.4
- **Styling**: Tailwind CSS 3.4.4
- **Icons**: React Icons 4.4.0
- **Animations**: React Intersection Observer 9.10.3
- **Testing**: Jest 29.7.0 + React Testing Library 13.4.0
- **Analytics**: Vercel Analytics & Speed Insights
- **Database**: Firebase 9.10.0

## 🎨 Features

### Dark Mode
Click the moon icon in the navigation to toggle between light and dark themes

### Smooth Scrolling
All navigation links smoothly scroll to their respective sections

### Responsive Design
- Mobile-first approach
- Optimized for mobile, tablet, and desktop
- Breakpoints: sm, md, lg

### Animations
- Fade-in on page load
- Intersection observer animations for sections
- Hover effects on interactive elements
- Smooth transitions throughout

### Accessibility
- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Reduced motion support

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation (if you need to reinstall)
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio

## 📝 Environment Variables

No environment variables are required for local development. The project uses optional Firebase configuration that can be added if needed.

## 🧪 Testing

Run the test suite to verify component functionality:

```bash
npm test
```

Add more tests by creating files in the `__tests__/` directory following the naming convention: `ComponentName.test.js`

## 🔧 Customization

### Update Your Information
Edit [pages/index.js](pages/index.js) or individual component files to update:
- Your name and title
- Contact information
- Social media links
- Skills and experience

### Modify Colors
Edit [styles/globals.css](styles/globals.css) or [tailwind.config.js](tailwind.config.js) to change the color scheme

### Add/Remove Sections
Create new components in `components/` and import them in [pages/index.js](pages/index.js)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
Next.js can be deployed to:
- Netlify
- GitHub Pages
- AWS Amplify
- Docker containers
- Traditional Node.js servers

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Testing Library](https://testing-library.com/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)

## 📄 License

This project is open source and available for personal use.

## 💡 Tips for Success

1. **Keep content updated**: Regularly update your experience and projects
2. **Test responsiveness**: Check your site on various devices
3. **Run tests before deployment**: Use `npm test` to ensure everything works
4. **Optimize images**: Keep image files small for faster loading
5. **Monitor performance**: Use Vercel's built-in analytics

---

**Happy coding! 🎉** Your portfolio is now fully enhanced and ready for the world to see!
