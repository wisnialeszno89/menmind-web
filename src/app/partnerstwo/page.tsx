import Link from "next/link";

export default function PartnershipPL() {
  const formUrl = process.env.NEXT_PUBLIC_PARTNER_FORM_URL_PL ?? "";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · partnerstwo</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Zgłoszenie partnera
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Jeśli oferujesz realną wartość dla facetów (wyjazdy, trening, wsparcie,
          prawo, społeczność) — możesz się zgłosić. Zero spamu. Tylko konkret.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Formularz partnera
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Podaj nazwę, opis, linki i miasto/online. Jeśli masz PDF/ofertę —
            dorzuć. Im konkretniej, tym szybciej przejdzie weryfikacja.
          </p>

          {!formUrl ? (
            <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-300">
                Formularz nie jest jeszcze podpięty.
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Ustaw{" "}
                <span className="text-zinc-200 font-medium">
                  NEXT_PUBLIC_PARTNER_FORM_URL_PL
                </span>{" "}
                w .env i wróć tutaj.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
                >
                  ← Wróć do partnerów
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Strona główna →
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-6 w-full h-[70vh] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/30">
                <iframe
                  title="Partner form"
                  src={formUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allow="clipboard-write; fullscreen"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
                >
                  ← Wróć do partnerów
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Strona główna →
                </Link>
              </div>

              <p className="mt-6 text-xs text-zinc-500">
                Weryfikujemy zgłoszenia ręcznie. Nie publikujemy wszystkiego.
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}