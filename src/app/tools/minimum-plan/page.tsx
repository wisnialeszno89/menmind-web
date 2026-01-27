import Link from "next/link";

export default function MinimumPlanToolPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · narzędzie</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Plan minimum na dziś
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Gdy życie jest ciężkie, plan “na cały tydzień” nie działa.
          Działa plan minimum.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p className="text-zinc-100 font-semibold">Dziś robisz tylko 3 rzeczy:</p>

            <ul className="space-y-2">
              <li>
                <span className="text-cyan-200 font-medium">1)</span> Jedno dla ciała
                <span className="text-zinc-400"> (sen / jedzenie / ruch)</span>
              </li>
              <li>
                <span className="text-cyan-200 font-medium">2)</span> Jedno dla porządku
                <span className="text-zinc-400"> (mała rzecz domknięta)</span>
              </li>
              <li>
                <span className="text-cyan-200 font-medium">3)</span> Jedno dla sensu
                <span className="text-zinc-400"> (najmniejszy krok naprzód)</span>
              </li>
            </ul>

            <p className="text-sm text-zinc-400">
              To wystarczy, żeby nie zjechać z toru.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=minimum"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Pomóż mi to ułożyć →
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do narzędzi
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Minimalny plan to nie porażka. To strategia przetrwania i odbudowy.
          </p>
        </section>
      </div>
    </main>
  );
}