export const metadata = {
  title: 'Datenschutz | VALORIS Projektentwicklung',
  description: 'Datenschutzerklärung der VALORIS Projektentwicklung UG (haftungsbeschränkt).',
}
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)', marginBottom: '16px', letterSpacing: '-0.01em' }}>
        {title}
      </h2>
      <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.9', fontWeight: 300 }}>
        {children}
      </div>
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: '12px' }}>{children}</p>
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
      {items.map((item, i) => <li key={i} style={{ marginBottom: '6px' }}>{item}</li>)}
    </ul>
  )
}

export default function Datenschutz() {
  return (
    <>
      <Nav />

      <div style={{ background: 'var(--off2)', borderBottom: '1px solid var(--border)', padding: '64px 60px 48px' }}>
        <div className="eyebrow">Rechtliches</div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: '42px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: '12px', marginBottom: '16px' }}>
          Datenschutzerklärung
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300 }}>
          Stand: April 2026 · Gültig für valoris-projektentwicklung.de
        </p>
      </div>

      <div style={{ padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 60px)', maxWidth: '860px' }}>

        <Section title="1. Verantwortlicher">
          <P>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) und sonstiger datenschutzrechtlicher Bestimmungen ist:</P>
          <p style={{ marginBottom: '12px', color: 'var(--navy)', fontWeight: 400 }}>
            Valoris Projektentwicklung UG (haftungsbeschränkt)<br />
            Schumannstraße 27<br />
            60325 Frankfurt am Main<br />
            Deutschland<br />
            Geschäftsführerin: Livia Schwarz<br />
            Telefon: +49 155 633 44 652<br />
            E-Mail: kontakt@valoris-projektentwicklung.de
          </p>
        </Section>

        <Section title="2. Grundsätze der Datenverarbeitung">
          <P>Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Eine Verarbeitung erfolgt nur auf Grundlage einer Rechtsgrundlage gemäß Art. 6 DSGVO.</P>
          <P>Wir erheben und verwenden Ihre personenbezogenen Daten grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Erhebung und Verwendung Ihrer personenbezogenen Daten erfolgt regelmäßig nur nach Ihrer Einwilligung oder wenn die Datenverarbeitung durch gesetzliche Vorschriften gestattet ist.</P>
        </Section>

        <Section title="3. Hosting und technischer Betrieb">
          <P>Diese Website wird bei <strong style={{ fontWeight: 500 }}>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA, gehostet. Vercel ist ein Anbieter für Cloud-Infrastruktur und Website-Hosting.</P>
          <P>Beim Besuch unserer Website werden automatisch technische Daten in sog. Server-Logfiles erfasst, darunter:</P>
          <Ul items={[
            'Browsertyp und Browserversion',
            'Verwendetes Betriebssystem',
            'Referrer-URL (zuvor besuchte Seite)',
            'IP-Adresse (anonymisiert)',
            'Datum und Uhrzeit des Zugriffs',
            'Name der abgerufenen Datei',
          ]} />
          <P>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der Website). Vercel verarbeitet Daten auch in den USA. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.</P>
          <P>Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>vercel.com/legal/privacy-policy</a></P>
        </Section>

        <Section title="4. Kontaktformular und E-Mail-Kontakt">
          <P>Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden die von Ihnen gemachten Angaben zum Zweck der Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</P>
          <P>Die von Ihnen im Kontaktformular eingegebenen Daten umfassen:</P>
          <Ul items={['Name', 'E-Mail-Adresse', 'Telefonnummer (optional)', 'Betreff und Nachricht']} />
          <P>Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnungsmaßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).</P>
          <P>Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind, spätestens jedoch nach 3 Jahren.</P>
        </Section>

        <Section title="5. E-Mail-Versand via Resend">
          <P>Der Versand von E-Mails über das Kontaktformular erfolgt über den Dienst <strong style={{ fontWeight: 500 }}>Resend</strong> (Resend Inc., 2261 Market Street #4008, San Francisco, CA 94114, USA). Resend empfängt dabei die Formulardaten und leitet diese an unsere E-Mail-Adresse weiter.</P>
          <P>Mit Resend haben wir einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen. Resend ist unter dem EU-US Data Privacy Framework zertifiziert. Datenschutzerklärung von Resend: <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>resend.com/legal/privacy-policy</a></P>
        </Section>

        <Section title="6. Google Maps">
          <P>Auf unserer Website verwenden wir den Kartendienst <strong style={{ fontWeight: 500 }}>Google Maps</strong> der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.</P>
          <P>Wenn Sie eine Seite besuchen, die Google Maps enthält, baut Ihr Browser eine direkte Verbindung zu den Servern von Google auf. Google erhält dabei u.a. Informationen über Ihren Standort und Ihre IP-Adresse. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung der Lage unserer Angebote und zur leichten Auffindbarkeit der genannten Orte.</P>
          <P>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Google verarbeitet Daten auch in den USA und ist unter dem EU-US Data Privacy Framework zertifiziert.</P>
          <P>Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>policies.google.com/privacy</a></P>
        </Section>

        <Section title="7. Cookies">
          <P>Diese Website setzt keine Tracking- oder Analyse-Cookies ein. Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind. Diese Cookies sind kurzlebig (Session-Cookies) und werden nach dem Schließen des Browsers gelöscht.</P>
          <P>Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Eine Einwilligungspflicht besteht für technisch notwendige Cookies nicht (§ 25 Abs. 2 TTDSG).</P>
        </Section>

        <Section title="8. Ihre Rechte als betroffene Person">
          <P>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</P>
          <Ul items={[
            'Recht auf Auskunft (Art. 15 DSGVO)',
            'Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
            'Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)',
            'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
            'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
            'Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
            'Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)',
          ]} />
          <P>Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: kontakt@valoris-projektentwicklung.de</P>
        </Section>

        <Section title="9. Beschwerderecht bei der Aufsichtsbehörde">
          <P>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für den Datenschutz in Hessen ist:</P>
          <p style={{ marginBottom: '12px', color: 'var(--navy)', fontWeight: 400 }}>
            Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
            Postfach 3163, 65021 Wiesbaden<br />
            Telefon: +49 611 1408-0<br />
            E-Mail: poststelle@datenschutz.hessen.de<br />
            <a href="https://www.datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>www.datenschutz.hessen.de</a>
          </p>
        </Section>

        <Section title="10. Datensicherheit">
          <P>Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://” auf „https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</P>
          <P>Wir treffen nach Maßgabe von Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</P>
        </Section>

        <Section title="11. Aktualität und Änderung dieser Datenschutzerklärung">
          <P>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter <strong style={{ fontWeight: 400 }}>valoris-projektentwicklung.de/datenschutz</strong> von Ihnen abgerufen und ausgedruckt werden.</P>
        </Section>

      </div>

      <Footer />
    </>
  )
}
