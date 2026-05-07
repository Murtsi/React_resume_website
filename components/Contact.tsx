import { contact } from '@/lib/data'

const links = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    comment: '// primary',
  },
  {
    label: 'GitHub',
    value: contact.githubLabel,
    href: contact.githubUrl,
    comment: '// source',
  },
  {
    label: 'LinkedIn',
    value: contact.linkedinLabel,
    href: contact.linkedinUrl,
    comment: '// network',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '7rem 1.5rem 6rem',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--accent-green)',
          letterSpacing: '0.08em',
          marginBottom: '2.5rem',
        }}
      >
        {'// contact'}
      </div>

      <div style={{ maxWidth: '32rem', marginBottom: '3rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '0.875rem',
          }}
        >
          {`// contact`}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
          }}
        >
          Reach me by email or via LinkedIn and GitHub below.
        </p>
      </div>

      {/* Contact cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.75rem',
          maxWidth: '42rem',
          marginBottom: '5rem',
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="contact-card"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--accent-green)',
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--border)',
                }}
              >
                {link.comment}
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                wordBreak: 'break-all',
              }}
            >
              {link.value}
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--border)',
          }}
        >
          {'// next.js 15 · tailwind v4'}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--border)',
          }}
        >
          {new Date().getFullYear()}
        </span>
      </div>
    </section>
  )
}
