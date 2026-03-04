import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon, SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function QuickStatsSection() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const [displayNumbers, setDisplayNumbers] = useState({ 0: "0", 1: "0", 2: "0" });

  const stats = [
    {
      icon: BriefcaseIcon,
      number: 3,
      suffix: "+",
      label: "Years Professional Experience",
      color: "primary"
    },
    {
      icon: SparklesIcon,
      number: 5,
      suffix: "+",
      label: "Industry Platforms Mastered",
      color: "blue"
    },
    {
      icon: GlobeAltIcon,
      number: 4,
      suffix: "",
      label: "Languages Spoken",
      color: "purple"
    }
  ];

  // Animated counter effect
  useEffect(() => {
    if (!statsInView) return;

    const durations = [1200, 1400, 1200];
    const intervals = durations.map((duration, idx) => {
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = stats[idx].number / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setDisplayNumbers(prev => ({
            ...prev,
            [idx]: stats[idx].number
          }));
          clearInterval(intervals[idx]);
        } else {
          setDisplayNumbers(prev => ({
            ...prev,
            [idx]: Math.floor(current)
          }));
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [statsInView]);

  return (
    <section ref={statsRef} className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-700 via-accent-600 to-accent-700 dark:from-primary-800 dark:via-accent-700 dark:to-accent-800 ${statsInView ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse">
                  <Icon className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
                </div>
                <p className={`text-5xl font-extrabold text-white mb-2 tracking-tight transition-all duration-300 ${statsInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                  {displayNumbers[index]}{stat.suffix}
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
