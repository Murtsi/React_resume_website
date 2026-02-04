import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import SkillCard from './SkillCard';
import code from "../public/code.png";
import design from "../public/automation.png";

export default function OffersSection({ t }) {
  const { ref: offerRef, inView: offerInView } = useInView({ triggerOnce: true });

  const automationTools = [
    "Codesys V3.5 Sp17 Patch 3",
    "Eplan",
    "Cognex in-sight Explorer",
    "Visual components Premium"
  ];

  const technicalSkills = [
    "React.js & Next.js",
    "Python",
    "CSS & Tailwind",
    "HTML & JavaScript",
    "Microsoft Office Suite"
  ];

  const fiberNetworkTools = [
    "iMaster",
    "Altiplano (Nokia OSS)",
    "Optopro Fiber",
    "Keycom"
  ];

  const mainSkills = [
    "Extensive experience in automation engineering, including PLC programming, SCADA systems, and industrial automation planning",
    "Proficient in React and modern JavaScript frameworks",
    "Python scripting and automation tasks",
    "Responsive web design and modern CSS techniques",
    "Electrical circuit diagram design and interpretation",
    "Strong problem-solving and analytical skills",
    "Excellent collaboration and communication abilities"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={offerRef}
          className={`mb-12 ${offerInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.offers2.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Professional expertise across fiber networks, automation engineering, and web development technologies.
          </p>
        </div>

        {/* Skills list */}
        <div
          className={`mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 ${
            offerInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                ✓
              </div>
              <p className="text-gray-700 dark:text-gray-200">{skill}</p>
            </div>
          ))}
        </div>

        {/* Skill cards */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {t.offers2.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fiber Network Applications */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t.offers2.fiberNetworks}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {t.offers2.fiberDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.fiberTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Automation Engineering */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t.offers2.automation}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {t.offers2.automationDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.automationTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Development */}
            <div className="p-6 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t.offers2.webDev}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {t.offers2.webDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.webTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
