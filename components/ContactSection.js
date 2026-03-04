import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

export default function ContactSection({ t }) {
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  const contactLinks = [
    {
      href: "mailto:antti.murtsi@gmail.com",
      icon: EnvelopeIcon,
      label: t.contact.email,
      ariaLabel: "Send email to Antti",
      title: "antti.murtsi@gmail.com"
    },
    {
      href: "https://www.linkedin.com/in/antti-murtokangas-562725158/",
      icon: LinkIcon,
      label: t.contact.linkedin,
      ariaLabel: "Visit LinkedIn profile",
      title: "LinkedIn Profile"
    },
    {
      href: "https://github.com/Murtsi",
      icon: CodeBracketSquareIcon,
      label: t.contact.github,
      ariaLabel: "Visit GitHub profile",
      title: "GitHub Profile"
    }
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent-50 via-white to-warm-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 ${
        contactInView ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t.contact.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          {t.contact.description}
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const colors = [
              { bg: 'bg-accent-50', darkBg: 'dark:bg-accent-900/20', icon: 'bg-accent-100 dark:bg-accent-900/40', iconColor: 'text-accent-600 dark:text-accent-400', border: 'border-accent-200 dark:border-accent-700 hover:border-accent-500 dark:hover:border-accent-500' },
              { bg: 'bg-warm-50', darkBg: 'dark:bg-warm-900/20', icon: 'bg-warm-100 dark:bg-warm-900/40', iconColor: 'text-warm-600 dark:text-warm-400', border: 'border-warm-200 dark:border-warm-700 hover:border-warm-500 dark:hover:border-warm-500' },
              { bg: 'bg-primary-50', darkBg: 'dark:bg-primary-900/20', icon: 'bg-primary-100 dark:bg-primary-900/40', iconColor: 'text-primary-600 dark:text-primary-400', border: 'border-primary-200 dark:border-primary-700 hover:border-primary-500 dark:hover:border-primary-500' },
            ];
            const color = colors[index % colors.length];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-lg bg-white dark:bg-slate-800 border ${color.border} hover:shadow-lg transition-all duration-300`}
                aria-label={link.ariaLabel}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-lg ${color.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${color.iconColor}`} />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    {link.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {link.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:antti.murtsi@gmail.com"
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {t.contact.button}
        </a>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          © 2026 Antti Murtokangas. All rights reserved.
        </p>
      </div>
    </section>
  );
}
