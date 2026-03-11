import Link from "next/link"
import { worlds } from "../data/worlds"

export default function WorldPreview() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-black mb-12">
Wybierz obszar który jest Ci teraz najbliższy
</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {worlds.map((world) => (
          <Link
            key={world.slug}
            href={`/world/${world.slug}`}
            className="border rounded-xl p-8 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">{world.name}</h3>

            <p className="text-gray-700">{world.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}