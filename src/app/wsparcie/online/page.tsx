"use client";

import { useState } from "react";
import {
  partners,
  categories,
  categoryLabels,
} from "@/lib/partners";

export default function OnlinePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const onlinePartners = partners.filter(
    (p) => p.city === "online"
  );

  const filteredPartners = onlinePartners
    .filter((p) =>
      activeCategory ? p.category === activeCategory : true
    )
    .sort((a, b) => Number(b.premium) - Number(a.premium));

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">
          Wsparcie online
        </h1>

        <p className="mt-4 text-textMuted max-w-2xl">
          Specjaliści i usługi dostępne z dowolnego miejsca.
        </p>

        {/* FILTR */}
        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-xl text-sm border ${
              !activeCategory
                ? "bg-accent text-black border-accent"
                : "border-borderSoft text-textMuted"
            }`}
          >
            Wszystkie ({onlinePartners.length})
          </button>

          {categories.map((cat) => {
            const count = onlinePartners.filter(
              (p) => p.category === cat.value
            ).length;

            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm border ${
                  activeCategory === cat.value
                    ? "bg-accent text-black border-accent"
                    : "border-borderSoft text-textMuted"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* LISTA */}
        <div className="mt-12 space-y-6">
          {filteredPartners.length === 0 && (
            <p className="text-textMuted">
              Brak partnerów w tej kategorii.
            </p>
          )}

          {filteredPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-2xl p-6 border transition ${
                partner.premium
                  ? "border-accent bg-navySoft"
                  : "border-borderSoft"
              }`}
            >
              <h3 className="text-lg font-medium">
                {partner.name}
              </h3>

              <div className="mt-2 flex items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full border border-borderSoft text-textMuted">
                  {categoryLabels[partner.category]}
                </span>

                {partner.premium && (
                  <span className="text-xs bg-accent text-black px-3 py-1 rounded-full">
                    Premium
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm text-textMuted">
                {partner.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-borderSoft bg-navySoft p-10 text-center">
          <h2 className="text-2xl font-semibold">
            Prowadzisz działalność online?
          </h2>

          <p className="mt-4 text-textMuted">
            Możesz dotrzeć do mężczyzn z całej Polski.
          </p>

          <a
            href="/dla-partnerow/zglos-sie"
            className="inline-block mt-8 rounded-xl bg-accent px-8 py-4 font-medium text-black"
          >
            Dołącz jako partner →
          </a>
        </div>
      </div>
    </main>
  );
}