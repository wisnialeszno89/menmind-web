import { articles } from "@/content/articles"

export function getRelatedArticles(world: string, currentSlug: string) {

  return articles
    .filter(
      (article) =>
        article.world === world &&
        article.slug !== currentSlug
    )
    .slice(0, 3)

}