import { getPartner } from "@/lib/getPartners"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PartnerPage({ params }: Props) {

  const { slug } = await params

  const partner = await getPartner(slug)

  if (!partner) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Partner nie znaleziony</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-4">
          {partner.name}
        </h1>

        <p className="text-gray-500 mb-8">
          {partner.city} • {partner.category}
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-10">

          <p className="text-gray-700 leading-relaxed">
            {partner.description}
          </p>

        </div>

        {partner.website && (

          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Przejdź do strony
          </a>

        )}

      </div>

    </main>
  )
}