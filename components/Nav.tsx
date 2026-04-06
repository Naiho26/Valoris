'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LogoMark } from './Logo'

export default function Nav() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Startseite' },
    { href: '/immobilien', label: 'Immobilien' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="logo-wrap">
          <LogoMark />
        </Link>

        {/* Desktop nav */}
        <div className="nav-center">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/kontakt" className="nav-btn">Anfrage stellen</Link>

        {/* Hamburger toggle */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          <span style={{ transform: open ? 'rotate(45deg) translate(4px, 5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(4px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ fontWeight: isActive(l.href) ? 600 : 400, color: isActive(l.href) ? 'var(--accent)' : 'var(--navy)' }}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/kontakt" className="mobile-menu-btn" onClick={() => setOpen(false)}>
          Anfrage stellen →
        </Link>
      </div>
    </>
  )
}
