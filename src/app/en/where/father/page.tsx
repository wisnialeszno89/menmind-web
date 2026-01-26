import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereFatherPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            This is about fatherhood
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Fatherhood isn’t a “role”. It’s a relationship.
            And the stakes are real — that’s why emotions hit hard.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            What do you want to lean on today?
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span> Calm:
              what helps me not spill tension onto my child?
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Presence:
              15 minutes of full attention, no phone.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Boundaries:
              one thing I won’t agree to today.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=father"
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
            No pressure. A small step is enough.
          </p>
        </section>
      </div>
    </main>
  );
}