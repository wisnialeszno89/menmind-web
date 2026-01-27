import Link from "next/link";

export default function BrainDumpToolPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · tool</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Brain dump (3 min)
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          When your head is overloaded, you don’t need motivation.
          You need an exit from the loop.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <ol className="space-y-4 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Write down everything that’s weighing on you (no order, no filter).</li>
            <li>Underline one thing that matters most right now.</li>
            <li>
              Add one sentence:{" "}
              <span className="text-zinc-100 font-medium">
                “The smallest step today is…”
              </span>
            </li>
            <li>Do that step for 5 minutes. Now.</li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=clarity"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              I want to talk →
            </Link>

            <Link
              href="/en/tools"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to tools
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Goal: less noise. One step. One direction.
          </p>
        </section>
      </div>
    </main>
  );
}