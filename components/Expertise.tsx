import { expertise } from '@/lib/data'

const accentColors: Record<string, string> = {
  green: 'var(--accent-green)',
  blue: 'var(--accent-blue)',
  amber: 'var(--accent-amber)',
  purple: 'var(--accent-purple)',
}

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="section-shell"
      aria-labelledby="expertise-heading"
    >
      <header className="section-heading">
        <span className="section-kicker" aria-hidden="true">{'// capabilities'}</span>
        <h2 id="expertise-heading">Expertise</h2>
        <p>Skills from current work, engineering studies, and personal projects.</p>
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
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
            <div
              key={domain.id}
              style={{
                backgroundColor: 'var(--bg-surface)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: accent,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {domain.label}
              </h3>

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
            </div>
          )
        })}
      </div>
    </section>
  )
}
