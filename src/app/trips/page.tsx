import Link from "next/link";

export default function TripsPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        Ruch zamiast rozkmin
      </h1>

      <p className="text-zinc-400 max-w-3xl mb-10">
        Nie sprzedajemy wyjazdów.
        Pokazujemy miejsca i inicjatywy, które warto sprawdzić,
        jeśli chcesz ruszyć się z miejsca.
      </p>

      <section className="grid gap-6 md:grid-cols-2">
        <TripCard
          title="Wyjazdy męskie"
          description="Krótkie wypady. Góry, las, woda. Konkret."
        />

        <TripCard
          title="Aktywność lokalna"
          description="Sport, siłownia, sztuki walki, bieganie."
        />

        <TripCard
          title="Wyprawy zagraniczne"
          description="Zmiana kraju = reset perspektywy."
        />

        <TripCard
          title="Grupy i inicjatywy"
          description="Małe grupy. Bez sekciarstwa."
        />
      </section>

      <div className="mt-12 border-t border-zinc-800 pt-8">
        <p className="text-zinc-400 mb-4">
          Niektóre inicjatywy są płatne. Część współpracuje z Waypoint.
        </p>

        <Link
          href="/partners"
          className="inline-block text-sm text-zinc-300 hover:text-white transition"
        >
          Zobacz współpracę i rekomendacje →
        </Link>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition"
        >
          ← Wróć do punktu orientacyjnego
        </Link>
      </div>
    </main>
  );
}

/* =========================
   KOMPONENT POMOCNICZY
   ========================= */

function TripCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 hover:bg-zinc-800 transition">
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
