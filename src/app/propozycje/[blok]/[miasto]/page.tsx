import { notFound } from "next/navigation"
import { cities } from "@/data/cities"
import { proposalCategories } from "@/data/proposalsCategories"
import { getPartnersByCategory } from "@/lib/getPartnersByCategory"
import { rankPartners } from "@/lib/rankPartners"
import PartnersList from "@/features/marketplace/PartnersList"

export default function ProposalCityPage({ params }: any) {

  const category = proposalCategories.find(
    c => c.slug === params.blok
  )

  const city = cities.find(
    c => c.slug === params.miasto
  )

  if(!category || !city) return notFound()

  const partners = rankPartners(
    getPartnersByCategory(category.slug, city.slug)
  )

  return(

    <main className="bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          {category.name} — {city.name}
        </h1>

        <p className="text-gray-700 mb-10 max-w-xl">
          Dostępne opcje w tej kategorii. Jeśli brak lokalnych,
          pokażemy dostępne online.
        </p>

        <PartnersList partners={partners} />

      </div>

    </main>

  )

}