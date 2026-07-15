'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { hero, projects } from '@/lib/data'
import type { Project } from '@/lib/data'

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  'in development': 'In development',
  private: 'Private',
}

function ProjectCard({
  project,
  featured = false,
  onClick,
}: {
  project: Project
  featured?: boolean
  onClick: () => void
}) {
  const statusColor = project.status === 'live' ? 'var(--accent-green)' : 'var(--accent-amber)'

  return (
    <button
      type="button"
      className="project-card"
      data-featured={featured ? 'true' : undefined}
      onClick={onClick}
      aria-haspopup="dialog"
      aria-label={`View details for ${project.name}`}
    >
      {featured && project.image && (
        <div className="project-card-image">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} preview`}
            fill
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        </div>
      )}

      <div className="project-card-body">
        <div className="project-card-heading">
          <div>
            <span className="project-eyebrow">{project.eyebrow ?? statusLabels[project.status]}</span>
            <h3>{project.name}</h3>
          </div>
          <span className="project-status" style={{ color: statusColor }}>
            <span aria-hidden="true">●</span> {statusLabels[project.status]}
          </span>
        </div>

        <p className="project-description">{project.description}</p>

        {project.outcome && <p className="project-outcome">{project.outcome}</p>}

        <div className="project-card-footer">
          <div className="project-stack" aria-label="Technology stack">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
          <span className="project-open-label">
            View details <span aria-hidden="true">-&gt;</span>
          </span>
        </div>
      </div>
    </button>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !modalRef.current) return

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      previouslyFocused?.focus()
    }
  }, [onClose])

  const githubLabel =
    project.status === 'private'
      ? project.linkLabel ?? 'GitHub profile (source private)'
      : project.githubUrl === 'https://github.com/Murtsi'
        ? 'GitHub profile'
        : 'Repository'

  return (
    <div
      className="modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
      >
        <div className="modal-header">
          <div>
            <span className="project-eyebrow">{statusLabels[project.status]}</span>
            <h2 id="project-dialog-title">{project.name}</h2>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} className="modal-close" aria-label="Close project details">
            <span aria-hidden="true">x</span>
          </button>
        </div>

        <div className="modal-body">
          {project.image && (
            <div className="modal-image">
              <Image src={project.image} alt={project.imageAlt ?? `${project.name} preview`} fill sizes="560px" />
            </div>
          )}
          <p className="modal-description">{project.fullDescription}</p>
          {project.outcome && <p className="modal-outcome">{project.outcome}</p>}

          <div className="modal-stack">
            <span className="modal-label">Stack</span>
            <div className="project-stack">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {project.linkLabel ?? 'Open live app'} <span aria-hidden="true">-&gt;</span>
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {githubLabel} <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featuredProject =
    projects.find((project) => project.id === hero.featured.projectId) ?? projects[0]
  const supportingProjects = projects.filter((project) => project.id !== featuredProject.id)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = selected ? 'hidden' : previousOverflow
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selected])

  return (
    <section id="projects" className="section-shell projects-section" aria-labelledby="projects-heading">
      <header className="section-heading">
        <span className="section-kicker" aria-hidden="true">{'// selected work'}</span>
        <h2 id="projects-heading">Selected work</h2>
        <p>A live service, private prototypes, and open-source experiments.</p>
      </header>

      <div className="featured-project-grid">
        <ProjectCard project={featuredProject} featured onClick={() => setSelected(featuredProject)} />
        <div className="supporting-projects">
          {supportingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
