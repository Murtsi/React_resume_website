'use client'

import { useEffect, useRef } from 'react'
import { hero } from '@/lib/data'

export default function Hero() {
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    import('animejs').then(({ createTimeline, utils }) => {
      const stagger = utils.stagger

      createTimeline({ defaults: { ease: 'outExpo' } })
        .add('.hero-char', {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 850,
          delay: stagger(20),
        })
        .add(
          '.hero-sub-line',
          {
            opacity: [0, 1],
            translateY: [16, 0],
            duration: 500,
            delay: stagger(60),
          },
          '-=500',
        )
        .add(
          '.hero-stat',
          {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 380,
            delay: stagger(70),
          },
          '-=250',
        )
        .add(
          '.hero-cta',
          {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 380,
            delay: stagger(80),
          },
          '-=200',
        )
    })
  }, [])

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
          {hero.name.split('').map((char, i) => (
            <span
              key={i}
              className="hero-char"
              style={{
                display: 'inline-block',
                opacity: 0,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          <span
            className="cursor-blink hero-char"
            style={{
              display: 'inline-block',
              opacity: 0,
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
          className="hero-sub-line"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-green)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.85rem',
            opacity: 0,
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
              className="hero-sub-line"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(13px, 1.4vw, 15px)',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                opacity: 0,
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
            <div key={i} className="hero-stat" style={{ opacity: 0 }}>
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
          <a
            href={hero.ctaPrimary.href}
            className="btn btn-primary hero-cta"
            style={{ opacity: 0 }}
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="btn btn-ghost hero-cta"
            style={{ opacity: 0 }}
          >
            {hero.ctaSecondary.label}
          </a>
          <a
            href="/CV-Antti-Murtokangas.pdf"
            download="CV-Antti-Murtokangas.pdf"
            className="btn btn-ghost hero-cta"
            style={{ opacity: 0 }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
