export const metadata = {
  title: 'Projektentwicklung & Immobilienankauf Frankfurt | VALORIS',
  description:
    'VALORIS Projektentwicklung ist spezialisiert auf Ankauf, Vermarktung und Entwicklung von Wohnimmobilien im Rhein-Main-Gebiet. Ersteinschätzung in 48 Stunden — jetzt Immobilie anbieten.',
}

import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ImmoCard from '@/components/ImmoCard'
import { immobilien } from '@/lib/immobilien'

const leistungen = [
  {
    num: 'No. 01',
    title: 'Ankauf',
    img: '/images/ankauf.jpeg',
    text: 'Fundierte Prüfung von Wohnungen, Mehrfamilienhäusern und Entwicklungsobjekten — zügig, strukturiert und diskret.',
  },
  {
    num: 'No. 02',
    title: 'Vermarktung',
    img: '/images/frankfurt2.jpg',
    text: 'Marktgerechte Positionierung, professionelles Exposé und gezielte Käuferansprache für Ihren Verkaufserfolg.',
  },
  {
    num: 'No. 03',
    title: 'Hausverwaltung',
    img: '/images/hausverwaltung.jpeg',
    text: 'Strukturierte Betreuung mit verlässlichen Abläufen, konsequentem Werterhalt und klarer Kommunikation.',
  },
  {
    num: 'No. 04',
    title: 'Entwicklung',
    img: '/images/projektentwicklung.jpg',
    text: 'Weiterentwicklung von Bestandsimmobilien — von der Analyse über die Sanierungsstrategie bis zur wertsteigernden Umsetzung.',
  },
]

const prozess = [
  {
    num: 'I.',
    title: 'Erstgespräch',
    text: 'Sie schildern uns Ihr Objekt und Ihre Situation — telefonisch, per E-Mail oder WhatsApp. Diskret und unverbindlich.',
  },
  {
    num: 'II.',
    title: 'Einschätzung in 48 h',
    text: 'Wir prüfen Lage, Substanz und Marktumfeld und geben Ihnen innerhalb von 48 Stunden eine fundierte Ersteinschätzung.',
  },
  {
    num: 'III.',
    title: 'Konkretes Angebot',
    text: 'Auf Basis der Prüfung erhalten Sie ein klares, nachvollziehbares Angebot — ohne versteckte Bedingungen.',
  },
  {
    num: 'IV.',
    title: 'Notar & Abwicklung',
    text: 'Wir begleiten Sie bis zum Notartermin und darüber hinaus — mit verlässlicher Koordination aller Beteiligten.',
  },
]

