import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereReadyPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · gotowość</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem po przejściach, ale gotowy
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Gotowość = ruch. Bez rozkmin. Dziś robimy krok do przodu.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">3 kroki na dziś</h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Wybierz 1 rzecz, którą kończysz dziś (małą, ale realną).</li>
            <li>Zrób 20 minut konsekwencji — bez analizowania.</li>
            <li>Ustal 1 granicę: czego dziś nie robisz (scroll, drama, chaos).</li>
          </ol>

          <Reset60 lang="pl" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">Co teraz ma sens?</h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/spec/wyjazdy" className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition">
                <p className="text-sm text-zinc-400">Start</p>
                <p className="mt-1 font-semibold text-zinc-100">Wyjazdy / outdoor</p>
                <p className="mt-2 text-sm text-zinc-400">Zmiana otoczenia = świeża energia.</p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link href="/spec/trening" className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition">
                <p className="text-sm text-zinc-400">Forma</p>
                <p className="mt-1 font-semibold text-zinc-100">Trening / sport</p>
                <p className="mt-2 text-sm text-zinc-400">Powtarzalność daje spokój.</p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              {/* ✅ Nightlife tylko tutaj i breakup */}
              <Link href="/propozycje" className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2">
                <p className="text-sm text-zinc-400">Ludzie</p>
                <p className="mt-1 font-semibold text-zinc-100">Kluby / bary / imprezy (wkrótce)</p>
                <p className="mt-2 text-sm text-zinc-400">Nowe środowisko i kontakt z ludźmi. Partnerzy w przygotowaniu.</p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/navimind?state=ready" className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition">
              Chcę pogadać →
            </Link>

            <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition">
              ← Wróć na start
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}