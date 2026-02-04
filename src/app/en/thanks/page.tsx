import Link from "next/link";

export default function ThanksEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · sent</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Thanks — sent ✅
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Your message / application has been delivered. If it’s a good fit,
          we’ll reach out by email. Usually within 24–72 hours.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-sm text-zinc-400">
            What now?
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              ← Back home
            </Link>

            <Link
              href="/en/navimind?state=contact"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Talk in chat →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            If you don’t get a reply immediately — all good. Applications are reviewed manually.
          </p>
        </section>
      </div>
    </main>
  );
}
