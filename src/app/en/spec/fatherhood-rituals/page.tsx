import Link from "next/link";

export default function FatherhoodRitualsEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · fatherhood</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Rituals & activities with your child
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Many dads “don’t know what to do”. That’s fine. Here are simple
            repeatable ideas. Most important: 10–20 minutes and no phone.
          </p>
        </header>

        {/* AGE 1–3 */}
        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Age 1–3</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Presence + your voice + repetition wins.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Idea</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Pillow obstacle course
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Couch + blanket + pillows = mini Olympics. 5 minutes, big smiles.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Ritual</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “3 minutes of 100% dad”
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Phone away. 3 minutes of full attention. No teaching. No fixing.
                Just connection.
              </p>
            </div>
          </div>
        </section>

        {/* AGE 3–6 */}
        <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Age 3–6</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Roles + laughter + simple rules.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Idea</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Shop / restaurant game
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                You’re the customer. They’re the seller. Pick 3 “items”. Always works.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Ritual</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “Daily mission” (10 minutes)
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                One mission: helper, chef, firefighter, super-cleanup. Finish with a high five.
              </p>
            </div>
          </div>
        </section>

        {/* AGE 7–12 */}
        <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Age 7–12</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Projects, competition and doing real things together.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Idea</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Mini dad project (30–60 min)
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Bike, car wash, cooking, building something simple. They feel important and capable.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Ritual</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “Dad hour” once a week
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Fixed time. Sport / board game / going out. No cancellations “because work”.
              </p>
            </div>
          </div>
        </section>

        {/* AGE 13–15 */}
        <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Age 13–15</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Respect, calm and presence without interrogation.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Idea</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Walk / car ride / coffee
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Best talks happen side-by-side. One question. The rest comes naturally.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Ritual</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “One topic, calm energy”
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                No lectures. No pushing. One topic at a time + “I’m here”.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/en/spec/fatherhood-emergency"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Emergency list: 10 ideas →
          </Link>

          <Link
            href="/en/where/father"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Back (fatherhood)
          </Link>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          Best ritual: same time + 10 minutes + no phone.
        </p>
      </div>
    </main>
  );
}