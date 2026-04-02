import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <div style={{ padding: '96px 60px', maxWidth: '720px' }}>
        <div className="eyebrow">Rechtliches</div>
        <h1 className="s-title" style={{ marginBottom: '48px' }}>Datenschutzerklärung</h1>
        <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9', fontWeight: 300 }}>
          <p style={{ marginBottom: '24px' }}>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
          </p>
          <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Kontaktformular</strong></p>
          <p style={{ marginBottom: '24px' }}>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--navy)', fontWeight: 500 }}>Ihre Rechte</strong></p>
          <p>
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei uns oder der Datenschutzbehörde beschweren.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
