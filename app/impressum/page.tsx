import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Impressum() {
  return (
    <>
      <Nav />
      <div style={{ padding: '96px 60px', maxWidth: '720px' }}>
        <div className="eyebrow">Rechtliches</div>
        <h1 className="s-title" style={{ marginBottom: '48px' }}>Impressum</h1>
        <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9', fontWeight: 300 }}>
          <p style={{ marginBottom: '24px' }}>
            <strong style={{ color: 'var(--navy)', fontWeight: 500 }}>VALORIS Projektentwicklung</strong><br />
            Hessen, Deutschland
          </p>
          <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Kontakt</strong></p>
          <p style={{ marginBottom: '4px' }}>Telefon: +49 155 633 44 652</p>
          <p style={{ marginBottom: '24px' }}>E-Mail: kontakt@valoris-projektentwicklung.de</p>
          <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Verantwortlich für den Inhalt</strong></p>
          <p>VALORIS Projektentwicklung, Hessen, Deutschland</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
