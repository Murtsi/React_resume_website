import { useInView } from 'react-intersection-observer';

const workExperience = [
  {
    title: 'Network Specialist — Technical Support',
    company: 'Leading Fiber Optic Operator',
    year: '2025 – Present',
    description: 'Fiber optic network infrastructure support using iMaster, Altiplano (Nokia OSS), Optopro Fiber, and Keycom. Fault detection, analysis, and customer technical resolution.',
  },
  {
    title: 'Production Operator',
    company: 'Olvi Oyj',
    year: '2023',
    description: 'Beverage production line operation, monitoring automation systems, process parameter control, and troubleshooting routine production issues.',
  },
  {
    title: 'Production Line Operator',
    company: 'Keitele Timber Oy',
    year: 'Summer 2022',
    description: 'PLC-controlled automated line operation, parameter optimization, and fault resolution in high-throughput production environment.',
  },
  {
    title: 'Assembler',
    company: 'Tikli Group Oy',
    year: '2018, 2021',
    description: 'Smoke extraction system assembly, quality assurance, and fire protection installation.',
  },
  {
    title: 'IT Support',
    company: 'Alajärvi High School',
    year: '2017 – 2018',
    description: 'IT infrastructure maintenance, server management, Google Workspace administration, and user support.',
  },
];

const education = [
  {
    degree: "Bachelor's in Automation Engineering",
    school: 'SeAMK — Seinäjoki University of Applied Sciences',
    year: 'Ongoing',
    status: 'In Progress',
  },
  {
    degree: 'Automation in Wind Power Sector',
    school: 'Professional Development Course',
    year: '2024',
    status: 'Completed',
  },
  {
    degree: 'Leadership Training — Military Police Officer',
    school: 'Finnish Defence Forces',
    year: '2019–2020',
    status: 'Completed',
  },
  {
    degree: 'Vocational Qualification in Business IT',
    school: 'Järviseutu Vocational Institute',
    year: '2015–2018',
    status: 'Completed',
  },
];

const languages = [
  { name: 'Finnish',  level: 'Native',       pct: 100 },
  { name: 'English',  level: 'Fluent',        pct: 95  },
  { name: 'German',   level: 'Intermediate',  pct: 60  },
  { name: 'Estonian', level: 'Intermediate',  pct: 55  },
];

function TimelineRow({ title, subtitle, year, note, status, delay, inView }) {
  return (
    <div
      className={`border-t border-cream-300 dark:border-navy-500 py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 transition-opacity duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="sm:col-span-8">
        <p className="text-base font-medium text-cream-900 dark:text-cream-100">{title}</p>
        <p className="text-xs font-medium uppercase tracking-wider text-primary-500 dark:text-primary-400 mt-1">
          {subtitle}
        </p>
        {note && (
          <p className="text-sm text-cream-600 dark:text-navy-300 mt-2 leading-relaxed">{note}</p>
        )}
      </div>
      <div className="sm:col-span-4 sm:text-right">
        <span className="text-xs font-medium text-cream-500 dark:text-navy-300">{year}</span>
        {status && (
          <span className={`block mt-1 text-xs font-medium uppercase tracking-wider ${
            status === 'In Progress'
              ? 'text-primary-500 dark:text-primary-400'
              : 'text-cream-500 dark:text-navy-400'
          }`}>
            {status}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ExperienceEducationSection() {
  const { ref: workRef,  inView: workInView  } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: eduRef,   inView: eduInView   } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { ref: langRef,  inView: langInView  } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-8 relative overflow-hidden">
      <span className="section-number absolute -left-4 top-16 select-none pointer-events-none hidden lg:block">
        04
      </span>

      <div className="max-w-5xl mx-auto space-y-24">

        {/* Work History */}
        <div ref={workRef}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Experience
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100 mb-12">
            Work History
          </h2>
          <div>
            {workExperience.map((job, i) => (
              <TimelineRow
                key={i}
                title={job.title}
                subtitle={job.company}
                note={job.description}
                year={job.year}
                delay={`${i * 60}ms`}
                inView={workInView}
              />
            ))}
            <div className="border-t border-cream-300 dark:border-navy-500" />
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Education
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100 mb-12">
            Academic Background
          </h2>
          <div>
            {education.map((edu, i) => (
              <TimelineRow
                key={i}
                title={edu.degree}
                subtitle={edu.school}
                year={edu.year}
                status={edu.status}
                delay={`${i * 60}ms`}
                inView={eduInView}
              />
            ))}
            <div className="border-t border-cream-300 dark:border-navy-500" />
          </div>
        </div>

        {/* Languages */}
        <div ref={langRef}>
          <p className="text-xs font-medium uppercase tracking-widest text-primary-500 dark:text-primary-400 mb-4">
            Languages
          </p>
          <h2 className="font-cormorant font-light text-5xl text-cream-900 dark:text-cream-100 mb-12">
            Communication
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {languages.map((lang, i) => (
              <div
                key={i}
                className={`transition-opacity duration-700 ${langInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-cormorant font-light text-3xl text-cream-900 dark:text-cream-100 mb-1">
                  {lang.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-cream-600 dark:text-navy-300 mb-3">
                  {lang.level}
                </p>
                {/* Thin animated progress line */}
                <div className="w-full h-px bg-cream-300 dark:bg-navy-500 relative">
                  <div
                    className="absolute left-0 top-0 h-px bg-primary-500 dark:bg-primary-400 transition-all duration-1000"
                    style={{ width: langInView ? `${lang.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
