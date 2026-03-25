import Link from "next/link"
import { supportByWorld } from "@/data/support"
import { partners } from "@/data/partners"

export default function WorldSupport({ world }: { world: string }) {

  const items = supportByWorld[world] || []

  if (items.length === 0 && world !== "ojcostwo") return null

  const strategicPartners = partners.filter(
    p => p.section === "ojcostwo" && p.tier === "strategic"
  )

  return (

    <section className="mt-24 border rounded-xl p-8">

      {/* STANDARD SUPPORT */}
      {items.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Jeśli potrzebujesz realnego wsparcia
          </h2>

          <p className="text-black mb-8">
            Czasem rozmowa z kimś doświadczonym pomaga zobaczyć sytuację z innej strony.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-12">

            {items.map((item) => (

              <Link
                key={item.slug}
                href={`/propozycje/${item.slug}`}
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
        </>
      )}

      {/* 🔥 STRATEGIC PARTNERS - OJCOSTWO */}
      {world === "ojcostwo" && strategicPartners.length > 0 && (
        <div>

          <h3 className="text-xl font-semibold mb-4">
            Polecane aktywności dla ojców
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {strategicPartners.slice(0,2).map((partner) => (

              <Link
                key={partner.slug}
                href={`/partner/${partner.slug}`}
                className="border rounded-xl p-5 hover:shadow transition"
              >

                <div className="text-xs text-purple-600 font-semibold mb-1">
                  ⭐ Partner polecany
                </div>

                <h4 className="font-semibold text-black mb-1">
                  {partner.name}
                </h4>

                <p className="text-sm text-gray-600">
                  {partner.description}
                </p>

              </Link>

            ))}

          </div>

        </div>
      )}

    </section>

  )

}