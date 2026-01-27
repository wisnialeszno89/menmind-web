import Link from "next/link";

export default function MinimumPlanToolPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · tool</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Minimum plan for today
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          When life is heavy, a “perfect weekly plan” doesn’t work.
          The minimum plan does.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p className="text-zinc-100 font-semibold">
              Today you only do 3 things:
            </p>

            <ul className="space-y-2">
              <li>
                <span className="text-cyan-200 font-medium">1)</span> One for your body
                <span className="text-zinc-400"> (sleep / food / movement)</span>
              </li>
              <li>
                <span className="text-cyan-200 font-medium">2)</span> One for order
                <span className="text-zinc-400"> (close one small loop)</span>
              </li>
              <li>
                <span className="text-cyan-200 font-medium">3)</span> One for meaning
                <span className="text-zinc-400"> (small step forward)</span>
              </li>
            </ul>

            <p className="text-sm text-zinc-400">
              That’s enough to stay on track.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=minimum"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Help me set it up →
            </Link>

            <Link
              href="/en/tools"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to tools
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Minimum plan isn’t failure. It’s a smart survival strategy.
          </p>
        </section>
      </div>
    </main>
  );
}