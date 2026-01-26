import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBrokenPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m falling apart
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            If you’re here, something inside you stopped forcing it.
            It’s hard — but it’s also a truth moment: back to basics.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Today you don’t fix your life. Today you stabilize.
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One for the body: water / food / shower / 10 min movement
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One closure: finish one small thing
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One person: reach out to someone normal (no need to explain everything)
            </li>
          </ul>

          <Reset60 lang="en" />

          {/* WHAT NEXT */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              What next?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/tools/minimum-plan"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Step by step</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Minimum plan for today
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  No pressure. Three things that keep you on track.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open tool →</p>
              </Link>

              <Link
                href="/en/partners?tag=mental"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Support</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psychologist / psychiatrist
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Not a sentence. A tool when it gets heavy.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">People</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Groups / men-to-men conversations
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  The worst move is carrying it alone.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See options →</p>
              </Link>

              <Link
                href="/en/partners?tag=addiction"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">If you start escaping</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Alcohol / substances / self-destruction
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  No preaching. Just: how not to go lower.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Explore support →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=broken"
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

          <p className="mt-6 text-xs text-zinc-500">
            If you’re in immediate danger — call your local emergency number.
          </p>
        </section>
      </div>
    </main>
  );
}