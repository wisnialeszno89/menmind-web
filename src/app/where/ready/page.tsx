import Link from "next/link";

export default function WhereReadyPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem gotowy iść dalej
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Jeśli tu jesteś, to znaczy, że chcesz ruchu — nie kolejnego
            “przeczekania”. To najlepszy moment na mały, realny krok.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 kroki na dziś (bez rozkmin)
          </h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Wybierz 1 rzecz, którą kończysz dziś (małą, ale realną).</li>
            <li>Zrób 20 minut “prostej konsekwencji” — bez analizowania.</li>
            <li>Ustal jedną granicę: czego dziś nie robisz (scroll, chaos, drama).</li>
          </ol>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/partners?tag=trips"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">Opcja dla facetów</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Wyjazdy / wyprawy / outdoor
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Zmiana otoczenia + ruch + ludzie. Bez presji.
              </p>
              <p className="mt-3 text-sm text-cyan-200">
                Zobacz polecanych →
              </p>
            </Link>

            <Link
              href="/partners?tag=training"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">Opcja dla ciała</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Trening / sporty walki
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Dyscyplina i pewność wracają szybciej niż myślisz.
              </p>
              <p className="mt-3 text-sm text-cyan-200">
                Zobacz polecanych →
              </p>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=ready"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do wyboru
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Gotowość = ruch. Nie perfekcja.
          </p>
        </section>
      </div>
    </main>
  );
}