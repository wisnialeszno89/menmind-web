import Link from "next/link";

export const metadata = {
  title: "Narzędzia | MenMind",
  description:
    "Proste narzędzia które pomagają odzyskać spokój, energię i kierunek działania.",
};

export default function NarzedziaPage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-6">
          Narzędzia
        </h1>

        <p className="text-gray-600 mb-16 max-w-xl">
          Czasem nie potrzebujesz długiej teorii.
          Czasem potrzebujesz jednego konkretnego kroku.
        </p>

        {/* STABILIZACJA */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Stabilizacja
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="/tools/breathing" className="card">
              Regulacja oddechu 4-7-8
            </Link>

            <Link href="/tools/mood-log" className="card">
              Dziennik nastroju
            </Link>

            <Link href="/narzedzia/stabilizacja/reset-90" className="card">
              Reset 90 sekund
            </Link>

            <Link href="/narzedzia/stabilizacja/test-stresu" className="card">
              Test stresu
            </Link>

            <Link href="/narzedzia/stabilizacja/plan-72h" className="card">
              Plan stabilizacji 72h
            </Link>

          </div>

        </section>

        {/* ENERGIA */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Energia
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="/tools/energy-map" className="card">
              Mapa energii dnia
            </Link>

            <Link href="/narzedzia/energia/tracker-snu" className="card">
              Tracker snu
            </Link>

          </div>

        </section>

        {/* RELACJE */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Relacje
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="/ojcostwo/rytual-15-min" className="card">
              Rytuał 15 minut
            </Link>

            <Link href="/ojcostwo/zabawy" className="card">
              Generator zabaw z dzieckiem
            </Link>

          </div>

        </section>

        {/* KIERUNEK */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Kierunek
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link href="/narzedzia/kierunek/test-wypalenia" className="card">
              Test wypalenia
            </Link>
            <Link href="/narzedzia/kierunek/diagnoza" className="card">
Diagnoza stanu – 60 sekund
</Link>

          </div>

        </section>

        {/* CTA */}

        <section className="border-t pt-12">

          <h2 className="text-xl font-semibold mb-4">
            Jeśli to nie wystarcza
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl">
            Narzędzia pomagają zrobić pierwszy krok.
            Jeśli sytuacja jest trudna, warto porozmawiać
            ze specjalistą.
          </p>

          <Link
            href="/propozycje"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Sprawdź dostępne wsparcie
          </Link>

        </section>

      </div>

    </main>
  );
}