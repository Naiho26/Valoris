'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Name *</label>
          <input className="form-input" id="name" name="name" type="text" placeholder="Max Mustermann" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Telefon</label>
          <input className="form-input" id="phone" name="phone" type="tel" placeholder="+49 …" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">E-Mail *</label>
        <input className="form-input" id="email" name="email" type="email" placeholder="ihre@email.de" required />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="subject">Betreff</label>
        <input className="form-input" id="subject" name="subject" type="text" placeholder="z.B. Mehrfamilienhaus Frankfurt" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Nachricht</label>
        <textarea className="form-input form-textarea" id="message" name="message" placeholder="Beschreiben Sie Ihr Anliegen kurz …" />
      </div>
      <button
        type="submit"
        className="form-submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden →'}
      </button>
      {status === 'success' && (
        <div className="form-success" style={{ display: 'block' }}>
          Vielen Dank — wir melden uns innerhalb von 48 Stunden bei Ihnen.
        </div>
      )}
      {status === 'error' && (
        <div className="form-error" style={{ display: 'block' }}>
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.
        </div>
      )}
    </form>
  )
}
