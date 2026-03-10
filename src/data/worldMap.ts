export type WorldMap = {
  slug: string
  title: string
  description: string

  paths: string[]
}

export const worldMap: WorldMap[] = [

  {
    slug: "kryzys",
    title: "Kryzys",
    description:
      "Moment kiedy życie się sypie: rozstanie, stres, chaos i trudne decyzje.",
    paths: [
      "rozstanie",
      "stres",
      "finanse",
      "samotnosc"
    ]
  },

  {
    slug: "odbudowa",
    title: "Odbudowa",
    description:
      "Powrót do równowagi, energii i stabilności życia.",
    paths: [
      "energia",
      "stabilnosc",
      "rutyna"
    ]
  },

  {
    slug: "wzrost",
    title: "Wzrost",
    description:
      "Rozwój, kierunek i budowanie silniejszego życia.",
    paths: [
      "kariera",
      "dyscyplina",
      "relacje"
    ]
  },

  {
    slug: "ojcostwo",
    title: "Ojcostwo",
    description:
      "Relacja z dzieckiem, odpowiedzialność i rola ojca.",
    paths: [
      "relacja",
      "po-rozwodzie",
      "prawo"
    ]
  }

]