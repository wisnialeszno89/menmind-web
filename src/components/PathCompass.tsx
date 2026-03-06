import Link from "next/link";

const paths = [
  { slug: "rozstanie", label: "Rozstanie" },
  { slug: "utrata-pracy", label: "Utrata pracy" },
  { slug: "dol-psychiczny", label: "Dół psychiczny" },
  { slug: "reset-uzaleznienie", label: "Uzależnienie" },
  { slug: "ojciec-po-rozstaniu", label: "Ojciec po rozstaniu" },
  { slug: "brak-kierunku", label: "Brak kierunku" },
  { slug: "sens-i-duchowosc", label: "Sens i duchowość" },
  { slug: "fundament-dyscypliny", label: "Dyscyplina" },
];

export default function PathCompass() {
  return (
    <section className="mb-20">

      <h2 className="text-2xl font-semibold text-black mb-10 text-center">
        Wybierz swoją sytuację
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {paths.map((path) => (
          <Link
            key={path.slug}
            href={`/sciezki/${path.slug}`}
            className="border rounded-xl p-6 text-center hover:shadow transition bg-white"
          >
            <span className="text-black font-medium">
              {path.label}
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
}