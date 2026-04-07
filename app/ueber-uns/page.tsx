import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function UeberUns() {
  return (
    <>
      <Nav />

      {/* HERO mit Bild */}
      <div style={{ position:'relative', overflow:'hidden', minHeight:'420px', display:'grid', gridTemplateColumns:'1fr 1fr', background:'var(--navy)' }}>
        <div style={{ padding:'96px 60px 80px', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:2 }}>
          <div className="eyebrow">Unser Unternehmen</div>
          <h1 className="s-title" style={{ color:'#fff', fontSize:'52px', marginBottom:'20px' }}>Philosophie<br />und Ziele.</h1>
          <p className="s-body" style={{ color:'rgba(255,255,255,0.45)', maxWidth:'380px' }}>
            Bei Valoris setzen wir auf Qualität, Effizienz und persönliche Betreuung. Unser Ziel sind Immobilienprojekte, die wirtschaftlich und menschlich überzeugen.
          </p>
        </div>
        <div style={{ position:'relative', overflow:'hidden' }}>
          <Image
            src="/images/mainzerstrasse84.png"
            alt="Team Beratung"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit:'cover', objectPosition:'center 30%', opacity:0.55 }}
          />
        </div>
      </div>

      {/* CONTENT BLOCKS */}
      <div className="ueber-blocks">
        {[
          { tag:'Was uns antreibt', title:'Leidenschaft für Immobilien', text:'Unsere Expertise und Leidenschaft treiben unseren Erfolg voran. Wir begleiten Kunden von der ersten Einschätzung bis zum Abschluss — persönlich und verlässlich.' },
          { tag:'Unser Ansatz', title:'Klar. Direkt. Ganzheitlich.', text:'Klare Abläufe, schnelle Einschätzungen und direkte Ansprechpartner — ein vollständiger Blick auf Ankauf, Vermarktung, Verwaltung und Entwicklung.' },
          { tag:'Unsere Region', title:'Rhein-Main-Experten', text:'Als Spezialisten für das Rhein-Main-Gebiet kennen wir die lokalen Märkte, Netzwerke und Besonderheiten — und nutzen dieses Wissen für Ihren Vorteil.' },
          { tag:'Unsere Kunden', title:'Eigentümer & Investoren', text:'Wir arbeiten für Eigentümer, Investoren und Verkäufer gleichermaßen — und sprechen die Sprache, die zur jeweiligen Situation passt.' },
        ].map((b, i) => (
          <div key={i} className={`ub reveal reveal-delay-${i % 2 + 1}`}>
            <div className="ub-tag">{b.tag}</div>
            <h3 className="ub-title">{b.title}</h3>
            <p className="ub-text">{b.text}</p>
          </div>
        ))}
      </div>

      {/* BILD FULLWIDTH */}
      <div style={{ height:'380px', position:'relative', overflow:'hidden' }}>
        <Image
          src="/images/mainzerstrasse.png"
          alt="Neue Mainzer Straße"
          fill
          sizes="100vw"
          style={{ objectFit:'cover', objectPosition:'center 50%' }}
        />
        <div style={{ position:'absolute', inset:0, background:'rgba(15,30,53,0.35)' }} />
      </div>

      {/* WERTE */}
      <div className="werte-section">
        <div className="eyebrow" style={{ color:'#93c5fd' }}>Unsere Werte</div>
        <h2 className="s-title" style={{ color:'#fff' }}>Worauf wir bauen.</h2>
        <div className="werte-grid">
          {[
            { num:'01', title:'Verlässlichkeit', text:'Wir halten, was wir versprechen — pünktlich, transparent, mit klarer Kommunikation.' },
            { num:'02', title:'Marktkenntnis', text:'Tiefes Verständnis des Rhein-Main-Marktes für fundierte Einschätzungen und realistische Preisfindung.' },
            { num:'03', title:'Diskretion', text:'Alle Informationen werden vertraulich behandelt — besonders bei off-market Transaktionen.' },
            { num:'04', title:'Ganzheitlichkeit', text:'Von der Beratung bis zur nachhaltigen Wertentwicklung — vollständige Begleitung.' },
          ].map((w) => (
            <div key={w.num} className={`wert reveal reveal-delay-${parseInt(w.num)}`}>
              <div className="wert-num">{w.num}</div>
              <h3 className="wert-title">{w.title}</h3>
              <p className="wert-text">{w.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <div>
          <div className="eyebrow" style={{ color:'#93c5fd' }}>Jetzt anfragen</div>
          <h2 className="s-title" style={{ color:'#fff', fontSize:'36px', marginBottom:'10px' }}>Gemeinsam zum Ziel.</h2>
          <p className="s-body" style={{ color:'rgba(255,255,255,0.45)' }}>Sprechen Sie uns an — wir freuen uns auf Ihre Anfrage.</p>
        </div>
        <Link href="/kontakt" className="btn-white">Kontakt aufnehmen →</Link>
      </div>

      <Footer />
    </>
  )
}
