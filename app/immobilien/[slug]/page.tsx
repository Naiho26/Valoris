import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { immobilien } from '@/lib/immobilien'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return immobilien.map(i => ({ slug: i.slug }))
}


function formatPreis(preis: string): string {
  const num = parseInt(preis.replace(/\D/g, ''), 10)
  if (isNaN(num)) return preis
  return num.toLocaleString('de-DE')
}

const statusColor: Record<string, string> = {
  'Im Verkauf': '#16a34a',
  'Reserviert': '#d97706',
  'Verkauft': '#6b7280',
}

export default function ImmobilieDetail({ params }: { params: { slug: string } }) {
  const immo = immobilien.find(i => i.slug === params.slug)
  if (!immo) notFound()

  const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3Kuo&q=${encodeURIComponent(immo.adresse + ', ' + immo.plz + ' ' + immo.stadt)}&zoom=15`
  const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(immo.adresse + ', ' + immo.plz + ' ' + immo.stadt)}`

  return (
    <>
      <Nav />

      {/* BREADCRUMB */}
      <div style={{ background: 'var(--off2)', borderBottom: '1px solid var(--border)', padding: '14px clamp(16px, 5vw, 60px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link href="/" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>Start</Link>
        <span style={{ color: 'var(--border2)' }}>›</span>
        <Link href="/immobilien" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>Immobilien</Link>
        <span style={{ color: 'var(--border2)' }}>›</span>
        <span style={{ fontSize: '13px', color: 'var(--navy)', fontWeight: 500 }}>{immo.titel}</span>
      </div>

      {/* HERO IMAGE GALLERY */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'clamp(220px, 40vw, 380px)', gap: '3px', background: 'var(--navy3)', overflow: 'hidden' }}>
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <img src={immo.bilder[0]} alt={immo.titel} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '3px', overflow: 'hidden' }}>
          {immo.bilder.slice(1, 3).map((b, i) => (
            <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
              <img src={b} alt={`${immo.titel} ${i + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              {i === 1 && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,30,53,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Syne',sans-serif", fontSize: '14px', fontWeight: 500, color: '#fff', letterSpacing: '0.06em' }}>Alle Fotos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'var(--detail-cols, 1fr 360px)', gap: '48px', padding: 'clamp(20px, 5vw, 60px)', background: 'var(--white)', alignItems: 'start' }}>

        {/* LEFT: Details */}
        <div>
          {/* Status + Typ */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center' }}>
            <span style={{ background: statusColor[immo.status] + '18', color: statusColor[immo.status], borderRadius: '100px', padding: '5px 14px', fontSize: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: statusColor[immo.status], display: 'inline-block' }} />
              {immo.status}
            </span>
            <span style={{ background: 'var(--blue-light)', color: 'var(--navy)', borderRadius: '100px', padding: '5px 14px', fontSize: '12px', fontWeight: 400 }}>
              {immo.typ}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '36px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '10px' }}>
            {immo.titel}
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {immo.adresse}, {immo.plz} {immo.stadt}
          </p>

          {/* KEY FACTS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', marginBottom: '48px' }}>
            {[
              { label: 'Wohnfläche', val: `${immo.flaeche} m²` },
              { label: 'Zimmer', val: immo.zimmer },
              { label: 'Baujahr', val: immo.baujahr },
              { label: 'Etage', val: immo.etage || 'Haus' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'var(--off)', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '20px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: '4px' }}>{f.val}</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>{f.label}</div>
              </div>
            ))}
          </div>

          {/* BESCHREIBUNG */}
          <div style={{ marginBottom: '48px' }}>
            <h2 className='reveal' style={{ fontFamily: "'Syne',sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '16px', letterSpacing: '-0.01em' }}>Objektbeschreibung</h2>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85, fontWeight: 300 }}>{immo.beschreibung}</p>
          </div>

          {/* AUSSTATTUNG */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '20px', letterSpacing: '-0.01em' }}>Ausstattung & Merkmale</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {immo.ausstattung.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text)', fontWeight: 300 }}>
                  <div style={{ width: '20px', height: '20px', background: 'var(--blue-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '20px', letterSpacing: '-0.01em' }}>Lage & Umgebung</h2>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '12px' }}>
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(immo.adresse + ', ' + immo.plz + ' ' + immo.stadt)}&output=embed&z=15`}
                width="100%"
                height="380"
                style={{ border: 'none', display: 'block' }}
                loading="lazy"
                title="Lage der Immobilie"
              />
            </div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              In Google Maps öffnen
            </a>
          </div>
        </div>

        {/* RIGHT: Sticky contact card */}
        <div className='detail-sticky' style={{ position: 'sticky', top: '90px' }}>
          <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '32px', marginBottom: '16px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '6px' }}>Kaufpreis</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '24px', letterSpacing: '-0.01em' }}>
              € {formatPreis(immo.preis)}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', marginBottom: '28px' }}>
              {[
                { label: 'Objekttyp', val: immo.typ },
                { label: 'Lage', val: `${immo.plz} ${immo.stadt}` },
                { label: 'Wohnfläche', val: `ca. ${immo.flaeche} m²` },
                { label: 'Zimmer', val: immo.zimmer },
                { label: 'Baujahr', val: immo.baujahr },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', fontWeight: 300 }}>{r.label}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{r.val}</span>
                </div>
              ))}
            </div>

            <Link href={`/kontakt?objekt=${encodeURIComponent(immo.titel)}`} style={{
              display: 'block', textAlign: 'center', background: '#fff', color: 'var(--navy)',
              fontFamily: "'Syne',sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em',
              padding: '15px', borderRadius: '8px', textDecoration: 'none', marginBottom: '12px',
            }}>
              Anfrage stellen
            </Link>
            <a href="tel:+4915563344652" style={{
              display: 'block', textAlign: 'center', background: 'transparent', color: 'rgba(255,255,255,0.65)',
              fontSize: '13px', fontWeight: 400, padding: '13px', borderRadius: '8px',
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)',
            }}>
              +49 155 633 44 652
            </a>
          </div>

          {/* Diskretion note */}
          <div style={{ background: 'var(--blue-light)', borderRadius: '10px', padding: '16px 18px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: '1px' }}>
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            <p style={{ fontSize: '12px', color: 'var(--navy)', lineHeight: 1.7, fontWeight: 300 }}>
              Alle Objektinformationen werden streng vertraulich behandelt. Wir arbeiten auf Wunsch auch ohne Registrierung.
            </p>
          </div>
        </div>
      </div>

      {/* WEITERE OBJEKTE */}
      <section style={{ padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 60px)', background: 'var(--off)', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--navy)', marginBottom: '32px', letterSpacing: '-0.01em' }}>
          Weitere Objekte
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {immobilien.filter(i => i.slug !== immo.slug).slice(0, 3).map(other => (
            <Link key={other.id} href={`/immobilien/${other.slug}`} className='reveal' style={{ textDecoration: 'none' }}>
              <div className="immo-card" style={{ background: '#fff', borderRadius: '10px', border: '1px solid var(--border)', overflow: 'hidden', transition: 'all 0.25s' }}>
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={other.bilder[0]} alt={other.titel} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }} />
                </div>
                <div style={{ padding: '18px 20px' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '6px' }}>{other.plz} {other.stadt}</div>
                  <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.3 }}>{other.titel}</h3>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '16px', fontWeight: 700, color: 'var(--navy)' }}>€ {formatPreis(other.preis)}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />


      <style>{`
        @media (max-width: 900px) {
          :root { --detail-cols: 1fr; }
          .detail-sticky { position: static !important; }
        }
        @media (min-width: 901px) {
          :root { --detail-cols: 1fr 360px; }
        }
        .immo-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,0,0,0.09); }
        .immo-card:hover img { transform: scale(1.04); }
      `}</style>
    </>
  )
}
