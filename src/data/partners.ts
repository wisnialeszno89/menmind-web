export type Partner = {

id: string
slug: string

name: string
description: string

section: string
category: string[]
city?: string[]
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

/* ======================
   REAL PARTNERS
====================== */

export const partners: Partner[] = [

{
id: "strategic-1",
slug: "kancelaria-marta-chocianowska",

name: "Kancelaria Adwokacka Marta Chocianowska",

description:
"Pomoc prawna dla mężczyzn w sprawach rodzinnych, rozwodowych i opieki nad dzieckiem.",

section: "wsparcie",
category: ["prawo"],

city: ["poznan", "leszno"],
locationType: "city",

address: "Skwer Marszałka Ferdynanda Focha 10/7b, Poznań",
phone: "660493324",

website: "https://www.gowork.pl/kancelaria-adwokacka-marta-chocianowska,24278599/dane-kontaktowe-firmy",

tier: "strategic",
featured: true,
verified: true,

rating: 5,
reviews: 3,
views: 72
},

{
id: "strategic-2",
slug: "fotoklocek",

name: "FotoKlocek",

description:
"Fotografia i kreatywne aktywności z dziećmi. LEGO, warsztaty i budowanie relacji ojciec–dziecko.",

section: "ojcostwo",
category: ["aktywnosci-z-dziecmi"],

city: ["leszno"],
locationType: "city",

phone: "664413816",

website: "https://www.facebook.com/profile.php?id=61587259344650&sk=about",
website2: "https://youtube.com/@FotoKloce",

tier: "strategic",
featured: true,
verified: true,

rating: 5,
reviews: 13,
views: 61
},

{
id: "strategic-3",
slug: "wega-jubiler",

name: "Wega Jubiler",

description:
"Biżuteria, obrączki, grawer i naprawa. Wsparcie w ważnych momentach życia.",

section: "relacje",
category: ["prezent", "relacje"],

city: ["leszno"],
locationType: "city",

phone: "781087214",
email: "ewa.wisniewska@hotmail.co.uk",

website: "https://www.facebook.com/wegasrebro",

tier: "strategic",
featured: true,
verified: true,

rating: 5,
reviews: 43,
views: 113
}

]

/* ======================
   PLACEHOLDERS (RYNEK)
====================== */

export const placeholderPartners: Partner[] = [

{
id: "ph-1",
slug: "psycholog",
name: "Psycholog dla mężczyzn",
section: "wsparcie",
category: ["psycholog"],
locationType: "online",
description: "Wsparcie w kryzysie, stresie i rozstaniu.",
featured: true,
placeholder: true
},

{
id: "ph-2",
slug: "mediator",
name: "Mediator rodzinny",
section: "wsparcie",
category: ["mediator"],
locationType: "online",
description: "Pomoc w spokojnym przejściu przez rozstanie.",
placeholder: true
},

{
id: "ph-3",
slug: "coach",
name: "Coach życiowy",
section: "rozwoj",
category: ["coaching"],
locationType: "online",
description: "Pomoc w poukładaniu kierunku życia.",
placeholder: true
},

{
id: "ph-4",
slug: "finanse",
name: "Doradca finansowy",
section: "finanse",
category: ["finanse"],
locationType: "online",
description: "Uporządkowanie finansów i plan działania.",
placeholder: true
},

{
id: "ph-5",
slug: "aktywnosci",
name: "Aktywności ojciec dziecko",
section: "ojcostwo",
category: ["aktywnosci-z-dziecmi"],
locationType: "online",
description: "Pomysły na czas z dzieckiem.",
placeholder: true
},

{
id: "ph-6",
slug: "prawnik",
name: "Prawnik rodzinny",
section: "wsparcie",
category: ["prawo"],
locationType: "online",
description: "Rozwód, opieka nad dzieckiem, alimenty.",
placeholder: true
},

{
id: "ph-7",
slug: "prezent",
name: "Prezent dla partnerki",
section: "relacje",
category: ["prezent"],
locationType: "online",
description: "Pomysły na ważne momenty.",
placeholder: true
},

{
id: "ph-8",
slug: "relacje",
name: "Specjalista relacji",
section: "relacje",
category: ["relacje"],
locationType: "online",
description: "Wsparcie w relacjach i komunikacji.",
placeholder: true
}

]