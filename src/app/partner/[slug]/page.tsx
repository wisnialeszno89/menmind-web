import { partners } from "@/data/partners"
import Link from "next/link"


export default function PartnerPage({
  params
}: {
  params: { slug: string }
}) {

  const partner = partners.find(
    (p) => p.slug === params.slug
  )

  if (!partner) {
    return <div>Partner nie istnieje</div>
  }

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-4">
          {partner.name}
        </h1>

        <p className="text-gray-600 mb-8">
          {partner.city}
        </p>

        <p className="text-gray-700 mb-10">
          {partner.description}
        </p>

        {partner.website && (

          <a
            href={partner.website}
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >

            Przejdź do strony

          </a>

        )}

        <div className="mt-16 border-t pt-10">

          <h2 className="text-xl font-semibold mb-4">

            Szukasz podobnego wsparcia?

          </h2>

          <Link
            href={`/kategoria/${partner.category}`}
            className="text-blue-600 underline"
          >

            Zobacz więcej specjalistów

          </Link>

        </div>

      </div>

    </main>

  )

}