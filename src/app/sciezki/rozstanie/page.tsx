import Link from "next/link"
import { getArticlesByPath } from "@/lib/getArticlesByPath"

export const metadata = {
  title: "Rozstanie | MenMind",
  description:
    "Jak przejść przez rozstanie i odzyskać stabilność emocjonalną.",
}

export default function RozstaniePage() {

  const articles = getArticlesByPath("rozstanie")

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* HEADER */}

        <h1 className="text-4xl font-semibold text-black mb-6">
          Rozstanie
        </h1>

        <p className="text-black mb-12">
          Rozstanie potrafi wywrócić życie do góry nogami.
          Najpierw trzeba zatrzymać chaos i odzyskać równowagę.
        </p>


        {/* ARTYKUŁY */}

        <h2 className="text-2xl font-semibold text-black mb-4">
          Artykuły
        </h2>

        <div className="space-y-4 mb-12">

          {articles.map((article) => (

            <Link
              key={article.slug}
              href={`/content/${article.slug}`}
              className="block border p-4 rounded-lg hover:shadow"
            >

              <h3 className="font-semibold text-black">
                {article.title}
              </h3>

              <p className="text-black text-sm">
                {article.intro}
              </p>

            </Link>

          ))}

        </div>


        {/* NARZĘDZIA */}

        <h2 className="text-2xl font-semibold text-black mb-4">
          Narzędzia
        </h2>

        <Link
          href="/narzedzia/stabilizacja"
          className="block border p-4 rounded-lg mb-12 hover:shadow"
        >
          Narzędzia stabilizacji
        </Link>


        {/* WSPARCIE */}

        <h2 className="text-2xl font-semibold text-black mb-4">
          Wsparcie
        </h2>

        <Link
          href="/propozycje"
          className="block border p-4 rounded-lg mb-12 hover:shadow"
        >
          Znajdź specjalistę
        </Link>


        {/* NAVIMIND */}

        <Link
          href="/navimind?state=rozstanie"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg mb-16"
        >
          Porozmawiaj w NaviMind
        </Link>


        {/* SEO — MIASTA */}

        <h2 className="text-2xl font-semibold text-black mb-6">
          Pomoc w Twoim mieście
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-16">

          <Link
            href="/kategoria/psycholog/warszawa"
            className="border rounded-lg p-4 hover:shadow"
          >
            Psycholog – Warszawa
          </Link>

          <Link
            href="/kategoria/psycholog/krakow"
            className="border rounded-lg p-4 hover:shadow"
          >
            Psycholog – Kraków
          </Link>

          <Link
            href="/kategoria/psycholog/wroclaw"
            className="border rounded-lg p-4 hover:shadow"
          >
            Psycholog – Wrocław
          </Link>

        </div>


        {/* FAQ SEO */}

        <h2 className="text-2xl font-semibold text-black mb-6">
          Najczęstsze pytania
        </h2>

        <div className="space-y-4">

          <div>

            <p className="font-semibold text-black">
              Jak poradzić sobie z rozstaniem?
            </p>

            <p className="text-black">
              Najpierw stabilizacja emocjonalna,
              potem odbudowa struktury życia.
            </p>

          </div>

          <div>

            <p className="font-semibold text-black">
              Czy warto iść do psychologa po rozstaniu?
            </p>

            <p className="text-black">
              Dla wielu mężczyzn rozmowa z profesjonalistą
              pomaga szybciej odzyskać równowagę.
            </p>

          </div>

        </div>

      </div>

    </main>

  )

}