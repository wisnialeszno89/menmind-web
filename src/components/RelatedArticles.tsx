import Link from "next/link"
import { allArticles } from "@/content"

type Props = {
  world: string
  slug: string
}

export default function RelatedArticles({ world, slug }: Props) {

  const related = allArticles
    .filter(a => a.world === world && a.slug !== slug)
    .slice(0, 3)

  if (!related.length) return null

  return (

    <section className="mt-20">

      <h3 className="text-xl font-semibold mb-6">
        Powiązane artykuły
      </h3>

      <div className="grid md:grid-cols-3 gap-4">

        {related.map(a => (

          <Link
            key={a.slug}
            href={`/${a.world}/${a.slug}`}
            className="border rounded-xl p-4 hover:shadow transition"
          >

            <p className="font-medium mb-2">
              {a.title}
            </p>

            <p className="text-sm text-gray-600">
              {a.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )

}