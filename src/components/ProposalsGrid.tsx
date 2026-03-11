import Link from "next/link"
import { proposalSections } from "@/data/proposalSections"

export default function ProposalsGrid() {

  return (

    <section className="mt-16">

      <div className="grid md:grid-cols-3 gap-6">

        {proposalSections.map((section) => (

          <Link
            key={section.slug}
            href={`/propozycje/${section.slug}`}
            className="border rounded-xl p-8 hover:shadow-lg transition"
          >

            <h3 className="text-xl font-semibold mb-3">
              {section.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {section.categories.length} kategorii aktywności
            </p>

            <div className="text-sm text-gray-500">

              {section.categories.slice(0,3).map(cat => (
                <div key={cat.slug}>
                  • {cat.name}
                </div>
              ))}

            </div>

          </Link>

        ))}

      </div>

    </section>

  )

}