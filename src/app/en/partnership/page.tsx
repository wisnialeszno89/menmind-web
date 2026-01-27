import Link from "next/link";

export default function PartnershipEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · partnership</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Partner application
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          If you offer real value for men (trips, training, support, legal, community) —
          you can apply here. No spam. Only useful offers.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Partner form
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            This form supports file upload (PDF / offer / links).
          </p>

          <div className="mt-6 w-full h-[70vh] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/30">
            <iframe
              title="Partner form"
              // ✅ REPLACE WITH YOUR TALLY/TYPEFORM LINK
              src="https://tally.so/r/XXXXXXXX"
              className="w-full h-full border-0"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/partners"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back to partners
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Home →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Applications are reviewed manually. Not everything gets published.
          </p>
        </section>
      </div>
    </main>
  );
}