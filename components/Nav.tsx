'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Work', href: '/#work', section: 'work' },
  { label: 'Disclosures', href: '/#security', section: 'security' },
  { label: 'Experience', href: '/#experience', section: 'experience' },
  { label: 'Credentials', href: '/#certifications', section: 'certifications' },
  { label: 'Blog', href: '/blog', section: null },
] as const

export default function Nav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (pathname !== '/') return

    const sections = links.flatMap((link) => link.section ? [document.getElementById(link.section)] : []).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -62% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem('portfolio-theme', nextTheme)
  }

  const isCurrent = (section: string | null) => section === null ? pathname.startsWith('/blog') : pathname === '/' && activeSection === section

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link className="wordmark" href="/" aria-label="Antti Murtokangas, portfolio home">AM<span>.</span></Link>
        <div className="nav-links">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(link.section) ? 'location' : undefined}>{link.label}</Link>)}
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? 'Close' : 'Menu'}</button>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme" aria-pressed={theme === 'light'}>{theme === 'light' ? 'Dark' : 'Light'} <span aria-hidden="true">◐</span></button>
      </div>
      <div className="mobile-menu" id="mobile-navigation" hidden={!menuOpen}>
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={isCurrent(link.section) ? 'location' : undefined}>{link.label}</Link>)}
        <a href="mailto:antti.murtsi@gmail.com">Email Antti</a>
      </div>
    </nav>
  )
}
