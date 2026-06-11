import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://valoris-projektentwicklung.de/sitemap.xml',
    host: 'https://valoris-projektentwicklung.de',
  }
}
