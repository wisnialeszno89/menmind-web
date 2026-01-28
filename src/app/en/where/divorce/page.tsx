import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereDivorceEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · divorce</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Going through a divorce
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Divorce hurts — but chaos costs the most.  
            First calm. Then decisions and paperwork.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">For today</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Write down 3 urgent things (not 30).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Protect one key area: child / money / communication.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              No emotional fights. Paperwork beats nerves.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What makes sense now?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/spec/law"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Priority</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Legal / mediation
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Agreements, custody, protection and clarity.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/navimind?state=divorce"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Calm</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Navimind (clear your head)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  A plan instead of chaos.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/psychologists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Stability</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychologist (support)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  When emotions flood and sleep drops.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/spec/community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Not alone</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Support groups
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  People who actually understand.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Divorce is a process. The goal is to walk through it smart, not bloody.
          </p>
        </section>
      </div>
    </main>
  );
}