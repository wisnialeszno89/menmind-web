import ArticleCard from "@/features/articles/ArticleCard"
import { Article } from "@/types/article"

type Props = {
  articles: Article[]
  base: string
}

export default function ArticleGrid({ articles, base }: Props) {

  if (!articles?.length) return null

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {articles.map(article => (
        <ArticleCard
          key={article.slug}
          slug={article.slug}
          base={base}
          title={article.title}
          description={article.description ?? ""}
        />
      ))}
    </div>
  )
}