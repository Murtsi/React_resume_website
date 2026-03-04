import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, BriefcaseIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function ExperienceEducationSection() {
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
  const { ref: languageRef, inView: languageInView } = useInView({ triggerOnce: true });

  const workExperience = [
    { 
      title: "Network Specialist - Technical Support", 
      company: "Leading Fiber Optic Operator",
      year: "2025 - Present",
      description: [
        "Fiber optic network infrastructure design, deployment, and maintenance",
        "Utilizing advanced platforms: iMaster, Altiplano (Nokia OSS), Optopro Fiber, and Keycom",
        "Customer service and technical troubleshooting in fiber network issues",
        "Fault detection, analysis and rapid resolution"
      ]
    },
    { 
      title: "Production Supervisor", 
      company: "Olvi Oyj",
      year: "2023",
      description: [
        "Beverage production line supervision and automation system control",
        "Process automation management and troubleshooting",
        "Production equipment adjustment and optimization",
        "Quality control and team cooperation"
      ]
    },
    { 
      title: "Production Line Operator", 
      company: "Keitele Timber Oy",
      year: "Summer 2022",
      description: [
        "Automated production line control and monitoring",
        "PLC-controlled system adjustment and parameter optimization",
        "Quick analysis and resolution of fault situations",
        "Production efficiency monitoring and safety protocol compliance"
      ]
    },
    { 
      title: "Assembler", 
      company: "Tikli Group Oy",
      year: "Summer 2018, 2021",
      description: [
        "Smoke extraction system assembly and testing",
        "Quality assurance and fire protection installation expertise",
        "Technical documentation interpretation and compliance"
      ]
    },
    { 
      title: "IT Support", 
      company: "Alajärvi High School",
      year: "2017 - 2018",
      description: [
        "IT infrastructure maintenance and technical support",
        "Server management and Google Workspace administration",
        "Network environment maintenance and user support",
        "Digital content production and technical problem-solving"
      ]
    }
  ];

  const education = [
    { 
      degree: "Bachelor's Degree in Automation Engineering", 
      school: "Seinäjoki University of Applied Sciences",
      year: "2021 - Present",
      status: "In Progress"
    },
    { 
      degree: "Automation in Wind Power Sector", 
      school: "Professional Development Course",
      year: "2024",
      status: "Completed"
    },
    { 
      degree: "Leadership Training", 
      school: "Military Police Officer Programme",
      year: "2019-2020",
      status: "Completed"
    },
    { 
      degree: "Vocational Qualification in Business Information Technology", 
      school: "Järviseutu Vocational Institute",
      year: "2015-2018",
      status: "Completed"
    }
  ];

  const languages = [
    { flag: "🇬🇧", name: "English", level: "Fluent", proficiency: 95 },
    { flag: "🇫🇮", name: "Finnish", level: "Native", proficiency: 100 },
    { flag: "🇩🇪", name: "German", level: "Intermediate", proficiency: 60 },
    { flag: "🇪🇪", name: "Estonian", level: "Intermediate", proficiency: 55 }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Professional experience and educational background shaping my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div
            ref={workRef}
            className={`space-y-6 ${workInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                <BriefcaseIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-transparent dark:from-primary-400 dark:via-primary-600 hidden md:block" />

              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="group relative pl-0 md:pl-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-0 top-6 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-slate-900 shadow-sm z-10 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                          {job.title}
                        </p>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mt-1">
                          {job.company}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {job.description.map((item, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex items-start">
                              <span className="text-primary-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="text-xs font-bold text-white bg-primary-600 dark:bg-primary-500 px-3 py-1 rounded-full whitespace-nowrap">
                        {job.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div
            ref={educationRef}
            className={`space-y-6 ${educationInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-blue-300 to-transparent dark:from-blue-400 dark:via-blue-600 hidden md:block" />

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative pl-0 md:pl-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-0 top-6 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-slate-900 shadow-sm z-10 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">
                          {edu.school}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full ${edu.status === 'In Progress' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700' : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'}`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-white bg-blue-600 dark:bg-blue-500 px-3 py-1 rounded-full whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div
          ref={languageRef}
          className={`mt-16 ${languageInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white shadow-lg">
              <GlobeAltIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Language Skills
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{lang.flag}</span>
                <p className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                  {lang.name}
                </p>
                <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mt-1 mb-3">
                  {lang.level}
                </p>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${lang.proficiency}%` }}
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
