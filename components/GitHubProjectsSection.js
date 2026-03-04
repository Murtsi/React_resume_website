import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  StarIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/outline';

export default function GitHubProjectsSection() {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const projects = [
    {
      title: "API Scanner",
      description: "Advanced API security scanning and reconnaissance tool. Discovers API endpoints, analyzes security vulnerabilities, and maps API structures for security testing and vulnerability assessment.",
      technologies: ["Python", "API Testing", "Security", "Automation"],
      link: "https://github.com/Murtsi/API-Scanner",
      color: "from-accent-500 to-accent-600",
      icon: "🔍"
    },
    {
      title: "Kidehiiri (Mouse Game)",
      description: "Interactive gaming application with engaging gameplay mechanics. Features responsive design, dynamic user interactions, and modern development practices. Demonstrates full-stack development capabilities.",
      technologies: ["JavaScript", "React", "Game Development", "UI/UX"],
      link: "https://github.com/Murtsi/Kidehiiri-public",
      color: "from-warm-500 to-warm-600",
      icon: "🎮"
    },
    {
      title: "React Resume Website",
      description: "Modern, responsive portfolio website built with Next.js and React. Features dark mode toggle, smooth animations, professional design, and optimized performance. Showcases experience, skills, and projects with interactive elements.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/Murtsi",
      color: "from-primary-500 to-primary-600",
      icon: "🌐"
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary-50 to-white dark:from-slate-900 dark:via-primary-950/20 dark:to-slate-900 ${
        sectionInView ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <CodeBracketIcon className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing real-world projects demonstrating technical expertise, problem-solving, and full-stack development capabilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full"
            >
              <div className="h-full rounded-lg overflow-hidden bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 hover:shadow-lg hover:scale-105 transform cursor-pointer">
                {/* Project Header with Color */}
                <div className={`h-32 bg-gradient-to-br ${project.color} p-6 flex items-end justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent 50%)'}} />
                  <h3 className="text-2xl font-bold text-white relative z-10">{project.title}</h3>
                  <span className="text-3xl relative z-10 group-hover:scale-125 transition-transform">{project.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="pt-2 space-y-3">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-slate-700 dark:to-slate-600 text-gray-700 dark:text-gray-200 rounded-full text-xs font-semibold border border-gray-200 dark:border-slate-600 group-hover:border-primary-400 dark:group-hover:border-primary-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-semibold group-hover:gap-3 transition-all">
                      View on GitHub
                      <CodeBracketSquareIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-accent-50 to-warm-50 dark:from-accent-900/20 dark:to-warm-900/20 rounded-lg border border-accent-200 dark:border-accent-800">
            <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold">
              Explore more projects on GitHub
            </p>
            <a
              href="https://github.com/Murtsi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <CodeBracketSquareIcon className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
