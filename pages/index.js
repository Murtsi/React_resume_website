import Head from "next/head";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhatICanOfferSection from "../components/WhatICanOfferSection";
import OffersSection from "../components/OffersSection";
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
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const t = translations['en'];

  return (
    <div className={`${isPageLoaded ? "animate-fade-in" : ""}`}>
      <Head>
        <title>Antti Murtokangas - Automation Engineer & Full-Stack Developer</title>
        <meta name="description" content="Professional portfolio of Antti Murtokangas - Automation Engineering Student and React Developer. Expertise in industrial automation, PLC programming, and modern web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#5865f2" />
        <meta property="og:title" content="Antti Murtokangas - Portfolio" />
        <meta property="og:description" content="Automation Engineer & Full-Stack Developer" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white dark:bg-slate-900">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <HeroSection t={t} />
          <WhatICanOfferSection t={t} />
          <OffersSection t={t} />
          <ExperienceEducationSection t={t} />
          <ContactSection t={t} />
        </main>
      </div>
    </div>
  );
}