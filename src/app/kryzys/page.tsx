import { getPathArticles } from "@/lib/getPathArticles"
import WorldTools from "@/components/WorldTools"
import Link from "next/link"

export default function KryzysPage() {

  const articles = getPathArticles("kryzys")

  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold text-black mb-6">
          Kryzys
        </h1>

        <p className="text-black max-w-xl mb-16">
          Jeśli masz poczucie że wszystko się sypie —
          to dobry moment żeby zatrzymać się i uporządkować sytuację.
        </p>

        {/* ARTYKUŁY */}

        <section>

          <h2 className="text-2xl font-semibold text-black mb-6">
            Zacznij od zrozumienia sytuacji
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {articles.map((article) => (

              <Link
                key={article.slug}
                href={`/content/${article.slug}`}
                className="border rounded-xl p-6 hover:shadow"
              >
                <h3 className="font-semibold text-black mb-2">
                  {article.title}
                </h3>

                <p className="text-black text-sm">
                  {article.intro}
                </p>

              </Link>

            ))}

          </div>

        </section>

        {/* NARZĘDZIA */}

        <WorldTools world="kryzys" />

        {/* NAVIMIND */}

        <section className="mt-20 border rounded-xl p-8">

          <h2 className="text-xl font-semibold text-black mb-4">
            Nie jesteś pewien co zrobić?
          </h2>

          <p className="text-black mb-6">
            Możesz zacząć od rozmowy i uporządkowania sytuacji.
          </p>

          <Link
            href="/navimind?state=kryzys"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Porozmawiaj w NaviMind
          </Link>

        </section>

      </div>

    </main>
  )
}