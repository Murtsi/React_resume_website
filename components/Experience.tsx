'use client'

import { motion } from 'framer-motion'
import { experience, education } from '@/lib/data'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const item = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
}

export default function Experience() {
  return (
    <section
      id="experience"
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
        {'// experience & education'}
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
        }}
      >
        {/* Work experience */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-blue)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}
          >
            Work
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            style={{
              position: 'relative',
              paddingLeft: '1.375rem',
              borderLeft: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.875rem',
            }}
          >
            {experience.map((entry) => (
              <motion.div
                key={`${entry.role}-${entry.period}`}
                variants={item}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '-1.625rem',
                    top: '4px',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {entry.role}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      {entry.period}
                    </span>
                  </div>

                  {entry.company && (
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {entry.company}
                    </span>
                  )}

                  {entry.tools && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.3rem',
                        marginTop: '0.375rem',
                      }}
                    >
                      {entry.tools.map((t) => (
                        <span key={t} className="badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-purple)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
            }}
          >
            Education
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            style={{
              position: 'relative',
              paddingLeft: '1.375rem',
              borderLeft: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.875rem',
            }}
          >
            {education.map((entry) => (
              <motion.div
                key={`${entry.degree}-${entry.period}`}
                variants={item}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot — purple accent for education */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-1.625rem',
                    top: '4px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-purple)',
                    boxShadow: '0 0 8px rgba(188, 140, 255, 0.5)',
                    flexShrink: 0,
                  }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {entry.degree}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      {entry.period}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {entry.institution}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
