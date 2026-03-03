"use client";

import { trackEvent } from "@/lib/track";

type Props = {
  id: string;
  name: string;
  description: string;
  city: string;
  blok?: string;
  tier: string;
  website?: string;
  highlighted?: boolean;
  isTop?: boolean;
};

export default function PartnerCard({
  name,
  description,
  city,
  blok,
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
      {/* 🔥 Badge lidera */}
      {isTop && (
        <div className="text-xs text-yellow-400 mb-2 font-medium">
          Najczęściej wybierany
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{name}</h3>

      <p className="text-neutral-300 mb-4">{description}</p>

      {website ? (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("partner_click", {
              partner: name,
              city,
              blok,
              tier,
            })
          }
          className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
        >
          Przejdź do strony →
        </a>
      ) : (
        <button
          onClick={() =>
            trackEvent("partner_click", {
              partner: name,
              city,
              blok,
              tier,
            })
          }
          className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
        >
          Zobacz szczegóły →
        </button>
      )}
    </div>
  );
}