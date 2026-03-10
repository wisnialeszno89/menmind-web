import Link from "next/link"
import { worldPaths } from "@/data/worldPaths"

export default function WorldPaths({ world }: { world: string }) {

  const paths = worldPaths[world] || []

  if (paths.length === 0) return null

  return (

    <section className="mb-20">

      <h2 className="text-2xl font-semibold text-black mb-6">
        Drogi w tym świecie
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {paths.map((path) => (

          <Link
            key={path.slug}
            href={`/sciezki/${path.slug}`}
            className="border rounded-xl p-6 hover:shadow"
          >

            <h3 className="font-semibold text-black mb-2">
              {path.name}
            </h3>

            <p className="text-sm text-gray-600">
              {path.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )

}