export type World = {
  slug: string
  name: string
  description: string
}

export const worlds: World[] = [
  {
    slug: "kryzys",
    name: "Kryzys",
    description: "Moment gdy życie się sypie. Rozstanie, stres, chaos i trudne decyzje."
  },
  {
    slug: "odbudowa",
    name: "Odbudowa",
    description: "Powrót do stabilności, odzyskanie energii i poukładanie życia na nowo."
  },
  {
    slug: "wzrost",
    name: "Wzrost",
    description: "Rozwój, dyscyplina i budowanie silniejszego życia."
  },
  {
    slug: "ojcostwo",
    name: "Ojcostwo",
    description: "Relacja z dzieckiem, odpowiedzialność i rola ojca."
  }
]