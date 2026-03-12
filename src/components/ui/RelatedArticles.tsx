import Link from "next/link"

type Article = {
  slug: string
  title: string
}

type Props = {
  articles: Article[]
  base: string
}

export default function RelatedArticles({ articles, base }: Props) {

  if (!articles.length) return null

  return (

    <div className="mt-16">

      <h3 className="font-semibold mb-4">
        Czytaj dalej
      </h3>

      <ul className="space-y-2 text-sm">

        {articles.slice(0,3).map(article => (

          <li key={article.slug}>

            <Link
              href={`/${base}/${article.slug}`}
              className="underline"
            >
              {article.title}

            </Link>

          </li>

        ))}

      </ul>

    </div>

  )

}