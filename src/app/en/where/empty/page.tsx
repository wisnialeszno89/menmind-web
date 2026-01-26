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
            Emptiness is often a signal of overload. We’re not fixing “meaning of life”.
            We rebuild energy and real-world contact.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Minimum for today
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              10 minutes movement (no ambition required)
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One input less: turn off what drains you
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One simple thing: water / food / shower
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
                <p className="text-sm text-zinc-400">Recovery</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Sleep reset
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Sleep is the foundation of energy.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/partners?tag=training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Energy</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Training / movement
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Not for performance. For getting yourself back.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Connection</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Groups / conversations
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Emptiness shrinks when you’re not alone in it.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
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
        </section>
      </div>
    </main>
  );
}