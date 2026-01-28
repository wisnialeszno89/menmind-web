import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBrokenEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · crisis</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m in crisis
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            This is not the moment for “motivation”.  
            This is the moment to save the basics.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Minimum for today</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li><span className="text-cyan-200 font-medium">•</span> Water + some food.</li>
            <li><span className="text-cyan-200 font-medium">•</span> Shower or 5 minutes of movement.</li>
            <li><span className="text-cyan-200 font-medium">•</span> One small closure: one small task finished.</li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What makes sense now?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/navimind?state=broken"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">First</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Navimind (first aid)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Stop the chaos and get direction.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/psychiatrists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Priority</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychiatrist (support)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  When sleep collapses and symptoms are too strong.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/spec/psychologists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Support</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychologist (stabilization)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Talk, structure and coming back to basics.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
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
            If it becomes dangerous — don’t wait. Help is a tool.
          </p>
        </section>
      </div>
    </main>
  );
}