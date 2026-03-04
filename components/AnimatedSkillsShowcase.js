import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function AnimatedSkillsShowcase() {
  const { ref: containerRef, inView: isInView } = useInView({ triggerOnce: true });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const uiuxSkills = [
    {
      title: 'Responsive Design',
      icon: '📱',
      description: 'Mobile-first approach ensuring perfect experience on all devices',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Smooth Animations',
      icon: '🎬',
      description: 'Engaging transitions and micro-interactions that delight users',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Dark Mode',
      icon: '🌙',
      description: 'Eye-friendly dark theme with seamless light/dark switching',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Accessibility',
      icon: '♿',
      description: 'WCAG compliant design ensuring inclusive user experience',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Color Theory',
      icon: '🎨',
      description: 'Professional color palettes that enhance visual hierarchy',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Typography',
      icon: '📝',
      description: 'Thoughtful font selection and spacing for readability',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div
          ref={containerRef}
          className={`mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full">
              UI/UX Design Excellence
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Design Skills That Impress
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Combining technical expertise with thoughtful design principles to create interfaces that are both beautiful and functional
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uiuxSkills.map((skill, index) => (
            <div
              key={index}
              ref={containerRef}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border-2 border-gray-200 dark:border-slate-700 overflow-hidden cursor-pointer transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${hoveredIndex === index ? 'scale-105 shadow-2xl' : 'shadow-lg'}`}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Animated gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Floating animation on hover */}
              <div className="relative z-10">
                <div
                  className={`text-5xl mb-6 inline-block transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-125 animate-bounce' : ''
                  }`}
                >
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Animated skill indicator */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex-1 h-1 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700 ${
                        hoveredIndex === index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {hoveredIndex === index ? '100%' : ''}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-200 to-transparent dark:from-primary-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -mr-10 -mt-10" />
            </div>
          ))}
        </div>

        {/* Features Summary */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/30 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700/50 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Performance First</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Optimized animations and transitions for smooth, 60fps interactions</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-900/30 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700/50 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">User-Centric</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Every design decision made with the end user in mind</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-warm-50 to-warm-100/50 dark:from-warm-900/30 dark:to-warm-800/20 border border-warm-200 dark:border-warm-700/50 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Modern Tech</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">Built with latest frameworks and best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
