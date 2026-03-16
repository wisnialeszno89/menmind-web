import { Article } from "@/types/article"

export function getRelatedArticles(
  articles: Article[],
  current: Article
) {

  return articles
    .filter(
      (a) =>
        a.slug !== current.slug &&
        a.world === current.world
    )
    .slice(0, 3)

}