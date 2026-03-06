import { getPartner } from "@/lib/getPartners";
import Link from "next/link";

export default async function PartnerPage({ params }: any) {

  const partner = await getPartner(params.slug);

  if (!partner) {
    return <div>Nie znaleziono partnera</div>;
  }

  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-6">
          {partner.name}
        </h1>

        <p className="text-gray-700 mb-10">
          {partner.description}
        </p>

        {partner.website && (

          <a
            href={partner.website}
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg mb-16"
          >
            Strona partnera
          </a>

        )}

        <section className="mt-16">

          <h2 className="text-2xl font-semibold mb-4">
            Inne wsparcie w tym mieście
          </h2>

          <Link
            href={`/kategoria/${partner.category}/${partner.city}`}
            className="text-black underline"
          >
            Zobacz więcej specjalistów w {partner.city}
          </Link>

        </section>

      </div>

    </main>

  );
}