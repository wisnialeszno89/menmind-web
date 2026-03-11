import Link from "next/link"
import { worlds } from "@/data/worlds"

export default function WorldPreview() {

  return (

    <section className="max-w-6xl mx-auto px-6 py-24">

      <div className="max-w-2xl mb-16">

        <h2 className="text-3xl font-semibold text-black mb-4">
          Wybierz obszar który jest Ci teraz najbliższy
        </h2>

        <p className="text-gray-600">
          Nie musisz mieć wszystkiego poukładanego.
          Wybierz miejsce które najlepiej opisuje Twoją sytuację.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {worlds.map((world) => (

          <Link
            key={world.slug}
            href={`/${world.slug}`}
            className="group border rounded-xl p-8 hover:shadow-lg hover:border-black transition"
          >

            <h3 className="text-xl font-semibold mb-3 group-hover:underline">
              {world.name}
            </h3>

            <p className="text-gray-700 mb-6">
              {world.description}
            </p>

            {/* PREVIEW PROBLEMÓW */}

            <div className="flex flex-wrap gap-2">

              {world.preview.map((item) => (

                <span
                  key={item}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                >
                  {item}
                </span>

              ))}

            </div>

          </Link>

        ))}

      </div>

    </section>

  )

}