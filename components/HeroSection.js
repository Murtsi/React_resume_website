import Image from "next/image";
import {
  EnvelopeIcon,
  LinkIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';

export default function HeroSection() {
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
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                Antti Murtokangas
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
                Automation Engineering Student & Full-Stack Developer
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about building robust automation systems and modern web applications. With expertise in both industrial automation and React web development, I bring technical excellence to every project.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium">
                React.js
              </span>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium">
                Automation Engineering
              </span>
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium">
                Python
              </span>
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
                Get In Touch
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
              >
                View My Work
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
