"use client"

import Link from "next/link"
import { Partner } from "@/data/partners"
import RatingStars from "@/components/RatingStars"
import PartnerBadges from "@/features/marketplace/PartnerBadges"

// 🔥 TRACK + PRZEJŚCIE
async function handleClick(partner: Partner) {

  try {
    await fetch("/api/partner/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        slug: partner.slug
      })
    })
  } catch {}

  if (partner.website) {
    window.open(partner.website, "_blank")
  }
}

export default function PartnersList({
  partners
}:{
  partners: Partner[]
}){

  if(!partners.length){

    return(

      <div className="border rounded-xl p-8 text-center text-gray-600">
        Brak partnerów w tej kategorii.
      </div>

    )

  }

  return(

    <div className="grid md:grid-cols-2 gap-6">

      {partners.map((partner)=>(

        <div
          key={partner.slug}
          className="border rounded-xl p-6 hover:shadow transition"
        >

          <h3 className="text-xl font-semibold mb-2">
            {partner.name}
          </h3>

          {/* 🔥 DLA KOGO (prosty kontekst) */}
          <p className="text-xs text-gray-500 mb-2">
            Najlepsze dla: {partner.category}
          </p>

          {/* RATING */}
          {partner.rating && (

            <div className="flex items-center gap-2 mb-2">

              <RatingStars rating={partner.rating} />

              <span className="text-sm text-gray-500">
                {partner.reviews || 0} opinii
              </span>

            </div>

          )}

          <p className="text-gray-700 mb-4">
            {partner.description}
          </p>

          <div className="flex gap-4 text-sm">

            {partner.website && (

              <button
                onClick={() => handleClick(partner)}
                className="underline"
              >
                Strona
              </button>

            )}

            <Link
              href={`/partner/${partner.slug}`}
              className="underline"
            >
              Profil
            </Link>

          </div>

        </div>

      ))}

    </div>

  )

}