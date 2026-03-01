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
      title: "React Resume Website",
      description: "Modern, responsive portfolio website built with Next.js and React. Features dark mode toggle, smooth animations, and professional layout showcasing experience, skills, and projects.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/Murtsi",
      color: "from-blue-500 to-blue-600",
      icon: "🌐"
    },
    {
      title: "Automation Engineering Projects",
      description: "Collection of PLC programming projects and automation engineering coursework. Includes SCADA systems, industrial automation implementations, and machine vision applications using Codesys and other industry tools.",
      technologies: ["Codesys", "PLC", "SCADA", "Automation"],
      link: "https://github.com/Murtsi",
      color: "from-purple-500 to-purple-600",
      icon: "⚙️"
    },
    {
      title: "Web Development Projects",
      description: "Personal coding projects demonstrating web development proficiency. Built with modern technologies including React, Next.js, and Tailwind CSS. Includes responsive design and interactive components.",
      technologies: ["JavaScript", "React", "Node.js", "Python"],
      link: "https://github.com/Murtsi",
      color: "from-emerald-500 to-emerald-600",
      icon: "💻"
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
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <CodeBracketIcon className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing selected projects that demonstrate technical expertise and problem-solving abilities across automation engineering and web development.
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
              <div className="h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform cursor-pointer">
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
                    <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all">
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
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl border-2 border-primary-200 dark:border-primary-800">
            <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold">
              Explore more projects on GitHub
            </p>
            <a
              href="https://github.com/Murtsi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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
