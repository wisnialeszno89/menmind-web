export type Event = {

id: string
slug: string

title: string
description: string

city: string
date: string

category: string

website?: string
image?: string

}

export const events: Event[] = [

{
id: "1",
slug: "meski-krag-poznan",

title: "Męski Krąg Poznań",
description: "Spotkanie mężczyzn poświęcone relacjom, emocjom i odpowiedzialności.",

city: "poznan",
date: "2026-05-12",

category: "spotkania",

website: "https://example.com"
},

{
id: "2",
slug: "warsztat-meskiej-sily",

title: "Warsztat Męskiej Siły",
description: "Dwudniowy warsztat rozwoju dla mężczyzn.",

city: "warszawa",
date: "2026-06-20",

category: "warsztaty",

website: "https://example.com"
}

]