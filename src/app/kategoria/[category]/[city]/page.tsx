import { getPartners } from "@/lib/getPartners"
import PartnerCard from "@/components/PartnerCard"
import Link from "next/link"
import { categoryFAQ } from "@/content/categoryFAQ";
import { rankPartners } from "@/lib/partnerRanking"

export async function generateMetadata({ params }: any) {

  const { category, city } = params

  return {
    title: `${category} w ${city} | MenMind`,
    description: `Znajdź wsparcie: ${category} w ${city}. Sprawdzeni specjaliści i pomoc dla mężczyzn.`,
  }

}

export default async function Page({ params }: any) {

  const rawPartners = await getPartners(params.category, params.city)

const partners = rankPartners(rawPartners)

  const faq = categoryFAQ[params.category] || [];

  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* TITLE */}

        <h1 className="text-4xl font-semibold mb-6 capitalize">
          {params.category} – {params.city}
        </h1>

        <p className="text-gray-600 mb-10 max-w-xl">
          Sprawdź dostępne wsparcie w mieście {params.city}.
        </p>
<p className="text-gray-600 mb-10 max-w-xl">
  Najlepiej dopasowani specjaliści w mieście {params.city}.
</p>

        {/* PARTNERS */}

        {partners.length === 0 && (
          <p className="text-gray-500 mb-10">
            Jeszcze nie mamy partnerów w tym mieście.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-20">

          {partners.map((partner: any, index: number) => (

            <PartnerCard
              key={partner.id}
              id={partner.id}
              name={partner.name}
              description={partner.description}
              tier={partner.tier}
              website={partner.website}
              featured={partner.featured}
              verified={partner.verified}
              highlighted={partner.tier === "strategic"}
              isTop={index === 0}
            />

          ))}

        </div>


        {/* MENMIND DIRECTIONS */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Jeśli potrzebujesz więcej wsparcia
          </h2>

          <div className="space-y-4">

            <Link
              href="/narzedzia/stabilizacja"
              className="block border p-4 rounded-lg"
            >
              Zobacz narzędzia stabilizacji
            </Link>

            <Link
              href="/narzedzia/energia"
              className="block border p-4 rounded-lg"
            >
              Odbuduj energię
            </Link>

            <Link
              href="/propozycje"
              className="block border p-4 rounded-lg"
            >
              Poszukaj czegoś dla siebie
            </Link>

            <Link
              href="/propozycje"
              className="block bg-black text-white px-6 py-3 rounded-lg text-center"
            >
              Sprawdź dostępne wsparcie
            </Link>

          </div>

        </section>


        {/* FAQ SEO */}

        <section>

          <h2 className="text-2xl font-semibold mb-6">
            Najczęstsze pytania
          </h2>

          <div className="space-y-6">

            {faq.map((f: any) => (

              <div key={f.q}>

                <p className="font-semibold mb-1">
                  {f.q}
                </p>

                <p className="text-gray-600">
                  {f.a}
                </p>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>

  )

}