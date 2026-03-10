import Link from "next/link"
import { supportByWorld } from "@/data/support"

export default function WorldSupport({ world }: { world: string }) {

  const items = supportByWorld[world] || []

  if (items.length === 0) return null

  return (

    <section className="mt-24 border rounded-xl p-8">

      <h2 className="text-2xl font-semibold text-black mb-4">
        Jeśli potrzebujesz realnego wsparcia
      </h2>

      <p className="text-black mb-8">
        Czasem rozmowa z kimś doświadczonym pomaga zobaczyć sytuację z innej strony.
      </p>

      <div className="grid md:grid-cols-3 gap-4">

        {items.map((item) => (

          <Link
            key={item.slug}
            href={`/kategoria/${item.slug}`}
            className="border rounded-lg p-4 hover:shadow"
          >

            <h3 className="font-semibold text-black">
              {item.name}
            </h3>

            {item.description && (
              <p className="text-sm text-gray-600 mt-1">
                {item.description}
              </p>
            )}

          </Link>

        ))}

      </div>

    </section>

  )

}