import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-chip">
            <div className="hero-chip-dot" />
            <span className="hero-chip-text">Rhein-Main-Gebiet · Wohnimmobilien</span>
          </div>
          <h1 className="hero-h1">
            Ankauf,<br />
            Vermarktung &amp;<br />
            <span>Entwicklung.</span>
          </h1>
          <p className="hero-p">
            VALORIS begleitet Eigentümer, Investoren und Verkäufer mit Marktkenntnis, klaren Prozessen und persönlicher Betreuung.
          </p>
          <div className="hero-btns">
            <Link href="/kontakt" className="btn-white">Immobilie anbieten</Link>
            <Link href="/ueber-uns" className="btn-ghost-w">Mehr erfahren →</Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hstat-val">48h</div>
              <div className="hstat-lbl">Ersteinschätzung</div>
            </div>
            <div>
              <div className="hstat-val">4</div>
              <div className="hstat-lbl">Leistungsbereiche</div>
            </div>
            <div>
              <div className="hstat-val">100%</div>
              <div className="hstat-lbl">Persönlich</div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="himg">
            <span className="himg-label">Referenzobjekte</span>
            <div className="hero-badge">
              <div className="hb-val">RMG</div>
              <div className="hb-lbl">Fokusregion</div>
            </div>
          </div>
          <div className="himg-row">
            <div className="himg-half">
              <span className="himg-label">Ankauf</span>
            </div>
            <div className="himg-half">
              <span className="himg-label">Entwicklung</span>
            </div>
          </div>
        </div>
      </div>

      {/* LEISTUNGEN */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">Unsere Leistungen</div>
            <h2 className="s-title">Alles aus<br />einer Hand.</h2>
          </div>
          <p className="s-body">Wir begleiten Immobilien durch ihren gesamten Lebenszyklus — vom Ankauf bis zur strategischen Weiterentwicklung.</p>
        </div>
        <div className="l-grid">
          {[
            {
              num: '01', title: 'Ankauf',
              text: 'Fundierte Prüfung von Wohnungen, Mehrfamilienhäusern und Entwicklungsobjekten — zügig und strukturiert.',
              icon: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>,
            },
            {
              num: '02', title: 'Vermarktung',
              text: 'Marktgerechte Positionierung, professionelles Exposé und gezielte Käuferansprache für Ihren Verkaufserfolg.',
              icon: <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>,
            },
            {
              num: '03', title: 'Hausverwaltung',
              text: 'Strukturierte Betreuung mit verlässlichen Abläufen, Werterhalt und klarer Kommunikation.',
              icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>,
            },
            {
              num: '04', title: 'Entwicklung',
              text: 'Von der Analyse über die Sanierungsstrategie bis zur wertsteigernden Umsetzung.',
              icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>,
            },
          ].map((c) => (
            <div key={c.num} className="lcard">
              <div className="lcard-num">{c.num}</div>
              <div className="lcard-icon">
                <svg viewBox="0 0 24 24">{c.icon}</svg>
              </div>
              <h3 className="lcard-title">{c.title}</h3>
              <p className="lcard-text">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {['Ankauf','Vermarktung','Hausverwaltung','Entwicklung','Rhein-Main-Gebiet','Wohnimmobilien',
            'Ankauf','Vermarktung','Hausverwaltung','Entwicklung','Rhein-Main-Gebiet','Wohnimmobilien'].map((item, i) => (
            <span key={i}>
              <span className="ticker-item">{item}</span>
              <span className="ticker-sep">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* WARUM */}
      <section className="warum">
        <div className="warum-inner">
          <div className="warum-visual">
            <div className="wv-card-dark">
              <div className="wv-big-val">48 h</div>
              <div className="wv-big-lbl">Ersteinschätzung garantiert</div>
            </div>
            <div className="wv-card">
              <div className="wv-val">4</div>
              <div className="wv-lbl">Leistungsbereiche</div>
            </div>
            <div className="wv-card">
              <div className="wv-val">RMG</div>
              <div className="wv-lbl">Fokusregion</div>
            </div>
          </div>
          <div>
            <div className="eyebrow">Warum Valoris</div>
            <h2 className="s-title" style={{ marginBottom: '12px' }}>Persönlich.<br />Verlässlich.<br />Erfahren.</h2>
            <p className="s-body">VALORIS verbindet Marktverständnis, Entwicklungskompetenz und persönliche Betreuung — für Transaktionen, die passen.</p>
            <div className="warum-points">
              {[
                {
                  title: 'Schnelle Ersteinschätzung',
                  text: 'Rückmeldung in der Regel innerhalb von 48 Stunden — direkt und ohne Umwege.',
                  icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>
                },
                {
                  title: 'Fokus auf Wohnimmobilien',
                  text: 'Spezialisierung auf Wohnungen, MFH und Bestandsobjekte im Rhein-Main-Gebiet.',
                  icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>
                },
                {
                  title: 'Starkes Partnernetzwerk',
                  text: 'Architektur, Bau, Handwerk und Vermarktung aus einem verlässlichen Netzwerk.',
                  icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>
                },
              ].map((p, i) => (
                <div key={i} className="wpoint">
                  <div className="wpoint-icon">
                    <svg viewBox="0 0 24 24">{p.icon}</svg>
                  </div>
                  <div>
                    <div className="wpoint-title">{p.title}</div>
                    <div className="wpoint-text">{p.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div>
          <div className="eyebrow" style={{ color: '#93c5fd' }}>Jetzt anfragen</div>
          <h2 className="s-title" style={{ color: '#fff', fontSize: '36px', marginBottom: '10px' }}>Immobilie anbieten?</h2>
          <p className="s-body" style={{ color: 'rgba(255,255,255,0.45)' }}>Schnelle, diskrete Abwicklung — direkte Ansprechpartner von der ersten Einschätzung bis zum Abschluss.</p>
        </div>
        <Link href="/kontakt" className="btn-white">Kontakt aufnehmen →</Link>
      </div>

      <Footer />
    </>
  )
}
