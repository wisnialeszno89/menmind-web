import Link from "next/link";

export default function BrainDumpToolPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · narzędzie</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Zrzut z głowy (3 min)
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Gdy masz chaos w głowie, nie potrzebujesz motywacji.
          Potrzebujesz wyjścia z pętli.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <ol className="space-y-4 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>
              Wypisz wszystko, co Cię męczy (bez cenzury, bez kolejności).
            </li>
            <li>
              Podkreśl 1 rzecz, która waży najbardziej.
            </li>
            <li>
              Dopisz jedno zdanie:{" "}
              <span className="text-zinc-100 font-medium">
                “Najmniejszy krok dziś to…”
              </span>
            </li>
            <li>
              Zrób ten krok teraz przez 5 minut.
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=clarity"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać →
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do narzędzi
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Cel: mniej hałasu. Jeden krok. Jeden kierunek.
          </p>
        </section>
      </div>
    </main>
  );
}