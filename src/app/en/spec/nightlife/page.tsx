import Link from "next/link";

export default function SpecNightlifeEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · community</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Clubs / bars / nightlife
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Sometimes the best move is not more analysis — it’s leaving the house
            and switching environment.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Nightlife partners (coming soon)
          </h2>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            A verified list of places and partners will appear here (clubs,
            events, tickets, local communities). No spam. No random ads.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <p className="text-sm text-zinc-300">✅ Manual verification</p>
            <p className="mt-2 text-sm text-zinc-500">
              Only places aligned with MenMind vibe: safe, solid, and not toxic.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/partnership"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Apply as partner →
            </Link>

            <Link
              href="/en/where/ready"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back (ready)
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/40 px-4 py-2 text-sm font-semibold text-zinc-300 ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
            >
              Home →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            This is about rebuilding social life — not escaping into chaos.
          </p>
        </section>
      </div>
    </main>
  );
}