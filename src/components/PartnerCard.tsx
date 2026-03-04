"use client"

import { trackEvent } from "@/lib/track"

type Props = {
  id: string
  name: string
  description: string
  tier: string
  website?: string
  highlighted?: boolean
  isTop?: boolean
}

export default function PartnerCard({
  id,
  name,
  description,
  tier,
  website,
  highlighted,
  isTop,
}: Props) {

  return (
    <div
      className={`rounded-xl p-6 border transition ${
        highlighted ? "border-blue-500" : "border-neutral-800"
      }`}
    >

      {isTop && (
        <div className="text-xs text-yellow-400 mb-2 font-medium">
          Najczęściej wybierany
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">
        {name}
      </h3>

      <p className="text-neutral-300 mb-4">
        {description}
      </p>

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("partner_click", {
              partner_id: id,
              partner_name: name
            })
          }
          className="text-blue-400 hover:underline"
        >
          Przejdź do strony
        </a>
      )}

    </div>
  )
}