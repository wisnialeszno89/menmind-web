import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereFatherEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · fatherhood</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Fatherhood
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            It’s not about being perfect.  
            It’s about presence, stability, and calm boundaries.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">For today</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              15 minutes of full attention (no phone).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One activity: walk / play / build / cook together.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One boundary: no escalation today.
            </li>
          </ul>

          <Reset60 lang="en" />

          {/* ✅ TIME WITH YOUR CHILD */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Time with your child
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/en/spec/fatherhood-rituals"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Simple ideas</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Activities & rituals
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Age-based ideas you can use even when you’re tired.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/fatherhood-emergency"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Backup</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Emergency list: 10 ideas
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  When your mind is empty — pick one.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>
            </div>
          </div>

          {/* ✅ PRACTICAL / TALK */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/en/spec/law"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">Practical</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Legal / mediation
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Agreements and boundaries = less chaos.
              </p>
              <p className="mt-3 text-sm text-cyan-200">Open →</p>
            </Link>

            <Link
              href="/en/navimind?state=father"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">Talk</p>
              <p className="mt-1 font-semibold text-zinc-100">Navimind</p>
              <p className="mt-2 text-sm text-zinc-400">
                Calm, clarity, and next steps.
              </p>
              <p className="mt-3 text-sm text-cyan-200">Open →</p>
            </Link>
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
            Fatherhood wins with calm — not force.
          </p>
        </section>
      </div>
    </main>
  );
}