import Link from "next/link";
import { Suspense } from "react";

function Content() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · conversation</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Relationship conflict
          </h1>

          <p className="mt-3 text-zinc-300 leading-relaxed">
            <span className="text-zinc-200 font-medium">Fights and tension</span> are often not “the end”,
            but a repeating pattern you can break — when you calm down first and communicate clearly.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Calm first. Decisions later. No pressure.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 simple rules for right now
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="font-medium text-zinc-100">
                1) One issue at a time
              </p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                Don’t try to solve the entire relationship in one conversation. Pick one thing to improve today.
              </p>
            </li>

            <li className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="font-medium text-zinc-100">
                2) Regulate the tension first
              </p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                If your body is tense, a 10-minute pause helps more than forcing the next sentence.
              </p>
            </li>

            <li className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="font-medium text-zinc-100">
                3) Describe, don’t accuse
              </p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                “I feel pressure and I shut down” works better than “You always…”.
              </p>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <h3 className="text-base font-semibold text-zinc-100">
              Start the conversation (no blank mind)
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/en/navimind?state=relationship"
                className="rounded-xl bg-cyan-500/15 px-4 py-3 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
              >
                Help me break the fight pattern and get back to calm →
              </Link>

              <Link
                href="/en/navimind?state=relationship"
                className="rounded-xl bg-zinc-900/40 px-4 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
              >
                Rewrite what I want to say — calm and clear →
              </Link>

              <Link
                href="/en/navimind?state=relationship"
                className="rounded-xl bg-zinc-900/40 px-4 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
              >
                Is this a fixable crisis or a serious red flag? →
              </Link>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Private conversation. Leave anytime.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=relationship"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-5 py-3 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Enter chat →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-5 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to start
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function RelationshipConflictPageEN() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}