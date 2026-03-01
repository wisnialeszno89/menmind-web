import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

const categories = [
  {
    slug: "wsparcie-psychiczne",
    title: "Wsparcie psychiczne",
  },
  {
    slug: "prawo-i-mediacje",
    title: "Prawo i mediacje",
  },
  {
    slug: "trening-i-cialo",
    title: "Trening i ciało",
  },
  {
    slug: "wyjazdy-i-reset",
    title: "Wyjazdy i reset",
  },
  {
    slug: "rozwoj-zawodowy",
    title: "Rozwój zawodowy",
  },
  {
    slug: "gastronomia-i-spotkania",
    title: "Gastronomia i spotkania",
  },
  {
    slug: "inne",
    title: "Inne",
  },
];

export default function PropozycjePage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100 min-h-screen">

      <Hero
        highlight="Propozycje"
        title="Wybierz kierunek"
        subtitle="Konkretnie. Lokalnie. Bez chaosu."
      />

      <section className="section-compact">
        <div className="container-2026 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {categories.map((cat) => (
            <Link key={cat.slug} href={`/propozycje/${cat.slug}`}>
              <Card className="p-8 hover:scale-[1.02] transition">
                <h3 className="text-lg font-semibold mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  Sprawdź dostępne opcje w tej kategorii.
                </p>
              </Card>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}