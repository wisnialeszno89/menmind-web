import Link from "next/link"
import { getToolsByWorld } from "@/lib/getToolsByCategory"

export default function WorldTools({ world }: { world: string }) {
  const tools = getToolsByWorld(world)

  if (tools.length === 0) return null

  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold text-black mb-6">
        Narzędzia które mogą pomóc
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.slice(0,4).map((tool) => (
          <Link
            key={tool.slug}
            href={`/narzedzia/${tool.slug}`}
            className="border rounded-xl p-6 hover:shadow"
          >
            <h3 className="font-semibold text-black mb-2">
              {tool.title}
            </h3>

            <p className="text-black text-sm">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}