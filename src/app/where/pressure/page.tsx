import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WherePressurePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem pod presją i potrzebuję kierunku
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Presja potrafi iść z wielu stron: praca, pieniądze, relacja, rodzina.
            To nie “słabość”. To sygnał przeciążenia. Najpierw wracamy do spokoju,
            potem układamy plan.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Najpierw regulacja, potem decyzje
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span> Jedno zdanie:
              <span className="text-zinc-200"> “Presja jest z…”</span>
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Jedna rzecz, którą
              <span className="text-zinc-200"> możesz odpuścić dziś</span>
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Jeden ruch ciała:
              spacer / prysznic / rozciąganie
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <p className="text-sm text-zinc-400">Pytania, które ustawiają tor</p>

            <ul className="mt-3 space-y-2 text-sm text-zinc-300 leading-relaxed">
              <li>
                <span className="text-zinc-100 font-medium">1)</span> Co jest teraz realnym problemem?
              </li>
              <li>
                <span className="text-zinc-100 font-medium">2)</span> Co jest tylko hałasem?
              </li>
              <li>
                <span className="text-zinc-100 font-medium">3)</span> Jaki mały krok zrobię dziś, żeby było stabilniej?
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=pressure"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać i rozładować presję →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do wyboru
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Tu nie chodzi o “siłę”. Tu chodzi o odzyskanie steru.
          </p>
        </section>
      </div>
    </main>
  );
}