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
            <div><div className="hstat-val">48h</div><div className="hstat-lbl">Ersteinschätzung</div></div>
            <div><div className="hstat-val">4</div><div className="hstat-lbl">Leistungsbereiche</div></div>
            <div><div className="hstat-val">100%</div><div className="hstat-lbl">Persönlich</div></div>
          </div>
        </div>
        <div className="hero-right" style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&fit=crop&auto=format"
            alt="Modernes Wohngebäude"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.72 }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,0.03) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,0.03) 80px)' }} />
          <div className="hero-badge">
            <div className="hb-val">RMG</div>
            <div className="hb-lbl">Fokusregion</div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: 'var(--off2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {[
          { val: '48 h', lbl: 'Ersteinschätzung' },
          { val: '4', lbl: 'Leistungsbereiche' },
          { val: 'RMG', lbl: 'Fokusregion' },
          { val: '100%', lbl: 'Persönliche Betreuung' },
        ].map((s, i) => (
          <div key={i} className="reveal" style={{ padding: '36px 48px', borderRight: i < 3 ? '1px solid var(--border)' : 'none', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '36px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: '6px' }}>{s.val}</div>
            <div style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 400 }}>{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* LEISTUNGEN */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="section-head reveal">
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
              img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80&fit=crop&auto=format',
              text: 'Fundierte Prüfung von Wohnungen, Mehrfamilienhäusern und Entwicklungsobjekten — zügig und strukturiert.',
              delay: '0s',
            },
            {
              num: '02', title: 'Vermarktung',
              img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&fit=crop&auto=format',
              text: 'Marktgerechte Positionierung, professionelles Exposé und gezielte Käuferansprache für Ihren Verkaufserfolg.',
              delay: '0.1s',
            },
            {
              num: '03', title: 'Hausverwaltung',
              img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80&fit=crop&auto=format',
              text: 'Strukturierte Betreuung mit verlässlichen Abläufen, Werterhalt und klarer Kommunikation.',
              delay: '0.2s',
            },
            {
              num: '04', title: 'Entwicklung',
              img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop&auto=format',
              text: 'Weiterentwicklung von Bestandsimmobilien – von der Analyse über die Sanierungsstrategie bis zur wertsteigernden Umsetzung.',
              delay: '0.3s',
            },
          ].map((c) => (
            <div key={c.num} className="lcard img-hover reveal" style={{ padding: 0, overflow: 'hidden', transitionDelay: c.delay }}>
              <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '28px 28px 32px' }}>
                <div className="lcard-num">{c.num}</div>
                <h3 className="lcard-title">{c.title}</h3>
                <p className="lcard-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {['Ankauf', 'Vermarktung', 'Hausverwaltung', 'Entwicklung', 'Rhein-Main-Gebiet', 'Wohnimmobilien',
            'Ankauf', 'Vermarktung', 'Hausverwaltung', 'Entwicklung', 'Rhein-Main-Gebiet', 'Wohnimmobilien'].map((item, i) => (
            <span key={i}><span className="ticker-item">{item}</span><span className="ticker-sep">·</span></span>
          ))}
        </div>
      </div>

      {/* WARUM */}
      <section className="warum">
        <div className="warum-inner">
          <div className="warum-visual">
            <div className="wv-card-dark reveal">
              <div className="wv-big-val">48 h</div>
              <div className="wv-big-lbl">Ersteinschätzung garantiert</div>
            </div>
            <div className="wv-card reveal" style={{ padding: 0, overflow: 'hidden', minHeight: '160px', transitionDelay: '0.1s' }}>
              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&q=80&fit=crop&auto=format"
                alt="Immobilie"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="wv-card reveal" style={{ padding: 0, overflow: 'hidden', minHeight: '160px', transitionDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80&fit=crop&auto=format"
                alt="Entwicklung"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
          <div>
            <div className="eyebrow reveal">Warum Valoris</div>
            <h2 className="s-title reveal" style={{ marginBottom: '12px', transitionDelay: '0.05s' }}>
              Persönlich.<br />Verlässlich.<br />Erfahren.
            </h2>
            <p className="s-body reveal" style={{ transitionDelay: '0.1s' }}>
              VALORIS verbindet Marktverständnis, Entwicklungskompetenz und persönliche Betreuung — für Transaktionen, die passen.
            </p>
            <div className="warum-points">
              {[
                { title: 'Schnelle Ersteinschätzung', text: 'Fundierte Markteinschätzung innerhalb von 48 Stunden — kostenfrei und unverbindlich.', delay: '0.15s', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2' },
                { title: 'Fokus auf Wohnimmobilien', text: 'Spezialisierung auf Wohnungen, MFH und Bestandsobjekte im Rhein-Main-Gebiet.', delay: '0.2s', d: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10' },
                { title: 'Starkes Partnernetzwerk', text: 'Architektur, Bau, Handwerk und Vermarktung aus einem verlässlichen Netzwerk.', delay: '0.25s', d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75 M9 7a4 4 0 100 8 4 4 0 000-8z' },
              ].map((p, i) => (
                <div key={i} className="wpoint reveal" style={{ transitionDelay: p.delay }}>
                  <div className="wpoint-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={p.d} />
                    </svg>
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

      {/* FULLWIDTH CTA IMAGE */}
      <div style={{ height: '440px', position: 'relative', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=85&fit=crop&auto=format"
          alt="Premium Wohnimmobilie"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,30,53,0.9) 0%, rgba(15,30,53,0.55) 50%, rgba(15,30,53,0.1) 100%)',
          display: 'flex', alignItems: 'center', padding: '0 72px',
        }}>
          <div className="reveal">
            <div className="eyebrow" style={{ color: '#93c5fd' }}>Jetzt anfragen</div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '44px', fontWeight: 700, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '20px', marginTop: '10px' }}>
              Immobilie anbieten?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '15px', fontWeight: 300, maxWidth: '400px', marginBottom: '32px', lineHeight: 1.8 }}>
              Schnelle, diskrete Abwicklung — direkte Ansprechpartner von der ersten Einschätzung bis zum Abschluss.
            </p>
            <Link href="/kontakt" className="btn-white">Kontakt aufnehmen →</Link>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .img-hover img { transition: transform 0.5s ease; }
        .img-hover:hover img { transform: scale(1.05); }
      `}</style>
    </>
  )
}
