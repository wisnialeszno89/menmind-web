import Link from "next/link"
import { getToolsByWorld } from "@/lib/getToolsByCategory"

export default function OptionalTools({ world }: { world: string }) {

  const tools = getToolsByWorld(world)

  if (tools.length === 0) return null

  return (

    <section className="mt-16">

      <h2 className="text-xl font-semibold text-black mb-6">
        Dodatkowe narzędzia
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        {tools.map((tool) => (

          <Link
            key={tool.slug}
            href={`/narzedzia/${tool.slug}`}
            className="border rounded-lg p-4 hover:shadow"
          >

            <h3 className="font-semibold mb-1">
              {tool.title}
            </h3>

            <p className="text-sm text-gray-600">
              {tool.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )

}