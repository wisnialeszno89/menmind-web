import { cities } from "@/data/cities";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";

export default function CategoryCityPage({
  params,
}: {
  params: { category: string; city: string };
}) {
  const category = categories.find(c => c.slug === params.category);
  const city = cities.find(c => c.slug === params.city);

  if (!category || !city) return notFound();

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">
        {category.name} – {city.name}
      </h1>

      <p>
        Lista specjalistów w kategorii {category.name} w mieście {city.name}.
      </p>
    </div>
  );
}