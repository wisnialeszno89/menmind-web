import Link from "next/link";

export default function ThanksPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · wysłano</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Dzięki — wysłane ✅
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Twoja wiadomość / zgłoszenie dotarło do nas. Jeśli będzie potrzeba —
          odezwiemy się mailowo. Zwykle w 24–72h.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-sm text-zinc-400">
            Co teraz?
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              ← Wróć na start
            </Link>

            <Link
              href="/navimind?state=contact"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Porozmawiaj w czacie →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Jeśli nie zobaczysz odpowiedzi od razu — spokojnie. To nie jest bot-spam,
            tylko ręczna weryfikacja.
          </p>
        </section>
      </div>
    </main>
  );
}
