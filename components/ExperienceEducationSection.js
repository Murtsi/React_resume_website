import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, BriefcaseIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function ExperienceEducationSection() {
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
  const { ref: languageRef, inView: languageInView } = useInView({ triggerOnce: true });

  const workExperience = [
    { 
      title: "Fiber Optic Network Technician", 
      company: "Leading Fiber Optic Company",
      year: "2025 - Present",
      description: "Design, deployment, and maintenance of fiber optic network infrastructure. Utilizing advanced platforms including iMaster for comprehensive network monitoring, Altiplano (Nokia OSS) for network automation and orchestration, Optopro Fiber for project management and documentation, and Keycom for telecom network management and fault detection."
    },
    { 
      title: "Production Supervisor", 
      company: "Olvi",
      year: "2023",
      description: "Supervised production operations, quality control, and team management in manufacturing environment."
    },
    { 
      title: "Production Operator", 
      company: "Keitele Timber",
      year: "2022",
      description: "Operated machinery, maintained safety protocols, and ensured production efficiency."
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
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Experience & Education
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl">
            Professional experience and educational background shaping my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div
            ref={workRef}
            className={`space-y-6 ${workInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-3">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-base">
                        {job.title}
                      </p>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">
                        {job.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {job.year}
                    </span>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <AcademicCapIcon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-3">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg bg-white dark:bg-slate-800 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-base">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/70 text-blue-700 dark:text-blue-200">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {edu.year}
                    </span>
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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <GlobeAltIcon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Language Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="group p-5 bg-white dark:bg-slate-800 rounded-lg border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {lang.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {lang.level}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
