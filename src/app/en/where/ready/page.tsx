import Link from "next/link";

export default function WhereReadyPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m under pressure & angry
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Anger can be intelligent. It often says: “a boundary was crossed”.
            The problem starts when you start burning yourself with it.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            5-minute pressure reset
          </h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Exhale longer than inhale (10 rounds).</li>
            <li>Tense your whole body for 5 sec, release (5 rounds).</li>
            <li>Write one line: “I’m angry because…”</li>
            <li>Choose one action to regain control today.</li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=ready"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              I want to talk →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to choices
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Anger isn’t the problem. Lack of direction is.
          </p>
        </section>
      </div>
    </main>
  );
}