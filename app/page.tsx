import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Projects from '@/components/Projects'
import SecurityResearch from '@/components/SecurityResearch'
import Certifications from '@/components/Certifications'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <SecurityResearch />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
