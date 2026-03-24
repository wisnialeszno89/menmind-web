import { notFound } from "next/navigation"
import { partners } from "@/data/partners"

export const dynamic = "force-dynamic"

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const partner = partners.find(
    p => p.slug === slug
  )

  if (!partner) return notFound()

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-20">

        <p className="text-sm text-gray-500 mb-3">
          {partner.city || (partner.locationType === "online" ? "Online" : "Cała Polska")}
        </p>

        <h1 className="text-4xl font-semibold mb-4">
          {partner.name}
        </h1>

        <p className="text-xl text-gray-700 mb-10">
          {partner.description}
        </p>

        <div className="mb-12 flex flex-col gap-4">

          {partner.website && (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg text-center"
            >
              Przejdź do strony partnera
            </a>
          )}

          {partner.phone && (
            <a
              href={`tel:${partner.phone.replace(/\s+/g, "")}`}
              className="inline-block border px-6 py-3 rounded-lg text-center"
            >
              Zadzwoń: {partner.phone}
            </a>
          )}

        </div>

        {partner.specialties && (
          <div className="mb-10">

            <h2 className="font-semibold mb-3">
              W czym może pomóc
            </h2>

            <div className="flex flex-wrap gap-2">

              {partner.specialties.map((s)=>(
                <span
                  key={s}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}

            </div>

          </div>
        )}

      </div>

    </main>

  )
}