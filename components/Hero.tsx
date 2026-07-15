import { hero } from '@/lib/data'

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">{hero.label}</p>

          <h1 id="hero-heading" className="hero-title">
            {hero.name}
            <span className="cursor-blink" aria-hidden="true">
              |
            </span>
          </h1>

          <div className="hero-subtitle">
            {hero.subtitle.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="hero-actions">
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

        <aside className="hero-feature" aria-label={hero.featured.label}>
          <div className="hero-feature-topline">
            <span className="section-kicker">{hero.featured.label}</span>
            <span className="hero-feature-status">{hero.featured.status}</span>
          </div>
          <h2>{hero.featured.title}</h2>
          <p>{hero.featured.summary}</p>
          <a href={hero.featured.href} className="feature-link">
            {hero.featured.linkLabel} <span aria-hidden="true">-&gt;</span>
          </a>
        </aside>
      </div>
    </section>
  )
}
