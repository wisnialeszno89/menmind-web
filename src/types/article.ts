export type Article = {
  slug: string
  title: string
  description?: string
  world: "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"
  category?: string
  keywords?: string[]
  content?: string
}