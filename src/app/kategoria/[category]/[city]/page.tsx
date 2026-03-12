import { notFound } from "next/navigation"
import { marketCategories as categories } from "@/data/marketCategories"
import { cities } from "@/data/cities"

type Params = {
  params: {
    category: string
    city: string
  }
}
export function generateMetadata({ params }: Params) {

  const category = categories.find(
    (c) => c.slug === params.category
  )

  const city = cities.find(
    (c) => c.slug === params.city
  )

  if (!category || !city) return {}

  return {
    title: `${category.name} dla mężczyzn ${city.name} | MenMind`,
    description: `Znajdź wsparcie w kategorii ${category.name} w mieście ${city.name}.`
  }
}
export function generateStaticParams() {

  const params: { category: string; city: string }[] = []

  for (const category of categories) {
    for (const city of cities) {
      params.push({
        category: category.slug,
        city: city.slug
      })
    }
  }

  return params
}

export default function CategoryCityPage({ params }: Params) {

  const category = categories.find(
    (c) => c.slug === params.category
  )

  const city = cities.find(
    (c) => c.slug === params.city
  )

  if (!category || !city) return notFound()

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          {category.name} dla mężczyzn — {city.name}
        </h1>

        <p className="text-gray-700 mb-10 max-w-xl">

          Szukasz wsparcia w kategorii <strong>{category.name}</strong> w mieście <strong>{city.name}</strong>?  
          Na MenMind znajdziesz specjalistów, artykuły oraz narzędzia,
          które pomagają przejść przez trudne sytuacje życiowe.

        </p>

        <section className="mb-16">

          <h2 className="text-2xl font-semibold mb-4">
            W jakich sytuacjach pomaga {category.name}?
          </h2>

          <ul className="space-y-2 text-gray-700">

            <li>• kryzys w relacji lub rozstanie</li>
            <li>• stres i przeciążenie</li>
            <li>• problemy rodzinne</li>
            <li>• rozwój osobisty</li>

          </ul>

        </section>

        <section>

          <h2 className="text-2xl font-semibold mb-4">
            Specjaliści {category.name} w mieście {city.name}
          </h2>

          <p className="text-gray-700">

            W tym miejscu będą pojawiać się profile specjalistów
            oferujących wsparcie w kategorii <strong>{category.name}</strong> w mieście <strong>{city.name}</strong>.

          </p>

        </section>

      </div>

    </main>

  )

}