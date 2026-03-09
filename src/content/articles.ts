export type Article = {

slug: string
world: string

title: string
intro: string

author?: string
authorSlug?: string

}

export const articles: Article[] = [

{
slug: "dlaczego-mezczyzni-zwlekaja",
world: "kryzys",
title: "Dlaczego mężczyźni zwlekają z decyzją",
intro: "W sytuacji kryzysowej wielu mężczyzn odkłada decyzje.",
author: "Jan Kowalski",
authorSlug: "centrum-terapii-meskiej"
},

{
slug: "jak-mezczyzni-reaguja-na-stres",
world: "kryzys",
title: "Jak mężczyźni reagują na stres",
intro: "Stres u mężczyzn często objawia się wycofaniem."
}

]