import { getPartners } from "@/lib/getPartners";
import { cities } from "@/data/cities";
import { notFound } from "next/navigation";
import PartnerCard from "@/features/marketplace/PartnerCard";

type Props = {
  params: {
    miasto: string;
  };
};

export default async function MiastoPage({ params }: Props) {

  const city = cities.find((c) => c.slug === params.miasto);

  if (!city) return notFound();

  const partners = await getPartners("stabilizacja", params.miasto);

  return (
    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-3xl font-semibold capitalize mb-10">
          Wsparcie – {city.name}
        </h1>

        {partners.length === 0 && (
          <p className="text-textMuted">
            Wkrótce pojawią się tu specjaliści w Twoim mieście.
          </p>
        )}

        <div className="mt-12 grid md:grid-cols-2 gap-6">

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

      </div>

    </main>
  );
}