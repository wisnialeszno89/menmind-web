import { tools } from "@/content/tools"
import Link from "next/link"

export default function WorldTools({ world }) {

  const filtered = tools.filter(t => t.world === world)

  if (!filtered.length) return null

  return (
    <section className="mt-16">

      <h2 className="text-2xl font-semibold mb-8">
        Narzędzia
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {filtered.map(tool => (
          <Link
            key={tool.slug}
            href={`/narzedzia/${tool.slug}`}
            className="border p-6 rounded-lg hover:shadow"
          >
            <h3 className="text-lg font-medium">
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