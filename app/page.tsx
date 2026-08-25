import Image from 'next/image'
import Link from 'next/link'
import BlogPostLink from '@/components/BlogPostLink'
import Nav from '@/components/Nav'
import { certifications, contact, education, experience, expertise, projects } from '@/lib/data'
import type { Project } from '@/lib/data'
import { blogPosts } from '@/lib/blog'

const featured = projects.find((project) => project.id === 'tarppi') ?? projects[0]

export default function Home() {
  return (
    <><Nav /><main>
      <section className="portfolio-hero page-width" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Antti Murtokangas</p>
          <h1 className="role-title"><span>Working in technical support.</span><span>Studying automation engineering.</span><em>Learning cybersecurity and LLM red teaming.</em></h1>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Selected work <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="/CV-Antti-Murtokangas.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
            <Link className="button button-quiet" href="/blog">Read the journal <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Current focus" data-reveal>
          <span className="proof-index">Current profile</span>
          <p className="proof-title">Technical support and engineering studies</p>
          <p>I work in technical support and build software outside work and studies.</p>
        </aside>
      </section>

      <section className="section-shell page-width" id="work" data-reveal>
        <SectionHeading index="01" title="Selected work" detail="Projects I have built and maintained." />
        <article className="featured-work border-beam">
          <div className="featured-work-media">
            <Image src={featured.image ?? '/tarppi-preview.png'} alt={featured.imageAlt ?? `${featured.name} project preview`} width={1906} height={948} quality={90} loading="lazy" sizes="(max-width: 900px) calc(100vw - 32px), 730px" />
          </div>
          <div className="featured-work-copy">
            <p className="eyebrow">{featured.eyebrow}</p>
            <h3>{featured.name}</h3>
            <p>{featured.fullDescription}</p>
            <div className="tag-list">{featured.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <a className="text-link" href={featured.liveUrl ?? featured.githubUrl} target="_blank" rel="noreferrer">Open project <span aria-hidden="true">↗</span></a>
          </div>
        </article>
        <div className="work-list">{projects.filter((project) => project.id !== 'tarppi').map((project, index) => <SupportingProject project={project} index={index + 2} key={project.id} />)}</div>
      </section>

      <section className="section-shell page-width split-section" id="security" data-reveal>
        <SectionHeading index="02" title="Security disclosures" detail="Published reports with sensitive details left out." />
        <BlogPostLink className="disclosure-row" href={`/blog/${blogPosts[0].slug}`}>
          <span className="row-index">01</span>
          <div><p className="eyebrow">{blogPosts[0].date}</p><h3>{blogPosts[0].title}</h3></div>
          <p>{blogPosts[0].summary}</p>
          <span className="text-link">Read case <span aria-hidden="true">→</span></span>
        </BlogPostLink>
      </section>

      <section className="section-shell page-width" id="about" data-reveal>
        <SectionHeading index="03" title="Skills and working style" detail="The tools I use and the problems I work on." />
        <div className="about-grid">
          <div className="about-statement"><p>I enjoy diagnosing systems, explaining technical issues clearly, and building tools that remove repetitive work.</p></div>
          <div className="expertise-list">{expertise.slice(0, 4).map((item) => <div className="expertise-row" key={item.id}><span>{item.label}</span><p>{item.description}</p></div>)}</div>
        </div>
      </section>

      <section className="section-shell page-width split-section" id="experience" data-reveal>
        <SectionHeading index="04" title="Experience" detail="Technical support, IT support, and production work." />
        <div className="timeline-list">{experience.map((item) => <div className="timeline-row" key={`${item.role}-${item.company}`}><div><h3>{item.role}</h3><p>{item.company}</p></div><span>{item.period}</span></div>)}</div>
        <div className="education-block"><p className="eyebrow">Education</p>{education.slice(0, 2).map((item) => <div className="education-row" key={item.degree}><span>{item.period}</span><p><strong>{item.degree}</strong><br />{item.institution}</p></div>)}</div>
      </section>

      <section className="section-shell page-width" id="certifications" data-reveal>
        <SectionHeading index="05" title="Certifications" detail="Selected credentials with direct verification." />
        <div className="certification-grid">{certifications.map((cert) => <a className="certification-item" href={cert.verifyUrl} target="_blank" rel="noreferrer" key={cert.credentialId}>{cert.logo ? <Image src={cert.logo} alt="" width={34} height={34} /> : null}<div><h3>{cert.name}</h3><p>{cert.issuer}</p></div><span className="certification-status">Verified ↗</span></a>)}</div>
      </section>

      <section className="section-shell page-width" id="contact" data-reveal>
        <div className="contact-band"><div><p className="eyebrow">Contact</p><h2>Have a practical problem to solve?</h2></div><a className="button button-primary" href={`mailto:${contact.email}`}>Email <span aria-hidden="true">↗</span></a></div>
        <footer className="footer-meta"><span>© {new Date().getFullYear()} Antti Murtokangas</span><span><a href={contact.githubUrl}>GitHub</a> · <a href={contact.linkedinUrl}>LinkedIn</a> · <Link href="/blog">Blog</Link></span></footer>
      </section>
    </main><div className="scroll-veil" aria-hidden="true" /></>
  )
}

function SupportingProject({ project, index }: { project: Project; index: number }) {
  const content = <><span className="row-index">{String(index).padStart(2, '0')}</span><div><p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3></div><p>{project.description}</p><span className="row-status">{project.repositoryPublic ? <>View repository <span aria-hidden="true">↗</span></> : 'Private project'}</span></>
  return project.repositoryPublic ? <a className="work-row work-row-link" href={project.githubUrl} target="_blank" rel="noreferrer">{content}</a> : <article className="work-row">{content}</article>
}

function SectionHeading({ index, title, detail }: { index: string; title: string; detail: string }) {
  return <header className="section-heading"><span className="section-index">{index}</span><div><h2>{title}</h2><p>{detail}</p></div></header>
}
