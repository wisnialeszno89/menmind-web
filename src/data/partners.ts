export type Partner = {
  id: string
  slug: string
  name: string
  description: string
  city: string
  category: string

  website?: string

  tier?: "standard" | "strategic"

  featured?: boolean
  verified?: boolean

  views?: number
}

export const partners: Partner[] = [
  {
    id: "1",
    slug: "centrum-terapii-meskiej",
    name: "Centrum Terapii Męskiej",
    description: "Wsparcie psychologiczne dla mężczyzn",
    city: "poznan",
    category: "psycholog"
  },
  {
    id: "2",
    slug: "mediacje-nowak",
    name: "Mediacje Rodzinne Nowak",
    description: "Mediacje rodzinne i sprawy opieki",
    city: "warszawa",
    category: "mediacje"
  }
]