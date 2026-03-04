import PartnerCard from "@/components/PartnerCard";
import { getPartners } from "@/lib/getPartners";

export default async function Page({ params }: any) {

  const partners = await getPartners(
    params.category,
    params.city
  );

  return (
    <main className="bg-gray-100 min-h-screen">

      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl mb-10 capitalize">
          {params.category} – {params.city}
        </h1>

        {partners.length === 0 && (
          <p className="text-gray-600">
            Jeszcze nie mamy partnerów w tym mieście.
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">

          {partners.map((partner: any, index: number) => (
            <PartnerCard
              key={partner.id}
              id={partner.id}
              name={partner.name}
              description={partner.description}
              tier={partner.tier}
              website={partner.website}
              highlighted={partner.tier === "strategic"}
              isTop={index === 0}
            />
          ))}

        </div>

      </section>

    </main>
  );
}