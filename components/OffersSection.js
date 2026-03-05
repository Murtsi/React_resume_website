import { useInView } from 'react-intersection-observer';

const expertise = [
  {
    number: '01',
    title: 'Fiber Network Operations',
    description: "Technical support for fiber optic infrastructure. Daily work with iMaster, Altiplano (Nokia OSS), Optopro Fiber, and Keycom. Network troubleshooting, fault detection, and customer support in live telecom environments.",
    tags: ['iMaster', 'Altiplano', 'Optopro Fiber', 'Keycom'],
  },
  {
    number: '02',
    title: 'Industrial Automation',
    description: "Pursuing Bachelor's in Automation Engineering at SeAMK. PLC programming with Codesys, SCADA systems, electrical design with Eplan, machine vision with Cognex, production simulation with Visual Components.",
    tags: ['Codesys', 'Eplan', 'Cognex', 'Visual Components', 'SCADA'],
  },
  {
    number: '03',
    title: 'Web Development',
    description: "Self-taught development using React, Next.js, and Tailwind CSS. Python for automation scripts. Building modern, responsive applications — this portfolio included.",
    tags: ['React', 'Next.js', 'Tailwind', 'Python', 'JavaScript'],
  },
  {
    number: '04',
    title: 'Leadership & Communication',
    description: "Production supervision at Olvi managing quality and teams. IT support with customer-facing experience across diverse environments. 4 languages: Finnish (native), English (fluent), German and Estonian (intermediate).",
    tags: ['Team Leadership', 'Technical Support', 'Multilingual'],
  },
];

export default function OffersSection({ t }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      {/* Section watermark */}
      <span className="section-number absolute -left-4 top-16 select-none pointer-events-none hidden lg:block">
        02
      </span>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16" ref={ref}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Expertise
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100">
            What I Bring
          </h2>
        </div>

        {/* Expertise list — horizontal rule separated rows */}
        <div className="space-y-0">
          {expertise.map((item, i) => (
            <div
              key={i}
              className={`group border-t border-cream-300 dark:border-navy-500 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 transition-opacity duration-700 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="font-cormorant font-light text-2xl text-cream-400 dark:text-navy-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3">
                <h3 className="font-cormorant font-light text-2xl text-cream-900 dark:text-cream-100 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-sm text-cream-700 dark:text-navy-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="lg:col-span-3 flex flex-wrap gap-2 content-start">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium uppercase tracking-wider text-cream-600 dark:text-navy-300 border border-cream-300 dark:border-navy-500 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {/* Closing rule */}
          <div className="border-t border-cream-300 dark:border-navy-500" />
        </div>
      </div>
    </section>
  );
}
