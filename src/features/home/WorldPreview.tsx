import Link from "next/link"
import { worlds } from "@/data/worlds"

export default function WorldPreview() {

  const ordered = [
    "kryzys",
    "odbudowa",
    "wzrost",
    "ojcostwo"
  ]

  const sortedWorlds = ordered
    .map(slug => worlds.find(w => w.slug === slug))
    .filter(Boolean)

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-3xl font-semibold text-black mb-3">
      Wybierz obszar który jest Ci teraz najbliższy
      </h2>

      <p className="text-gray-500 mb-9">
      Możesz przechodzić między nimi w dowolnym momencie
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">

        {sortedWorlds.map((world) => (

          <Link
            key={world.slug}
            href={`/${world.slug}`}
            className="border rounded-xl p-6 hover:shadow transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {world.title}
            </h3>

            <p className="text-gray-600">
              {world.description}
            </p>
          </Link>

        ))}

      </div>

      <div className="text-center">
        <Link
          href="/propozycje"
          className="inline-block border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
        >
          Nie wiesz? Zobacz dostępne wsparcie
        </Link>
      </div>

    </section>
  )
}