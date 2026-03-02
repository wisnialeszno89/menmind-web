import { categories } from "@/data/categories";
import { cities } from "@/data/cities";
import { partners } from "@/data/partners";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }) {
  const category = categories.find((c) => c.slug === params.category);

  if (!category) return {};

  return {
    title: `${category.name} dla mężczyzn | MenMind`,
    description: `Sprawdzeni specjaliści w kategorii ${category.name}. Wsparcie dla mężczyzn w kryzysie, ojcostwie, odbudowie i rozwoju.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find((c) => c.slug === params.category);
  if (!category) return notFound();

  const premium = partners.filter(
    (p) => p.category === category.slug && p.tier === "strategic"
  );

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      {/* H1 */}
      <h1 className="text-3xl font-bold mb-6">
        {category.name} dla mężczyzn
      </h1>

      {/* Intro SEO */}
      <section className="max-w-3xl mb-12 space-y-6 text-gray-700">
        <p>
          Szukanie wsparcia to nie słabość. To decyzja o tym, że coś ma się zmienić.
          W tej kategorii znajdziesz specjalistów pracujących z mężczyznami –
          w kryzysie, w trakcie rozwodu, w problemach rodzinnych,
          przy przeciążeniu czy wypaleniu.
        </p>

        <p>
          MenMind nie jest katalogiem masowym. 
          Pokazujemy wyłącznie partnerów, którzy realnie pracują z mężczyznami
          i rozumieją specyfikę męskich trudności.
        </p>

        <h2 className="text-xl font-semibold pt-6">
          Kiedy warto rozważyć pomoc?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Masz poczucie utraty kontroli nad sytuacją.</li>
          <li>Nie śpisz, jesteś napięty, reagujesz impulsywnie.</li>
          <li>Relacje zaczynają się rozpadać.</li>
          <li>Czujesz przeciążenie lub wypalenie.</li>
        </ul>

        <p>
          Jeśli którykolwiek z tych punktów jest Ci bliski –
          rozmowa z odpowiednią osobą może być pierwszym krokiem do stabilizacji.
        </p>
      </section>

      {/* Premium */}
      {premium.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">
            Polecane przez MenMind
          </h2>

          <div className="grid gap-4">
            {premium.map((p) => (
              <div key={p.id} className="p-6 border-2 border-yellow-300 rounded-xl bg-yellow-50">
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-gray-700 mt-2">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Miasta */}
      <section>
        <h2 className="text-xl font-semibold mb-6">
          Wybierz miasto
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/kategoria/${category.slug}/${city.slug}`}
              className="border p-4 rounded-lg hover:bg-gray-50 transition"
            >
              {category.name} {city.name}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Jesteś specjalistą w tej kategorii?
        </h2>

        <Link
          href="/dla-partnerow"
          className="inline-block px-8 py-4 bg-black text-white rounded-xl"
        >
          Zostań partnerem MenMind
        </Link>
      </section>

    </div>
  );
}