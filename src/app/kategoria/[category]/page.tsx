import { categories } from "@/lib/categories";
import { cities } from "@/lib/cities";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function CategoryPage({ params }: any) {

  const category = categories.find(
    (c) => c.slug === params.category
  );

  if (!category) return notFound();

  return (
    <main className="bg-gray-100 min-h-screen">

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-6">
          {category.name}
        </h1>

        <p className="text-gray-700 mb-12">
          {category.description}
        </p>

        <h2 className="text-xl mb-6">
          Wybierz miasto
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/kategoria/${category.slug}/${city.slug}`}
              className="bg-white p-4 rounded-lg"
            >
              {city.name}
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}