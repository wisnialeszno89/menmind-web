import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereEmptyPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I feel empty and burned out
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Emptiness isn’t “laziness”. Often it’s your system saying:{" "}
            <span className="text-zinc-100 font-medium">“too much for too long”</span>.
            We rebuild energy, not pressure.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Your minimum for today
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Basic care: water + food + 10 minutes movement
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One less input: turn off something that drains you
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One small “yes”: something simple that gives you air
            </li>
          </ul>

          <Reset60 lang="en" />

          {/* WHAT NEXT */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What next?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/tools/sleep-reset"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Recovery</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Sleep reset (evening)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  If sleep collapses, everything collapses. Fix the night first.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open tool →</p>
              </Link>

              <Link
                href="/en/partners?tag=training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Energy</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Training / movement / discipline
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Not for records. For getting yourself back.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Connection</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Groups / men-to-men conversations
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Emptiness grows in silence. People shrink it.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/partners?tag=mental"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">If it won’t lift</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychologist / psychiatrist (support)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  If it keeps dragging on — don’t carry it alone.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>
            </div>
          </div>

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
            Emptiness doesn’t mean the end. Sometimes it means: it’s time to restart.
          </p>
        </section>
      </div>
    </main>
  );
}