export default function Home() {
  const objekte = [...immobilien]
    .sort((a, b) => (a.status === 'Verkauft' ? 1 : 0) - (b.status === 'Verkauft' ? 1 : 0))
    .slice(0, 3)

  return (
    <>
      <Nav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-bg">
          <Image
            src="/images/hero.jpeg"
            alt="Wohnimmobilie im Rhein-Main-Gebiet"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-scrim" />
        </div>

        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="hero-content">
            <div className="eyebrow eyebrow--ondark">Projektentwicklung · Rhein-Main-Gebiet</div>
            <h1 className="hero-h1">
              Werte erkennen.
              <br />
              Substanz <em>entwickeln.</em>
            </h1>
            <p className="hero-p">
              VALORIS begleitet Eigentümer, Investoren und Verkäufer beim Ankauf, der Vermarktung
              und der Entwicklung von Wohnimmobilien — mit Marktkenntnis, klaren Prozessen und
              persönlicher Betreuung.
            </p>
            <div className="hero-btns">
              <Link href="/kontakt" className="btn btn--white">
                Immobilie anbieten <span className="arr" aria-hidden>→</span>
              </Link>
              <Link href="/immobilien" className="btn btn--outline-w">
                Aktuelle Objekte
              </Link>
            </div>
          </div>

          <div className="hero-foot">
            <div className="hero-stat">
              <div className="v"><span data-countup="48">48</span> <em>h</em></div>
              <div className="l">Ersteinschätzung</div>
            </div>
            <div className="hero-stat">
              <div className="v"><span data-countup="4">4</span></div>
              <div className="l">Leistungsbereiche</div>
            </div>
            <div className="hero-stat">
              <div className="v"><span data-countup="100">100</span> <em>%</em></div>
              <div className="l">Persönliche Betreuung</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── STATEMENT ────────────────────────────────────── */}
      <section className="section section--white">
        <div className="statement reveal">
          <p className="lead">
            Wir begleiten Wohnimmobilien durch ihren gesamten Lebenszyklus — vom ersten
            Ankaufsgespräch über die Entwicklung bis zur Übergabe. <em>Persönlich, diskret und mit
            einem klaren Blick für das Wesentliche.</em>
          </p>
          <div className="statement-meta">
            <div className="rule" />
            <span>Valoris Projektentwicklung · Frankfurt am Main</span>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ───────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0, background: 'var(--white)' }}>
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Unsere Leistungen</div>
            <h2 className="s-title">
              Alles aus <em>einer Hand.</em>
            </h2>
          </div>
          <p className="s-body">
            Vier Leistungsbereiche, ein Anspruch: Immobilien strukturiert prüfen, entwickeln und in
            die richtigen Hände übergeben.
          </p>
        </div>

        <div className="l-grid">
          {leistungen.map((c, i) => (
            <div key={c.num} className={`lcard reveal reveal-delay-${i + 1}`}>
              <div className="lcard-img">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
              </div>
              <div className="lcard-body">
                <div className="lcard-num">{c.num}</div>
                <h3 className="lcard-title">{c.title}</h3>
                <p className="lcard-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AKTUELLE OBJEKTE ─────────────────────────────── */}
      <section className="section section--sand">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow">Portfolio</div>
            <h2 className="s-title">
              Aktuelle <em>Objekte.</em>
            </h2>
          </div>
          <Link href="/immobilien" className="text-link">
            Alle Immobilien ansehen <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="immo-grid">
          {objekte.map((immo, i) => (
            <ImmoCard key={immo.id} immo={immo} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ── PROZESS ──────────────────────────────────────── */}
      <section className="section section--deep">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow eyebrow--ondark">Der Weg zum Verkauf</div>
            <h2 className="s-title s-title--ondark">
              In vier Schritten <em>zum Abschluss.</em>
            </h2>
          </div>
          <p className="s-body s-body--ondark">
            Ein klarer Prozess schafft Vertrauen — Sie wissen zu jedem Zeitpunkt, wo Ihr Objekt
            steht.
          </p>
        </div>

        <div className="process-grid">
          {prozess.map((p, i) => (
            <div key={p.num} className={`pstep reveal reveal-delay-${i + 1}`}>
              <div className="pstep-num">{p.num}</div>
              <h3 className="pstep-title">{p.title}</h3>
              <p className="pstep-text">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="ticker" aria-hidden>
        <div className="ticker-inner">
          {[...Array(2)].map((_, rep) => (
            <span key={rep}>
              {['Ankauf', 'Vermarktung', 'Hausverwaltung', 'Entwicklung', 'Rhein-Main-Gebiet', 'Wohnimmobilien'].map(
                (item, i) => (
                  <span key={i}>
                    <span className="ticker-item">{item}</span>
                    <span className="ticker-sep">·</span>
                  </span>
                )
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── WARUM VALORIS ────────────────────────────────── */}
      <section className="section section--white">
        <div className="warum-inner">
          <div className="warum-visual reveal">
            <div className="wv-img wv-img--tall">
              <Image
                src="/images/home1.jpeg"
                alt="Wohnimmobilie"
                fill
                sizes="(max-width: 960px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="wv-img">
              <Image
                src="/images/interior.jpeg"
                alt="Hochwertige Innenausstattung"
                fill
                sizes="(max-width: 960px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <div className="eyebrow reveal">Warum Valoris</div>
            <h2 className="s-title reveal reveal-delay-1">
              Persönlich. Verlässlich. <em>Erfahren.</em>
            </h2>
            <p className="s-body reveal reveal-delay-2" style={{ marginBottom: 28 }}>
              VALORIS verbindet Marktverständnis, Entwicklungskompetenz und persönliche Betreuung —
              für Transaktionen, die passen.
            </p>

            <div>
              {[
                {
                  num: 'I.',
                  title: 'Schnelle Ersteinschätzung',
                  text: 'Fundierte Markteinschätzung innerhalb von 48 Stunden — kostenfrei und unverbindlich.',
                },
                {
                  num: 'II.',
                  title: 'Fokus auf Wohnimmobilien',
                  text: 'Spezialisierung auf Wohnungen, Ein- und Mehrfamilienhäuser sowie Bestandsobjekte im Rhein-Main-Gebiet.',
                },
                {
                  num: 'III.',
                  title: 'Starkes Partnernetzwerk',
                  text: 'Architektur, Bau, Handwerk und Vermarktung aus einem eingespielten, verlässlichen Netzwerk.',
                },
              ].map((p, i) => (
                <div key={p.num} className={`wpoint reveal reveal-delay-${i + 1}`}>
                  <div className="wpoint-num">{p.num}</div>
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

      {/* ── CTA PANORAMA ─────────────────────────────────── */}
      <div className="cta-pano">
        <Image
          src="/images/altbau_footer.jpeg"
          alt="Altbau-Wohnimmobilie"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
        />
        <div className="cta-pano-scrim">
          <div className="reveal">
            <div className="eyebrow eyebrow--ondark">Jetzt anfragen</div>
            <h2 className="s-title s-title--ondark" style={{ maxWidth: '14ch' }}>
              Sie möchten Ihre Immobilie <em>anbieten?</em>
            </h2>
            <p className="s-body s-body--ondark" style={{ marginBottom: 36, maxWidth: '46ch' }}>
              Schnelle, diskrete Abwicklung und persönliche Betreuung — von der ersten Beratung bis
              zum Notartermin und darüber hinaus.
            </p>
            <Link href="/kontakt" className="btn btn--white">
              Kontakt aufnehmen <span className="arr" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        .warum-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(48px, 6vw, 110px);
          align-items: center;
        }
        .warum-visual {
          display: grid;
          grid-template-rows: 1.5fr 1fr;
          gap: 20px;
          min-height: 560px;
        }
        .wv-img {
          position: relative;
          overflow: hidden;
        }
        @media (max-width: 960px) {
          .warum-inner { grid-template-columns: 1fr; }
          .warum-visual { min-height: 420px; }
        }
        .cta-pano {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }
        .cta-pano-scrim {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
          padding: clamp(64px, 8vw, 120px) var(--pad-x);
          background: linear-gradient(to right, rgba(11,19,34,0.92) 0%, rgba(11,19,34,0.6) 55%, rgba(11,19,34,0.15) 100%);
        }
      `}</style>
    </>
  )
}
