import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Projects from '@/components/Projects'
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
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
