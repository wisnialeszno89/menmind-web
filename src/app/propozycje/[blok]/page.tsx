import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"
import { partners } from "@/data/partners"
import { notFound } from "next/navigation"
import Link from "next/link"
import PartnersList from "@/features/marketplace/PartnersList"
import { rankPartners } from "@/lib/rankPartners"

export default function ProposalCategoryPage({
  params,
}: {
  params: { blok: string }
}) {

  const category = proposalCategories.find(
    (c) => c.slug === params.blok
  )

  if (!category) return notFound()

  // 🔥 partnerzy globalni
  const categoryPartners = rankPartners(
    partners.filter(p => p.category === category.slug)
  ).slice(0,6)

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          {category.name}
        </h1>

        <p className="text-gray-700 mb-12 max-w-xl">
          Sprawdzeni specjaliści i formy wsparcia w kategorii {category.name}.
        </p>

        {/* 🔥 partnerzy od razu */}
        {categoryPartners.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">
              Dostępne wsparcie
            </h2>

            <PartnersList partners={categoryPartners} />
          </>
        )}

        {/* 🔥 fallback online */}
        {categoryPartners.length === 0 && (
          <div className="border rounded-xl p-8 text-center mb-12">
            <p className="mb-4">
              Brak specjalistów w tej kategorii w Twojej okolicy.
            </p>
            <Link
              href="/dla-partnerow"
              className="underline"
            >
              Zostań pierwszym partnerem
            </Link>
          </div>
        )}

        {/* 🔥 miasta */}
        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Wybierz miasto
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {cities.map((city) => (

            <Link
              key={city.slug}
              href={`/propozycje/${category.slug}/${city.slug}`}
              className="border rounded-lg p-4 hover:shadow transition"
            >
              <strong>
                {city.name}
              </strong>

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