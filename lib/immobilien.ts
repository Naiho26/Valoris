export type Immobilie = {
  id: string
  slug: string
  titel: string
  typ: 'Mehrfamilienhaus' | 'Eigentumswohnung' | 'Penthouse' | 'Wohnhaus'
  status: 'Im Verkauf' | 'Reserviert' | 'Verkauft'
  preis: string
  flaeche: string
  zimmer: number
  etage?: string
  baujahr: string
  adresse: string
  stadt: string
  plz: string
  lat: number
  lng: number
  kurzbeschreibung: string
  beschreibung: string
  ausstattung: string[]
  bilder: string[]
  expose?: string
}

export const immobilien: Immobilie[] = [
  {
    id: '1',
    slug: 'mehrfamilienhaus-frankfurt-sachsenhausen',
    titel: 'Elegantes Mehrfamilienhaus in Sachsenhausen',
    typ: 'Mehrfamilienhaus',
    status: 'Im Verkauf',
    preis: '2.850.000',
    flaeche: '620',
    zimmer: 12,
    baujahr: '1962',
    adresse: 'Schweizer Straße 48',
    stadt: 'Frankfurt am Main',
    plz: '60594',
    lat: 50.0989,
    lng: 8.6835,
    kurzbeschreibung: 'Vollvermietetes Mehrfamilienhaus in begehrter Lage mit 6 Einheiten und hohem Entwicklungspotenzial.',
    beschreibung: 'Dieses hochwertige Mehrfamilienhaus befindet sich in einer der gefragtesten Wohnlagen Frankfurts. Das Objekt umfasst 6 vollständig vermietete Einheiten mit einer Gesamtwohnfläche von ca. 620 m². Die solide Bausubstanz und der gepflegte Zustand machen dieses Objekt zu einer erstklassigen Kapitalanlage mit attraktiver Rendite und nachhaltigem Entwicklungspotenzial.',
    ausstattung: ['6 Wohneinheiten', 'Vollvermietet', 'Keller', 'Gemeinschaftsgarten', 'Fahrradkeller', 'Hauswirtschaftsraum', 'Neue Heizungsanlage (2021)', 'Teilweise sanierte Bäder'],
    bilder: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560185127-6a6bd0d613ef?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85&fit=crop&auto=format',
    ],
  },
  {
    id: '2',
    slug: 'penthouse-wiesbaden-innenstadt',
    titel: 'Exklusives Penthouse mit Dachterrasse',
    typ: 'Penthouse',
    status: 'Im Verkauf',
    preis: '1.490.000',
    flaeche: '185',
    zimmer: 5,
    etage: '7. OG (Dachgeschoss)',
    baujahr: '2008',
    adresse: 'Wilhelmstraße 22',
    stadt: 'Wiesbaden',
    plz: '65185',
    lat: 50.0826,
    lng: 8.2392,
    kurzbeschreibung: 'Luxuriöses Penthouse mit 85 m² Dachterrasse und Panoramablick über Wiesbaden — schlüsselfertig saniert.',
    beschreibung: 'Einzigartiges Penthouse in absoluter Toplage der Wiesbadener Innenstadt. Die lichtdurchflutete Wohnung beeindruckt durch ihre großzügige Raumaufteilung, hochwertige Materialien und den spektakulären Ausblick von der umlaufenden Dachterrasse. Die Vollsanierung 2022 umfasste alle relevanten Gewerke — von der Elektrik bis zur Küche.',
    ausstattung: ['85 m² Dachterrasse', 'Panoramablick', 'Vollsaniert 2022', 'Designerküche', 'Fußbodenheizung', '2 Tiefgaragenstellplätze', 'Aufzug', 'Concierge-Service'],
    bilder: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=85&fit=crop&auto=format',
    ],
  },
  {
    id: '3',
    slug: 'eigentumswohnung-frankfurt-westend',
    titel: 'Lichtdurchflutete 4-Zimmer-Wohnung im Westend',
    typ: 'Eigentumswohnung',
    status: 'Im Verkauf',
    preis: '890.000',
    flaeche: '118',
    zimmer: 4,
    etage: '3. OG',
    baujahr: '1955',
    adresse: 'Beethovenstraße 31',
    stadt: 'Frankfurt am Main',
    plz: '60325',
    lat: 50.1136,
    lng: 8.6618,
    kurzbeschreibung: 'Altbaucharme trifft modernes Wohnen — frisch sanierte Wohnung in exklusiver Westend-Lage.',
    beschreibung: 'Diese charaktervolle Altbauwohnung im begehrten Frankfurter Westend vereint historischen Charme mit zeitgemäßem Komfort. Hohe Stuckdecken, Parkettböden und großzügige Raumhöhen schaffen ein besonderes Wohngefühl. Die umfassende Sanierung 2023 lässt keine Wünsche offen.',
    ausstattung: ['Stuckdecken', 'Eichenparkett', 'Saniert 2023', 'Südbalkon', 'Einbauküche', 'Badewanne & Dusche', 'Keller', 'Fahrradstellplatz'],
    bilder: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&fit=crop&auto=format',
    ],
  },
  {
    id: '4',
    slug: 'wohnhaus-mainz-gonsenheim',
    titel: 'Freistehendes Wohnhaus mit großem Garten',
    typ: 'Wohnhaus',
    status: 'Reserviert',
    preis: '1.150.000',
    flaeche: '210',
    zimmer: 7,
    baujahr: '1978',
    adresse: 'Lennebergstraße 14',
    stadt: 'Mainz',
    plz: '55124',
    lat: 49.9969,
    lng: 8.2107,
    kurzbeschreibung: 'Großzügiges Einfamilienhaus mit 800 m² Grundstück, Doppelgarage und Ausbaupotenzial.',
    beschreibung: 'Dieses freistehende Wohnhaus in der ruhigen und grünen Wohnlage Gonsenheim bietet auf drei Ebenen großzügigen Wohnraum für die ganze Familie. Das weitläufige Grundstück von ca. 800 m² mit altem Baumbestand und Terrasse schafft ein naturnahes Wohngefühl — nur wenige Minuten von der Mainzer Innenstadt entfernt.',
    ausstattung: ['800 m² Grundstück', 'Doppelgarage', 'Großer Garten', 'Terrasse', 'Keller vollunterkellert', 'Ausbaupotenzial DG', 'Neue Fenster (2020)', 'Ölheizung'],
    bilder: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=1200&q=85&fit=crop&auto=format',
    ],
  },
  {
    id: '5',
    slug: 'mehrfamilienhaus-darmstadt-bessungen',
    titel: 'Saniertes MFH in Bestlage Bessungen',
    typ: 'Mehrfamilienhaus',
    status: 'Im Verkauf',
    preis: '1.980.000',
    flaeche: '480',
    zimmer: 10,
    baujahr: '1928',
    adresse: 'Liebigstraße 67',
    stadt: 'Darmstadt',
    plz: '64293',
    lat: 49.8637,
    lng: 8.6519,
    kurzbeschreibung: 'Denkmalgeschütztes Gründerzeit-MFH mit 5 Einheiten, vollständig kernsaniert und direkt an der Mathildenhöhe.',
    beschreibung: 'Einzigartiges Angebot in Darmstadts begehrtester Wohnlage: Dieses denkmalgeschützte Mehrfamilienhaus aus der Gründerzeit wurde zwischen 2020 und 2022 aufwendig kernsaniert. Sämtliche Leitungen, Heizung, Bäder und Fassade wurden erneuert. Die historische Substanz mit Stuck, Erkern und Holzparkettböden wurde liebevoll erhalten.',
    ausstattung: ['Denkmalschutz (AfA-Vorteil)', '5 Wohneinheiten', 'Kernsaniert 2020–2022', 'Gründerzeitfassade', 'Stuckelemente', 'Aufzugnachrüstung möglich', 'Fahrradkeller', 'Gemeinschaftsgarten'],
    bilder: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1600047509360-9cd1741d71e3?w=1200&q=85&fit=crop&auto=format',
    ],
  },
  {
    id: '6',
    slug: 'eigentumswohnung-wiesbaden-nerotal',
    titel: 'Elegante 3-Zimmer-Wohnung im Nerotal',
    typ: 'Eigentumswohnung',
    status: 'Im Verkauf',
    preis: '720.000',
    flaeche: '96',
    zimmer: 3,
    etage: '2. OG',
    baujahr: '1970',
    adresse: 'Nerobergstraße 8',
    stadt: 'Wiesbaden',
    plz: '65193',
    lat: 50.0912,
    lng: 8.2298,
    kurzbeschreibung: 'Ruhige Toplage am Fuß des Nerobergs — modernisierte Wohnung mit großem Balkon und Tiefgaragenplatz.',
    beschreibung: 'Diese gepflegte Eigentumswohnung liegt in einer der exklusivsten Wohnlagen Wiesbadens — am ruhigen Neroberg, umgeben von Villen und Grünanlagen. Die Wohnung bietet eine durchdachte Grundrissgestaltung mit separater Küche, großzügigem Wohnbereich und einem nach Süden ausgerichteten Balkon.',
    ausstattung: ['Südbalkon', 'Tiefgaragenstellplatz', 'Neue Einbauküche', 'Laminatboden', 'Keller', 'Hausmeisterservice', 'Videosprechanlage', 'Ruhige Seitenstraße'],
    bilder: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=85&fit=crop&auto=format',
    ],
  },
]
