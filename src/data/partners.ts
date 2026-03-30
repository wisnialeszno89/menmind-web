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
},
{
id: "strategic-1",
slug: "kancelaria-marta-chocianowska",

name: "Kancelaria Adwokacka Marta Chocianowska",

description:
"Pomoc prawna dla mężczyzn w sprawach rodzinnych, rozwodowych i opieki nad dzieckiem. Wsparcie w trudnych momentach życiowych.",

section: "wsparcie",
category: "prawnik",

city: "poznan",
locationType: "city",

address: "Skwer Marszałka Ferdynanda Focha 10/7b, 60-749 Poznań",
phone: "660493324",
website: "https://www.gowork.pl/kancelaria-adwokacka-marta-chocianowska,24278599/dane-kontaktowe-firmy",

tier: "strategic",

featured: true,
verified: true,

rating: 5.0,
reviews: 3,
views: 72,

specialties: [
"rozwód",
"opieka nad dzieckiem",
"alimenty",
"mediacje",
"prawo rodzinne"
],

experience: "Adwokat — prawo rodzinne i sprawy mężczyzn"
},
{
id: "strategic-3",
slug: "fotoklocek-leszno",

name: "FotoKlocek",

description:
"Fotografia oraz kreatywne aktywności z dziećmi. Recenzje LEGO, praca z najmłodszymi i wspólne budowanie relacji ojciec–dziecko.",

section: "ojcostwo",
category: "aktywnosci",

city: "leszno",
locationType: "city",

phone: "664413816",

website: "https://www.facebook.com/profile.php?id=61587259344650&sk=about",
website2: "https://youtube.com/@FotoKloce",

tier: "strategic",

featured: true,
verified: true,

rating: 5.0,
reviews: 13,
views: 61,

specialties: [
"fotografia dziecięca",
"aktywności ojciec dziecko",
"LEGO",
"warsztaty dla dzieci",
"zajęcia kreatywne"
],

experience: "Kreatywne zajęcia z dziećmi + fotografia"
},
{
id: "strategic-4",
slug: "wega-jubiler-leszno",

name: "Wega Jubiler",

description:
"Biżuteria złota i srebrna, obrączki, grawer oraz naprawa i renowacja biżuterii. Pomoc w ważnych momentach życia.",

section: "relacje",
category: "uslugi",

city: "leszno",
locationType: "city",

phone: "781087214",
email: "ewa.wisniewska@hotmail.co.uk",

website: "https://www.facebook.com/wegasrebro",

tier: "strategic",

featured: true,
verified: true,

rating: 5.0,
reviews: 43,
views: 113,

specialties: [
"obrączki",
"grawer",
"renowacja biżuterii",
"złoto 585",
"srebro 925"
],

experience: "Jubiler — obrączki, grawer, naprawa biżuterii"
}
]

