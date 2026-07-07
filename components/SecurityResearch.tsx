import { securityResearch } from '@/lib/data'

export default function SecurityResearch() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
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
        {'// security research'}
      </div>

      <article
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          padding: '2rem 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent-blue)',
              letterSpacing: '0.06em',
              marginBottom: '0.75rem',
            }}
          >
            CASE NOTE
          </div>

          <h2
            id="security-heading"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              textWrap: 'balance',
              marginBottom: '0.875rem',
            }}
          >
            {securityResearch.title}
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            {securityResearch.meta}
          </p>
        </div>

        <div
          style={{
            maxWidth: '68ch',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              textWrap: 'pretty',
            }}
          >
            {securityResearch.focus}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--text-primary)',
              lineHeight: 1.8,
              textWrap: 'pretty',
            }}
          >
            {securityResearch.body}
          </p>
        </div>
      </article>
    </section>
  )
}
