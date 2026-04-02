import ArticleCard from "@/features/articles/ArticleCard"
import { Article } from "@/types/article"

type Props = {
  articles: Article[]
}

export default function ArticleGrid({ articles }: Props) {

  if (!articles?.length) return null

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {articles.map(article => (
        <ArticleCard
        key={article.slug}
        slug={article.slug}
        world={article.world}
        title={article.title}
        description={article.description ?? ""}
        isSeo={!article.content}
    />
      ))}
    </div>
  )
}