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
website2?: string
phone?: string
email?: string
address?: string  

tier?: "basic" | "pro" | "strategic"

featured?: boolean
verified?: boolean

views?: number
reviews?: number
rating?: number

photo?: string
experience?: string
specialties?: string[]

placeholder?: boolean
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

export const placeholderPartners: Partner[] = [

{
id: "ph-1",
slug: "psycholog-online",
name: "Psycholog online",
section: "wsparcie",
category: "psycholog",
description: "Wsparcie w kryzysie, stresie i rozstaniu.",
locationType: "online",
featured: true,
rating: 4.8,
reviews: 12,
placeholder: true
},

{
id: "ph-2",
slug: "coach-zyciowy",
name: "Coach życiowy",
section: "rozwoj",
category: "coaching",
description: "Pomoc w poukładaniu kierunku i planu działania.",
locationType: "online",
placeholder: true
},

{
id: "ph-3",
slug: "mediator-rozstania",
name: "Mediator rozstania",
section: "wsparcie",
category: "mediator",
description: "Pomoc w spokojnym przejściu przez rozstanie.",
locationType: "online",
placeholder: true
},

{
id: "ph-4",
slug: "doradca-finansowy",
name: "Doradca finansowy",
section: "finanse",
category: "finanse",
description: "Uporządkowanie sytuacji finansowej.",
locationType: "online",
placeholder: true
}

]