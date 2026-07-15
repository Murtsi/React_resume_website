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
      className="section-shell"
      aria-labelledby="contact-heading"
    >
      <header className="section-heading">
        <span className="section-kicker" aria-hidden="true">{'// contact'}</span>
        <h2 id="contact-heading">Get in touch</h2>
        <p>Email, GitHub, and LinkedIn.</p>
      </header>

      {/* Contact cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
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
            aria-label={`${link.label}: ${link.value}`}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '0.75rem',
                flexWrap: 'wrap',
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
                aria-hidden="true"
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
                overflowWrap: 'anywhere',
                wordBreak: 'normal',
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
            color: 'var(--text-muted)',
          }}
        >
          {'// next.js 16 · tailwind v4'}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
          }}
        >
          {new Date().getFullYear()}
        </span>
      </div>
    </section>
  )
}
