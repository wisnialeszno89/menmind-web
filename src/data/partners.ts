export type Partner = {

id: string
slug: string

name: string
description: string

section: string
category: string

city?: string
locationType?: "city" | "online" | "national"

website?: string
phone?: string   // 👈 DODAJ TO


tier?: "basic" | "pro" | "strategic"

featured?: boolean
verified?: boolean

views?: number
reviews?: number
rating?: number

photo?: string
experience?: string
specialties?: string[]

}

export const partners: Partner[] = [

{
id: "1",
slug: "centrum-terapii-meskiej",

name: "Centrum Terapii Męskiej",

section: "wsparcie",
category: "psycholog",

city: "poznan",
locationType: "city",

description: "Wsparcie psychologiczne dla mężczyzn",

tier: "pro",

featured: true,
verified: true,

rating: 4.8,
reviews: 12,

views: 120,

specialties: [
"kryzys życiowy",
"rozstanie",
"relacje"
]

},

{
id: "2",
slug: "mediacje-nowak",

name: "Mediacje Rodzinne Nowak",

section: "wsparcie",
category: "mediator",

city: "warszawa",
locationType: "city",

description: "Mediacje rodzinne i sprawy opieki",

tier: "basic",

rating: 4.4,
reviews: 5,

views: 45
},
{
  id: "3",
  slug: "wega",

  name: "Wega – Salon Jubilerski",

  section: "relacje",
  category: "prezent",

  city: "leszno",
  locationType: "city",

  description: "Biżuteria złota 585 i srebrna 925. Grawer i Naprawa",

  tier: "strategic",

  featured: true,
  verified: true,

  rating: 5.0,
  reviews: 3,

  views: 89,

  specialties: [
    "prezent dla kobiety",
    "zaręczyny",
    "rocznica"
  ]
},

{
  id: "4",
  slug: "mental-forge",

  name: "Mental Forge",

  section: "rozwoj",
  category: "mental",

  locationType: "online",

  description: "Wsparcie mentalne i poukładanie głowy.",

  tier: "pro",

  featured: true,
  verified: true,

  rating: 4.9,
  reviews: 18,

  views: 60
},

{
  id: "5",
  slug: "strefa-ruchu",

  name: "Strefa Ruchu",

  section: "zdrowie",
  category: "trening",

  city: "warszawa",
  locationType: "city",

  description: "Trening, który stawia Cię na nogi.",

  tier: "basic",

  featured: true,

  rating: 4.6,
  reviews: 9,

  views: 30
},

{
  id: "6",
  slug: "reset-camp",

  name: "Reset Camp",

  section: "wyjazdy",
  category: "reset",

  locationType: "national",

  description: "Wyjazdy dla facetów, którzy chcą się ogarnąć.",

  tier: "pro",

  featured: true,
  verified: true,

  rating: 5.0,
  reviews: 6,

  views: 25
},
{
  id: "3",
  slug: "kancelaria-chocianowska-poznan",

  name: "Kancelaria Adwokacka Marta Chocianowska",
  description: "Pomoc prawna w sprawach rodzinnych, rozwodach i opiece nad dziećmi",

  section: "wsparcie",
  category: "prawo",

  city: "poznan",
  locationType: "city",

  website: "",

  tier: "strategic", // możesz dać strategic jak chcesz ją wyróżnić
  featured: true,
  verified: true,

  rating: 4.9,
  reviews: 8,

  views: 0,

  specialties: [
    "rozwód",
    "opieka nad dzieckiem",
    "mediacje",
    "prawo rodzinne"
  ],

  experience: "Wsparcie prawne w trudnych sytuacjach życiowych i rodzinnych."
},
  {
  id: "online-1",
  slug: "psycholog-online-centrum",
  name: "Psycholog Online Centrum",
  section: "wsparcie",
  category: "psycholog",
  locationType: "online",
  description: "Sesje psychologiczne online dla mężczyzn w kryzysie.",
  tier: "pro",
  featured: true,
  verified: true,
  rating: 4.9,
  reviews: 21
},
{
  id: "online-2",
  slug: "coach-kierunku-online",
  name: "Coach Kierunku Online",
  section: "rozwoj",
  category: "coaching",
  locationType: "online",
  description: "Pomaga wyjść z chaosu i ustawić kierunek działania.",
  tier: "pro",
  featured: true,
  rating: 4.8,
  reviews: 14
},
{
  id: "online-3",
  slug: "mediacje-rodzinne-online",
  name: "Mediacje Rodzinne Online",
  section: "wsparcie",
  category: "mediator",
  locationType: "online",
  description: "Mediacje relacyjne i rozwodowe online.",
  tier: "basic",
  rating: 4.7,
  reviews: 8
},
{
  id: "online-4",
  slug: "mental-reset-online",
  name: "Mental Reset Online",
  section: "rozwoj",
  category: "mental",
  locationType: "online",
  description: "Szybkie sesje mentalne pomagające wrócić do równowagi.",
  tier: "pro",
  featured: true,
  rating: 5.0,
  reviews: 9
},
{
  id: "online-5",
  slug: "trener-online-start",
  name: "Trener Online Start",
  section: "zdrowie",
  category: "trening",
  locationType: "online",
  description: "Plan treningowy i wsparcie online.",
  tier: "basic",
  rating: 4.6,
  reviews: 6
},
{
  id: "trip-1",
  slug: "reset-adventure-travel",

  name: "Reset Adventure Travel",

  section: "wyjazdy",
  category: "wyjazdy-meskie",

  locationType: "national",

  description: "Wyjazdy dla mężczyzn: reset, sport i odbudowa kierunku.",

  tier: "strategic",
  featured: true,
  verified: true,

  rating: 5.0,
  reviews: 4,

  specialties: [
    "reset",
    "wyprawy",
    "rozwój"
  ]
}

]