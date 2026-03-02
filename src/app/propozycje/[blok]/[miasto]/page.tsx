import { notFound } from "next/navigation";
import { cities } from "@/data/cities";
import { partners } from "@/data/partners";
import Link from "next/link";

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
      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          {params.blok.charAt(0).toUpperCase() + params.blok.slice(1)} – {city.name}
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        {filteredPartners.length === 0 && (
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
        )}

        {/* 🔵 POLECANE */}
        {strategicPartners.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">
              Polecane przez MenMind
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategicPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="border border-blue-500 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-neutral-300 mb-4">
                    {partner.description}
                  </p>

                  <p className="text-sm text-neutral-500 mb-4">
                    Zweryfikowany partner
                  </p>

                  <button className="text-blue-500 underline underline-offset-4 hover:text-blue-400">
                    Zobacz szczegóły →
                  </button>
                </div>
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
                <div
                  key={partner.id}
                  className="border border-neutral-800 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-neutral-300 mb-4">
                    {partner.description}
                  </p>

                  <button className="text-blue-500 underline underline-offset-4 hover:text-blue-400">
                    Zobacz szczegóły →
                  </button>
                </div>
                
              ))}
            </div>
          </section>
                  )}
                  {/* CTA Partner */}
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