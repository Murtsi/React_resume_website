import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';

export default function HeroSection({ t }) {
  const socialLinks = [
    {
      href: "mailto:antti.murtsi@gmail.com",
      icon: EnvelopeIcon,
      label: "Email",
      ariaLabel: "Send email to Antti"
    },
    {
      href: "https://www.linkedin.com/in/antti-murtokangas-562725158/",
      icon: LinkIcon,
      label: "LinkedIn",
      ariaLabel: "Visit LinkedIn profile"
    },
    {
      href: "https://github.com/Murtsi",
      icon: CodeBracketSquareIcon,
      label: "GitHub",
      ariaLabel: "Visit GitHub profile"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-3xl">
            {t.hero.description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-semibold border border-accent-200 dark:border-accent-800">
              {t.hero.badge1}
            </span>
            <span className="inline-block px-4 py-2 bg-warm-100 dark:bg-warm-900/30 text-warm-700 dark:text-warm-300 rounded-lg text-sm font-semibold border border-warm-200 dark:border-warm-800">
              {t.hero.badge2}
            </span>
            <span className="inline-block px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-semibold border border-accent-200 dark:border-accent-800">
              {t.hero.badge3}
            </span>
          </div>

          {/* Core Tools */}
          <div className="pt-4">
            <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4 uppercase tracking-wide">
              ✨ Tech Stack & Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "iMaster",
                "Altiplano",
                "Optopro Fiber",
                "Keycom",
                "Codesys",
                "Eplan",
                "Cognex",
                "Visual Components",
              ].map((tool, idx) => (
                <span
                  key={tool}
                  className={`inline-block px-4 py-2 text-sm font-medium rounded-lg border transition-all hover:shadow-md ${
                    idx % 2 === 0
                      ? 'bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 border-accent-200 dark:border-accent-700 hover:bg-accent-100 dark:hover:bg-accent-900/30'
                      : 'bg-warm-50 dark:bg-warm-900/20 text-warm-700 dark:text-warm-300 border-warm-200 dark:border-warm-700 hover:bg-warm-100 dark:hover:bg-warm-900/30'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              Get In Touch →
            </a>
            <a
              href="/CV-Antti-Murtokangas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700 font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg"
            >
              <span className="text-xl">📄</span>
              Download CV (Finnish)
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110"
                  aria-label={link.ariaLabel}
                  title={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
