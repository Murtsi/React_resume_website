import Image from 'next/image'
import { certifications } from '@/lib/data'

export default function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section
      id="certifications"
      className="section-shell"
      aria-labelledby="certifications-heading"
    >
      <header className="section-heading">
        <span className="section-kicker" aria-hidden="true">{'// credentials'}</span>
        <h2 id="certifications-heading">Credentials &amp; courses</h2>
        <p>Selected certificates with direct verification links.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '42rem' }}>
        {certifications.map((cert) => (
          <a
            key={cert.credentialId}
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  minWidth: 0,
                  flex: '1 1 16rem',
                }}
              >
                {cert.logo ? (
                  <Image
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    width={32}
                    height={32}
                    unoptimized
                    style={{
                      width: 32,
                      height: 32,
                      objectFit: 'contain',
                      borderRadius: 6,
                      display: 'block',
                    }}
                  />
                ) : null}
                <div style={{ minWidth: 0 }}>
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
                      overflowWrap: 'anywhere',
                    }}
                  >
                    {cert.issuer} · ID: {cert.credentialId}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--accent-green)',
                    letterSpacing: '0.04em',
                    marginBottom: cert.earnedOn ? '0.2rem' : 0,
                  }}
                >
                  ● verified
                </div>
                {cert.earnedOn && (
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {cert.earnedOn}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
