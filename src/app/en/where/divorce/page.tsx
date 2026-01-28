import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereDivorcePageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m going through a divorce
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Divorce hurts — but chaos will cost you more. Calm down, get the
            legal basics right, protect yourself and your child. Pick one step
            for today and move.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">For today</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              No long texts. Keep communication minimal and calm.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One “paper” move: date / document / note / next step.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One body reset: walk / shower / food / sleep.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">Suggestions</h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/en/suggestions?state=divorce"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Step by step</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Divorce: legal / support / groups (all options)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Clean list. No fluff. Just directions that help.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Enter →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=divorce"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Talk now →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Divorce is a process. Your job is to regain calm and control.
          </p>
        </section>
      </div>
    </main>
  );
}