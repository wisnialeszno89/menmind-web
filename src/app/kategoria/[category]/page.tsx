import Link from "next/link"
import { cities } from "@/lib/cities"

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {

  const category = params.category

  return (
    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* BREADCRUMBS */}

        <nav className="text-sm text-gray-500 mb-6">

          <Link href="/">MenMind</Link>

          <span className="mx-2">/</span>

          <Link href="/propozycje">
            propozycje
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-700">
            {category}
          </span>

        </nav>

        {/* TYTUŁ */}

        <h1 className="text-3xl font-semibold text-gray-900 mb-6 capitalize">
          {category}
        </h1>

        {/* SEO OPIS */}

        <p className="text-gray-700 max-w-2xl mb-12">

          Specjaliści z kategorii {category} mogą pomóc
          w sytuacjach kryzysowych, konfliktach rodzinnych
          lub w pracy nad rozwojem osobistym.

          Wybierz miasto aby zobaczyć dostępnych specjalistów.

        </p>

        {/* LISTA MIAST */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {cities.map((city) => (

            <Link
              key={city.slug}
              href={`/kategoria/${category}/${city.slug}`}
              className="border border-gray-300 rounded-lg p-4 hover:border-blue-500 transition"
            >

              {city.name}

            </Link>

          ))}

        </div>

      </div>

    </main>
  )
}