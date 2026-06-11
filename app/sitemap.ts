import type { MetadataRoute } from 'next'
import { immobilien } from '@/lib/immobilien'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://valoris-projektentwicklung.de'

  const staticPages = [
    '',
    '/immobilien',
    '/ueber-uns',
    '/kontakt',
    '/impressum',
    '/datenschutz',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }))

  const dynamicImmobilien = immobilien.map((immo) => ({
    url: `${base}/immobilien/${immo.slug}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...dynamicImmobilien]
}
