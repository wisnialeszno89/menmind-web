export type Article = {
  slug: string
  title: string
  description: string
  world: "kryzys" | "ojcostwo" | "odbudowa" | "wzrost"
  category: string
  content: string
  keywords?: string[]
}