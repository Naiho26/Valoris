import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name und E-Mail sind Pflichtfelder.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      // No key configured yet — log and return success for demo
      console.log('Contact form submission:', { name, email, phone, subject, message })
      return NextResponse.json({ ok: true })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Valoris Website <noreply@valoris-projektentwicklung.de>',
        to: ['kontakt@valoris-projektentwicklung.de'],
        reply_to: email,
        subject: `Neue Anfrage: ${subject || 'Kontaktformular'}`,
        html: `
          <h2>Neue Anfrage über valoris-projektentwicklung.de</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold;width:120px">Name</td><td style="padding:8px">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">E-Mail</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Telefon</td><td style="padding:8px">${phone || '—'}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Betreff</td><td style="padding:8px">${subject || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Nachricht</td><td style="padding:8px;white-space:pre-wrap">${message || '—'}</td></tr>
          </table>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Serverfehler' }, { status: 500 })
  }
}
