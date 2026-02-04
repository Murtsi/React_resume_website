import Image from "next/image";
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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                {t.hero.title}
              </h1>
              <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                {t.hero.subtitle}
              </p>
            </div>

            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-xs font-semibold">
                {t.hero.badge1}
              </span>
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-xs font-semibold">
                {t.hero.badge2}
              </span>
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-xs font-semibold">
                {t.hero.badge3}
              </span>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Core tools:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "iMaster",
                  "Altiplano",
                  "Optopro Fiber",
                  "Keycom",
                  "Codesys",
                  "Eplan",
                  "Cognex",
                  "Visual Components",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200 rounded-full text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                {t.hero.cta1}
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
                    className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white hover:dark:bg-primary-600 transition-all duration-200 flex items-center justify-center"
                    aria-label={link.ariaLabel}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-primary-100 dark:border-primary-900">
              <Image
                src="/omakuva.jpg"
                alt="Antti Murtokangas - Professional Profile Picture"
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
