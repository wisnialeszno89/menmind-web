import Link from "next/link"
import { partners } from "@/data/partners"
import { rankPartners } from "@/lib/rankPartners"

export default function FeaturedPartners(){

  const top = rankPartners(partners).slice(0,3)

  return(

    <section className="py-24 border-t">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Sprawdzone miejsca, z których możesz skorzystać
        </h2>

        <p className="text-gray-600 mb-12 max-w-xl">
          Wybrane opcje, które najczęściej pomagają w podobnych sytuacjach.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {top.map(partner => (

            <Link
              key={partner.slug}
              href={`/partner/${partner.slug}`}
              className="border rounded-xl p-6 hover:shadow transition"
            >

              <h3 className="font-semibold mb-2">
                {partner.name}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                {partner.description}
              </p>

              <span className="text-xs text-gray-500">
                {partner.category}
              </span>

            </Link>

          ))}

        </div>

        {/* 🔥 MOST DO MARKETPLACE */}
        <div className="mt-12 text-center">

          <Link
            href="/propozycje"
            className="inline-block border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          >
            Zobacz wszystkie opcje
          </Link>

        </div>

      </div>

    </section>

  )

}