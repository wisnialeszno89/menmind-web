import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBrokenPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m falling apart
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            If you feel broken, it doesn’t mean you’re weak.
            It usually means you’ve been pushing for too long.
            Now your body and mind are forcing a pause.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 things for today (minimum mode)
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">1)</span> Food + water.
              Basic — but without fuel everything feels worse.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">2)</span> 10 minutes of movement.
              Walk, shower, anything that shifts your state.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">3)</span> Close one small loop.
              One. Not “fix your life”, just one brick.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=broken"
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
            No accounts. No judgment. No saved conversations.
          </p>
        </section>
      </div>
    </main>
  );
}