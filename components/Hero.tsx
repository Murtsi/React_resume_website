import { hero } from '@/lib/data'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          width: '100%',
          paddingTop: '112px',
          paddingBottom: '96px',
        }}
      >
        {/* Name */}
        <h1
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
            whiteSpace: 'pre-wrap',
          }}
        >
          {hero.name}
          <span
            className="cursor-blink"
            style={{
              fontWeight: 300,
              fontSize: '0.65em',
              marginLeft: '3px',
              verticalAlign: 'middle',
              color: 'var(--accent-green)',
            }}
          >
            █
          </span>
        </h1>

        {/* Label */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-green)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.85rem',
          }}
        >
          {hero.label}
        </p>

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            marginBottom: '2.75rem',
          }}
        >
          {hero.subtitle.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(13px, 1.4vw, 15px)',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {hero.stats.map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  marginBottom: '0.2rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.07em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
          <a href={hero.ctaPrimary.href} className="btn btn-primary">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn btn-ghost">
            {hero.ctaSecondary.label}
          </a>
          <a
            href="/CV-Antti-Murtokangas.pdf"
            download="CV-Antti-Murtokangas.pdf"
            className="btn btn-ghost"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
