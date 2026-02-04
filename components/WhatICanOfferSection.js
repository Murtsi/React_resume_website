import { useInView } from 'react-intersection-observer';
import {
  SparklesIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function WhatICanOfferSection({ t }) {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const coreCompetencies = [
    {
      icon: CodeBracketIcon,
      title: t.offers.competency1Title,
      description: t.offers.competency1Desc
    },
    {
      icon: AcademicCapIcon,
      title: t.offers.competency2Title,
      description: t.offers.competency2Desc
    },
    {
      icon: SparklesIcon,
      title: t.offers.competency3Title,
      description: t.offers.competency3Desc
    }
  ];

  const professionalAttributes = [
    t.offers.attribute1,
    t.offers.attribute2,
    t.offers.attribute3,
    t.offers.attribute4,
    t.offers.attribute5
  ];

  return (
    <section
      id="offers"
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 ${
        sectionInView ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <SparklesIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t.offers.title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {t.offers.intro}
          </p>
        </div>

        {/* Core Technical Competencies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t.offers.competencies}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 dark:bg-primary-900/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300" />
                  <div className="relative">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {competency.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {competency.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Professional Attributes */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t.offers.attributes}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalAttributes.map((attribute, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md transition-all duration-300"
              >
                <CheckCircleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-200">
                  {attribute}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to partner and architect tomorrow's technological landscape? Let's connect and explore how I can drive innovation for your organization.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            {t.offers.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
