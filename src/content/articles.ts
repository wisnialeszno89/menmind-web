export type Article = {
  slug: string
  title: string
  intro: string
  world: string

  author?: string
  authorSlug?: string
}

export const articles: Article[] = [
{
  slug: "dlaczego-mezczyzni-zwlekaja",
  title: "Dlaczego mężczyźni zwlekają z proszeniem o pomoc",
  intro: "Wielu mężczyzn czeka zbyt długo zanim zacznie szukać wsparcia.",
  world: "kryzys",
  author: "MenMind",
  authorSlug: "menmind"
},
  {
    slug: "jak-mezczyzni-reaguja-na-stres",
    title: "Jak mężczyźni reagują na stres",
    intro: "Stres u mężczyzn często wygląda inaczej niż u kobiet.",
    world: "kryzys"
  },
  {
slug: "dlaczego-mezczyzni-zwlekaja",
title: "Dlaczego mężczyźni zwlekają z szukaniem pomocy",
intro: "Wielu mężczyzn próbuje radzić sobie samemu aż do momentu, gdy sytuacja staje się naprawdę trudna.",
world: "kryzys"
},

{
slug: "co-dzieje-sie-w-kryzysie",
title: "Co naprawdę dzieje się z człowiekiem w kryzysie",
intro: "Kryzys to moment przeciążenia systemu. Zrozumienie tego pomaga odzyskać kontrolę.",
world: "kryzys"
},

{
slug: "jak-mezczyzni-reaguja-na-stres",
title: "Jak mężczyźni reagują na stres",
intro: "Presja często powoduje wycofanie, złość albo całkowite zamknięcie.",
world: "kryzys"
},

{
slug: "pierwsze-48h-kryzysu",
title: "Pierwsze 48 godzin kryzysu",
intro: "To jak zareagujesz na początku ma ogromny wpływ na dalszy rozwój sytuacji.",
world: "kryzys"
},

{
slug: "kiedy-warto-szukac-pomocy",
title: "Kiedy naprawdę warto szukać pomocy",
intro: "Nie każdy problem wymaga specjalisty. Ale są momenty kiedy warto nie być z tym samemu.",
world: "kryzys"
}
]
