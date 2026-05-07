import { experience, education } from '@/lib/data'

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
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent-green)',
          letterSpacing: '0.08em',
          marginBottom: '3rem',
        }}
      >
        {'// experience & education'}
      </div>

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

          <div
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
              <div
                key={`${entry.role}-${entry.period}`}
                style={{ position: 'relative' }}
              >
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '-1.625rem',
                    top: '4px',
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
              </div>
            ))}
          </div>
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

          <div
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
              <div
                key={`${entry.degree}-${entry.period}`}
                style={{ position: 'relative' }}
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
