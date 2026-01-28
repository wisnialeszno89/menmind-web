import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBreakupEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · breakup</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            After a breakup
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            It’s normal if your head is messy right now. Today you’re not trying
            to “win” anything — you’re getting back in control.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">For today</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Don’t make big decisions today.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              If you want to message/check them — wait 20 minutes.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Do one thing for your body: walk / shower / food.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What makes sense now?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/navimind?state=breakup"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">First</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Navimind (talk it out)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Calm your mind and set direction.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Reset</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Training / movement
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Turn off the mental loop through your body.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/spec/community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">People</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Support groups
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  You don’t have to carry this alone.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/suggestions"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Map</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  All suggestions
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Full list of tools and directions.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              {/* ✅ Nightlife ONLY here + READY */}
              <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 sm:col-span-2">
                <p className="text-sm text-zinc-400">Optional</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Clubs / bars / nightlife (coming soon)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Social contact and a new environment — without pressure.
                </p>
                <p className="mt-3 text-sm text-zinc-500">
                  Partners in preparation.
                </p>
              </div>
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
            A breakup is a phase, not your identity. Today = stabilization.
          </p>
        </section>
      </div>
    </main>
  );
}