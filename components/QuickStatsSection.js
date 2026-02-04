import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function QuickStatsSection() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });

  const stats = [
    {
      icon: BriefcaseIcon,
      number: "2+",
      label: "Years in Fiber Optics",
      color: "primary"
    },
    {
      icon: SparklesIcon,
      number: "100%",
      label: "Safety & Quality Focus",
      color: "blue"
    },
    {
      icon: GlobeAltIcon,
      number: "4",
      label: "Languages",
      color: "purple"
    }
  ];

  return (
    <section ref={statsRef} className={`py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 ${statsInView ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              primary: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400",
              blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
              purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
            };

            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-xl ${colorClasses[stat.color]} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
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
