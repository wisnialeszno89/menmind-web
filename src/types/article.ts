export type World =
  | "kryzys"
  | "odbudowa"
  | "wzrost"
  | "ojcostwo"

export type Article = {
  slug: string
  title: string
  description: string
  content: string

  world: World

  category?: string

  keywords?: string[]

  faq?: {
    q: string
    a: string
  }[]

  updated?: string

  author?: string
}