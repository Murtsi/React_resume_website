import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  const contactLinks = [
    {
      href: "mailto:antti.murtsi@gmail.com",
      icon: EnvelopeIcon,
      label: "Email",
      ariaLabel: "Send email to Antti",
      title: "antti.murtsi@gmail.com"
    },
    {
      href: "https://www.linkedin.com/in/antti-murtokangas-562725158/",
      icon: LinkIcon,
      label: "LinkedIn",
      ariaLabel: "Visit LinkedIn profile",
      title: "LinkedIn Profile"
    },
    {
      href: "https://github.com/Murtsi",
      icon: CodeBracketSquareIcon,
      label: "GitHub",
      ariaLabel: "Visit GitHub profile",
      title: "GitHub Profile"
    }
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 ${
        contactInView ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and challenges. Whether you have a question or just want to say hello, feel free to reach out.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300"
                aria-label={link.ariaLabel}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
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
          className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Send Me an Email
        </a>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          © 2026 Antti Murtokangas. All rights reserved.
        </p>
      </div>
    </section>
  );
}
