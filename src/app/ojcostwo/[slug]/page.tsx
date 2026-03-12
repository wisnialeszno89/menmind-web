import { ojcostwo } from "@/content/ojcostwo"
import ArticleLayout from "@/components/article/ArticleLayout"

export default function Page({ params }: { params: { slug: string } }) {

  const article = ojcostwo.find(a => a.slug === params.slug)

  if (!article) {
    return <div>Brak artykułu</div>
  }

  return (
    <ArticleLayout
      title={article.title}
      intro={article.description}
      category="Ojcostwo"
    >

      <p>{article.content}</p>

    </ArticleLayout>
  )
}