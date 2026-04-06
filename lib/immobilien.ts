export type Immobilie = {
  id: string
  slug: string
  titel: string
  typ: 'Mehrfamilienhaus' | 'Eigentumswohnung' | 'Penthouse' | 'Wohnhaus' | 'Gemischte Nutzung'
  status: 'Im Verkauf' | 'Reserviert' | 'Verkauft'
  preis: string
  flaeche: string
  flaeche_gewerbe?: string
  zimmer: number
  etage?: string
  baujahr: string
  grundstueck?: string
  einheiten?: string
  jahresmiete?: string
  adresse: string
  stadt: string
  plz: string
  lat: number
  lng: number
  kurzbeschreibung: string
  beschreibung: string
  ausstattung: string[]
  bilder: string[]
  hatEchteBilder?: boolean
}

export const immobilien: Immobilie[] = [
  {
    id: '1',
    slug: 'mehrfamilienhaus-giessen-uni-naehe',
    titel: 'Renoviertes Mehrfamilienhaus in Uni-Nähe Gießen',
    typ: 'Mehrfamilienhaus',
    status: 'Im Verkauf',
    preis: '1180000',
    flaeche: '342',
    zimmer: 13,
    baujahr: '1946',
    grundstueck: '280',
    einheiten: '13 Einheiten (alternativ 5 WE)',
    adresse: 'Nordstadt',
    stadt: 'Gießen',
    plz: '35392',
    lat: 50.5840,
    lng: 8.6785,
    kurzbeschreibung: '2026 vollständig renoviertes Mehrfamilienhaus in unmittelbarer Universitätsnähe — 13 neu vermietbare Einheiten mit steuerlich attraktivem Restnutzungsdauergutachten.',
    beschreibung: `Dieses 2026 aufwendig renovierte Mehrfamilienhaus befindet sich in einer der gefragtesten Wohnlagen Gießens — in unmittelbarer Nähe zur Justus-Liebig-Universität. Das Objekt umfasst 13 vollständig neu vermietbare Studentenzimmer, verteilt auf eine Gesamtwohnfläche von ca. 342 m². Alternativ besteht die Möglichkeit, das Haus in fünf eigenständige Wohneinheiten zu entwickeln und damit eine breitere Zielgruppe anzusprechen.

Die solide Bausubstanz wurde durch die umfassende Renovierung 2026 zukunftssicher gemacht: Neue Heizungsanlage, frisch gestaltete Innenräume und ein gepflegter Außenbereich schaffen optimale Voraussetzungen für eine sofortige Vermietung. Die attraktive Universitätslage garantiert eine konstant hohe Nachfrage und eine nachhaltige Mietrendite.

Besonders hervorzuheben ist die steuerliche Attraktivität des Objekts: Ein vorliegendes Restnutzungsdauergutachten ermöglicht es, das Gebäude innerhalb von nur 10 Jahren vollständig abzuschreiben — ein erheblicher Vorteil gegenüber der üblichen 50-jährigen Abschreibung und ein starkes Argument für renditeorientierte Investoren.`,
    ausstattung: [
      '13 vermietbare Einheiten',
      'Alternativ: 5 Wohneinheiten entwickelbar',
      'Vollständig renoviert 2026',
      'Neue Heizungsanlage (2026)',
      'Keller vorhanden',
      'Gemeinschaftsgarten',
      'Fahrradkeller',
      'Hauswirtschaftsraum',
      'Restnutzungsdauergutachten (10-J.-AfA)',
      'Unmittelbare Universitätsnähe',
      'Grundstück ca. 280 m²',
    ],
    bilder: [
      '/immobilien/giessen/aussen.jpeg',
      '/immobilien/giessen/flur.jpeg',
      '/immobilien/giessen/zimmer.jpeg',
      '/immobilien/giessen/detail1.jpeg',
      '/immobilien/giessen/detail2.jpeg',
    ],
    hatEchteBilder: true,
  },
  {
    id: '3',
    slug: 'penthouse-wiesbaden-innenstadt',
    titel: 'Exklusives Penthouse mit Dachterrasse',
    typ: 'Penthouse',
    status: 'Verkauft',
    preis: '2890000',
    flaeche: '185',
    zimmer: 5,
    etage: '7. OG (Dachgeschoss)',
    baujahr: '2008',
    adresse: 'Wilhelmstraße',
    stadt: 'Wiesbaden',
    plz: '65185',
    lat: 50.0826,
    lng: 8.2392,
    kurzbeschreibung: 'Luxuriöses Penthouse mit 85 m² Dachterrasse und Panoramablick über Wiesbaden — schlüsselfertig saniert.',
    beschreibung: `Einzigartiges Penthouse in absoluter Toplage der Wiesbadener Innenstadt. Die lichtdurchflutete Wohnung beeindruckt durch ihre großzügige Raumaufteilung, hochwertige Materialien und den spektakulären Ausblick von der umlaufenden Dachterrasse. Die Vollsanierung 2022 umfasste alle relevanten Gewerke – von der Elektrik bis zur Küche.`,
    ausstattung: [
      '85 m² Dachterrasse',
      'Panoramablick über Wiesbaden',
      'Vollsaniert 2022',
      'Designerküche',
      'Fußbodenheizung',
      '2 Tiefgaragenstellplätze',
      'Aufzug',
    ],
    bilder: [
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Kurhaus_Wiesbaden_blaue_Stunde_290-L4.jpg',
    ],
    hatEchteBilder: false,
  },
  {
    id: '2',
    slug: 'mehrfamilienhaus-frankfurt-arztpraxis',
    titel: 'Attraktives Mehrfamilienhaus mit Arztpraxis in Frankfurt',
    typ: 'Gemischte Nutzung',
    status: 'Im Verkauf',
    preis: '1150000',
    flaeche: '264',
    flaeche_gewerbe: '171',
    zimmer: 4,
    baujahr: '1968',
    einheiten: '4 WE + 1 GEW',
    jahresmiete: '60.500',
    adresse: 'Sindlingen',
    stadt: 'Frankfurt am Main',
    plz: '65931',
    lat: 50.0870,
    lng: 8.5520,
    kurzbeschreibung: 'Vollvermietetes Eckgebäude mit langfristig etablierter Arztpraxis im EG und vier Wohneinheiten — Jahresmiete 60.500 € bei solider Substanz und attraktiver Lage.',
    beschreibung: `Zum Verkauf steht dieses gepflegte und markante Mehrfamilienhaus in attraktiver Frankfurter Lage. Das Objekt besticht durch seine solide Bauweise, eine hervorragende Mieterstruktur und eine vollständige Vermietung über alle Einheiten hinweg.

Die Immobilie teilt sich in eine großzügige, langfristig vermietete Arztpraxis im Erdgeschoss (ca. 171 m²) sowie vier helle Wohneinheiten in den darüberliegenden Stockwerken (ca. 264 m² Wohnfläche) auf. Besonders hervorzuheben ist die prominente Ecklage, die der Arztpraxis eine exzellente Sichtbarkeit und einen direkten Patientenzugang verleiht — ein entscheidender Standortvorteil für medizinische Nutzungen.

Die Wohneinheiten profitieren von großzügigen Fensterfronten und lichtdurchfluteten Räumen. Die gepflegten Außenanlagen, ausreichend Stellplätze sowie die solide Bausubstanz runden das Gesamtbild ab. Mit einer aktuellen Jahresnettomiete von 60.500 € und einem Kaufpreis von 1.150.000 € ergibt sich ein attraktiver Einstiegsmultiplikator für renditeorientierte Kapitalanleger.`,
    ausstattung: [
      '4 Wohneinheiten (ca. 264 m²)',
      '1 Gewerbeeinheit Arztpraxis (ca. 171 m²)',
      'Vollvermietet',
      'Jahresmiete: 60.500 € p. a.',
      'Prominente Ecklage',
      'Keller vorhanden',
      'Fahrradkeller',
      'Hauswirtschaftsraum',
      'Garage / Stellplätze',
      'Langfristiger Gewerbemieter',
    ],
    bilder: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85&fit=crop&auto=format',
    ],
    hatEchteBilder: false,
  },
]
