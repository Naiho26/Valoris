'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentState = {
  necessary: true
  analytics: boolean
  maps: boolean
  decided: boolean
}

const STORAGE_KEY = 'valoris_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    maps: false,
    decided: false,
  })

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setConsent(parsed)
        setVisible(false)
      } else {
        // Small delay so page loads first
        setTimeout(() => setVisible(true), 800)
      }
    } catch {
      setTimeout(() => setVisible(true), 800)
    }
  }, [])

  function saveConsent(state: ConsentState) {
    const final = { ...state, decided: true }
    setConsent(final)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(final)) } catch {}
    setVisible(false)
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, maps: true, decided: true })
  }

  function acceptNecessary() {
    saveConsent({ necessary: true, analytics: false, maps: false, decided: true })
  }

  function saveSelection() {
    saveConsent({ ...consent, decided: true })
  }

  if (!visible) return null

  return (
    <>
      {/* Backdrop */}
      <div style={{
        position: 'fixed', inset: 0,
        background: 'rgba(10,18,32,0.55)',
        zIndex: 9998,
        backdropFilter: 'blur(2px)',
      }} />

      {/* Banner */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(640px, calc(100vw - 32px))',
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
        zIndex: 9999,
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif",
      }}>

        {/* Header */}
        <div style={{ background: 'var(--navy)', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: '15px', fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>
            Datenschutz & Cookies
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 28px' }}>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '16px', fontWeight: 300 }}>
            Diese Website verwendet Cookies und ähnliche Technologien. Technisch notwendige Cookies sind immer aktiv. Für Google Maps und Analysen benötigen wir Ihre Einwilligung gemäß § 25 TTDSG und Art. 6 Abs. 1 lit. a DSGVO.{' '}
            <Link href="/datenschutz" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              Datenschutzerklärung
            </Link>
          </p>

          {/* Detail toggle */}
          <button
            onClick={() => setShowDetail(!showDetail)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: 'var(--accent)', fontWeight: 500, padding: 0, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: showDetail ? '20px' : '0', fontFamily: "'Inter', sans-serif" }}
          >
            <span style={{ display: 'inline-block', transform: showDetail ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>▶</span>
            {showDetail ? 'Weniger anzeigen' : 'Einstellungen anpassen'}
          </button>

          {/* Detail panel */}
          {showDetail && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {[
                {
                  key: 'necessary',
                  label: 'Technisch notwendig',
                  desc: 'Session-Cookies für Basisfunktionen der Website. Immer aktiv.',
                  locked: true,
                  checked: true,
                },
                {
                  key: 'maps',
                  label: 'Google Maps',
                  desc: 'Interaktive Karten auf Immobilien-Detailseiten (Google Ireland Ltd.).',
                  locked: false,
                  checked: consent.maps,
                },
                {
                  key: 'analytics',
                  label: 'Vercel Analytics',
                  desc: 'Anonymisierte Besucherstatistiken zur Website-Verbesserung.',
                  locked: false,
                  checked: consent.analytics,
                },
              ].map(item => (
                <div key={item.key} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', padding: '14px 16px', background: 'var(--off)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--navy)', marginBottom: '3px' }}>{item.label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}>
                    {item.locked ? (
                      <div style={{ width: '44px', height: '24px', background: 'var(--navy)', borderRadius: '100px', position: 'relative', opacity: 0.5 }}>
                        <div style={{ position: 'absolute', right: '3px', top: '3px', width: '18px', height: '18px', background: '#fff', borderRadius: '50%' }} />
                      </div>
                    ) : (
                      <button
                        onClick={() => setConsent(prev => ({ ...prev, [item.key]: !prev[item.key as keyof ConsentState] }))}
                        style={{
                          width: '44px', height: '24px',
                          background: item.checked ? 'var(--navy)' : 'var(--border2)',
                          borderRadius: '100px',
                          border: 'none',
                          cursor: 'pointer',
                          position: 'relative',
                          transition: 'background 0.2s',
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: '3px',
                          left: item.checked ? 'calc(100% - 21px)' : '3px',
                          width: '18px', height: '18px',
                          background: '#fff',
                          borderRadius: '50%',
                          transition: 'left 0.2s',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                        }} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{ padding: '0 28px 24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {showDetail ? (
            <>
              <button onClick={saveSelection} style={{ flex: 1, minWidth: '140px', background: 'var(--navy)', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'background 0.2s' }}>
                Auswahl speichern
              </button>
              <button onClick={acceptAll} style={{ flex: 1, minWidth: '140px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'background 0.2s' }}>
                Alle akzeptieren
              </button>
            </>
          ) : (
            <>
              <button onClick={acceptNecessary} style={{ flex: '0 0 auto', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--border2)', borderRadius: '8px', padding: '11px 20px', fontSize: '13px', fontWeight: 400, cursor: 'pointer', fontFamily: "'Inter', sans-serif", whiteSpace: 'nowrap' }}>
                Nur notwendige
              </button>
              <button onClick={acceptAll} style={{ flex: 1, background: 'var(--navy)', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Inter', sans-serif", transition: 'background 0.2s' }}>
                Alle akzeptieren
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
