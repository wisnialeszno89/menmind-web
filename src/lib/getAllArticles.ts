import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"
import { articles as seoArticles } from "@/content/articles"

export function getAllArticles() {

  const worlds = [
    { world: "kryzys", articles: kryzys },
    { world: "ojcostwo", articles: ojcostwo },
    { world: "odbudowa", articles: odbudowa },
    { world: "wzrost", articles: wzrost },
  ]

  const worldArticles = worlds.flatMap(({ world, articles }) =>
    articles.map(article => ({
      ...article,
      world
    }))
  )

  return [...worldArticles, ...seoArticles]
}