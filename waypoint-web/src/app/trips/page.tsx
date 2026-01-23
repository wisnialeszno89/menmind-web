import Link from "next/link";

export default function TripsPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        Ruch zamiast rozkmin
      </h1>

      <p className="text-zinc-400 max-w-3xl mb-10">
        Nie musisz nic naprawiać. Wystarczy się ruszyć.
        Zmiana otoczenia porządkuje myśli szybciej niż analiza.
      </p>

      <section className="grid gap-6 md:grid-cols-2">
        <TripCard
          title="Wyjazdy męskie"
          description="Krótkie wypady. Góry, las, woda. Bez gadania o emocjach."
          cta="Zobacz propozycje"
        />

        <TripCard
          title="Aktywność lokalna"
          description="Siłownia, sztuki walki, bieganie, survival."
          cta="Znajdź coś blisko"
        />

        <TripCard
          title="Wyprawy zagraniczne"
          description="Zmiana kraju = reset perspektywy."
          cta="Sprawdź kierunki"
        />

        <TripCard
          title="Grupy i inicjatywy"
          description="Małe grupy. Konkretne działania. Zero sekciarstwa."
          cta="Dołącz"
        />
      </section>

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

function TripCard({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 hover:bg-zinc-800 transition">
      <h2 className="text-xl font-medium mb-2">{title}</h2>
      <p className="text-zinc-400 mb-4">{description}</p>

      <button className="text-sm text-zinc-200 hover:text-white transition">
        {cta} →
      </button>
    </div>
  );
}