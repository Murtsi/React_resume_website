import { useInView } from 'react-intersection-observer';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function ContactSection({ t }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const links = [
    { label: 'Email',    href: 'mailto:antti.murtsi@gmail.com',                            display: 'antti.murtsi@gmail.com',           ariaLabel: 'Send email to Antti' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antti-murtokangas-562725158/', display: 'linkedin.com/in/antti-murtokangas', ariaLabel: 'Visit LinkedIn profile' },
    { label: 'GitHub',   href: 'https://github.com/Murtsi',                                display: 'github.com/Murtsi',                ariaLabel: 'Visit GitHub profile' },
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

          {/* Contact links — ruled list */}
          <div className="space-y-0 max-w-xl">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-cream-400 dark:border-navy-500 py-5 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-200"
                aria-label={link.ariaLabel}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-cream-500 dark:text-navy-300 mb-1">
                    {link.label}
                  </p>
                  <p className="text-base text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {link.display}
                  </p>
                </div>
                <ArrowUpRightIcon className="w-4 h-4 text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors flex-shrink-0" />
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
