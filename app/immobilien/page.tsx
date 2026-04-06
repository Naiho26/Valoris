'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { immobilien } from '@/lib/immobilien'
import { useState, useMemo } from 'react'

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

const FILTER_TYPEN = ['Alle', 'Mehrfamilienhaus', 'Gemischte Nutzung', 'Eigentumswohnung', 'Penthouse', 'Wohnhaus']

export default function ImmobilienPage() {
  const [aktFilter, setAktFilter] = useState('Alle')

  const gefiltert = useMemo(() => {
    if (aktFilter === 'Alle') return immobilien
    return immobilien.filter(i => i.typ === aktFilter)
  }, [aktFilter])

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

        {/* FILTER PILLS — Zähler nur aktive (nicht Verkauft) */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '36px', flexWrap: 'wrap' }}>
          {FILTER_TYPEN.map(f => {
            const aktiv = f === aktFilter
            const anzahl = f === 'Alle'
              ? immobilien.filter(i => i.status !== 'Verkauft').length
              : immobilien.filter(i => i.typ === f && i.status !== 'Verkauft').length
            return (
              <button
                key={f}
                onClick={() => setAktFilter(f)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '100px',
                  fontSize: '12px',
                  fontWeight: aktiv ? 500 : 400,
                  background: aktiv ? '#fff' : 'rgba(255,255,255,0.08)',
                  color: aktiv ? 'var(--navy)' : 'rgba(255,255,255,0.65)',
                  border: aktiv ? '2px solid #fff' : '1px solid rgba(255,255,255,0.15)',
                  letterSpacing: '0.03em',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {f}
                <span style={{
                  background: aktiv ? 'var(--navy)' : 'rgba(255,255,255,0.18)',
                  color: aktiv ? '#fff' : 'rgba(255,255,255,0.7)',
                  borderRadius: '100px',
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '1px 7px',
                  minWidth: '20px',
                  textAlign: 'center',
                }}>
                  {anzahl}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* GRID */}
      <section style={{ padding: '56px 60px 80px', background: 'var(--off)' }}>
        {/* Counter */}
        {(() => {
          const aktive = gefiltert.filter(i => i.status !== 'Verkauft').length
          const verkauft = gefiltert.filter(i => i.status === 'Verkauft').length
          return (
            <p style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '28px', fontWeight: 500 }}>
              {aktive} {aktive === 1 ? 'Objekt' : 'Objekte'} verfügbar
              {verkauft > 0 && <span style={{ color: 'var(--border2)', marginLeft: '8px' }}>· {verkauft} verkauft</span>}
            </p>
          )
        })()}

        {gefiltert.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--muted)' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🏠</div>
            <p style={{ fontSize: '16px', fontWeight: 400 }}>Aktuell keine Objekte in dieser Kategorie.</p>
            <p style={{ fontSize: '14px', marginTop: '8px', fontWeight: 300 }}>Bitte melden Sie sich für Off-Market-Angebote direkt bei uns.</p>
            <Link href="/kontakt" className="btn-white" style={{ display: 'inline-block', marginTop: '24px', background: 'var(--navy)', color: '#fff', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
              Anfrage stellen
            </Link>
          </div>
        ) : (
          <div className="immo-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {gefiltert.map((immo, idx) => {
              const verkauft = immo.status === 'Verkauft'
              return (
                <Link
                  key={immo.id}
                  href={`/immobilien/${immo.slug}`}
                  className={`reveal${verkauft ? ' card-verkauft' : ''}`}
                  style={{ textDecoration: 'none', display: 'block', transitionDelay: `${(idx % 3) * 0.08}s` }}
                >
                  <div
                    className={`immo-card${verkauft ? ' immo-card-sold' : ''}`}
                    style={{
                      background: verkauft ? '#f5f5f7' : '#fff',
                      borderRadius: '12px',
                      border: `1px solid ${verkauft ? 'var(--border)' : 'var(--border)'}`,
                      overflow: 'hidden',
                      transition: 'all 0.25s',
                      cursor: 'pointer',
                      opacity: verkauft ? 0.72 : 1,
                    }}
                  >
                    {/* IMAGE */}
                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                      <img
                        src={immo.bilder[0]}
                        alt={immo.titel}
                        style={{
                          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                          transition: 'transform 0.5s ease',
                          filter: verkauft ? 'grayscale(40%)' : 'none',
                        }}
                      />

                      {/* Status Badge */}
                      <div style={{ position: 'absolute', top: '14px', left: '14px', background: '#fff', borderRadius: '100px', padding: '4px 12px', fontSize: '11px', fontWeight: 500, color: statusColor[immo.status], display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: statusColor[immo.status], display: 'inline-block' }} />
                        {immo.status}
                      </div>

                      {/* Typ Badge */}
                      <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(15,30,53,0.75)', borderRadius: '100px', padding: '4px 12px', fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.85)' }}>
                        {immo.typ}
                      </div>

                      {/* Verkauft diagonal banner */}
                      {verkauft && (
                        <div style={{
                          position: 'absolute', top: '28px', right: '-32px',
                          background: '#6b7280',
                          color: '#fff',
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          padding: '5px 48px',
                          transform: 'rotate(45deg)',
                          transformOrigin: 'center',
                          pointerEvents: 'none',
                        }}>
                          Verkauft
                        </div>
                      )}
                    </div>

                    {/* BODY */}
                    <div style={{ padding: '24px 24px 28px' }}>
                      <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px', fontWeight: 400 }}>
                        {immo.plz} {immo.stadt}
                      </div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '17px', fontWeight: 600, color: verkauft ? '#6b7280' : 'var(--navy)', marginBottom: '10px', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                        {immo.titel}
                      </h3>
                      <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px', fontWeight: 300 }}>
                        {immo.kurzbeschreibung}
                      </p>

                      {/* STATS */}
                      <div style={{ display: 'flex', borderTop: '1px solid var(--border)', paddingTop: '16px', marginBottom: '18px' }}>
                        {[
                          { label: 'Fläche', val: `${immo.flaeche} m²` },
                          { label: 'Zimmer', val: String(immo.zimmer) },
                          { label: 'Baujahr', val: immo.baujahr },
                        ].map((s, i) => (
                          <div key={i} style={{ flex: 1, borderRight: i < 2 ? '1px solid var(--border)' : 'none', textAlign: 'center', padding: '0 8px' }}>
                            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '15px', fontWeight: 600, color: verkauft ? '#9ca3af' : 'var(--navy)', lineHeight: 1 }}>{s.val}</div>
                            <div style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '3px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* PRICE */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2px' }}>
                            {verkauft ? 'Erzielter Preis' : 'Kaufpreis'}
                          </div>
                          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '20px', fontWeight: 700, color: verkauft ? '#9ca3af' : 'var(--navy)' }}>
                            € {formatPreis(immo.preis)}
                          </div>
                        </div>
                        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '12px', fontWeight: 500, color: verkauft ? 'var(--muted)' : 'var(--accent)', letterSpacing: '0.04em' }}>
                          Details →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
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
        .immo-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); border-color: var(--border2) !important; }
        .immo-card:hover img { transform: scale(1.04); }
        .immo-card-sold:hover { transform: none !important; box-shadow: none !important; }
        .immo-card-sold:hover img { transform: none !important; }
        @media (max-width: 900px) { .immo-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .immo-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
