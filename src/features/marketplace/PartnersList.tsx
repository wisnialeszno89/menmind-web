"use client"

import Link from "next/link"
import { Partner, placeholderPartners } from "@/data/partners"
import RatingStars from "@/components/RatingStars"

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
    return
  }

  window.location.href = `/partner/${partner.slug}`
}

export default function PartnersList({
  partners
}:{
  partners: Partner[]
}){

  // fallback jeśli brak partnerów
  const safePartners =
    !partners || partners.length === 0
      ? placeholderPartners
      : partners

  return(

    <div>

      <p className="text-sm font-medium mb-6">
        👉 Zacznij od pierwszej opcji — najczęściej wybieranej
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {safePartners.map((partner, index)=>(
          
          <div
            key={partner.slug}
            className={`border rounded-xl p-6 card-hover hover:shadow transition ${
              index === 0 ? "border-black" : ""
            }`}
          >

            {partner.locationType === "online" && (
              <div className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded mb-2">
                🌍 Online
              </div>
            )}

            {partner.locationType === "national" && (
              <div className="inline-block text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mb-2">
                Cała Polska
              </div>
            )}

            {partner.locationType === "city" && partner.city && (
              <div className="inline-block text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded mb-2">
                📍 {partner.city}
              </div>
            )}

            <div className="flex gap-2 mb-2 flex-wrap">

              {partner.placeholder && (
                <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded">
                  Profil poglądowy
                </span>
              )}

              {partner.tier === "strategic" && (
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  💎 Premium
                </span>
              )}

              {partner.featured && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  ⭐ Polecane
                </span>
              )}

              {(!partner.reviews || partner.reviews < 3) && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  🆕 Nowe
                </span>
              )}

            </div>

            <h3 className="text-xl font-semibold mb-2">
              {partner.name}
            </h3>

            <p className="text-xs text-gray-500 mb-2">
              Dla: {partner.category}
            </p>

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

              <Link
                href={`/partner/${partner.slug}`}
                className="underline font-medium"
              >
                👉 Zobacz profil
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}