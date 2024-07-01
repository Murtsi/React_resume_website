import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMessage,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import code from "../public/code.png";
import design from "../public/automation.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const { ref: workRef, inView: workInView } = useInView();
  const { ref: educationRef, inView: educationInView } = useInView();
  const { ref: languageRef, inView: languageInView } = useInView();
  const { ref: offerRef, inView: offerInView } = useInView();
  const { ref: portfolioRef, inView: portfolioInView } = useInView();
  const { ref: landingRef, inView: landingInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView();

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${isPageLoaded ? "fade-in" : ""}`}>
      <Head>
        <title>Antti Murtokangas</title>
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section ref={landingRef} className={`min-h-screen transition-opacity duration-1000 ${landingInView ? 'opacity-100' : 'opacity-0'}`}>
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <ul className="flex items-center w-full justify-center">
              <li className="mr-auto">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li className="mx-8">
                <a href="#portfolio" className="text-lg" onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>Portfolio</a>
              </li>
              <li className="mx-8">
                <a href="#contact" className="text-lg">Contact Me</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-gradient-to-r from-gray-400 to-gray-500 font-extrabold dark:text-gradient-to-r dark:from-gray-200 dark:to-gray-300 md:text-6xl text-shadow font-poppins">
              Antti Murtokangas
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl text-shadow">
              Student & Hobbyist frontend coder
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Automation Engineering Student & Hobbyist Coder Interested In React Web Development
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:antti.murtsi@gmail.com" target="_blank" rel="noopener noreferrer">
                <AiFillMail />
              </a>
              <a href="https://www.linkedin.com/in/antti-murtokangas-562725158/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Murtsi" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-white border-4 border-gray-300 rounded-full w-60 h-60 sm:w-80 sm:h-80 md:h-96 md:w-96 relative overflow-hidden mt-20 shadow-lg">
              <Image src="/omakuva.jpg" layout="fill" objectFit="cover" alt="Professional Profile Picture" className="rounded-full" />
            </div>
          </div>
        </section>
        <section id="portfolio" ref={offerRef} className={`transition-opacity duration-1000 ${offerInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`transition-transform duration-2000 transform ${offerInView ? 'translate-y-0' : 'translate-y-10'}`}>
            <h3 className="text-5xl py-1 text-gray-900 dark:text-gray-100 font-bold">
              What I Can Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
              I am a dedicated and passionate individual with a strong background in automation engineering and hobbyist coding. My skills include:
            </p>
            <ul className="list-disc pl-5 text-md leading-8 text-gray-900 dark:text-gray-100">
              <li>Extensive experience in automation engineering, including PLC programming, SCADA systems, and industrial automation planning</li>
              <li>Basic understanding of React and modern JavaScript frameworks</li>
              <li>Experience with Python for scripting and automation tasks</li>
              <li>Knowledge of HTML, CSS, and responsive design</li>
              <li>Reading and writing of electrical circuit diagrams</li>
              <li>Strong problem-solving abilities and attention to detail</li>
              <li>Excellent communication and teamwork skills</li>
            </ul>
            <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
              I am eager to bring my expertise and enthusiasm to a dynamic team, where I can contribute to innovative projects and continue to grow.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className={`text-center shadow-lg p-10 rounded-xl my-10 bg-light-blue-500 dark:bg-gray-700 flex-1 transition-transform duration-1000 ${offerInView ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2 text-gray-900 dark:text-gray-100">
                Automation Engineering
              </h3>
              <p className="py-2 text-gray-900 dark:text-gray-100 font-semibold">
                Tools that I&apos;ve used in my studies and work and have knowledge in:
              </p>
              <ul className="list-disc pl-5 text-gray-900 dark:text-gray-100">
                <li className="py-1">Codesys V3.5 Sp17 Patch 3</li>
                <li className="py-1">Eplan</li>
                <li className="py-1">Cognex in-sight Explorer</li>
                <li className="py-1">Visual components Premium</li>
              </ul>
            </div>
            <div className={`text-center shadow-lg p-10 rounded-xl my-10 bg-light-blue-500 dark:bg-gray-700 flex-1 transition-transform duration-1000 ${offerInView ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2 text-gray-900 dark:text-gray-100">
                My technical background
              </h3>
              <p className="py-2 text-gray-900 dark:text-gray-100 font-semibold">
                Additional tools and languages in my technical field that I am confident in
              </p>
              <ul className="list-disc pl-5 text-gray-900 dark:text-gray-100">
                <li className="py-1">React.js</li>
                <li className="py-1">Python</li>
                <li className="py-1">CSS</li>
                <li className="py-1">HTML</li>
                <li className="py-1">All office365 tools</li>
              </ul>
            </div>
          </div>
        </section>
        <section ref={portfolioRef} className={`py-10 transition-transform duration-1000 ${portfolioInView ? 'transform translate-y-0' : 'transform translate-y-10'}`}>
          <div>
            <div className="bg-white shadow-lg rounded-xl p-10 dark:bg-gray-800">
              <h1 className="text-4xl py-2 text-gray-900 dark:text-gray-100 font-extrabold">My Experience and Education</h1>
              <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
              </p>
              <p className="text-lg py-4 leading-8 text-gray-900 dark:text-gray-100 font-bold">
                Further details on my skills and competencies
              </p>
              <section className="py-10">
                <div
                  ref={workRef}
                  className={`bg-light-blue-500 shadow-lg rounded-xl p-10 dark:bg-gray-700 transition-transform duration-1000 ${workInView ? 'transform translate-y-0' : 'transform translate-y-10'}`}
                >
                  <h3 className="text-3xl py-1 text-gray-900 dark:text-gray-100 font-extrabold">Work Experience</h3>
                  <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
                    I have worked in the automation field and with technology, including IT support and other related areas, collaborating with talented individuals to implement efficient and innovative solutions.
                  </p>
                  <ul className="list-disc list-inside text-gray-900 dark:text-gray-100 space-y-4">
                    <li className="font-medium">Porting user interfaces to Codesys html5 </li>
                    <li className="font-medium">Production supervisor at Olvi </li>
                    <li className="font-medium">Production operator at Keitele timber</li>
                    <li className="font-medium">It Support for local highschool for final work</li>
                    <li className="font-medium">and others</li>
                  </ul>
                </div>
                <div
                  ref={educationRef}
                  className={`mt-10 bg-light-blue-500 shadow-lg rounded-xl p-10 dark:bg-gray-700 transition-transform duration-1000 ${educationInView ? 'transform translate-y-0' : 'transform translate-y-10'}`}
                >
                  <h3 className="text-3xl py-1 text-gray-900 dark:text-gray-100 font-extrabold">Education</h3>
                  <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
                    My education in Technology is comprehensive and well-rounded, providing me with a strong foundation in the field.
                  </p>
                  <ul className="list-disc list-inside text-gray-900 dark:text-gray-100 space-y-4">
                    <li className="font-medium">Course to Automation in the wind power sector (2024)</li>
                    <li className="font-medium">Bachelor&apos;s Degree in Automation Engineering, Seinäjoki University of Applied Sciences (2021 - Present)</li>
                    <li className="font-medium">Leadership Training/Military Police Officer  (2019-2020)</li>
                    <li className="font-medium">Vocational Qualification in Business Information Technology, Järviseutu Vocational Institute (2015-2018)</li>
                  </ul>
                </div>
                <div
                  ref={languageRef}
                  className={`mt-10 bg-light-blue-500 shadow-lg rounded-xl p-10 dark:bg-gray-700 transition-transform duration-1000 ${languageInView ? 'transform translate-y-0' : 'transform translate-y-10'}`}
                >
                  <h3 className="text-3xl py-1 text-gray-900 dark:text-gray-100 font-extrabold">Language Skills</h3>
                  <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
                    I am proficient in multiple languages, which allows me to work with a diverse range of clients.
                  </p>
                  <ul className="list-disc list-inside text-gray-900 dark:text-gray-100 space-y-4">
                    <li className="font-medium">
                      <span role="img" aria-label="English flag">🇬🇧</span> English (Fluent)
                    </li>
                    <li className="font-medium">
                      <span role="img" aria-label="Finnish flag">🇫🇮</span> Finnish (Native)
                    </li>
                    <li className="font-medium">
                      <span role="img" aria-label="German flag">🇩🇪</span> German (Intermediate)
                    </li>
                    <li className="font-medium">
                      <span role="img" aria-label="Estonian flag">🇪🇪</span> Estonian (Intermediate)
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section id="contact" ref={contactRef} className={`transition-opacity duration-1000 ${contactInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`transition-transform duration-2000 transform ${contactInView ? 'translate-y-0' : 'translate-y-10'}`}>
            <h3 className="text-5xl py-1 text-gray-900 dark:text-gray-100 font-bold">
              Contact Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-900 dark:text-gray-100">
              Feel free to reach out to me via email or connect with me on LinkedIn.
            </p>
            <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:antti.murtsi@gmail.com" target="_blank" rel="noopener noreferrer">
                <AiFillMail />
              </a>
              <a href="https://www.linkedin.com/in/antti-murtokangas-562725158/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Murtsi" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
