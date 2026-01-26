export default function AboutPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">Waypoint · about</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Why <span className="text-cyan-300">Waypoint</span> exists
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            For moments when old ways stop working, and new ones haven’t appeared yet.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              Waypoint exists for a simple reason: many men reach a point where old strategies
              no longer work, and new ones haven’t arrived yet.
            </p>

            <p>
              It’s not always a crisis. Sometimes it’s a breakup. Sometimes emptiness.
              Sometimes you’re just tired of fighting.
            </p>

            <p>
              In those moments the internet usually offers two extremes:
              shallow motivational quotes — or labeling and diagnosing.
            </p>

            <p className="text-zinc-100 font-medium">
              Waypoint does neither.
            </p>

            <p>
              It’s not therapy. It’s not a “how to live” guide.
              It’s not a place that tells you who you must become.
            </p>

            <p>
              Waypoint is a marker. A pause. A moment to see where you are — without judgment.
            </p>

            <p>
              What happens next is always your choice:
              talk, move, or simply leave.
            </p>

            <p className="text-zinc-100 font-medium">
              And that’s okay too.
            </p>
          </div>

          <div className="mt-10 border-t border-zinc-800/70 pt-6">
            <p className="text-sm text-zinc-400">
              No accounts. No tracking. No saved conversations.
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Waypoint respects privacy, because without it there is no trust.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}