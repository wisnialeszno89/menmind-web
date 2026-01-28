import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WherePressureEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · pressure</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m under pressure
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Pressure is not weakness — it’s overload.  
            First regulation, then a simple plan.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">For today</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li><span className="text-cyan-200 font-medium">•</span> One sentence: “The pressure is from…”</li>
            <li><span className="text-cyan-200 font-medium">•</span> Remove one stimulus (noise, scrolling, drama).</li>
            <li><span className="text-cyan-200 font-medium">•</span> 10 minutes of movement.</li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What makes sense now?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/navimind?state=pressure"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Direction</p>
                <p className="mt-1 font-semibold text-zinc-100">Navimind</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Prioritize and get back on track.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Reset</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Movement / training
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Reduce stress faster than analysis.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/spec/psychologists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Support</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychologist (if it lasts too long)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Structure and stabilization — no drama.
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
        </section>
      </div>
    </main>
  );
}