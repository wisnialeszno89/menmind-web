import { cities } from "@/lib/cities";
import Link from "next/link";
import { notFound } from "next/navigation";
import ViewTracker from "@/components/ViewTracker";

type Props = {
  params: {
    blok: string;
  };
};

const allowedBloki = ["stabilizacja", "energia", "kierunek", "tozsamosc"];

export default function BlokPage({ params }: Props) {
  if (!allowedBloki.includes(params.blok)) return notFound();

  return (
    <div className="text-neutral-200">
      {/* 🔥 TRACK WEJŚCIA W BLOK */}
      <ViewTracker
        event="view_block"
        data={{
          blok: params.blok,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          {params.blok.charAt(0).toUpperCase() + params.blok.slice(1)}
        </h1>

        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-12">
          Wybierz miasto.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/propozycje/${params.blok}/${city.slug}`}
              className="border border-neutral-800 rounded-lg p-4 hover:border-blue-500 transition"
            >
              {city.name}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}