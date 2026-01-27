import Link from "next/link";
import { Suspense } from "react";

function Content() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · support</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Training / movement
          </h1>

          <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
            The fastest reset for the mind is the body. Even 20–30 minutes of movement
            can calm the nervous system and cut the thought spiral.
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            Mode: <span className="text-zinc-200 font-medium">Online</span>
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <h2 className="text-lg font-semibold text-zinc-100">
              Options list (coming soon)
            </h2>

            <p className="mt-2 text-base text-zinc-300 leading-relaxed">
              Soon: curated training options, coaches, simple plans — no fitness drama.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/en/navimind?state=pressure"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
              >
                Calm your mind first →
              </Link>

              <Link
                href="/en/partnership"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
              >
                Submit a partner →
              </Link>
            </div>

            <p className="mt-5 text-sm text-zinc-500">
              Small list. High quality.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/en/suggestions?state=pressure"
              className="text-sm text-cyan-200 hover:text-cyan-100 transition"
            >
              ← Back to Suggestions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function TrainingPageEN() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}