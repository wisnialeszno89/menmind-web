import Link from "next/link";

export default function SleepResetToolPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · tool</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Sleep reset (evening)
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          If the night grinds you down, tomorrow gets harder too.
          Do a short reset — not a perfect one.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <ol className="space-y-4 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Put your phone away for 10 minutes (that’s enough).</li>
            <li>Water + something light if you’re depleted.</li>
            <li>Lower the lights. Slow down. Reduce input.</li>
            <li>
              Write one sentence:{" "}
              <span className="text-zinc-100 font-medium">
                “Tomorrow I start with…”
              </span>
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=sleep"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              I want to talk →
            </Link>

            <Link
              href="/en/tools"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to tools
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            You don’t fix life at night. At night you lower the pressure.
          </p>
        </section>
      </div>
    </main>
  );
}