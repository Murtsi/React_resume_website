import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import SecurityResearch from '@/components/SecurityResearch'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <SecurityResearch />
        <Expertise />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </>
  )
}
