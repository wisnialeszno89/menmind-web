"use client";

import { useState } from "react";
import { partners } from "@/data/partners";

const states = [
  { label: "Wszystko", value: "all" },
  { label: "Kryzys", value: "kryzys" },
  { label: "Odbudowa", value: "odbudowa" },
  { label: "Wzrost", value: "wzrost" },
  { label: "Ojcostwo", value: "ojcostwo" },
];

export default function PropozycjePage() {
  const [selectedState, setSelectedState] = useState("all");

  const filtered = partners
    .filter(
      (partner) =>
        selectedState === "all" || partner.state === selectedState
    )
    .sort((a, b) =>
      a.tier === "strategic" && b.tier !== "strategic" ? -1 : 1
    );

  return (
    <main className="bg-[#0F172A] text-zinc-100">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Propozycje
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-10">
            Wyselekcjonowane kierunki wsparcia.
          </p>

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-zinc-800 p-3 rounded-lg text-sm"
          >
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>

        </div>
      </section>

      {/* PARTNERZY */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-2 gap-10">

          {filtered.map((partner) => {
            const isStrategic = partner.tier === "strategic";

            return (
              <div
                key={partner.id}
                className={`card-2026 p-10 relative ${
                  isStrategic
                    ? "bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155]"
                    : ""
                }`}
              >
                {isStrategic && (
                  <div className="absolute top-4 right-4 text-xs bg-[#334155] px-3 py-1 rounded-full">
                    Partner strategiczny
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-2xl font-semibold">
                    {partner.name}
                  </h3>
                  <div className="text-sm text-zinc-400">
                    {partner.city}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {partner.description}
                </p>

                <div className="flex justify-between items-center">

                  <div className="text-xs text-zinc-500">
                    {partner.category}
                  </div>

                  <button className="accent-bg px-6 py-2 rounded-xl text-sm">
                    Skontaktuj się
                  </button>

                </div>

              </div>
            );
          })}

        </div>
      </section>

    </main>
  );
}