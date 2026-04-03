import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const {
      objekttyp, strasse, plz, ort, flaeche, zimmer, baujahr, zustand,
      preisvorstellung, preisverhandlungsoffen, vermietungsstatus,
      name, telefon, email, nachricht,
    } = await req.json()

    if (!name || !email || !objekttyp || !strasse) {
      return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('No RESEND_API_KEY — Off-Market submission:', { name, email, objekttyp, ort })
      return NextResponse.json({ ok: true })
    }

    const fromAddress = process.env.RESEND_FROM || 'Valoris Website <onboarding@resend.dev>'
    const toAddress = process.env.CONTACT_EMAIL || 'kontakt@valoris-projektentwicklung.de'

    const payload = {
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `Off-Market Anfrage: ${objekttyp} in ${ort} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#111827">
          <div style="background:#1b2d4f;padding:24px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;font-size:20px;margin:0;font-weight:600">Off-Market Anfrage</h1>
            <p style="color:rgba(255,255,255,0.45);font-size:13px;margin:6px 0 0;font-weight:300">über valoris-projektentwicklung.de</p>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:24px">

            <p style="font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #f3f4f6">Objekt</p>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;width:130px;border-bottom:1px solid #f3f4f6">Typ</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${objekttyp}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Adresse</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${strasse}, ${plz} ${ort}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Fläche</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${flaeche} m²${zimmer ? ` · ${zimmer} Zimmer` : ''}${baujahr ? ` · Baujahr ${baujahr}` : ''}</td>
              </tr>
              ${zustand ? `
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Zustand</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${zustand}</td>
              </tr>` : ''}
            </table>

            <p style="font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #f3f4f6">Preisvorstellung</p>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;width:130px;border-bottom:1px solid #f3f4f6">Kaufpreis</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">€ ${preisvorstellung}${preisverhandlungsoffen ? ' <span style="color:#6b7280;font-size:13px">(verhandelbar)</span>' : ''}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Status</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${vermietungsstatus}</td>
              </tr>
            </table>

            <p style="font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #f3f4f6">Kontakt</p>
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;width:130px;border-bottom:1px solid #f3f4f6">Name</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">E-Mail</td>
                <td style="padding:8px 0;font-size:15px;border-bottom:1px solid #f3f4f6"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Telefon</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${telefon || '—'}</td>
              </tr>
              ${nachricht ? `
              <tr>
                <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top">Anmerkungen</td>
                <td style="padding:8px 0;font-size:15px;color:#111827;white-space:pre-wrap;line-height:1.6">${nachricht}</td>
              </tr>` : ''}
            </table>

            <div style="margin-top:24px;padding:14px 16px;background:#f8f9fb;border-radius:6px;font-size:12px;color:#6b7280">
              Eingegangen: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })} Uhr · valoris-projektentwicklung.de/off-market
            </div>
          </div>
        </body>
        </html>
      `,
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const responseText = await res.text()

    if (!res.ok) {
      console.error('Resend error:', res.status, responseText)
      return NextResponse.json(
        { error: `Resend: ${res.status} — ${responseText}` },
        { status: 500 }
      )
    }

    console.log('Off-Market email sent:', responseText)
    return NextResponse.json({ ok: true })

  } catch (err) {
    console.error('Off-market route error:', err)
    return NextResponse.json({ error: 'Serverfehler' }, { status: 500 })
  }
}
