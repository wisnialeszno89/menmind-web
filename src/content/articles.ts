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
  }
]