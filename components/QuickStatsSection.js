import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function QuickStatsSection() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  const stats = [
    {
      icon: BriefcaseIcon,
      number: "3+",
      label: "Years Professional Experience",
      color: "primary"
    },
    {
      icon: SparklesIcon,
      number: "5+",
      label: "Industry Platforms Mastered",
      color: "blue"
    },
    {
      icon: GlobeAltIcon,
      number: "4",
      label: "Languages Spoken",
      color: "purple"
    }
  ];

  return (
    <section ref={statsRef} className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-700 via-accent-600 to-accent-700 dark:from-primary-800 dark:via-accent-700 dark:to-accent-800 ${statsInView ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-5xl font-extrabold text-white mb-2 tracking-tight">
                  {stat.number}
                </p>
                <p className="text-base text-white/80 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
