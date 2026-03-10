import { articles } from "@/content/articles"

export function getArticlesByPath(path: string) {

  return articles.filter(
    (article) => article.path === path
  )

}