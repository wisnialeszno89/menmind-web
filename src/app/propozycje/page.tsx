import Link from "next/link";
import { categories } from "../../lib/categories";

export default function PropozycjePage() {
  return (
    <main className="bg-gray-100 min-h-screen">

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-12">
          Propozycje wsparcia
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/kategoria/${cat.slug}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold mb-2">
                {cat.name}
              </h3>

              <p className="text-sm text-gray-600">
                {cat.description}
              </p>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}