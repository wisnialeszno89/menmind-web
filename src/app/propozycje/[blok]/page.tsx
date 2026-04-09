import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"
import { partners, placeholderPartners } from "@/data/partners"
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

  /* REAL PARTNERS */
  const realPartners = partners.filter(p =>
    p.category?.some(
      c => c.toLowerCase() === blok.toLowerCase()
    )
  )

  /* PLACEHOLDER PARTNERS */
  const fallbackPartners = placeholderPartners.filter(p =>
    p.category?.some(
      c => c.toLowerCase() === blok.toLowerCase()
    )
  )

  /* MERGE + RANK */
  const categoryPartners = rankPartners([
    ...realPartners,
    ...fallbackPartners
  ]).slice(0,6)

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

      {categoryPartners.length > 0 && (
        <PartnersList partners={categoryPartners} />
      )}

      {/* CTA PARTNER */}
      <div className="mt-8 border rounded-xl p-6 bg-gray-50">

        {categoryPartners.length === 0 ? (
          <div className="text-center">

            <div className="text-sm text-green-700 bg-green-100 inline-block px-3 py-1 rounded mb-3">
              Brak partnerów w tej kategorii
            </div>

            <p className="text-gray-700 mb-3">
              Zostań pierwszym partnerem i odbierz darmowy pakiet strategiczny na 1 miesiąc
            </p>

            <Link
              href="/dla-partnerow"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Zostań pierwszym partnerem
            </Link>

          </div>
        ) : (

          <div className="flex items-center justify-between flex-col md:flex-row gap-4">

            <div>
              <p className="font-medium">
                Prowadzisz działalność w tej kategorii?
              </p>
              <p className="text-sm text-gray-600">
                Dodaj swoją usługę i bądź widoczny dla użytkowników
              </p>
            </div>

            <Link
              href="/dla-partnerow"
              className="border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Dodaj swoją usługę
            </Link>

          </div>

        )}

      </div>

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