export interface BaptismAvailability {
  date: string
  status: string
  // added by this script
  formattedDate?: string
}

export interface BaptismCatechesisAvailability {
  date: string
  status: string
  // added by this script
  formattedDate?: string
}

export interface Event {
  id: string
  date: string
  status: string
}

export interface WebsiteEvent extends Event {
  formattedDate: string
  link: string
  titre?: string
  image?: string
  contenu?: string
}

export interface Publication {
  id: string
  status: string
  image: string
  titre: string
  texte: string
}

export interface WebsitePublication extends Publication {
  formattedDate: string
  link: string
}

export interface Schema {
  'disponibilite_bapteme': BaptismAvailability[]
  'disponibilite_catechese_bapteme': BaptismCatechesisAvailability[],
  'evenements': Event[]
  'publications': Publication[]
}
