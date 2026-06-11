export const metadata = {
  title: 'Über VALORIS | Projektentwicklung Rhein-Main',
  description:
    'VALORIS steht für strukturierte Projektentwicklung, Immobilienankauf und persönliche Betreuung im Rhein-Main-Gebiet.',
}

import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function UeberUns() {
  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="uh-grid">
        <div className="uh-left">
          <div className="eyebrow eyebrow--ondark">Unser Unternehmen</div>
          <h1 className="s-title s-title--ondark">
            Philosophie und <em>Ziele.</em>
          </h1>
          <p className="s-body s-body--ondark" style={{ maxWidth: '42ch' }}>
            Bei Valoris setzen wir auf Qualität, Effizienz und persönliche Betreuung. Unser Ziel
            sind Immobilienprojekte, die wirtschaftlich und menschlich überzeugen.
          </p>
        </div>
        <div className="uh-right">
          <Image
            src="/images/mainzerstrasse84.png"
            alt="Projektimmobilie von VALORIS"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="uh-scrim" />
        </div>
      </div>

      {/* ── STATEMENT ────────────────────────────────────── */}
      <section className="section section--white" style={{ paddingBottom: 'clamp(56px,7vw,100px)' }}>
        <div className="statement reveal">
          <p className="lead">
            Immobilien sind für uns mehr als Zahlen — sie sind Lebensräume, Kapitalanlagen und
            Verantwortung zugleich. <em>Deshalb begleiten wir jede Transaktion persönlich, vom
            ersten Gespräch bis zur Übergabe.</em>
          </p>
        </div>
      </section>

      {/* ── CONTENT BLOCKS ───────────────────────────────── */}
      <section style={{ padding: '0 var(--pad-x) clamp(80px,10vw,150px)', background: 'var(--white)' }}>
        <div className="ueber-blocks">
          {[
            {
              tag: 'Was uns antreibt',
              title: 'Leidenschaft für Immobilien',
              text: 'Unsere Expertise und Leidenschaft treiben unseren Erfolg voran. Wir begleiten Kunden von der ersten Einschätzung bis zum Abschluss — persönlich und verlässlich.',
            },
            {
              tag: 'Unser Ansatz',
              title: 'Klar. Direkt. Ganzheitlich.',
              text: 'Klare Abläufe, schnelle Einschätzungen und direkte Ansprechpartner — ein vollständiger Blick auf Ankauf, Vermarktung, Verwaltung und Entwicklung.',
            },
            {
              tag: 'Unsere Region',
              title: 'Rhein-Main-Experten',
              text: 'Als Spezialisten für das Rhein-Main-Gebiet kennen wir die lokalen Märkte, Netzwerke und Besonderheiten — und nutzen dieses Wissen für Ihren Vorteil.',
            },
            {
              tag: 'Unsere Kunden',
              title: 'Eigentümer & Investoren',
              text: 'Wir arbeiten für Eigentümer, Investoren und Verkäufer gleichermaßen — und sprechen die Sprache, die zur jeweiligen Situation passt.',
            },
          ].map((b, i) => (
            <div key={i} className={`ub reveal reveal-delay-${(i % 2) + 1}`}>
              <div className="ub-tag">{b.tag}</div>
              <h3 className="ub-title">{b.title}</h3>
              <p className="ub-text">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BILD FULLWIDTH ───────────────────────────────── */}
      <div style={{ height: 'clamp(320px,40vw,480px)', position: 'relative', overflow: 'hidden' }}>
        <Image
          src="/images/mainzerstrasse.png"
          alt="Neue Mainzer Straße, Frankfurt"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,19,34,0.3)' }} />
      </div>

      {/* ── WERTE ────────────────────────────────────────── */}
      <section className="section section--deep">
        <div className="reveal">
          <div className="eyebrow eyebrow--ondark">Unsere Werte</div>
          <h2 className="s-title s-title--ondark">
            Worauf wir <em>bauen.</em>
          </h2>
        </div>
        <div className="werte-grid">
          {[
            {
              num: 'I.',
              title: 'Verlässlichkeit',
              text: 'Wir halten, was wir versprechen — pünktlich, transparent, mit klarer Kommunikation.',
            },
            {
              num: 'II.',
              title: 'Marktkenntnis',
              text: 'Tiefes Verständnis des Rhein-Main-Marktes für fundierte Einschätzungen und realistische Preisfindung.',
            },
            {
              num: 'III.',
              title: 'Diskretion',
              text: 'Alle Informationen werden vertraulich behandelt — besonders bei Off-Market-Transaktionen.',
            },
            {
              num: 'IV.',
              title: 'Ganzheitlichkeit',
              text: 'Von der Beratung bis zur nachhaltigen Wertentwicklung — vollständige Begleitung.',
            },
          ].map((w, i) => (
            <div key={w.num} className={`wert reveal reveal-delay-${i + 1}`}>
              <div className="wert-num">{w.num}</div>
              <h3 className="wert-title">{w.title}</h3>
              <p className="wert-text">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <div className="cta-band" style={{ borderTop: '1px solid var(--line-dark-soft)' }}>
        <div className="reveal">
          <div className="eyebrow eyebrow--ondark">Jetzt anfragen</div>
          <h2 className="s-title s-title--ondark" style={{ marginBottom: 14 }}>
            Gemeinsam <em>zum Ziel.</em>
          </h2>
          <p className="s-body s-body--ondark">Sprechen Sie uns an — wir freuen uns auf Ihre Anfrage.</p>
        </div>
        <Link href="/kontakt" className="btn btn--white">
          Kontakt aufnehmen <span className="arr" aria-hidden>→</span>
        </Link>
      </div>

      <Footer />

      <style>{`
        .uh-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          background: var(--navy-deep);
        }
        .uh-left {
          padding: clamp(72px, 9vw, 130px) clamp(32px, 5vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .uh-right {
          position: relative;
          overflow: hidden;
        }
        .uh-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(11,19,34,0.55) 0%, rgba(11,19,34,0.1) 45%);
        }
        @media (max-width: 960px) {
          .uh-grid { grid-template-columns: 1fr; }
          .uh-right { min-height: 320px; }
        }
      `}</style>
    </>
  )
}
