export const metadata = {
  title: 'Kontakt | Immobilie verkaufen Rhein-Main | VALORIS',
  description: 'Jetzt Immobilie anbieten oder Kontakt aufnehmen. Schnelle Ersteinschätzung innerhalb von 48 Stunden.',
}

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function Kontakt() {
  return (
    <>
      <Nav />
      <div className="kontakt-grid">
        <div className="k-left">
          <div className="eyebrow" style={{ color: '#93c5fd', marginBottom: '16px' }}>Jetzt anfragen</div>
          <h1 className="s-title" style={{ color: '#fff', fontSize: '42px', marginBottom: '20px' }}>Kontakt<br />aufnehmen.</h1>
          <p className="s-body" style={{ color: 'rgba(255,255,255,0.38)', marginBottom: '52px', fontWeight: 300 }}>
            Wir melden uns in der Regel innerhalb von 48 Stunden — diskret und direkt.
          </p>
          <div>
            {[
              {
                label: 'Telefon', val: '+49 155 633 44 652',
                icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.1 2.9 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.41-.41a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              },
              {
                label: 'E-Mail', val: 'kontakt@valoris-projektentwicklung.de',
                icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>
              },
              {
                label: 'Region', val: 'Hessen, Rhein-Main-Gebiet',
                icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>
              },
            ].map((item) => (
              <div key={item.label} className="k-info-item">
                <div className="k-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <div className="k-lbl">{item.label}</div>
                  <div className="k-val">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="k-right">
          <h2 className="k-form-title">Ihre Anfrage</h2>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  )
}
