import Link from "next/link";

const IDEAS = [
  "Walk + ice cream",
  "15-minute board game (Uno / Dobble / checkers)",
  "Home obstacle course (pillows + blanket)",
  "Cook together (eggs / pancakes)",
  "Bike / football / basketball",
  "Build a blanket fort",
  "Shop / theater / role play",
  "Wash the car together",
  "Drawing: “draw me as a hero”",
  "Movie + one question: “what was the best part?”",
];

export default function FatherhoodEmergencyEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · fatherhood</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Emergency list: 10 ideas
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            When your mind is empty — pick one. No overthinking.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <ul className="space-y-3 text-zinc-300 leading-relaxed">
            {IDEAS.map((x, i) => (
              <li key={x} className="flex gap-3">
                <span className="text-zinc-500">{i + 1}.</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/en/spec/fatherhood-rituals"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              ← Back to rituals
            </Link>

            <Link
              href="/en/where/father"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Fatherhood →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            10 minutes of presence beats 2 hours “next to a phone”.
          </p>
        </section>
      </div>
    </main>
  );
}