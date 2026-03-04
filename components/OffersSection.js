import { useInView } from 'react-intersection-observer';

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

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={offerRef}
          className={`mb-16 ${offerInView ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.offers2.title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl leading-relaxed">
            Professional experience in fiber optic network technical support, production operations, and IT infrastructure. Currently advancing skills in industrial automation engineering while maintaining excellence in telecommunications technical support.
          </p>

        </div>

        {/* Core Competencies */}
        <div
          className={`mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 ${
            offerInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500 dark:hover:border-primary-400 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌐</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Fiber Optic Network Technical Support</h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Current role providing technical support for fiber optic network infrastructure. Daily work with industry platforms including iMaster for network monitoring, Altiplano (Nokia OSS) for automation, Optopro Fiber for project management, and Keycom for fault detection.
                </p>
              </div>
            </div>
          </div>


          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚙️</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Industrial Automation Engineering</h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Currently pursuing Bachelor&apos;s degree in Automation Engineering at SEAMK. Developing skills in PLC programming with Codesys, SCADA systems, electrical design with Eplan, machine vision with Cognex, and production simulation with Visual Components.
                </p>
              </div>
            </div>
          </div>


          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-3xl">👥</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Team Leadership & Communication</h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Extensive customer-facing experience in technical support. Production supervision experience at Olvi managing teams and ensuring quality standards. IT support background with strong interpersonal skills developed across diverse professional environments.
                </p>
              </div>
            </div>
          </div>


          <div className="group p-8 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500 dark:hover:border-green-400 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Problem-Solving & Adaptability</h4>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  Proven ability to diagnose and resolve technical issues across fiber networks, production systems, and IT infrastructure. Experience working in high-pressure environments with disciplined approach to task management and decision-making.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Skill cards */}
        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            Expertise Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fiber Network Applications */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">🌐</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {t.offers2.fiberNetworks}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t.offers2.fiberDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.fiberTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-xs">
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full flex-shrink-0"></span>
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automation Engineering */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">⚙️</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t.offers2.automation}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t.offers2.automationDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.automationTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-xs">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Development & Programming */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">💻</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {t.offers2.webDev}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t.offers2.webDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.webTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-xs">
                    <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full flex-shrink-0"></span>
                    <span className="font-medium">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* UI/UX Design */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-amber-50 dark:from-pink-900/20 dark:to-amber-900/20 border-2 border-pink-200 dark:border-pink-800 hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-2xl transition-all duration-300 hover:scale-105 transform cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-transparent dark:from-pink-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 group-hover:scale-125 group-hover:animate-spin transition-transform duration-300 inline-block">✨</div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                {t.offers2.uiux}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t.offers2.uiuxDesc}
              </p>
              <ul className="space-y-2">
                {t.offers2.uiuxTools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-xs group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors">
                    <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full flex-shrink-0"></span>
                    <span className="font-medium">{tool}</span>
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
