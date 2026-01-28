import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereReadyEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · ready</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Ready for change
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Ready = movement. No overthinking. Today is a step forward.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">3 steps for today</h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Pick one small but real thing you finish today.</li>
            <li>Do 20 minutes of consistency — no analysis.</li>
            <li>Set one boundary: what you won’t do today (drama, chaos, scrolling).</li>
          </ol>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What makes sense now?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/spec/trips"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Start</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Trips / outdoor
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  New environment = fresh energy.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/spec/training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Form</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Training / sport
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Consistency builds calm fast.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              {/* ✅ Nightlife ONLY here + breakup */}
              <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 sm:col-span-2">
                <p className="text-sm text-zinc-400">People</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Clubs / bars / nightlife (coming soon)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  New environment and social contact. Partners in preparation.
                </p>
                <p className="mt-3 text-sm text-zinc-500">
                  Verified partners coming soon.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=ready"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Talk now →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}