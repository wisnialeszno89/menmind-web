import Link from "next/link";

export default function WhereReadyPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m ready to move forward
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            If you’re here, it means you want movement — not more waiting.
            This is the best time for a small, real step.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 steps for today (no overthinking)
          </h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Pick 1 thing you finish today (small but real).</li>
            <li>Do 20 minutes of simple consistency — no analysis.</li>
            <li>Set one boundary: what you won’t do today (scroll, chaos, drama).</li>
          </ol>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/partners?tag=trips"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">For men</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Trips / expeditions / outdoors
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Change environment + movement + people. No pressure.
              </p>
              <p className="mt-3 text-sm text-cyan-200">See partners →</p>
            </Link>

            <Link
              href="/partners?tag=training"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">For the body</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Training / martial arts
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Discipline and confidence return faster than you think.
              </p>
              <p className="mt-3 text-sm text-cyan-200">See partners →</p>
            </Link>
          </div>

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
            Ready = movement. Not perfection.
          </p>
        </section>
      </div>
    </main>
  );
}