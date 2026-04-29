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
        {'// expertise'}
      </div>

      <div
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
