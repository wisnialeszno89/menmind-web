export type World = {
  slug: string
  name: string
  description: string
  preview: string[]
}

export const worlds: World[] = [

  {
    slug: "kryzys",
    name: "Kryzys",
    description:
      "Moment kiedy życie się sypie: rozstanie, stres, chaos i trudne decyzje.",
    preview: [
      "rozstanie",
      "silny stres",
      "samotność",
      "problemy finansowe"
    ]
  },

  {
    slug: "odbudowa",
    name: "Odbudowa",
    description:
      "Powrót do równowagi. Odbudowa energii, zdrowia i stabilności.",
    preview: [
      "powrót do energii",
      "nowa rutyna",
      "zdrowie i forma",
      "stabilność życia"
    ]
  },

  {
    slug: "wzrost",
    name: "Wzrost",
    description:
      "Rozwój, kierunek i budowanie silniejszego życia.",
    preview: [
      "kariera",
      "dyscyplina",
      "kompetencje",
      "relacje"
    ]
  },

  {
    slug: "ojcostwo",
    name: "Ojcostwo",
    description:
      "Relacja z dzieckiem, odpowiedzialność i rola ojca.",
    preview: [
      "relacja z dzieckiem",
      "po rozwodzie",
      "sprawy prawne",
      "codzienne ojcostwo"
    ]
  }

]