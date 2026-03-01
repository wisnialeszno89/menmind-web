import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { cities } from "@/data/cities-pl";
import Link from "next/link";

export async function generateStaticParams() {
  return [
    { slug: "wsparcie-psychiczne" },
    { slug: "prawo-i-mediacje" },
    { slug: "trening-i-cialo" },
    { slug: "wyjazdy-i-reset" },
    { slug: "rozwoj-zawodowy" },
    { slug: "gastronomia-i-spotkania" },
    { slug: "inne" },
  ];
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const categoryTitle = slug.replace(/-/g, " ");

  return (
    <main className="bg-[#0F172A] text-zinc-100 min-h-screen">

      <Hero
        highlight="Propozycje"
        title={categoryTitle}
        subtitle="Sprawdzone kierunki działania. Lokalnie. Konkretnie."
      />

      {/* PREMIUM */}
      <section className="section-compact">
        <div className="container-2026">
          <h2 className="text-xl font-semibold mb-6">
            Polecane przez MenMind
          </h2>

          <Card variant="highlight" className="p-8">
            <h3 className="text-lg font-semibold mb-2">
              Miejsce na partnera premium
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Wyróżniona obecność w tej kategorii.
            </p>
            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-sm">
              Zobacz ofertę
            </button>
          </Card>
        </div>
      </section>

      {/* WYBÓR MIASTA */}
      <section className="section-compact">
        <div className="container-2026">
          <h2 className="text-xl font-semibold mb-6">
            Wybierz miasto
          </h2>

          <div className="flex flex-wrap gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/propozycje/${slug}/${city.slug}`}
                className="px-5 py-2 rounded-lg border border-zinc-700 hover:border-white transition text-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA DLA PARTNERÓW */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">
          <Card variant="subtle" className="p-8 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Chcesz być widoczny w tej kategorii?
            </h3>
            <Link
              href="/dla-partnerow"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
            >
              Zostań partnerem
            </Link>
          </Card>
        </div>
      </section>

    </main>
  );
}