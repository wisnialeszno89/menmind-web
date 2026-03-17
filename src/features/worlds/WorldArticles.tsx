import ArticleGrid from "@/components/ui/ArticleGrid"
import { worlds, WorldKey } from "@/content"
import { Article } from "@/types/article"

type Props = {
  world: WorldKey
}

export default function WorldArticles({ world }: Props) {

  if (!worlds[world]) {
    console.error("Invalid world:", world)
    return null
  }

  const articles = worlds[world]

  if (!articles?.length) return null

  // ❌ nie potrzebujesz już castowania
  const sortedArticles = [...articles].reverse()

  return (
    <section className="mt-16">

      <h2 className="text-2xl font-semibold mb-8">
        Artykuły ({articles.length})
      </h2>

      <ArticleGrid
        articles={sortedArticles}
        base={world}
      />

    </section>
  )
}