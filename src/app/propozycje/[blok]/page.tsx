import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"
import { partners } from "@/data/partners"
import { notFound } from "next/navigation"
import Link from "next/link"
import PartnersList from "@/features/marketplace/PartnersList"
import { rankPartners } from "@/lib/rankPartners"

export const dynamic = "force-dynamic"

export default async function ProposalCategoryPage({
  params,
}: {
  params: Promise<{ blok: string }>
}) {

  const { blok } = await params

  const category = proposalCategories.find(
    (c) => c.slug === blok
  )

  if (!category) return notFound()

  const categoryPartners = rankPartners(
  partners.filter(p =>
    p.category?.toLowerCase().includes(blok.toLowerCase())
  )
).slice(0,6)

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          {category.name}
        </h1>

        <p className="text-gray-700 mb-12 max-w-xl">
          Sprawdzeni specjaliści w kategorii {category.name}.
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Dostępne wsparcie
        </h2>

        {categoryPartners.length > 0 ? (

          <PartnersList partners={categoryPartners} />

        ) : (

          <div className="border rounded-xl p-8 text-center">

            <p className="text-gray-700 mb-4">
              Aktualnie dodajemy partnerów w tej kategorii.
            </p>

            <Link
              href="/dla-partnerow"
              className="border px-6 py-3 rounded-lg hover:shadow"
            >
              Dodaj swoją usługę
            </Link>

          </div>

        )}

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Wybierz miasto
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {cities.map((city) => (

            <Link
              key={city.slug}
              href={`/propozycje/${blok}/${city.slug}`}
              className="border rounded-lg p-4 hover:shadow transition"
            >
              <strong>{city.name}</strong>
              <p className="text-sm text-gray-600">
                {category.name}
              </p>
            </Link>

          ))}

        </div>

      </div>

    </main>

  )
}