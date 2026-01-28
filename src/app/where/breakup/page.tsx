import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBreakupPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · rozstanie</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem po rozstaniu
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            To normalne, że miesza Ci się w głowie. Dziś nie wygrywasz dyskusji —
            dziś odzyskujesz ster.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Na dziś</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Nie podejmuj dziś wielkich decyzji.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jeśli ciągnie do kontaktu — odczekaj 20 minut.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedna rzecz dla ciała: spacer / prysznic / jedzenie.
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Co teraz ma sens?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/navimind?state=breakup"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Najpierw</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Navimind (wygadaj się)
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Uspokój głowę i ustaw kierunek.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/spec/trening"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Reset</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Trening / ruch
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Wyłącz pętlę w głowie przez ciało.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link
                href="/spec/grupy"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Ludzie</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Grupy wsparcia
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Nie musisz tego nieść sam.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć na start
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}