import Link from "next/link";

export default function ContactEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · contact</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Contact
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Contact details will be available in the next update.
          For now we’re finalizing the form system.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-sm text-zinc-400">
            If it’s urgent:
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Talk in chat →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Next update: full contact form + clear general contact.
          </p>
        </section>
      </div>
    </main>
  );
}