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
            Divorce is emotions + decisions that stay for years. First stability,
            then legal moves. No chaos.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Right now</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Don’t escalate the conflict with messages and calls.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Write down facts: dates, agreements, costs (no interpretations).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One thing for your body: sleep / walk / food.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Suggestions (practical)
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/en/spec/law"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Priority</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Lawyers / mediation
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Custody, finances, agreements. Paperwork brings peace.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/psychologists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Stability</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Psychologist
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  So you don’t make decisions purely from emotions.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/groups"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Don’t be alone</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Support groups
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Men after divorce. No explaining needed.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/psychiatrists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">When it’s too much</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Psychiatrist
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  When sleep collapses and symptoms are too strong.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=divorce"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              I want to talk →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Divorce is a process. Your goal is to go through it calmly and smart.
          </p>
        </section>
      </div>
    </main>
  );
}