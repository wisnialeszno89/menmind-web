"use client"

import { trackEvent } from "@/lib/track"

type Props = {
  id: string
  name: string
  description: string
  tier: string
  website?: string
  featured?: boolean
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
  highlighted,
  isTop,
}: Props) {

  function handleClick() {

    trackEvent("partner_click", {
      partner_id: id,
      partner_name: name
    })

    fetch("/api/partner/click", {
      method: "POST",
      body: JSON.stringify({
        id
      })
    }).catch(() => {})

  }

  return (

    <div
      className={`rounded-xl p-6 border transition bg-white ${
        highlighted
          ? "border-blue-500 shadow-md"
          : "border-neutral-300"
      }`}
    >

      {/* BADGE FEATURED */}

      {featured && (
        <div className="text-xs text-green-600 mb-2 font-medium">
          Polecany przez MenMind
        </div>
      )}

      {/* BADGE TOP */}

      {isTop && (
        <div className="text-xs text-yellow-500 mb-2 font-medium">
          Najczęściej wybierany
        </div>
      )}

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
          className="text-blue-600 hover:underline"
        >

          Przejdź do strony →

        </a>

      )}

    </div>

  )

}