import { articles } from "@/content/articles"

export function getPathArticles(world: string) {
  return articles.filter(
    (article) => article.world === world
  )
}