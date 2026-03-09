"use client"

import { trackEvent } from "@/lib/track"

type Props = {
  id: string
  name: string
  description: string
  tier: "standard" | "strategic"
  website?: string
  featured?: boolean
  verified?: boolean
  highlighted?: boolean
  isTop?: boolean
}

export default function PartnerCard({
  id,
  name,
  description,
  tier,
  website,
  featured,
  verified,
  isTop,
}: Props) {

  function handleClick() {

    trackEvent("partner_click", {
      partner_id: id,
      partner_name: name
    })

    fetch("/api/partner/click", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).catch(() => {})

  }

  return (

    <div
      className={`rounded-xl p-6 border transition bg-white hover:shadow-md ${
        tier === "strategic"
          ? "border-blue-500"
          : "border-neutral-200"
      }`}
    >

      {/* BADGES */}

      <div className="flex flex-wrap gap-2 mb-3">

        {tier === "strategic" && (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Partner Premium
          </span>
        )}

        {featured && (
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            Polecany przez MenMind
          </span>
        )}

        {verified && (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
            Zweryfikowany
          </span>
        )}

        {isTop && (
<span className="text-xs bg-black text-white px-2 py-1 rounded">
Najczęściej wybierany
</span>
)}

      </div>

      {/* NAZWA */}
        
      <h3 className="text-xl font-semibold mb-2 text-gray-900">
        {name}
      </h3>

      {/* OPIS */}

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* LINK */}

      {website && (

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="text-blue-600 hover:underline font-medium"
        >

          Przejdź do strony →

        </a>

      )}

    </div>

  )

}