import Link from "next/link"
import { getPartners } from "@/lib/getPartners"
import { cities } from "@/lib/cities"
import { categories } from "@/lib/categories"

export default async function ServiceCityPage({
  params,
}: {
  params: { category: string; city: string }
}) {

  const partners = await getPartners(params.category, params.city)

  return (

    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* BREADCRUMBS */}

        <nav className="text-sm text-gray-500 mb-6">

          <Link href="/">MenMind</Link>

          <span className="mx-2">/</span>

          <Link href={`/kategoria/${params.category}`}>
            {params.category}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-700">
            {params.city}
          </span>

        </nav>

        {/* TYTUŁ SEO */}

        <h1 className="text-3xl font-semibold text-gray-900 mb-6 capitalize">

          {params.category} – {params.city}

        </h1>

        {/* OPIS SEO */}

        <p className="text-gray-700 mb-10 max-w-2xl">

          Jeśli szukasz specjalisty z kategorii {params.category}
          w mieście {params.city}, tutaj znajdziesz dostępne
          opcje wsparcia.

          MenMind łączy mężczyzn z profesjonalistami,
          którzy pomagają w sytuacjach kryzysowych,
          rodzinnych i rozwojowych.

        </p>

        {/* PARTNERZY */}

        {partners.length === 0 && (

          <p className="text-gray-600 mb-10">

            Obecnie nie mamy jeszcze partnerów w tej
            kategorii w tym mieście.

          </p>

        )}

        <div className="grid md:grid-cols-2 gap-6">

          {partners.map((partner: any) => (

            <a
              key={partner.id}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 rounded-xl p-6 hover:border-blue-500 transition"
            >

              <h3 className="font-semibold text-lg mb-2">
                {partner.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {partner.description}
              </p>

              <span className="text-blue-600 text-sm">
                Zobacz stronę →
              </span>

            </a>

          ))}

        </div>

        {/* CTA PARTNER */}

        <section className="mt-16 border-t border-gray-300 pt-10">

          <p className="text-gray-700 mb-4">

            Prowadzisz działalność w tej kategorii
            w mieście {params.city}?

          </p>

          <Link
            href="/dla-partnerow"
            className="text-blue-600 hover:underline"
          >
            Dołącz jako partner →
          </Link>

        </section>

      </div>

    </main>

  )
}