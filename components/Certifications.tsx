import { certifications } from '@/lib/data'

export default function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section
      id="certifications"
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
        {'// certifications'}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '42rem' }}>
        {certifications.map((cert) => (
          <a
            key={cert.credentialId}
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
              padding: '1.25rem 1.5rem',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-blue)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.3rem',
                  }}
                >
                  {cert.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                  }}
                >
                  {cert.issuer} · ID: {cert.credentialId}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--accent-green)',
                    letterSpacing: '0.04em',
                    marginBottom: '0.2rem',
                  }}
                >
                  ● verified
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                  }}
                >
                  {cert.earnedOn}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
