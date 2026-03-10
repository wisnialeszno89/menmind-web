import { notFound } from "next/navigation"
import Link from "next/link"

import PathSteps from "@/components/PathSteps"

import { getArticlesByPath } from "../../../lib/getArticlesByPath"
import { getToolsByWorld } from "@/lib/getToolsByCategory"

export default function PathPage({
  params
}: {
  params: { slug: string }
}) {

  if (!params.slug) return notFound()

  const articles = getArticlesByPath(params.slug)

  const tools = getToolsByWorld(params.slug)

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* HERO */}

        <h1 className="text-4xl font-semibold mb-6">
          Ścieżka
        </h1>

        <p className="text-black mb-12">
          Zobacz kolejne kroki które pomogą przejść przez tę sytuację.
        </p>

        {/* KROKI */}

        <PathSteps slug={params.slug} />

        {/* ARTYKUŁY */}

        {articles.length > 0 && (

          <section className="mt-20">

            <h2 className="text-2xl font-semibold mb-6">
              Zrozum sytuację
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {articles.map((article) => (

                <Link
                  key={article.slug}
                  href={`/content/${article.slug}`}
                  className="border rounded-xl p-6 hover:shadow"
                >

                  <h3 className="font-semibold mb-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {article.intro}
                  </p>

                </Link>

              ))}

            </div>

          </section>

        )}

        {/* NARZĘDZIA */}

        {tools.length > 0 && (

          <section className="mt-20">

            <h2 className="text-2xl font-semibold mb-6">
              Narzędzia które mogą pomóc
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {tools.map((tool) => (

                <Link
                  key={tool.slug}
                  href={`/narzedzia/${tool.slug}`}
                  className="border rounded-xl p-6 hover:shadow"
                >

                  <h3 className="font-semibold mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {tool.description}
                  </p>

                </Link>

              ))}

            </div>

          </section>

        )}

        {/* NAVIMIND */}

        <section className="mt-20 border rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-4">
            Nie jesteś pewien co zrobić dalej?
          </h2>

          <p className="text-gray-600 mb-6">
            Możesz zacząć od rozmowy i uporządkowania sytuacji.
          </p>

          <Link
            href={`/navimind?path=${params.slug}`}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Porozmawiaj w NaviMind
          </Link>

        </section>

      </div>

    </main>

  )

}