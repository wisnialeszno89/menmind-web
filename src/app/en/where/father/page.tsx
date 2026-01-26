import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereFatherPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            This is about fatherhood
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Fatherhood isn’t a “role”. It’s a relationship — and that’s why the
            emotions can hit hard. This isn’t about being perfect. It’s about
            being present and stable.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            What do you want to lean on today?
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Pick one direction. The rest can wait.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="text-sm text-zinc-400">Calm</p>
              <p className="mt-1 text-zinc-200 leading-relaxed">
                What can I do so I don’t spill my tension onto my child?
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Tip: “quieter and slower” often beats “stronger”.
              </p>
            </div>

            <Link
              href="/partners?tag=fatherhood"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">Presence</p>
              <p className="mt-1 font-semibold text-zinc-100">
                15 minutes of full attention
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                No phone. A simple ritual that builds connection.
              </p>
              <p className="mt-3 text-sm text-cyan-200">
                Explore ideas / support →
              </p>
            </Link>

            <Link
              href="/partners?tag=co-parenting"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
            >
              <p className="text-sm text-zinc-400">Boundaries</p>
              <p className="mt-1 font-semibold text-zinc-100">
                One thing I won’t agree to today
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Agreements, communication, a calm “no”. No war, no blame game.
              </p>
              <p className="mt-3 text-sm text-cyan-200">
                See support / recommended partners →
              </p>
            </Link>
          </div>

          <Reset60 lang="en" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=father"
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
            No accounts. No judgment. No saved conversations.
          </p>
        </section>
      </div>
    </main>
  );
}