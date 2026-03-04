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
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 ${
        sectionInView ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-sm">
              <SparklesIcon className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.offers.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            {t.offers.intro}
          </p>
        </div>

        {/* Core Technical Competencies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            {t.offers.competencies}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon;
              const colors = [
                { bg: 'bg-accent-50', darkBg: 'dark:bg-accent-900/20', accent: 'bg-accent-100', darkAccent: 'dark:bg-accent-900/30', icon: 'text-accent-600 dark:text-accent-400', border: 'hover:border-accent-600 dark:hover:border-accent-500', hover: 'group-hover:text-accent-700 dark:group-hover:text-accent-300' },
                { bg: 'bg-warm-50', darkBg: 'dark:bg-warm-900/20', accent: 'bg-warm-100', darkAccent: 'dark:bg-warm-900/30', icon: 'text-warm-600 dark:text-warm-400', border: 'hover:border-warm-600 dark:hover:border-warm-500', hover: 'group-hover:text-warm-700 dark:group-hover:text-warm-300' },
                { bg: 'bg-primary-50', darkBg: 'dark:bg-primary-900/20', accent: 'bg-primary-100', darkAccent: 'dark:bg-primary-900/30', icon: 'text-primary-700 dark:text-primary-400', border: 'hover:border-primary-600 dark:hover:border-primary-500', hover: 'group-hover:text-primary-700 dark:group-hover:text-primary-300' },
              ];
              const color = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className={`relative p-8 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 ${color.border} hover:shadow-lg transition-all duration-300 group overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 ${color.bg} ${color.darkBg} rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-lg ${color.accent} ${color.darkAccent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${color.icon}`} />
                    </div>
                    <h4 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 ${color.hover} transition-colors`}>
                      {competency.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            {t.offers.attributes}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professionalAttributes.map((attribute, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-primary-600 dark:hover:border-primary-500 hover:shadow-md transition-all duration-300 group"
              >
                <CheckCircleIcon className="w-6 h-6 text-primary-700 dark:text-primary-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  {attribute}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block max-w-2xl">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Ready to explore how my expertise can drive innovation for your organization? Let&apos;s discuss how we can work together to solve complex technical challenges.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
