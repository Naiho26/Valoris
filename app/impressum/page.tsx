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
      <div style={{ padding: 'clamp(40px, 6vw, 96px) clamp(20px, 5vw, 60px)', maxWidth: '720px' }}>
        <div className="eyebrow">Rechtliches</div>
        <h1 className="s-title" style={{ marginBottom: '48px' }}>Impressum</h1>
        <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9', fontWeight: 300 }}>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Valoris Projektentwicklung UG (haftungsbeschränkt)</strong><br />
            Schumannstraße 27<br />
            60325 Frankfurt am Main<br />
            Deutschland
          </p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Vertreten durch</strong>
          </p>
          <p style={{ marginBottom: '24px' }}>
            Geschäftsführerin: Livia Schwarz
          </p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Handelsregister</strong>
          </p>
          <p style={{ marginBottom: '24px' }}>
            Amtsgericht Frankfurt am Main<br />
            HRB 142250
          </p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Kontakt</strong>
          </p>
          <p style={{ marginBottom: '4px' }}>Telefon: +49 155 633 44 652</p>
          <p style={{ marginBottom: '24px' }}>E-Mail: kontakt@valoris-projektentwicklung.de</p>

          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</strong>
          </p>
          <p>
            Livia Schwarz<br />
            Schumannstraße 27<br />
            60325 Frankfurt am Main
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
