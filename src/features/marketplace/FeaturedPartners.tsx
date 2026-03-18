"use client"

import { useEffect, useState } from "react"
import { partners } from "@/data/partners"
import { getPartnerClicks } from "@/lib/tracking"
import { rankPartners } from "@/lib/rankPartners"
import PartnerCard from "./PartnerCard"

export default function FeaturedPartners() {

  const [sorted, setSorted] = useState<any[]>([])

  useEffect(() => {

    const clicks = getPartnerClicks()

    const enriched = partners.map(p => ({
      ...p,
      clicks: clicks[p.slug] || 0
    }))

    const ranked = rankPartners(enriched)
      .filter(p => p.featured)
      .slice(0, 6)
      

    setSorted(ranked)

  }, [])

  if (!sorted.length) return null

  return (

    <section className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-8 text-center">
          Sprawdzone miejsca, z których możesz skorzystać
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {sorted.map((p, i) => (

            <PartnerCard
              key={p.slug}
              id={p.slug}
              name={p.name}
              description={p.description}
              tier={p.tier || "standard"}
              website={p.website}
              featured={p.featured}
              verified={p.verified}
              isTop={i === 0}
            />

          ))}

        </div>

      </div>

    </section>

  )
}