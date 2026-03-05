import { useInView } from 'react-intersection-observer';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    index: '01',
    title: 'API Scanner',
    year: '2024',
    description: 'Client-side web security auditing tool. Detects 49+ secret patterns (AWS keys, JWTs, tokens), analyzes headers, and performs active security testing including SQL injection, XSS, and path traversal — all without external data transmission.',
    technologies: ['React', 'TypeScript', 'Vite', 'Security'],
    link: 'https://github.com/Murtsi/API-Scanner',
  },
  {
    index: '02',
    title: 'Kidehiiri — Automated Ticket Buyer',
    year: '2024',
    description: 'Intelligent ticket acquisition for Kide.app events. Monitors availability in real-time, auto-reserves with fallback modes. ML-powered event scoring using heuristics and Random Forest classification (BUY / MAYBE / SKIP).',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'ML'],
    link: 'https://github.com/Murtsi/Kidehiiri-public',
  },
  {
    index: '03',
    title: 'React Resume Website',
    year: '2025',
    description: 'This portfolio — built with Next.js, React, and Tailwind CSS. Dark mode, smooth scroll, animated stats, and a Nordic minimalist redesign. Deployed on Vercel.',
    technologies: ['Next.js', 'React', 'Tailwind', 'JavaScript'],
    link: 'https://github.com/Murtsi',
  },
];

export default function GitHubProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="projects"
      className="py-28 px-6 lg:px-8 bg-cream-200 dark:bg-navy-800 relative overflow-hidden"
    >
      {/* Watermark */}
      <span className="section-number absolute right-6 top-16 select-none pointer-events-none hidden lg:block">
        03
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Selected Work
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100">
            Projects
          </h2>
        </div>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block border-t border-cream-400 dark:border-navy-500 py-10 transition-opacity duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12">
                {/* Index + year */}
                <div className="lg:col-span-2 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="font-cormorant font-light text-2xl text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {project.index}
                  </span>
                  <span className="text-xs font-medium text-cream-500 dark:text-navy-300 self-center lg:self-start">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-cormorant font-light text-2xl text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300 flex items-start gap-2">
                    {project.title}
                    <ArrowUpRightIcon className="w-4 h-4 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </h3>
                </div>

                {/* Description + tags */}
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-cream-700 dark:text-navy-200 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium uppercase tracking-wider text-cream-600 dark:text-navy-300 border border-cream-400 dark:border-navy-500 px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
          <div className="border-t border-cream-400 dark:border-navy-500" />
        </div>

        {/* GitHub link */}
        <div className="mt-12">
          <a
            href="https://github.com/Murtsi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-cream-700 dark:text-navy-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors border-b border-cream-400 dark:border-navy-400 pb-0.5"
          >
            All Projects on GitHub
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
