import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"
import { partners } from "@/data/partners"
import { notFound } from "next/navigation"
import Link from "next/link"
import PartnersList from "@/features/marketplace/PartnersList"
import { rankPartners } from "@/lib/rankPartners"

const mapping: Record<string,string[]> = {
  psycholog: ["psycholog"],
  mediator: ["mediator"],
  coaching: ["coach","coaching"],
  prawo: ["prawo","prawnik"],
  warsztaty: ["warsztaty-meskie"],
}

export default function ProposalCategoryPage({
  params,
}: {
  params: { blok: string }
}) {

  const category = proposalCategories.find(
    (c) => c.slug === params.blok
  )

  if (!category) return notFound()

  const allowed = mapping[params.blok] || [params.blok]

  const categoryPartners = rankPartners(
    partners.filter(p => allowed.includes(p.category))
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

        <PartnersList partners={categoryPartners} />

        <h2 className="text-2xl font-semibold mt-16 mb-6">
          Wybierz miasto
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {cities.map((city) => (

            <Link
              key={city.slug}
              href={`/propozycje/${params.blok}/${city.slug}`}
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