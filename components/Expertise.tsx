'use client'

import { motion } from 'framer-motion'
import { expertise } from '@/lib/data'

const accentColors: Record<string, string> = {
  green: 'var(--accent-green)',
  blue: 'var(--accent-blue)',
  amber: 'var(--accent-amber)',
  purple: 'var(--accent-purple)',
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '7rem 1.5rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent-green)',
          letterSpacing: '0.08em',
          marginBottom: '3rem',
        }}
      >
        {'// expertise'}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: 'var(--border)',
        }}
      >
        {expertise.map((domain) => {
          const accent = accentColors[domain.accent] ?? 'var(--accent-green)'

          return (
            <motion.div
              key={domain.id}
              variants={item}
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              {/* Domain label */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: accent,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {domain.label}
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  flex: 1,
                }}
              >
                {domain.description}
              </p>

              {/* Tools */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.375rem',
                  marginTop: '0.25rem',
                }}
              >
                {domain.tools.map((tool) => (
                  <span key={tool} className="badge">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
