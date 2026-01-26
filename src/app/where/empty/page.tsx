import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereEmptyPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Czuję pustkę i wypalenie
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Pustka to często sygnał przeciążenia. Nie naprawiamy sensu życia.
            Przywracamy energię i kontakt z rzeczywistością.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Minimum na dziś
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              10 minut ruchu (bez ambicji)
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              1 rzecz mniej: wyłącz bodziec, który Cię mieli
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              1 rzecz prosta: jedzenie / woda / prysznic
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Co dalej? (wybierz 1)
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/tools/sleep-reset"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Regeneracja</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Reset snu
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Sen jest fundamentem energii.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/partners?tag=training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Energia</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Trening / ruch
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Nie dla formy. Dla powrotu do siebie.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link
                href="/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Kontakt</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Grupy / rozmowy z innymi
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Pustka maleje, gdy nie jesteś w tym sam.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=empty"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do wyboru
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}