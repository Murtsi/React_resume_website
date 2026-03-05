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

          {/* Logo — terracotta monogram */}
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
