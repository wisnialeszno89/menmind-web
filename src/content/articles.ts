export type Article = {
  slug: string
  world: string
  title: string
  intro: string
  path?: string
}

export const articles: Article[] = [

{
slug: "dlaczego-mezczyzni-zwlekaja",
world: "kryzys",
title: "Dlaczego mężczyźni zwlekają z decyzją",
intro: "W sytuacji kryzysowej wielu mężczyzn odkłada decyzje.",
path: "rozstanie"
},

{
slug: "jak-mezczyzni-reaguja-na-stres",
world: "kryzys",
title: "Jak mężczyźni reagują na stres",
intro: "Stres u mężczyzn często objawia się wycofaniem.",
path: "rozstanie"
},

{
slug: "ojciec-po-rozwodzie",
world: "ojcostwo",
title: "Ojciec po rozwodzie",
intro: "Rozwód zmienia relację z dzieckiem.",
path: "ojciec-po-rozstaniu"
},

{
slug: "prawa-ojca",
world: "ojcostwo",
title: "Prawa ojca",
intro: "Wielu ojców nie zna swoich praw.",
path: "ojciec-po-rozstaniu"
},

]