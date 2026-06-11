'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ImmoCard from '@/components/ImmoCard'
import { immobilien } from '@/lib/immobilien'
import { useState, useMemo } from 'react'

const FILTER_TYPEN = [
  'Alle',
  'Mehrfamilienhaus',
  'Gemischte Nutzung',
  'Eigentumswohnung',
  'Penthouse',
  'Wohnhaus',
]

export default function ImmobilienPage() {
  const [aktFilter, setAktFilter] = useState('Alle')

  const gefiltert = useMemo(() => {
    const list = aktFilter === 'Alle' ? immobilien : immobilien.filter((i) => i.typ === aktFilter)
    // Verkaufte Objekte ans Ende
    return [...list].sort(
      (a, b) => (a.status === 'Verkauft' ? 1 : 0) - (b.status === 'Verkauft' ? 1 : 0)
    )
  }, [aktFilter])

  const aktive = gefiltert.filter((i) => i.status !== 'Verkauft').length
  const verkauft = gefiltert.filter((i) => i.status === 'Verkauft').length

  return (
    <>
      <Nav />

      {/* ── PAGE HERO ────────────────────────────────────── */}
      <div className="page-hero">
        <div className="eyebrow eyebrow--ondark">Portfolio</div>
        <h1 className="s-title" style={{ color: 'var(--w-90)' }}>
          Aktuelle <em style={{ color: 'var(--bronze-soft)' }}>Immobilien.</em>
        </h1>
        <p className="s-body" style={{ color: 'var(--w-50)' }}>
          Ausgewählte Wohnimmobilien im Rhein-Main-Gebiet — geprüft, dokumentiert und diskret
          vermarktet.
        </p>

        <div style={{ display: 'flex', gap: 10, marginTop: 44, flexWrap: 'wrap' }}>
          {FILTER_TYPEN.map((f) => {
            const anzahl =
              f === 'Alle'
                ? immobilien.filter((i) => i.status !== 'Verkauft').length
                : immobilien.filter((i) => i.typ === f && i.status !== 'Verkauft').length
            return (
              <button
                key={f}
                onClick={() => setAktFilter(f)}
                className={`fpill${f === aktFilter ? ' active' : ''}`}
              >
                {f}
                <span className="count">{anzahl}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── GRID ─────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 'clamp(48px, 6vw, 80px)' }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 36,
            fontWeight: 500,
          }}
        >
          {aktive} {aktive === 1 ? 'Objekt' : 'Objekte'} verfügbar
          {verkauft > 0 && (
            <span style={{ color: 'var(--light)', marginLeft: 10 }}>· {verkauft} verkauft</span>
          )}
        </p>

        {gefiltert.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '90px 0' }}>
            <p className="lead" style={{ marginBottom: 12 }}>
              Aktuell keine Objekte in dieser Kategorie.
            </p>
            <p className="s-body" style={{ margin: '0 auto 36px' }}>
              Viele unserer Objekte werden diskret vermarktet — sprechen Sie uns für
              Off-Market-Angebote direkt an.
            </p>
            <Link href="/kontakt" className="btn btn--primary">
              Anfrage stellen <span className="arr" aria-hidden>→</span>
            </Link>
          </div>
        ) : (
          <div className="immo-grid">
            {gefiltert.map((immo, idx) => (
              <ImmoCard key={immo.id} immo={immo} delay={(idx % 3) * 0.08} />
            ))}
          </div>
        )}
      </section>

      {/* ── OFF-MARKET CTA ───────────────────────────────── */}
      <div className="cta-band">
        <div className="reveal">
          <div className="eyebrow eyebrow--ondark">Off-Market</div>
          <h2 className="s-title s-title--ondark" style={{ marginBottom: 14 }}>
            Weitere Objekte <em>auf Anfrage.</em>
          </h2>
          <p className="s-body s-body--ondark">
            Viele unserer Transaktionen laufen diskret und werden nicht öffentlich inseriert.
          </p>
        </div>
        <Link href="/kontakt" className="btn btn--white">
          Anfrage stellen <span className="arr" aria-hidden>→</span>
        </Link>
      </div>

      <Footer />
    </>
  )
}
