'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

type Step = 1 | 2 | 3

interface FormData {
  objekttyp: string
  strasse: string
  plz: string
  ort: string
  flaeche: string
  zimmer: string
  baujahr: string
  zustand: string
  preisvorstellung: string
  preisverhandlungsoffen: boolean
  vermietungsstatus: string
  name: string
  telefon: string
  email: string
  nachricht: string
  datenschutz: boolean
}

const initialData: FormData = {
  objekttyp: '',
  strasse: '',
  plz: '',
  ort: '',
  flaeche: '',
  zimmer: '',
  baujahr: '',
  zustand: '',
  preisvorstellung: '',
  preisverhandlungsoffen: false,
  vermietungsstatus: '',
  name: '',
  telefon: '',
  email: '',
  nachricht: '',
  datenschutz: false,
}

const objekttypen = [
  'Eigentumswohnung',
  'Mehrfamilienhaus',
  'Einfamilienhaus',
  'Doppelhaushälfte',
  'Penthouse',
  'Grundstück',
  'Sonstiges',
]

const zustandOptionen = [
  'Neuwertig / saniert',
  'Gepflegt',
  'Renovierungsbedürftig',
  'Kernsanierungsbedarf',
]

const vermietungsstatusOptionen = [
  'Vollvermietet',
  'Teilvermietet',
  'Leerstand',
  'Eigennutzung',
]

function ChipButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: '8px 16px',
        fontSize: '13px',
        fontFamily: "'Inter', sans-serif",
        fontWeight: active ? 500 : 300,
        border: active ? '1px solid var(--navy)' : '1px solid var(--border2)',
        borderRadius: '6px',
        background: active ? 'var(--navy)' : 'var(--white)',
        color: active ? '#fff' : 'var(--muted)',
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      {label}
    </button>
  )
}

function Checkbox({ checked, onChange, label, href }: { checked: boolean; onChange: () => void; label?: string; href?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
      <button
        type="button"
        onClick={onChange}
        style={{
          width: '18px',
          height: '18px',
          flexShrink: 0,
          marginTop: '2px',
          border: checked ? '1px solid var(--navy)' : '1px solid var(--border2)',
          borderRadius: '4px',
          background: checked ? 'var(--navy)' : 'var(--white)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      {label && (
        <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
          {label}{' '}
          {href && (
            <Link href={href} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
              Datenschutzerklärung
            </Link>
          )}
          {' '}*
        </p>
      )}
    </div>
  )
}

