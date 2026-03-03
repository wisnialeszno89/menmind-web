import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { partners } from "@/data/partners";
import Link from "next/link";
import PartnerCard from "@/components/PartnerCard";
import ViewTracker from "@/components/ViewTracker";

type Props = {
  params: {
    blok: string;
    miasto: string;
  };
};

const blokMap: Record<string, string[]> = {
  stabilizacja: ["kryzys"],
  energia: ["odbudowa"],
  kierunek: ["wzrost"],
  tozsamosc: [],
};

export default function PropozycjeMiastoPage({ params }: Props) {
  const city = cities.find((c) => c.slug === params.miasto);
  if (!city) return notFound();

  const allowedStates = blokMap[params.blok];
  if (!allowedStates) return notFound();

  const filteredPartners = partners.filter(
    (p) =>
      allowedStates.includes(p.state) &&
      p.city.toLowerCase() === city.name.toLowerCase()
  );

  const strategicPartners = filteredPartners.filter(
    (p) => p.tier === "strategic"
  );

  const standardPartners = filteredPartners.filter(
    (p) => p.tier === "standard"
  );

  return (
    <div className="text-neutral-200">
      {/* 🔥 TRACK WEJŚCIA W BLOK + MIASTO */}
      <ViewTracker
        event="view_block_city"
        data={{
          blok: params.blok,
          city: city.name,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          {params.blok.charAt(0).toUpperCase() + params.blok.slice(1)} – {city.name}
        </h1>

        <div className="h-px w-16 bg-blue-500 mb-12" />

        {/* BRAK PARTNERÓW */}
        {filteredPartners.length === 0 && (
          <>
            <ViewTracker
              event="view_city_empty"
              data={{
                blok: params.blok,
                city: city.name,
              }}
            />

            <div>
              <p className="text-lg text-neutral-300 mb-8">
                Aktualnie brak partnerów w tym mieście.
              </p>

              <Link
                href="/dla-partnerow"
                className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
              >
                Zgłoś partnera →
              </Link>
            </div>
          </>
        )}

        {/* POLECANE */}
        {strategicPartners.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              Polecane przez MenMind
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicPartners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  id={partner.id}
                  name={partner.name}
                  description={partner.description}
                  city={partner.city}
                  blok={params.blok}
                  tier={partner.tier}
                  website={partner.website}
                  highlighted
                />
              ))}
            </div>
          </section>
        )}

        {/* STANDARD */}
        {standardPartners.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Dostępni w mieście
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {standardPartners.map((partner) => (
                <PartnerCard
                  key={partner.id}
                  id={partner.id}
                  name={partner.name}
                  description={partner.description}
                  city={partner.city}
                  blok={params.blok}
                  tier={partner.tier}
                  website={partner.website}
                />
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-24 border-t border-neutral-800 pt-16">
          <h2 className="text-2xl font-semibold mb-6">
            Znasz specjalistę, którego tu brakuje?
          </h2>

          <p className="text-neutral-300 text-lg leading-8 mb-8 max-w-2xl">
            Jeśli w Twoim mieście działa ktoś, kto realnie pomaga mężczyznom,
            możesz zgłosić go do MenMind.
          </p>

          <Link
            href="/dla-partnerow"
            className="text-blue-500 underline underline-offset-4 hover:text-blue-400 text-lg"
          >
            Zostań partnerem →
          </Link>
        </section>

      </div>
    </div>
  );
}