import { partners } from "@/data/partners"
import { notFound } from "next/navigation"
import PartnersList from "@/features/marketplace/PartnersList"
import { rankPartners } from "@/lib/rankPartners"

export const dynamic = "force-dynamic"

export default async function ProposalCityPage({
  params,
}: {
  params: Promise<{ blok: string; miasto: string }>
}) {

  const { blok, miasto } = await params

  const cityPartners = rankPartners(
    partners.filter(p => {

      const categoryMatch =
        p.category?.some(
          c => c.toLowerCase() === blok.toLowerCase()
        )

      const cityMatch =
        p.locationType === "online" ||
        p.locationType === "national" ||
        p.city?.some(
          c => c.toLowerCase() === miasto.toLowerCase()
        )

      return categoryMatch && cityMatch

    })
  )

  if (!cityPartners.length) return notFound()

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6 capitalize">
          {blok} — {miasto}
        </h1>

        <PartnersList partners={cityPartners} />

      </div>

    </main>

  )
}