import ArticleGrid from "@/components/ui/ArticleGrid"
import { worlds } from "@/content"
import { Article } from "@/types/article"

type Props = {
  world: "kryzys" | "ojcostwo" | "odbudowa" | "wzrost"
}

export default function WorldArticles({ world }: Props) {

  const articles: Article[] = worlds[world] || []

  const sortedArticles = [...articles]

  if (!sortedArticles.length) return null

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold mb-6">
        Artykuły
      </h2>

      <ArticleGrid
        articles={sortedArticles}
      />
    </section>
  )
}