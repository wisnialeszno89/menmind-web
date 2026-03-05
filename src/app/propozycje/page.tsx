import Link from "next/link"
import { categories, categoryGroups } from "@/lib/categories"

export default function PropozycjePage() {

  return (

    <main className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-8">
          Propozycje wsparcia
        </h1>

        <p className="text-gray-600 mb-16 max-w-2xl">
          Wybierz obszar, w którym potrzebujesz wsparcia.
          Następnie sprawdź dostępne opcje w Twoim mieście.
        </p>

        {categoryGroups.map((group) => {

          const groupCategories = categories.filter(
            (cat) => cat.group === group.slug
          )

          return (

            <div key={group.slug} className="mb-16">

              <h2 className="text-2xl font-semibold mb-6">
                {group.label}
              </h2>

              <div className="grid md:grid-cols-3 gap-4">

                {groupCategories.map((category) => (

                  <Link
                    key={category.slug}
                    href={`/kategoria/${category.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                  >

                    <h3 className="font-semibold mb-2">
                      {category.label}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {category.seoDescription}
                    </p>

                  </Link>

                ))}

              </div>

            </div>

          )

        })}

      </div>

    </main>

  )

}