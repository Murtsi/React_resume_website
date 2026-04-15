'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import { navLinks } from '@/lib/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--bg-canvas) 88%, transparent)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <a
          href="#"
          className="link-hover"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          <span style={{ color: 'var(--accent-green)' }}>~</span>
          {' Antti Murtokangas'}
        </a>

        {/* Nav links + toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', marginRight: '0.75rem' }}>
            {navLinks.map((item) => {
              const isActive = active === item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    padding: '0.375rem 0.625rem',
                    borderRadius: '3px',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '0.625rem',
                        right: '0.625rem',
                        height: '1px',
                        background: 'var(--accent-green)',
                        borderRadius: '1px',
                      }}
                    />
                  )}
                </a>
              )
            })}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
