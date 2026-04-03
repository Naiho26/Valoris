import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { immobilien } from '@/lib/immobilien'

const statusColor: Record<string, string> = {
  'Im Verkauf': '#16a34a',
  'Reserviert': '#d97706',
  'Verkauft': '#6b7280',
}

function formatPreis(preis: string): string {
  const num = parseInt(preis.replace(/\D/g, ''), 10)
  if (isNaN(num)) return preis
  return num.toLocaleString('de-DE')
}

export default function ImmobilienPage() {
  const aktiv = immobilien.filter(i => i.status !== 'Verkauft')

  return (
    <>
      <Nav />

      {/* HERO */}
      <div style={{ background: 'var(--navy)', padding: '80px 60px 64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="eyebrow" style={{ color: '#93c5fd', marginBottom: '12px' }}>Portfolio</div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', marginBottom: '16px' }}>
          Aktuelle Immobilien
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '15px', fontWeight: 300, maxWidth: '480px', lineHeight: 1.8 }}>
          Ausgewählte Wohnimmobilien im Rhein-Main-Gebiet — geprüft, dokumentiert und diskret vermarktet.
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '36px', flexWrap: 'wrap' }}>
          {['Alle', 'Mehrfamilienhaus', 'Eigentumswohnung', 'Penthouse', 'Wohnhaus'].map(f => (
            <span key={f} style={{
              padding: '7px 18px', borderRadius: '100px', fontSize: '12px', fontWeight: 400,
              background: f === 'Alle' ? '#fff' : 'rgba(255,255,255,0.08)',
              color: f === 'Alle' ? 'var(--navy)' : 'rgba(255,255,255,0.6)',
              border: f === 'Alle' ? 'none' : '1px solid rgba(255,255,255,0.12)',
              letterSpacing: '0.03em', cursor: 'pointer',
            }}>{f}</span>
          ))}
        </div>
      </div>

      {/* CARDS GRID */}
      <section style={{ padding: '72px 60px', background: 'var(--off)' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '32px', fontWeight: 500 }}>
          {aktiv.length} Objekte verfügbar
        </p>
        <div className='immo-grid' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {aktiv.map(immo => (
            <Link key={immo.id} href={`/immobilien/${immo.slug}`} className='reveal' style={{ textDecoration: 'none', display: 'block' }}>
              <div className="immo-card" style={{
                background: '#fff', borderRadius: '12px', border: '1px solid var(--border)',
                overflow: 'hidden', transition: 'all 0.25s', cursor: 'pointer',
              }}>
                {/* Image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={immo.bilder[0]}
                    alt={immo.titel}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  />
                  <div style={{
                    position: 'absolute', top: '14px', left: '14px',
                    background: '#fff', borderRadius: '100px', padding: '4px 12px',
                    fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em',
                    color: statusColor[immo.status], display: 'flex', alignItems: 'center', gap: '6px',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: statusColor[immo.status], display: 'inline-block' }} />
                    {immo.status}
                  </div>
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: 'rgba(15,30,53,0.75)', borderRadius: '100px', padding: '4px 12px',
                    fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.85)',
                  }}>
                    {immo.typ}
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '24px 24px 28px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px', fontWeight: 400 }}>
                    {immo.plz} {immo.stadt}
                  </div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '17px', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                    {immo.titel}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px', fontWeight: 300 }}>
                    {immo.kurzbeschreibung}
                  </p>

                  {/* Stats */}
                  <div style={{ display: 'flex', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '16px', marginBottom: '18px' }}>
                    {[
                      { label: 'Fläche', val: `${immo.flaeche} m²` },
                      { label: 'Zimmer', val: String(immo.zimmer) },
                      { label: 'Baujahr', val: immo.baujahr },
                    ].map((s, i) => (
                      <div key={i} style={{ flex: 1, borderRight: i < 2 ? '1px solid var(--border)' : 'none', textAlign: 'center', padding: '0 8px' }}>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--navy)', lineHeight: 1 }}>{s.val}</div>
                        <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '3px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2px' }}>Kaufpreis</div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--navy)' }}>
                        € {formatPreis(immo.preis)}
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '12px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.04em' }}>
                      Details →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div>
          <div className="eyebrow" style={{ color: '#93c5fd' }}>Off-Market</div>
          <h2 className="s-title" style={{ color: '#fff', fontSize: '36px', marginBottom: '10px' }}>Weitere Objekte auf Anfrage</h2>
          <p className="s-body" style={{ color: 'rgba(255,255,255,0.45)' }}>Viele unserer Transaktionen laufen diskret und werden nicht öffentlich inseriert.</p>
        </div>
        <Link href="/kontakt" className="btn-white">Anfrage stellen</Link>
      </div>

      <Footer />

      <style>{`
        .immo-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); border-color: var(--border2); }
        .immo-card:hover img { transform: scale(1.04); }
      `}</style>
    </>
  )
}
