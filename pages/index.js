import Head from "next/head";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import QuickStatsSection from "../components/QuickStatsSection";
import OffersSection from "../components/OffersSection";
import GitHubProjectsSection from "../components/GitHubProjectsSection";
import ExperienceEducationSection from "../components/ExperienceEducationSection";
import ContactSection from "../components/ContactSection";
import { translations } from "../utils/translations";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const t = translations['en'];

  return (
    <div className={`${isPageLoaded ? "animate-fade-in" : ""}`}>
      <Head>
        <title>Antti Murtokangas - Automation Engineering Student & Fiber Optic Specialist</title>
        <meta name="description" content="Professional portfolio of Antti Murtokangas - Automation Engineering Student and Fiber Optic Specialist. Expertise in industrial automation, PLC programming, and fiber network operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#e8825f" />
        <meta name="author" content="Antti Murtokangas" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.anttimurtokangas.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Antti Murtokangas - Automation Engineering Student & Fiber Optic Specialist" />
        <meta property="og:description" content="Professional portfolio of Antti Murtokangas - Automation Engineering Student and Fiber Optic Specialist. Expertise in industrial automation, PLC programming, and fiber network operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.anttimurtokangas.com" />
        <meta property="og:site_name" content="Antti Murtokangas Portfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Antti Murtokangas - Portfolio" />
        <meta name="twitter:description" content="Automation Engineering Student & Fiber Optic Specialist. Expertise in industrial automation, PLC programming, and fiber networks." />

        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Antti Murtokangas",
              "url": "https://www.anttimurtokangas.com",
              "email": "antti.murtsi@gmail.com",
              "jobTitle": "Automation Engineering Student & Fiber Optic Specialist",
              "description": "Automation Engineering Student and Fiber Optic Specialist with expertise in industrial automation, PLC programming, and fiber network operations.",
              "sameAs": [
                "https://www.linkedin.com/in/antti-murtokangas-562725158/",
                "https://github.com/Murtsi"
              ],
              "knowsAbout": [
                "Industrial Automation",
                "Fiber Optic Networks",
                "PLC Programming",
                "Codesys",
                "Eplan",
                "Cognex",
                "Visual Components"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-cream-100 dark:bg-navy-700 text-cream-900 dark:text-cream-100">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <HeroSection t={t} darkMode={darkMode} />
          <QuickStatsSection />
          <OffersSection t={t} />
          <GitHubProjectsSection />
          <ExperienceEducationSection t={t} />
          <ContactSection t={t} />
        </main>
      </div>
    </div>
  );
}