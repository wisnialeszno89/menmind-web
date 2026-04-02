import { articles } from "@/content/articles"
import Link from "next/link"

export default function Page({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) return null

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        {article.title}
      </h1>

      <p className="text-gray-600 mb-8">
        {article.intro}
      </p>

      <div className="space-y-4 text-gray-700 leading-relaxed">

        <p>
          Ten temat dotyczy obszaru: <strong>{article.world}</strong>.
        </p>

        <p>
          W tej sekcji znajdziesz artykuły, które pomagają
          poukładać sytuację krok po kroku.
        </p>

        <p>
          Wybierz ścieżkę dopasowaną do tego, gdzie jesteś teraz.
        </p>

      </div>

      <div className="mt-10">
        <Link
          href={`/${article.world}`}
          className="inline-block border px-5 py-3 rounded-lg hover:bg-neutral-100 transition"
        >
          Przejdź do sekcji {article.world}
        </Link>
      </div>

    </main>
  )
}