export default function OffMarketPage() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<FormData>(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const update = (field: keyof FormData, value: string | boolean) =>
    setData(prev => ({ ...prev, [field]: value }))

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3) as Step)
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step)

  const canProceedStep1 = data.objekttyp && data.strasse && data.plz && data.ort && data.flaeche
  const canProceedStep2 = data.preisvorstellung && data.vermietungsstatus
  const canSubmit = data.name && data.email && data.datenschutz

  const handleSubmit = async () => {
    if (!canSubmit) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/off-market', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    } finally {
      setLoading(false)
    }
  }

  // ── ERFOLG ──
  if (submitted) {
    return (
      <>
        <Nav />
        <div style={{ background: 'var(--navy)', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: '80px 40px' }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '40px', fontWeight: 700, color: '#fff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Anfrage eingegangen.
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 40px' }}>
              Vielen Dank, {data.name.split(' ')[0]}. Wir melden uns innerhalb von 48 Stunden diskret bei Ihnen — per Telefon oder E-Mail.
            </p>
            <Link href="/" className="btn-white">← Zurück zur Startseite</Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const stepLabels = ['Objekt', 'Preisvorstellung', 'Kontakt']

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div style={{ background: 'var(--navy)', padding: '80px 60px 64px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="hero-chip" style={{ marginBottom: '28px' }}>
            <div className="hero-chip-dot" />
            <span className="hero-chip-text">Off-Market · Diskrete Abwicklung</span>
          </div>
          <h1 className="hero-h1" style={{ fontSize: '52px', marginBottom: '20px' }}>
            Immobilie diskret<br />
            <span style={{ color: '#93c5fd' }}>anbieten.</span>
          </h1>
          <p className="hero-p" style={{ marginBottom: 0 }}>
            Viele unserer Transaktionen laufen ohne öffentliches Inserat. Teilen Sie uns Ihr Objekt vertraulich mit — wir melden uns innerhalb von 48 Stunden.
          </p>
        </div>
      </div>

      {/* ── STEPPER ── */}
      <div style={{ borderBottom: '1px solid var(--border)', background: 'var(--off2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '64px', gap: '0' }}>
            {stepLabels.map((label, i) => {
              const n = (i + 1) as Step
              const done = step > n
              const active = step === n
              return (
                <div key={n} style={{ display: 'flex', alignItems: 'center' }}>
                  {i > 0 && (
                    <div style={{
                      width: '48px', height: '1px', margin: '0 8px',
                      background: done ? 'var(--navy)' : 'var(--border2)',
                      transition: 'background 0.3s',
                    }} />
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '26px', height: '26px', borderRadius: '50%',
                      background: active ? 'var(--navy)' : done ? 'var(--blue-light)' : 'var(--border)',
                      color: active ? '#fff' : done ? 'var(--navy)' : 'var(--light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 600,
                      transition: 'all 0.3s',
                    }}>
                      {done ? (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : n}
                    </div>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: active ? 500 : 300,
                      color: active ? 'var(--navy)' : 'var(--light)',
                      transition: 'color 0.3s',
                    }}>
                      {label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── FORMULAR ── */}
      <div style={{ background: 'var(--off)', minHeight: '500px', padding: '64px 60px 96px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '64px', alignItems: 'start' }}>

          {/* LINKE SPALTE — Formularschritte */}
          <div>

            {/* ─── SCHRITT 1 ─── */}
            {step === 1 && (
              <div>
                <div className="eyebrow">Schritt 1 von 3</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  Ihr Objekt
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, marginBottom: '40px' }}>
                  Alle Angaben werden vertraulich behandelt und nicht öffentlich zugänglich gemacht.
                </p>

                <div className="form-group">
                  <label className="form-label">Objekttyp *</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    {objekttypen.map(typ => (
                      <ChipButton key={typ} label={typ} active={data.objekttyp === typ} onClick={() => update('objekttyp', typ)} />
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="strasse">Straße & Hausnummer *</label>
                  <input
                    className="form-input"
                    id="strasse"
                    type="text"
                    placeholder="Musterstraße 12"
                    value={data.strasse}
                    onChange={e => update('strasse', e.target.value)}
                  />
                </div>

                <div className="form-grid" style={{ gridTemplateColumns: '140px 1fr' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="plz">PLZ *</label>
                    <input
                      className="form-input"
                      id="plz"
                      type="text"
                      placeholder="60311"
                      maxLength={5}
                      value={data.plz}
                      onChange={e => update('plz', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="ort">Ort *</label>
                    <input
                      className="form-input"
                      id="ort"
                      type="text"
                      placeholder="Frankfurt am Main"
                      value={data.ort}
                      onChange={e => update('ort', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="flaeche">Wohnfläche (m²) *</label>
                    <input
                      className="form-input"
                      id="flaeche"
                      type="number"
                      placeholder="z.B. 120"
                      value={data.flaeche}
                      onChange={e => update('flaeche', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="zimmer">Zimmeranzahl</label>
                    <input
                      className="form-input"
                      id="zimmer"
                      type="number"
                      placeholder="z.B. 4"
                      value={data.zimmer}
                      onChange={e => update('zimmer', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="baujahr">Baujahr</label>
                  <input
                    className="form-input"
                    id="baujahr"
                    type="number"
                    placeholder="z.B. 1975"
                    value={data.baujahr}
                    onChange={e => update('baujahr', e.target.value)}
                    style={{ maxWidth: '180px' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Zustand des Objekts</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    {zustandOptionen.map(z => (
                      <ChipButton key={z} label={z} active={data.zustand === z} onClick={() => update('zustand', z)} />
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceedStep1}
                    className="form-submit"
                    style={{ opacity: canProceedStep1 ? 1 : 0.4, cursor: canProceedStep1 ? 'pointer' : 'not-allowed', marginTop: 0 }}
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            )}

            {/* ─── SCHRITT 2 ─── */}
            {step === 2 && (
              <div>
                <div className="eyebrow">Schritt 2 von 3</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  Preisvorstellung
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, marginBottom: '40px' }}>
                  Ihre Angaben helfen uns bei einer schnellen und realistischen Ersteinschätzung.
                </p>

                <div className="form-group">
                  <label className="form-label" htmlFor="preis">Kaufpreisvorstellung *</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', fontSize: '14px', fontWeight: 300 }}>€</span>
                    <input
                      className="form-input"
                      id="preis"
                      type="text"
                      placeholder="0"
                      value={data.preisvorstellung}
                      onChange={e => {
                        const raw = e.target.value.replace(/\./g, '').replace(/[^0-9]/g, '')
                        update('preisvorstellung', raw ? parseInt(raw).toLocaleString('de-DE') : '')
                      }}
                      style={{ paddingLeft: '28px' }}
                    />
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <Checkbox
                      checked={data.preisverhandlungsoffen}
                      onChange={() => update('preisverhandlungsoffen', !data.preisverhandlungsoffen)}
                      label="Preis ist verhandelbar"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Vermietungsstatus *</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                    {vermietungsstatusOptionen.map(vs => (
                      <ChipButton key={vs} label={vs} active={data.vermietungsstatus === vs} onClick={() => update('vermietungsstatus', vs)} />
                    ))}
                  </div>
                </div>

                {/* Zusammenfassung Schritt 1 */}
                <div style={{
                  background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '10px',
                  padding: '20px 24px', marginTop: '32px',
                }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: '14px' }}>
                    Objekt (Schritt 1)
                  </div>
                  <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                    <tbody>
                      {[
                        ['Typ', data.objekttyp],
                        ['Adresse', `${data.strasse}, ${data.plz} ${data.ort}`],
                        ['Fläche', `${data.flaeche} m²${data.zimmer ? ` · ${data.zimmer} Zi.` : ''}`],
                        ...(data.zustand ? [['Zustand', data.zustand] as [string, string]] : []),
                      ].map(([k, v]) => (
                        <tr key={k}>
                          <td style={{ padding: '4px 0', color: 'var(--light)', width: '80px', fontWeight: 300 }}>{k}</td>
                          <td style={{ padding: '4px 0', color: 'var(--navy)', fontWeight: 400 }}>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', gap: '12px' }}>
                  <button type="button" onClick={prevStep} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: 'var(--muted)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    ← Zurück
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceedStep2}
                    className="form-submit"
                    style={{ opacity: canProceedStep2 ? 1 : 0.4, cursor: canProceedStep2 ? 'pointer' : 'not-allowed', marginTop: 0, flex: 1, maxWidth: '200px' }}
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            )}

            {/* ─── SCHRITT 3 ─── */}
            {step === 3 && (
              <div>
                <div className="eyebrow">Schritt 3 von 3</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  Ihre Kontaktdaten
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, marginBottom: '40px' }}>
                  Wir melden uns diskret und ausschließlich bei Ihnen — kein öffentliches Inserat ohne Ihre Zustimmung.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name *</label>
                    <input
                      className="form-input"
                      id="name"
                      type="text"
                      placeholder="Vor- und Nachname"
                      value={data.name}
                      onChange={e => update('name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="telefon">Telefon</label>
                    <input
                      className="form-input"
                      id="telefon"
                      type="tel"
                      placeholder="+49 155 …"
                      value={data.telefon}
                      onChange={e => update('telefon', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">E-Mail *</label>
                  <input
                    className="form-input"
                    id="email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={data.email}
                    onChange={e => update('email', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="nachricht">Anmerkungen (optional)</label>
                  <textarea
                    className="form-input form-textarea"
                    id="nachricht"
                    placeholder="z.B. Besonderheiten des Objekts, bevorzugter Kontaktweg, Zeitrahmen für den Verkauf …"
                    value={data.nachricht}
                    onChange={e => update('nachricht', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Checkbox
                    checked={data.datenschutz}
                    onChange={() => update('datenschutz', !data.datenschutz)}
                    label="Ich stimme der vertraulichen Verarbeitung meiner Daten gemäß der"
                    href="/datenschutz"
                  />
                </div>

                {error && (
                  <div className="form-error" style={{ display: 'block' }}>{error}</div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', gap: '12px' }}>
                  <button type="button" onClick={prevStep} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: 'var(--muted)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    ← Zurück
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || loading}
                    className="form-submit"
                    style={{
                      opacity: canSubmit && !loading ? 1 : 0.4,
                      cursor: canSubmit && !loading ? 'pointer' : 'not-allowed',
                      marginTop: 0, flex: 1, maxWidth: '220px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    }}
                  >
                    {loading ? (
                      <>
                        <svg style={{ animation: 'spin 1s linear infinite' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 2a10 10 0 0 1 10 10" />
                          <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                        </svg>
                        Wird gesendet …
                      </>
                    ) : 'Anfrage senden →'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RECHTE SPALTE — Info-Panel */}
          <div style={{ position: 'sticky', top: '90px' }}>
            <div style={{
              background: 'var(--navy)', borderRadius: '12px', padding: '32px 28px',
            }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 500, marginBottom: '24px' }}>
                Warum Off-Market?
              </div>
              {[
                { icon: '🔒', title: 'Vollständige Diskretion', text: 'Kein öffentliches Inserat. Ihre Immobilie wird nur unserem geprüften Käufernetzwerk präsentiert.' },
                { icon: '⚡', title: '48 h Ersteinschätzung', text: 'Wir melden uns schnell mit einer realistischen Markteinschätzung — ohne Zeitdruck.' },
                { icon: '🤝', title: 'Persönliche Betreuung', text: 'Ein direkter Ansprechpartner von der ersten Einschätzung bis zum Notartermin.' },
              ].map(({ icon, title, text }) => (
                <div key={title} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ fontSize: '20px', marginBottom: '8px' }}>{icon}</div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>{title}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', fontWeight: 300, lineHeight: 1.75 }}>{text}</div>
                </div>
              ))}
              <div style={{ paddingTop: '8px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: '6px' }}>
                  Direktkontakt
                </div>
                <a href="tel:+4915563344652" style={{ fontSize: '14px', color: '#93c5fd', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>
                  +49 155 633 44 652
                </a>
                <a href="mailto:kontakt@valoris-projektentwicklung.de" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontWeight: 300 }}>
                  kontakt@valoris-projektentwicklung.de
                </a>
              </div>
            </div>

            {/* Vertrauens-Badges */}
            {step === 3 && (
              <div style={{ marginTop: '16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px 24px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: '14px' }}>
                  Zusammenfassung
                </div>
                <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      ['Objekt', `${data.objekttyp} · ${data.flaeche} m²`],
                      ['Adresse', `${data.strasse}, ${data.plz} ${data.ort}`],
                      ['Preis', `€ ${data.preisvorstellung}${data.preisverhandlungsoffen ? ' (verh.)' : ''}`],
                      ['Status', data.vermietungsstatus],
                    ].map(([k, v]) => (
                      <tr key={k}>
                        <td style={{ padding: '4px 0', color: 'var(--light)', width: '70px', fontWeight: 300, verticalAlign: 'top' }}>{k}</td>
                        <td style={{ padding: '4px 0', color: 'var(--navy)', fontWeight: 400, wordBreak: 'break-word' }}>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      <Footer />
    </>
  )
}
