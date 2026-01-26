import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WherePressurePageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m under pressure and I need direction
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Pressure can come from many sides: work, money, relationships, family.
            This isn’t weakness. It’s overload. First we calm the system, then we plan.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Regulation first. Decisions second.
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span> One sentence:
              <span className="text-zinc-200"> “The pressure is coming from…”</span>
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> One thing you can
              <span className="text-zinc-200"> drop today</span>
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> One body move:
              walk / shower / stretching
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <p className="text-sm text-zinc-400">Questions that bring clarity</p>

            <ul className="mt-3 space-y-2 text-sm text-zinc-300 leading-relaxed">
              <li>
                <span className="text-zinc-100 font-medium">1)</span> What is the real problem right now?
              </li>
              <li>
                <span className="text-zinc-100 font-medium">2)</span> What is just noise?
              </li>
              <li>
                <span className="text-zinc-100 font-medium">3)</span> What small step can I take today to feel steadier?
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=pressure"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              I want to talk & release pressure →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to choices
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            This isn’t about “being tough”. It’s about getting the wheel back.
          </p>
        </section>
      </div>
    </main>
  );
}