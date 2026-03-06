export type Article = {
  slug: string
  title: string
  description: string
  world: "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"
}

export const articles: Article[] = [

  {
    slug: "kryzys-mezczyzny",
    title: "Kryzys mężczyzny – objawy i co dalej",
    description:
      "Jak rozpoznać kryzys życiowy u mężczyzny i jakie są pierwsze kroki wyjścia z chaosu.",
    world: "kryzys"
  },

  {
    slug: "jak-uspokoic-stres",
    title: "Jak uspokoić stres w kilka minut",
    description:
      "Proste metody regulacji napięcia i stresu które można zastosować od razu.",
    world: "kryzys"
  },

  {
    slug: "jak-podjac-decyzje",
    title: "Jak podjąć decyzję gdy wszystko jest chaosem",
    description:
      "Dlaczego w kryzysie trudno podejmować decyzje i jak odzyskać klarowność.",
    world: "kryzys"
  },

  {
    slug: "jak-odzyskac-energie",
    title: "Jak odzyskać energię gdy wszystko przytłacza",
    description:
      "Odbudowa energii po kryzysie, stresie lub wypaleniu.",
    world: "odbudowa"
  },

  {
    slug: "rutyna-mezczyzny",
    title: "Rutyna dnia która stabilizuje życie",
    description:
      "Prosty system dnia który pomaga odzyskać kontrolę.",
    world: "odbudowa"
  },

  {
    slug: "plan-zycia",
    title: "Jak stworzyć plan życia krok po kroku",
    description:
      "Jak wrócić do kierunku gdy nie wiesz co dalej.",
    world: "wzrost"
  },

  {
    slug: "nawyki-mezczyzny",
    title: "Nawyki które budują stabilne życie",
    description:
      "Małe codzienne działania które zmieniają kierunek życia.",
    world: "wzrost"
  },

  {
    slug: "ojciec-po-rozwodzie",
    title: "Ojciec po rozwodzie – jak nie stracić relacji z dzieckiem",
    description:
      "Co zrobić aby zachować więź z dzieckiem po rozstaniu.",
    world: "ojcostwo"
  },

  {
    slug: "relacja-z-dzieckiem",
    title: "Jak budować relację z dzieckiem",
    description:
      "Obecność ojca i codzienne działania które budują więź.",
    world: "ojcostwo"
  }

]