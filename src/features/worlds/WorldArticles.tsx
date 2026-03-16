import Link from "next/link"
import { articles } from "@/content/articles"
import SaveButton from "@/components/SaveButton"

type Props = {
  world: string
}

export default function WorldArticles({ world }: Props) {

  const filtered = articles.filter(
    article => article.world === world
  )

  if (!filtered.length) return null

  return (

    <section>

      <h2 className="text-xl font-semibold mb-6">
        Artykuły
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {filtered.map(article => (

          <Link
            key={article.slug}
            href={`/${article.world}/${article.slug}`}
            className="card"
          >

            <h3 className="font-medium mb-2">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600">
              {article.intro}
            </p>
<SaveButton id={article.slug}/>
          </Link>

        ))}

      </div>

    </section>

  )

}