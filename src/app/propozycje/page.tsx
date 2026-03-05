import Link from "next/link";
import { categories } from "@/lib/categories";

export const metadata = {
  title: "Propozycje wsparcia | MenMind",
  description:
    "Sprawdź dostępne formy wsparcia dla mężczyzn: psycholog, prawo rodzinne, mediacje, sport i rozwój.",
};

export default function PropozycjePage() {
  return (
    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-semibold mb-6 text-gray-900">
          Dostępne wsparcie
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 max-w-2xl mb-16">
          Jeśli potrzebujesz wsparcia, możesz sprawdzić dostępne
          możliwości w swoim mieście.
          To katalog specjalistów i usług które mogą pomóc
          w różnych sytuacjach życiowych.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/kategoria/${category.slug}`}
              className="bg-white rounded-xl border border-gray-300 p-6 hover:border-blue-600 transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}