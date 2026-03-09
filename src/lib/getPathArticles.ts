import { articles } from "@/content/articles"

export function getPathArticles(path: string) {

  return articles.filter(
    (article) => article.world === path
  )

}