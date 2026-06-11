import Image from 'next/image'
import Link from 'next/link'
import type { Immobilie } from '@/lib/immobilien'

const statusColor: Record<string, string> = {
  'Im Verkauf': '#3e7a4b',
  'Reserviert': '#b07c2a',
  'Verkauft': '#7a8090',
}

export function formatPreis(preis: string): string {
  const num = parseInt(preis.replace(/\D/g, ''), 10)
  if (isNaN(num)) return preis
  return num.toLocaleString('de-DE')
}

export default function ImmoCard({ immo, delay }: { immo: Immobilie; delay?: number }) {
  const verkauft = immo.status === 'Verkauft'

  return (
    <Link
      href={`/immobilien/${immo.slug}`}
      className={`icard reveal${verkauft ? ' icard--sold' : ''}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      <div className="icard-img">
        <Image
          src={immo.bilder[0]}
          alt={immo.titel}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1060px) 50vw, 33vw"
          style={{ objectPosition: immo.bildPosition || 'center' }}
        />
        <div className="ibadge">
          <span className="dot" style={{ background: statusColor[immo.status] }} />
          {immo.status}
        </div>
        <div className="ibadge ibadge--typ">{immo.typ}</div>
      </div>

      <div className="icard-body">
        <div className="icard-loc">{immo.plz} {immo.stadt}</div>
        <h3 className="icard-title">{immo.titel}</h3>
        <p className="icard-desc">{immo.kurzbeschreibung}</p>

        <div className="icard-stats">
          <div>
            <div className="v">{immo.flaeche} m²</div>
            <div className="l">Fläche</div>
          </div>
          <div>
            <div className="v">{immo.zimmer}</div>
            <div className="l">Zimmer</div>
          </div>
          <div>
            <div className="v">{immo.baujahr}</div>
            <div className="l">Baujahr</div>
          </div>
        </div>

        <div className="icard-foot">
          <div>
            <div className="icard-price-lbl">{verkauft ? 'Erzielter Preis' : 'Kaufpreis'}</div>
            <div className="icard-price">{formatPreis(immo.preis)} €</div>
          </div>
          <span className="icard-cta">Details <span aria-hidden>→</span></span>
        </div>
      </div>
    </Link>
  )
}
