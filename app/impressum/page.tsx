export const metadata = {
  title: 'Impressum | VALORIS Projektentwicklung',
  description: 'Impressum der VALORIS Projektentwicklung UG (haftungsbeschränkt).',
}
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Impressum() {
  return (
    <>
      <Nav />
      <div
        style={{
          background: 'var(--paper-2)',
          borderBottom: '1px solid var(--line)',
          padding: 'clamp(56px,7vw,90px) var(--pad-x) clamp(40px,5vw,56px)',
        }}
      >
        <div className="eyebrow">Rechtliches</div>
        <h1 className="s-title" style={{ marginBottom: 0 }}>
          Impressum<em>.</em>
        </h1>
      </div>

      <div className="legal-wrap">
        <div style={{ fontSize: '14.5px', color: 'var(--muted)', lineHeight: '1.9', fontWeight: 300 }}>
          <p style={{ marginBottom: '28px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>
              Valoris Projektentwicklung UG (haftungsbeschränkt)
            </strong>
            <br />
            Schumannstraße 27
            <br />
            60325 Frankfurt am Main
            <br />
            Deutschland
          </p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Vertreten durch</strong>
          </p>
          <p style={{ marginBottom: '28px' }}>Geschäftsführerin: Livia Schwarz</p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Handelsregister</strong>
          </p>
          <p style={{ marginBottom: '28px' }}>
            Amtsgericht Frankfurt am Main
            <br />
            HRB 142250
          </p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Kontakt</strong>
          </p>
          <p style={{ marginBottom: '4px' }}>Telefon: +49 176 824 638 31</p>
          <p style={{ marginBottom: '28px' }}>E-Mail: kontakt@valoris-projektentwicklung.de</p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </strong>
          </p>
          <p>
            Livia Schwarz
            <br />
            Schumannstraße 27
            <br />
            60325 Frankfurt am Main
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
