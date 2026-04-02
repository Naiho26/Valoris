import Link from 'next/link'
import { LogoMarkFooter } from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LogoMarkFooter />
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '15px', fontWeight: 700, color: '#fff', letterSpacing: '0.06em' }}>VALORIS</div>
              <div style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Projektentwicklung</div>
            </div>
          </div>
          <p className="footer-desc">Ihr Partner für Ankauf, Vermarktung, Hausverwaltung und Entwicklung von Wohnimmobilien im Rhein-Main-Gebiet.</p>
        </div>
        <div>
          <div className="footer-col-head">Navigation</div>
          <div className="footer-links">
            <Link href="/">Startseite</Link>
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
        <div>
          <div className="footer-col-head">Kontakt</div>
          <div className="footer-contact-item">
            <div className="fc-label">Telefon</div>
            <div className="fc-val">+49 155 633 44 652</div>
          </div>
          <div className="footer-contact-item">
            <div className="fc-label">E-Mail</div>
            <div className="fc-val"><a href="mailto:kontakt@valoris-projektentwicklung.de">kontakt@valoris-projektentwicklung.de</a></div>
          </div>
          <div className="footer-contact-item">
            <div className="fc-label">Region</div>
            <div className="fc-val">Hessen, Rhein-Main-Gebiet</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} VALORIS Projektentwicklung. Alle Rechte vorbehalten.</span>
        <div className="footer-legal">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
