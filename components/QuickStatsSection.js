import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function QuickStatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    { number: 3,  suffix: '+', label: 'Years professional\nexperience' },
    { number: 5,  suffix: '+', label: 'Industry platforms\nmastered' },
    { number: 4,  suffix: '',  label: 'Languages\nspoken' },
  ];

  useEffect(() => {
    if (!inView) return;

    const timers = stats.map((stat, i) => {
      const steps = 40;
      const delay = i * 150;
      let step = 0;

      return setTimeout(() => {
        const id = setInterval(() => {
          step++;
          setCounts(prev => {
            const next = [...prev];
            next[i] = step >= steps ? stat.number : Math.floor((step / steps) * stat.number);
            return next;
          });
          if (step >= steps) clearInterval(id);
        }, 1000 / steps);
      }, delay);
    });

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-8 border-t border-b border-cream-300 dark:border-navy-500">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Large Cormorant number */}
              <p className="font-cormorant font-light text-8xl leading-none text-cream-900 dark:text-cream-100 mb-3">
                {counts[i]}{stat.suffix}
              </p>
              {/* Thin terracotta rule */}
              <div className="w-8 h-px bg-primary-500 mb-3" />
              {/* Label */}
              <p className="text-xs font-medium uppercase tracking-widest text-cream-700 dark:text-navy-300 whitespace-pre-line leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
