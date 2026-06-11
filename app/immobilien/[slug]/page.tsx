'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { immobilien } from '@/lib/immobilien'
import { formatPreis } from '@/components/ImmoCard'
import { notFound } from 'next/navigation'

const statusColor: Record<string, string> = {
  'Im Verkauf': '#3e7a4b',
  'Reserviert': '#b07c2a',
  'Verkauft': '#7a8090',
}

/* ── Lightbox ──────────────────────────────────────────── */
function Lightbox({
  bilder,
  startIndex,
  onClose,
}: {
  bilder: string[]
  startIndex: number
  onClose: () => void
}) {
  const [idx, setIdx] = useState(startIndex)
  const prev = useCallback(() => setIdx((i) => (i - 1 + bilder.length) % bilder.length), [bilder.length])
  const next = useCallback(() => setIdx((i) => (i + 1) % bilder.length), [bilder.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const navBtn: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '50%',
    width: 52,
    height: 52,
    color: '#fff',
    fontSize: 24,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(7, 12, 22, 0.97)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={onClose}
        style={{ ...navBtn, top: 24, right: 24, transform: 'none', width: 44, height: 44, fontSize: 18 }}
        aria-label="Schließen"
      >
        ✕
      </button>
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)',
          fontSize: 13,
          fontWeight: 300,
          letterSpacing: '0.12em',
        }}
      >
        {idx + 1} / {bilder.length}
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '82vh' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bilder[idx]}
          alt={`Foto ${idx + 1}`}
          style={{ maxWidth: '90vw', maxHeight: '82vh', objectFit: 'contain', display: 'block' }}
        />
      </div>
      {bilder.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); prev() }} style={{ ...navBtn, left: 20 }} aria-label="Vorheriges Bild">‹</button>
          <button onClick={(e) => { e.stopPropagation(); next() }} style={{ ...navBtn, right: 20 }} aria-label="Nächstes Bild">›</button>
          <div
            style={{
              position: 'absolute',
              bottom: 22,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 8,
              maxWidth: '90vw',
              overflowX: 'auto',
              padding: 8,
            }}
          >
            {bilder.map((b, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                style={{
                  width: 58,
                  height: 42,
                  flexShrink: 0,
                  overflow: 'hidden',
                  padding: 0,
                  border: i === idx ? '2px solid #c9ad7f' : '2px solid rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                  background: 'none',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ── Galerie ───────────────────────────────────────────── */
function Gallery({
  bilder,
  titel,
  hatEchteBilder,
  stadt,
  bildPosition,
}: {
  bilder: string[]
  titel: string
  hatEchteBilder?: boolean
  stadt: string
  bildPosition?: string
}) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const count = bilder.length
  const cellBase: React.CSSProperties = { overflow: 'hidden', position: 'relative', cursor: 'zoom-in' }
  const imgBase: React.CSSProperties = {
    objectFit: 'cover',
    objectPosition: bildPosition || 'center',
    transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
  }

  const symbolBadge = (city: string) => (
    <div
      style={{
        position: 'absolute',
        bottom: 14,
        left: 14,
        background: 'rgba(11,19,34,0.78)',
        padding: '6px 14px',
        fontSize: 10.5,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.75)',
        fontWeight: 400,
      }}
    >
      Symbolfoto · Lage {city}
    </div>
  )

  return (
    <>
      {lightboxIdx !== null && (
        <Lightbox bilder={bilder} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}

      {count === 1 && (
        <div
          style={{ ...cellBase, height: 'clamp(300px,46vw,540px)' }}
          onClick={() => setLightboxIdx(0)}
        >
          <Image src={bilder[0]} alt={titel} fill sizes="100vw" style={imgBase} className="gallery-img" />
          {!hatEchteBilder && symbolBadge(stadt)}
        </div>
      )}

      {count === 2 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 3,
            height: 'clamp(300px,46vw,540px)',
            background: 'var(--navy-deep)',
          }}
        >
          {bilder.map((b, i) => (
            <div key={i} style={cellBase} onClick={() => setLightboxIdx(i)}>
              <Image src={b} alt={`${titel} ${i + 1}`} fill sizes="(max-width: 900px) 100vw, 50vw" style={imgBase} className="gallery-img" />
              {i === 0 && !hatEchteBilder && symbolBadge(stadt)}
            </div>
          ))}
        </div>
      )}

      {count >= 3 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: 3,
            height: 'clamp(300px,46vw,540px)',
            background: 'var(--navy-deep)',
          }}
        >
          <div style={cellBase} onClick={() => setLightboxIdx(0)}>
            <Image src={bilder[0]} alt={titel} fill sizes="(max-width: 900px) 100vw, 60vw" style={imgBase} className="gallery-img" />
            {!hatEchteBilder && symbolBadge(stadt)}
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 3, overflow: 'hidden' }}>
            {bilder.slice(1, 3).map((b, i) => (
              <div key={i} style={cellBase} onClick={() => setLightboxIdx(i + 1)}>
                <Image src={b} alt={`${titel} ${i + 2}`} fill sizes="(max-width: 900px) 100vw, 40vw" style={imgBase} className="gallery-img" />
                {i === 1 && count > 3 && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(11,19,34,0.62)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: 17,
                        color: '#fff',
                        letterSpacing: '0.02em',
                      }}
                    >
                      +{count - 3} weitere
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {count > 1 && (
        <div
          style={{
            background: 'var(--paper-2)',
            borderBottom: '1px solid var(--line)',
            padding: '11px var(--pad-x)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span style={{ fontSize: 12.5, color: 'var(--muted)', fontWeight: 300 }}>
            {count} Fotos — Klicken zum Vergrößern
          </span>
        </div>
      )}
      <style>{`.gallery-img:hover { transform: scale(1.03); }`}</style>
    </>
  )
}

/* ── Seite ─────────────────────────────────────────────── */
export default function ImmobilieDetail({ params }: { params: { slug: string } }) {
  const immo = immobilien.find((i) => i.slug === params.slug)
  if (!immo) notFound()

  const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(immo.plz + ' ' + immo.stadt)}`
  const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(immo.plz + ' ' + immo.stadt)}&output=embed&z=14`
  const verkauft = immo.status === 'Verkauft'

  const keyFacts = [
    { label: 'Wohnfläche', val: `${immo.flaeche} m²` },
    ...(immo.flaeche_gewerbe ? [{ label: 'Gewerbefläche', val: `${immo.flaeche_gewerbe} m²` }] : []),
    { label: immo.einheiten ? 'Einheiten' : 'Zimmer', val: immo.einheiten || String(immo.zimmer) },
    { label: 'Baujahr', val: immo.baujahr },
    ...(immo.etage ? [{ label: 'Etage', val: immo.etage }] : []),
    ...(immo.grundstueck ? [{ label: 'Grundstück', val: `${immo.grundstueck} m²` }] : []),
    ...(immo.jahresmiete ? [{ label: 'Jahresmiete', val: `${immo.jahresmiete} € p. a.` }] : []),
  ]

  return (
    <>
      <Nav />

      {/* Breadcrumbs */}
      <div className="crumbs">
        <Link href="/">Start</Link>
        <span className="sep">›</span>
        <Link href="/immobilien">Immobilien</Link>
        <span className="sep">›</span>
        <span className="here">{immo.titel}</span>
      </div>

      <Gallery
        bilder={immo.bilder}
        titel={immo.titel}
        hatEchteBilder={immo.hatEchteBilder}
        stadt={immo.stadt}
        bildPosition={immo.bildPosition}
      />

      <div className="detail-grid">
        {/* ── LEFT ── */}
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                border: `1px solid ${statusColor[immo.status]}40`,
                background: `${statusColor[immo.status]}12`,
                color: statusColor[immo.status],
                padding: '6px 16px',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: statusColor[immo.status] }} />
              {immo.status}
            </span>
            <span
              style={{
                background: 'var(--bronze-tint)',
                color: 'var(--bronze-deep)',
                padding: '6px 16px',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {immo.typ}
            </span>
          </div>

          <h1 className="d-h1">{immo.titel}</h1>
          <p className="d-sub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {immo.plz} {immo.stadt} · {immo.adresse}
          </p>

          <div className="facts-grid">
            {keyFacts.map((f, i) => (
              <div key={i}>
                <div className="v">{f.val}</div>
                <div className="l">{f.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 className="d-section-title">Objektbeschreibung</h2>
            <div className="d-prose">
              {immo.beschreibung.split('\n\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 className="d-section-title">Ausstattung & Merkmale</h2>
            <div className="feat-grid">
              {immo.ausstattung.map((item, i) => (
                <div key={i} className="feat">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--bronze-deep)" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 56 }}>
            <h2 className="d-section-title">Lage & Umgebung</h2>
            <div style={{ overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 14 }}>
              <iframe
                src={mapsEmbed}
                width="100%"
                height="380"
                style={{ border: 'none', display: 'block' }}
                loading="lazy"
                title="Lage der Immobilie"
              />
            </div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: 11 }}>
              In Google Maps öffnen <span aria-hidden>→</span>
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: 36 }}>
            <div className="note-card">
              <div className="head">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Haftungshinweis
              </div>
              <p>
                Alle Angaben sind ohne Gewähr und basieren ausschließlich auf Informationen, die uns
                vom Verkäufer oder dessen Erfüllungsgehilfen zur Verfügung gestellt wurden. Wir
                übernehmen keine Gewähr für die Vollständigkeit, Richtigkeit und Aktualität der vom
                Auftraggeber bestätigten Angaben. Eine weitergehende Haftung ist im Rahmen unserer
                AGB ausgeschlossen.
              </p>
            </div>
            <div className="note-card note-card--bronze">
              <div className="head">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--bronze-deep)" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
                Provisionshinweis
              </div>
              <p>
                Bei erfolgreichem Abschluss fällt eine Käuferprovision in Höhe von{' '}
                <strong>5,95 % inkl. MwSt.</strong> auf den notariell beurkundeten Kaufpreis an. Die
                Provision ist mit der notariellen Beurkundung des Kaufvertrages zur Zahlung fällig.
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT (sticky) ── */}
        <div className="detail-side" style={{ position: 'sticky', top: 'calc(var(--nav-h) + 20px)' }}>
          <div className="price-card">
            <div className="lbl">{verkauft ? 'Erzielter Preis' : 'Kaufpreis'}</div>
            <div className="price">{formatPreis(immo.preis)} €</div>

            <div className="price-rows">
              {[
                { label: 'Objekttyp', val: immo.typ },
                { label: 'Lage', val: `${immo.plz} ${immo.stadt}` },
                { label: 'Wohnfläche', val: `ca. ${immo.flaeche} m²` },
                ...(immo.flaeche_gewerbe ? [{ label: 'Gewerbefläche', val: `ca. ${immo.flaeche_gewerbe} m²` }] : []),
                ...(immo.etage ? [{ label: 'Etage', val: immo.etage }] : []),
                { label: immo.einheiten ? 'Einheiten' : 'Zimmer', val: immo.einheiten || String(immo.zimmer) },
                { label: 'Baujahr', val: immo.baujahr },
                ...(immo.grundstueck ? [{ label: 'Grundstück', val: `ca. ${immo.grundstueck} m²` }] : []),
                ...(immo.jahresmiete ? [{ label: 'Jahresmiete', val: `${immo.jahresmiete} € p. a.` }] : []),
              ].map((r, i) => (
                <div key={i}>
                  <span className="l">{r.label}</span>
                  <span className="v">{r.val}</span>
                </div>
              ))}
            </div>

            {!verkauft ? (
              <>
                <Link
                  href={`/kontakt?objekt=${encodeURIComponent(immo.titel)}`}
                  className="btn btn--white"
                  style={{ width: '100%', marginBottom: 12 }}
                >
                  Anfrage stellen <span className="arr" aria-hidden>→</span>
                </Link>
                <a href="tel:+4915563344652" className="btn btn--outline-w" style={{ width: '100%' }}>
                  +49 155 633 44 652
                </a>
              </>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '18px 16px',
                  border: '1px solid var(--line-dark)',
                }}
              >
                <div style={{ fontSize: 13, color: 'var(--w-50)', fontWeight: 300, marginBottom: 8 }}>
                  Dieses Objekt wurde erfolgreich vermittelt.
                </div>
                <Link href="/kontakt" className="text-link text-link--ondark" style={{ fontSize: 11 }}>
                  Ähnliche Objekte anfragen <span aria-hidden>→</span>
                </Link>
              </div>
            )}
          </div>

          {!verkauft && (
            <div className="note-card" style={{ marginBottom: 14 }}>
              <div className="head">Käuferprovision</div>
              <p style={{ fontSize: 14, color: 'var(--text)', fontWeight: 450 }}>5,95 % inkl. MwSt.</p>
              <p style={{ marginTop: 2 }}>fällig mit notarieller Beurkundung</p>
            </div>
          )}

          <div className="note-card note-card--bronze" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--bronze-deep)" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            <p style={{ margin: 0 }}>
              Alle Objektinformationen werden streng vertraulich behandelt. Exposé auf Anfrage.
            </p>
          </div>
        </div>
      </div>

      {/* ── WEITERE OBJEKTE ── */}
      <section className="section section--sand" style={{ paddingTop: 'clamp(56px,7vw,90px)', paddingBottom: 'clamp(56px,7vw,90px)' }}>
        <div className="section-head">
          <h2 className="s-title" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
            Weitere <em>Objekte.</em>
          </h2>
          <Link href="/immobilien" className="text-link">
            Alle ansehen <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="immo-grid">
          {immobilien
            .filter((i) => i.slug !== immo.slug)
            .slice(0, 3)
            .map((other, i) => (
              <Link key={other.id} href={`/immobilien/${other.slug}`} className="icard">
                <div className="icard-img" style={{ aspectRatio: '16 / 10' }}>
                  <Image
                    src={other.bilder[0]}
                    alt={other.titel}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    style={{ objectPosition: other.bildPosition || 'center' }}
                  />
                  {!other.hatEchteBilder && (
                    <div className="ibadge" style={{ top: 'auto', bottom: 12, left: 12 }}>Symbolfoto</div>
                  )}
                </div>
                <div className="icard-body" style={{ padding: '22px 24px 26px' }}>
                  <div className="icard-loc">{other.plz} {other.stadt}</div>
                  <h3 className="icard-title" style={{ fontSize: 19, marginBottom: 14 }}>{other.titel}</h3>
                  <div className="icard-price" style={{ fontSize: 21 }}>{formatPreis(other.preis)} €</div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
