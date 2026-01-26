import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBreakupPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · state</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            I’m coming from a breakup
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            A breakup can flip everything: sleep, appetite, meaning, identity.
            That’s not “overreacting”. That’s a real nervous system response.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Today you don’t have to win. You have to get through.
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span> Don’t make big decisions
              at peak emotion.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Do one stabilizing thing:
              food / walk / clean one corner.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Don’t isolate completely.
              One message to one person is enough.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=breakup"
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