import { useInView } from 'react-intersection-observer';
import { AcademicCapIcon, BriefcaseIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function ExperienceEducationSection() {
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
  const { ref: languageRef, inView: languageInView } = useInView({ triggerOnce: true });

  const workExperience = [
    { title: "Porting user interfaces to Codesys HTML5", year: "Recent" },
    { title: "Production supervisor at Olvi", year: "2023" },
    { title: "Production operator at Keitele timber", year: "2022" },
    { title: "IT Support for local highschool", year: "2021-2022" }
  ];

  const education = [
    { degree: "Automation in the wind power sector", school: "Course", year: "2024" },
    { degree: "Bachelor's Degree in Automation Engineering", school: "Seinäjoki University of Applied Sciences", year: "2021 - Present" },
    { degree: "Leadership Training", school: "Military Police Officer Programme", year: "2019-2020" },
    { degree: "Vocational Qualification in Business Information Technology", school: "Järviseutu Vocational Institute", year: "2015-2018" }
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my professional journey and technical training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div
            ref={workRef}
            className={`space-y-6 ${workInView ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <BriefcaseIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary-300 dark:border-primary-700 hover:border-primary-600 dark:hover:border-primary-500 transition-colors"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2.5"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {job.year}
                    </p>
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
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {edu.school}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    {edu.year}
                  </p>
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
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white">
              <GlobeAltIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Language Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {lang.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {lang.level}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
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
