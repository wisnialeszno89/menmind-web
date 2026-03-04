import PartnerCard from "@/components/PartnerCard"
import { getPartners } from "@/lib/getPartners"

export default async function Page({
  params,
}: {
  params: { blok: string; miasto: string }
}) {

  const partners = await getPartners(params.blok, params.miasto)

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl mb-10 text-blue-500">
          Pomoc dla mężczyzn – {params.miasto}
        </h1>

        {partners.length === 0 && (
          <p className="text-neutral-400 mb-10">
            Jeszcze nie mamy partnerów w tym mieście.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">

          {partners.map((partner: any, index: number) => (
            <PartnerCard
              key={partner.id}
              id={partner.id}
              name={partner.name}
              description={partner.description}
              tier={partner.tier}
              website={partner.website}
              highlighted={partner.tier === "strategic"}
              isTop={index === 0}
            />
          ))}

        </div>

      </div>

    </div>
  )
}