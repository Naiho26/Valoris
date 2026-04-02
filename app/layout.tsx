import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VALORIS Projektentwicklung | Wohnimmobilien im Rhein-Main-Gebiet',
  description: 'VALORIS Projektentwicklung — Ankauf, Vermarktung, Hausverwaltung und Entwicklung von Wohnimmobilien im Rhein-Main-Gebiet.',
  keywords: 'Immobilien, Projektentwicklung, Rhein-Main, Ankauf, Vermarktung, Hausverwaltung, Frankfurt',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
