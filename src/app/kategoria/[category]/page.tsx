import Link from "next/link";
import { cities } from "@/lib/cities";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-6 capitalize">
          {params.category}
        </h1>

        <p className="text-gray-600 mb-12 max-w-xl">
          Sprawdź dostępne wsparcie w Twoim mieście.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/kategoria/${params.category}/${city.slug}`}
              className="card"
            >
              {city.name}
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}