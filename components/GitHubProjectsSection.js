import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRightIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    index: '01',
    title: 'API Scanner',
    year: '2024',
    description: 'Client-side web security auditing tool. Detects 49+ secret patterns (AWS keys, JWTs, tokens), analyzes headers, and performs active security testing including SQL injection, XSS, and path traversal — all without external data transmission.',
    technologies: ['React', 'TypeScript', 'Vite', 'Security'],
    link: 'https://github.com/Murtsi/API-Scanner',
    liveUrl: 'https://api-scanner-eta.vercel.app/',
  },
  {
    index: '02',
    title: 'Kidehiiri — Automated Ticket Buyer',
    year: '2024',
    description: 'Intelligent ticket acquisition for Kide.app events. Monitors availability in real-time, auto-reserves with fallback modes. ML-powered event scoring using heuristics and Random Forest classification (BUY / MAYBE / SKIP).',
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'ML'],
    link: 'https://github.com/Murtsi/Kidehiiri-public',
    liveUrl: 'https://kidehiiri.vercel.app/',
  },
  {
    index: '03',
    title: 'React Resume Website',
    year: '2025',
    description: 'This portfolio — built with Next.js, React, and Tailwind CSS. Dark mode, smooth scroll, animated stats, and a Nordic minimalist redesign with canvas particle background. Deployed on Vercel.',
    technologies: ['Next.js', 'React', 'Tailwind', 'JavaScript'],
    link: 'https://github.com/Murtsi',
    liveUrl: 'https://www.anttimurtokangas.com/',
  },
];

/** Build a Microlink screenshot URL (free, cached, no API key needed). */
function screenshotUrl(siteUrl) {
  const params = new URLSearchParams({
    url: siteUrl,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    colorScheme: 'dark',
    'viewport.width': '1280',
    'viewport.height': '800',
  });
  return `https://api.microlink.io/?${params}`;
}

function ProjectPreview({ project, show }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className={`
        hidden lg:block lg:col-span-3 relative overflow-hidden rounded-sm
        border border-cream-300 dark:border-navy-500
        transition-all duration-500 ease-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}
      style={{ minHeight: '120px' }}
    >

      {imgFailed ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-full min-h-[120px] bg-cream-100 dark:bg-navy-700 text-xs text-cream-500 dark:text-navy-300 gap-1 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          <GlobeAltIcon className="w-4 h-4" />
          View Live Site
        </a>
      ) : (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block group/img">
          <img
            src={screenshotUrl(project.liveUrl)}
            alt={`Live preview of ${project.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
            style={{ display: 'block', aspectRatio: '16/9' }}
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
          {/* "Live" badge */}
          <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium uppercase tracking-wider bg-primary-500/90 text-white rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Live
          </span>
        </a>
      )}
    </div>
  );
}

export default function GitHubProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="projects"
      className="py-28 px-6 lg:px-8 bg-cream-200 dark:bg-navy-800 relative overflow-visible"
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
            <div
              key={i}
              className={`group border-t border-cream-400 dark:border-navy-500 py-10 transition-opacity duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">

                {/* Index + year */}
                <div className="lg:col-span-1 flex lg:flex-col gap-4 lg:gap-2">
                  <span className="font-cormorant font-light text-2xl text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {project.index}
                  </span>
                  <span className="text-xs font-medium text-cream-500 dark:text-navy-300 self-center lg:self-start">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-2">
                  <h3 className="font-cormorant font-light text-2xl text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300 flex items-start gap-2 flex-wrap">
                    {project.title}
                    <ArrowUpRightIcon className="w-4 h-4 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </h3>

                  {/* Live site link (below title) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GlobeAltIcon className="w-3.5 h-3.5" />
                      Live site
                    </a>
                  )}
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
                        className="tag-shimmer text-xs font-medium uppercase tracking-wider text-cream-600 dark:text-navy-300 border border-cream-400 dark:border-navy-500 px-2.5 py-1 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live preview screenshot — only for projects with a liveUrl */}
                {project.liveUrl && (
                  <ProjectPreview
                    project={project}
                    show={hoveredIndex === i}
                  />
                )}
              </div>
            </div>
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
