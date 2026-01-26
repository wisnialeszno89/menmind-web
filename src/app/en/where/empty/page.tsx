import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereEmptyPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I feel empty / burned out
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Emptiness can look like “nothing”, but often it’s your system saying:
            too much, too long, without recovery.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Minimum rebuild (for today)
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span> One thing for your body:
              sleep / shower / food / walk.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> One thing for your mind:
              fewer inputs, more silence.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> One thing for meaning:
              a small step that matters.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=empty"
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
            You don’t have to feel good. One small move is enough.
          </p>
        </section>
      </div>
    </main>
  );
}