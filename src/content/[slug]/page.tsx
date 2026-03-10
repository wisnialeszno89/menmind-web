import Link from "next/link"
import { articles } from "@/content/articles"

import RelatedArticles from "@/components/RelatedArticles"
import NextSteps from "@/components/NextSteps"
import ExploreTools from "@/components/ExploreTools"

export async function generateStaticParams() {

  return articles.map((article) => ({
    slug: article.slug
  }))

}

export default function ArticlePage({
  params
}: {
  params: { slug: string }
}) {

  const article = articles.find(
    (a) => a.slug === params.slug
  )

  if (!article) return null

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* TYTUŁ */}

        <h1 className="text-4xl font-semibold text-black mb-6">
          {article.title}
        </h1>

        {/* INTRO */}

        <p className="text-black mb-12">
          {article.intro}
        </p>

        {/* TREŚĆ */}

        <div className="prose max-w-none mb-16">

          <p>
            Treść artykułu pojawi się tutaj. Na razie MenMind
            wykorzystuje skrócone artykuły wprowadzające.
          </p>

          <p>
            Docelowo możesz tu dodać pełne treści eksperckie,
            analizy oraz wskazówki.
          </p>

        </div>

        {/* AUTOR */}

        {article.author && (

          <div className="border rounded-xl p-6 mt-16">

            <h2 className="text-lg font-semibold text-black mb-2">
              Autor artykułu
            </h2>

            <p className="text-black mb-4">
              {article.author}
            </p>

            {article.authorSlug && (

              <Link
                href={`/partner/${article.authorSlug}`}
                className="border px-4 py-2 rounded hover:bg-gray-50"
              >

                Zobacz profil specjalisty

              </Link>

            )}

          </div>

        )}

        {/* NASTĘPNE KROKI */}

        <NextSteps world={article.world} />

        {/* NARZĘDZIA */}

        <ExploreTools />

        {/* PODOBNE ARTYKUŁY */}

        <RelatedArticles
          world={article.world}
          slug={article.slug}
        />

      </div>

    </main>

  )

}