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
reviews?: number

photo?: string
experience?: string
specialties?: string[]

}

export const partners: Partner[] = [

{
id: "1",
slug: "centrum-terapii-meskiej",
name: "Centrum Terapii Męskiej",
description: "Wsparcie psychologiczne dla mężczyzn",
city: "poznan",
category: "psycholog",
featured: true,
verified: true,
views: 120,
reviews: 12
},

{
id: "2",
slug: "mediacje-nowak",
name: "Mediacje Rodzinne Nowak",
description: "Mediacje rodzinne i sprawy opieki",
city: "warszawa",
category: "mediacje",
views: 45
}

]