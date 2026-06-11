import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollAnimations from '@/components/ScrollAnimations'
import CookieBanner from '@/components/CookieBanner'

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://valoris-projektentwicklung.de'),
  title: {
    default: 'VALORIS Projektentwicklung | Wohnimmobilien im Rhein-Main-Gebiet',
    template: '%s | VALORIS Projektentwicklung',
  },
  description:
    'VALORIS Projektentwicklung — Ankauf, Vermarktung, Hausverwaltung und Entwicklung von Wohnimmobilien im Rhein-Main-Gebiet. Ersteinschätzung innerhalb von 48 Stunden.',
  keywords:
    'Immobilien, Projektentwicklung, Rhein-Main, Ankauf, Vermarktung, Hausverwaltung, Frankfurt, Wiesbaden, Mehrfamilienhaus verkaufen',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'VALORIS Projektentwicklung',
    title: 'VALORIS Projektentwicklung | Wohnimmobilien im Rhein-Main-Gebiet',
    description:
      'Ankauf, Vermarktung, Hausverwaltung und Entwicklung von Wohnimmobilien im Rhein-Main-Gebiet.',
    images: [{ url: '/images/hero.jpeg', width: 1200, height: 630, alt: 'VALORIS Projektentwicklung' }],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b1322',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'VALORIS Projektentwicklung UG (haftungsbeschränkt)',
  url: 'https://valoris-projektentwicklung.de',
  logo: 'https://valoris-projektentwicklung.de/images/valoris_logo.png',
  email: 'kontakt@valoris-projektentwicklung.de',
  telephone: '+49 155 633 44 652',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schumannstraße 27',
    postalCode: '60325',
    addressLocality: 'Frankfurt am Main',
    addressCountry: 'DE',
  },
  areaServed: 'Rhein-Main-Gebiet',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollAnimations />
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
