import Link from "next/link"
import { partners } from "@/data/partners"

type Props = {
  world?: string
  slug?: string
}

export default function ArticleCTA({ world = "kryzys" }: Props) {

  const worldMap: Record<string, string[]> = {
    kryzys: ["psycholog", "mediator"],
    ojcostwo: ["prawo", "relacje"],
    odbudowa: ["mental", "plan"],
    wzrost: ["trening", "rozwoj"]
  }

  const categories = worldMap[world] || []

  const matched = partners
    .filter(p =>
      p.featured &&
      categories.includes(p.category)
    )
    .slice(0, 3)

  const finalPartners = matched.length
    ? matched
    : partners.filter(p => p.featured).slice(0, 3)

  if (!finalPartners.length) return null

  return (

    <section className="mt-20 border-t pt-12">

      <h3 className="text-xl font-semibold mb-4">
        Jeśli chcesz pójść krok dalej
      </h3>

      <p className="text-gray-600 mb-8">
        Możesz skorzystać z miejsc, które pomagają w takich sytuacjach.
      </p>

      <div className="grid md:grid-cols-3 gap-4">

        {finalPartners.map(p => (

          <Link
            key={p.slug}
            href={`/partner/${p.slug}`}
            className="border rounded-xl p-4 hover:shadow transition"
          >

            <p className="font-medium mb-1">
              {p.name}
            </p>

            <p className="text-sm text-gray-600">
              {p.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )
}