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
<p className="text-sm text-gray-500 mt-4">
Ten moment nie definiuje Twojego życia.
</p>
        {/* NORMALIZACJA */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold text-black mb-4">
            Nie jesteś jedyny
          </h2>

          <p className="text-gray-600 max-w-xl">
            Miliony mężczyzn przechodzą przez momenty,
            w których życie zaczyna się komplikować.
          </p>

          <p className="text-gray-600 mt-4">
            Rozstanie. Presja pracy. Samotność. Wypalenie.
          </p>

          <p className="text-gray-600 mt-4">
            To część życia.
          </p>

          <p className="text-gray-600 mt-4">
            Najważniejsze jest znalezienie pierwszego ruchu.
          </p>

        </section>

        {/* PLAN 24H */}

        <section className="mb-24 border rounded-xl p-8">

          <h2 className="text-2xl font-semibold text-black mb-4">
            Pierwsze 24 godziny
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl">
            Jeśli wszystko wydaje się przytłaczające,
            skup się tylko na tych czterech rzeczach.
          </p>

          <div className="space-y-4">

            <div className="border rounded-lg p-4">
              30 minut ruchu (spacer, rower, trening)
            </div>

            <div className="border rounded-lg p-4">
              Krótki kontakt z kimś zaufanym
            </div>

            <div className="border rounded-lg p-4">
              Mały porządek w otoczeniu
            </div>

            <div className="border rounded-lg p-4">
              Jedna decyzja która przesuwa sprawę do przodu
            </div>

          </div>

          <Link
            href="/dzien"
            className="inline-block mt-6 border px-6 py-3 rounded-lg hover:shadow"
          >
            Zobacz dzisiejszy ruch
          </Link>

        </section>

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