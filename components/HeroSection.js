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

          {/* Vertical divider */}
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
