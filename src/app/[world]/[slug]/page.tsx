import Link from "next/link"
import { articles } from "@/content/articles"

export default function ArticlePage({
  params,
}: {
  params: { world: string; slug: string }
}) {

  const article = articles.find(
    (a) => a.slug === params.slug && a.world === params.world
  )

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p>Artykuł nie istnieje.</p>
      </main>
    )
  }

  return (
    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* BREADCRUMBS */}

        <nav className="text-sm text-gray-500 mb-6">

          <Link href="/">MenMind</Link>

          <span className="mx-2">/</span>

          <Link href={`/${article.world}`}>
            {article.world}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-700">
            {article.title}
          </span>

        </nav>

        {/* TYTUŁ */}

        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          {article.title}
        </h1>

        {/* INTRO */}

        <p className="text-gray-700 mb-10 text-lg">
          {article.intro}
        </p>

        {/* TREŚĆ */}

        <section className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            Ten artykuł jest częścią świata {article.world} w MenMind.
            Jego celem jest pomóc uporządkować sytuację i zobaczyć
            możliwe kierunki działania.
          </p>

          <p>
            Jeśli czujesz chaos lub niepewność — zacznij od
            zrozumienia sytuacji. Dopiero potem szukaj rozwiązań.
          </p>

          <p>
            W wielu przypadkach pomoc specjalisty pozwala
            szybciej uporządkować decyzje i uniknąć błędów.
          </p>

        </section>

        {/* CTA */}

        <section className="mt-16 border-t border-gray-300 pt-10">

          <h2 className="text-xl font-semibold mb-4">
            Możliwe następne kroki
          </h2>

          <div className="space-y-3">

            <Link
              href="/propozycje"
              className="text-blue-600 hover:underline"
            >
              Zobacz dostępne propozycje wsparcia →
            </Link>

            <Link
              href={`/${article.world}`}
              className="text-gray-700 hover:underline"
            >
              Powrót do świata →
            </Link>

          </div>

        </section>

      </div>

    </main>
  )
}