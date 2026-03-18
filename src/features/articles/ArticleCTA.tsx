import Link from "next/link"
import { partners } from "@/data/partners"
import { trackEvent } from "@/lib/tracking"

type Props = {
  world: string
}

export default function ArticleCTA({ world }: Props) {

  // 🔥 MAPA DOPASOWANIA
  const worldMap: Record<string, string[]> = {
    kryzys: ["psycholog", "mediator"],
    ojcostwo: ["prawo", "relacje"],
    odbudowa: ["mental", "plan"],
    wzrost: ["trening", "rozwoj"]
  }

  // 🔥 WYBIERZ KATEGORIE
  const categories = worldMap[world] || []

  // 🔥 FILTROWANIE PARTNERÓW
  const matched = partners
    .filter(p =>
      p.featured &&
      categories.includes(p.category)
    )
    .slice(0, 3)

  // 🔥 FALLBACK (gdy brak dopasowania)
  const finalPartners = matched.length
    ? matched
    : partners.filter(p => p.featured).slice(0, 3)

  // 🔥 JEŚLI NIC NIE MA → NIC NIE POKAZUJ
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
            onClick={() => trackEvent("partner_click", { slug: p.slug })}
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