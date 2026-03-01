import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { cities } from "@/data/cities-pl";
import Link from "next/link";

const categories = [
  "wsparcie-psychiczne",
  "prawo-i-mediacje",
  "trening-i-cialo",
  "wyjazdy-i-reset",
  "rozwoj-zawodowy",
  "gastronomia-i-spotkania",
  "inne",
];

/* ================= STATIC GENERATION ================= */

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];

  for (const slug of categories) {
    for (const city of cities) {
      params.push({ slug, city: city.slug });
    }
  }

  return params;
}

/* ================= METADATA ================= */

export async function generateMetadata({
  params,
}: {
  params: { slug: string; city: string };
}) {
  const cityName =
    cities.find((c) => c.slug === params.city)?.name ?? params.city;

  const category = params.slug.replace(/-/g, " ");

  return {
    title: `${category} – ${cityName} | MenMind`,
    description: `Lokalne wsparcie: ${category} w mieście ${cityName}.`,
  };
}

/* ================= PAGE ================= */

export default function CityPage({
  params,
}: {
  params: { slug: string; city: string };
}) {
  const { slug, city } = params;

  if (!categories.includes(slug)) return notFound();

  const cityData = cities.find((c) => c.slug === city);
  if (!cityData) return notFound();

  const categoryTitle = slug.replace(/-/g, " ");

  return (
    <main className="bg-[#0F172A] text-zinc-100 min-h-screen">

      <Hero
        highlight={cityData.name}
        title={categoryTitle}
        subtitle="Lokalne możliwości działania."
      />

      {/* PREMIUM */}
      <section className="section-compact">
        <div className="container-2026">
          <h2 className="text-xl font-semibold mb-6">
            Polecane w {cityData.name}
          </h2>

          <Card variant="highlight" className="p-8">
            <h3 className="text-lg font-semibold mb-2">
              Partner premium
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Wyróżniona obecność w tej lokalizacji.
            </p>
            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-sm">
              Zobacz ofertę
            </button>
          </Card>
        </div>
      </section>

      {/* LISTA PARTNERÓW */}
      <section className="section-compact">
        <div className="container-2026">
          <h2 className="text-xl font-semibold mb-6">
            Dostępni partnerzy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Partner lokalny
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                Opis oferty lokalnej.
              </p>
              <button className="text-sm text-blue-400 hover:underline">
                Sprawdź
              </button>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Partner lokalny
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                Opis oferty lokalnej.
              </p>
              <button className="text-sm text-blue-400 hover:underline">
                Sprawdź
              </button>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">
          <Card variant="subtle" className="p-8 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Prowadzisz działalność w {cityData.name}?
            </h3>
            <Link
              href="/dla-partnerow"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
            >
              Dołącz jako partner
            </Link>
          </Card>
        </div>
      </section>

    </main>
  );
}