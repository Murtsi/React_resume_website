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

  const githubProjects = [
    // Add your GitHub projects here
    // Example: { name: "Project Name", url: "https://github.com/username/repo", description: "Brief description" }
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
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl">
            Professional experience in fiber optic network technical support, production operations, and IT infrastructure. Currently advancing skills in industrial automation engineering while maintaining excellence in telecommunications technical support.
          </p>

        </div>

        {/* Core Competencies */}
        <div
          className={`mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 ${
            offerInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Fiber Optic Network Technical Support</h4>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Current role providing technical support for fiber optic network infrastructure. Daily work with industry platforms including iMaster for network monitoring, Altiplano (Nokia OSS) for automation, Optopro Fiber for project management, and Keycom for fault detection. Specialized in customer service and rapid troubleshooting.
            </p>
          </div>

          
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Industrial Automation Engineering (In Progress)</h4>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Currently pursuing Bachelor&apos;s degree in Automation Engineering at Seinäjoki University of Applied Sciences. Developing skills in PLC programming with Codesys, SCADA systems, electrical design with Eplan, machine vision with Cognex, and production simulation with Visual Components. Complemented by real-world production experience from Olvi and Keitele Timber.
            </p>
          </div>

          
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Technical Support & Team Leadership</h4>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Extensive customer-facing experience in technical support for fiber networks, requiring clear communication of complex technical issues. Production supervision experience at Olvi managing teams and ensuring quality standards. IT support background providing technical assistance to students and staff. Strong interpersonal skills developed across diverse professional environments.
            </p>
          </div>

          
          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Problem-Solving & Adaptability</h4>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Proven ability to diagnose and resolve technical issues across fiber networks, production systems, and IT infrastructure. Experience working in high-pressure telecommunications support, fast-paced manufacturing environments, and time-sensitive IT troubleshooting. Military leadership training (2019-2020) provides disciplined approach to task management and decision-making under pressure.
            </p>
          </div>

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

            {/* Web Development & Team Skills */}
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
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Team & Customer Skills:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Cross-functional team collaboration
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Customer engagement & communication
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Rapid technical issue diagnosis & resolution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Projects Section */}
        {githubProjects.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.offers2.githubProjects}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t.offers2.githubDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all group"
                >
                  <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
