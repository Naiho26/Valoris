'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoMark } from './Logo'

export default function Nav() {
  const path = usePathname()
  return (
    <nav className="nav">
      <Link href="/" className="logo-wrap">
        <LogoMark />
        <div className="logo-text-block">
          <span className="logo-name">VALORIS</span>
          <span className="logo-sub">Projektentwicklung</span>
        </div>
      </Link>
      <div className="nav-center">
        <Link href="/" className={path === '/' ? 'active' : ''}>Startseite</Link>
        <Link href="/ueber-uns" className={path === '/ueber-uns' ? 'active' : ''}>Über uns</Link>
        <Link href="/kontakt" className={path === '/kontakt' ? 'active' : ''}>Kontakt</Link>
      </div>
      <Link href="/kontakt" className="nav-btn">Anfrage stellen</Link>
    </nav>
  )
}
