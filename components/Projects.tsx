'use client'

import { useState, useEffect, useRef } from 'react'
import { projects } from '@/lib/data'
import type { Project } from '@/lib/data'

function TechStrip({ items }: { items: Project['techBars'] }) {
  const visibleItems = items.slice(0, 4)
  const hasRealValues =
    visibleItems.length >= 3 &&
    visibleItems.every((item) => typeof item.value === 'number' && item.value > 0)
  const total = hasRealValues
    ? visibleItems.reduce((sum, item) => sum + (item.value ?? 0), 0)
    : 0

  return (
    <div
      style={{
        height: '5px',
        width: '100%',
        display: 'flex',
        gap: '2px',
        backgroundColor: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
        borderRadius: '999px',
        padding: '1px',
        overflow: 'hidden',
        opacity: 0.9,
      }}
    >
      {visibleItems.map((item) => {
        const width = hasRealValues
          ? `${((item.value ?? 0) / total) * 100}%`
          : `${100 / visibleItems.length}%`

        return (
          <span
            key={item.label}
            style={{
              width,
              height: '100%',
              borderRadius: '999px',
              backgroundColor: item.color,
              opacity: 0.72,
            }}
          />
        )
      })}
    </div>
  )
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) {
  const statusColor = project.status === 'live' ? 'var(--accent-green)' : 'var(--accent-amber)'
  const statusLabel = project.status === 'live' ? 'Live' : 'In Development'
  const visibleStack = project.stack.slice(0, 4)

  return (
    <div className="project-card" onClick={onClick}>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '0.875rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            {project.name}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: statusColor,
              flexShrink: 0,
              paddingTop: '2px',
              letterSpacing: '0.04em',
            }}
          >
            ● {statusLabel}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            flex: 1,
            marginBottom: '1.25rem',
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '0.7rem',
          }}
        >
          {visibleStack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <TechStrip items={project.techBars} />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-blue)',
            letterSpacing: '0.04em',
          }}
        >
          view details →
        </div>
      </div>
    </div>
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const statusColor = project.status === 'live' ? 'var(--accent-green)' : 'var(--accent-amber)'
  const statusLabel = project.status === 'live' ? 'Live' : 'In Development'
  const visibleStack = project.stack.slice(0, 4)

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div ref={modalRef} className="modal-panel">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '1.5rem 1.5rem 0',
            gap: '1rem',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: statusColor,
                marginBottom: '0.375rem',
                letterSpacing: '0.05em',
              }}
            >
              ● {statusLabel}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: 'transparent',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              flexShrink: 0,
              fontSize: '14px',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--text-muted)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-primary)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.75rem',
            }}
          >
            {project.fullDescription}
          </p>

          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Tech stack
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <TechStrip items={project.techBars} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {visibleStack.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '12px', padding: '0.5rem 1rem' }}
              >
                Live ↗
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: '12px', padding: '0.5rem 1rem' }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section
      id="projects"
      style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '7rem 1.5rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent-green)',
          letterSpacing: '0.08em',
          marginBottom: '3rem',
        }}
      >
        {'// projects'}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
