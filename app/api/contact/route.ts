import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name und E-Mail sind Pflichtfelder.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('No RESEND_API_KEY — form submission:', { name, email, subject })
      return NextResponse.json({ ok: true })
    }

    // Use resend.dev as sender until valoris-projektentwicklung.de is verified in Resend.
    // Once domain is verified, change to: 'Valoris Website <noreply@valoris-projektentwicklung.de>'
    const fromAddress = process.env.RESEND_FROM || 'Valoris Kontaktformular <onboarding@resend.dev>'

    // Deliver to the configured recipient, fallback to kontakt address
    const toAddress = process.env.CONTACT_EMAIL || 'kontakt@valoris-projektentwicklung.de'

    const payload = {
      from: fromAddress,
      to: [toAddress],
      reply_to: email,
      subject: `Neue Anfrage: ${subject || 'Kontaktformular'} – ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#111827">
          <div style="background:#1b2d4f;padding:24px;border-radius:8px 8px 0 0">
            <h1 style="color:#fff;font-size:20px;margin:0;font-weight:600">Neue Anfrage über valoris-projektentwicklung.de</h1>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:24px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 12px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;width:110px;border-bottom:1px solid #f3f4f6">Name</td>
                <td style="padding:10px 12px;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">E-Mail</td>
                <td style="padding:10px 12px;font-size:15px;border-bottom:1px solid #f3f4f6"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Telefon</td>
                <td style="padding:10px 12px;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;border-bottom:1px solid #f3f4f6">Betreff</td>
                <td style="padding:10px 12px;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${subject || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 12px;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;vertical-align:top">Nachricht</td>
                <td style="padding:10px 12px;font-size:15px;color:#111827;white-space:pre-wrap;line-height:1.6">${message || '—'}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#f8f9fb;border-radius:6px;font-size:12px;color:#6b7280">
              Eingegangen: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })} Uhr · valoris-projektentwicklung.de
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

    console.log('Email sent successfully:', responseText)
    return NextResponse.json({ ok: true })

  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Serverfehler' }, { status: 500 })
  }
}
