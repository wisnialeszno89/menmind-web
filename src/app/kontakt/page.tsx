import Link from "next/link";

export default function ContactPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · kontakt</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Kontakt
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Kontakt będzie dostępny w pełnej wersji w najbliższym update.
          Na razie dopracowujemy system formularzy.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-sm text-zinc-400">
            Jeśli to pilne:
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Porozmawiaj w czacie →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć na start
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Później dodamy formularz + czytelny kontakt ogólny.
          </p>
        </section>
      </div>
    </main>
  );
}