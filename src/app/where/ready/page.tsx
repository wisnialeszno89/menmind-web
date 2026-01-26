import Link from "next/link";

export default function WhereReadyPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · stan</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Mam presję i wkurw
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Złość bywa mądra. Ona często mówi: “granice zostały przekroczone”.
            Problem zaczyna się dopiero wtedy, gdy zaczynasz nią palić siebie.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Reset ciśnienia w 5 minut
          </h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Wydech dłuższy niż wdech (10 razy).</li>
            <li>Napnij całe ciało na 5 sekund i puść (5 razy).</li>
            <li>Zapisz jedno zdanie: “Wkurwia mnie to, że…”</li>
            <li>Jedna decyzja: co zrobię dziś, żeby odzyskać ster?</li>
          </ol>

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
            Złość nie jest problemem. Problemem jest brak kierunku.
          </p>
        </section>
      </div>
    </main>
  );
}