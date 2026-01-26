import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBreakupPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m coming from a breakup
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Breakups can grind your mind and body. Today the goal is simple:
            stay stable and avoid destructive moves.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            For today
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Don’t make big decisions today.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              If you want to text/check: wait 20 minutes.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One body action: walk / shower / food.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What next? (pick 1)
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/tools/sleep-reset"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Evening</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Sleep reset
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  So tomorrow doesn’t get worse.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">People</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Groups / private conversations
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Don’t carry it alone.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/partners?tag=mental"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">If it floods you</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychologist / psychiatrist (support)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Not shameful — smart protection from a deeper fall.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=breakup"
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
        </section>
      </div>
    </main>
  );
}