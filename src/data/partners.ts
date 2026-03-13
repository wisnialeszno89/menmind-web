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
}

]