import Link from "next/link";

export default function SpecKlubyPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · społeczność</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Kluby / bary / imprezy
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Czasem najlepszym ruchem nie jest kolejna analiza — tylko wyjście do
            ludzi i zmiana otoczenia.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Partnerzy klubowi (wkrótce)
          </h2>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
            Tu pojawi się lista sprawdzonych miejsc i partnerów (kluby, eventy,
            bilety, lokalne inicjatywy). Bez spamu i bez przypadkowych reklam.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <p className="text-sm text-zinc-300">
              ✅ Weryfikacja ręczna
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Publikujemy tylko miejsca, które pasują do klimatu MenMind:
              bezpiecznie, konkretnie, bez patologii.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/partnerstwo"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Zgłoś partnera →
            </Link>

            <Link
              href="/where/ready"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć (gotowy)
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/40 px-4 py-2 text-sm font-semibold text-zinc-300 ring-1 ring-zinc-800 hover:bg-zinc-800 transition"
            >
              Start →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            To ma być opcja na odbudowę życia społecznego — nie ucieczka w chaos.
          </p>
        </section>
      </div>
    </main>
  );
}