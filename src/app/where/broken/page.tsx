import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBrokenPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem w środku rozsypki
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Jeśli jesteś tutaj, to znaczy, że coś w Tobie już nie ciągnie na siłę.
            To trudne, ale to też moment prawdy: wracamy do podstaw.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Dziś nie naprawiasz życia. Dziś stabilizujesz.
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedno dla ciała: woda / jedzenie / prysznic / 10 min ruchu
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedno domknięcie: mała rzecz, którą kończysz
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedna osoba: odezwij się do kogoś normalnego (nie musisz tłumaczyć wszystkiego)
            </li>
          </ul>

          <Reset60 lang="pl" />

          {/* CO DALEJ */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Co dalej?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/tools/minimum-plan"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Krok po kroku</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Plan minimum na dziś
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Bez presji. Trzy rzeczy, które utrzymają Cię na torze.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz narzędzie →</p>
              </Link>

              <Link
                href="/partners?tag=mental"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Wsparcie</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psycholog / psychiatra
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  To nie wyrok. To narzędzie, kiedy robi się ciężko.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>

              <Link
                href="/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Ludzie</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Grupy / rozmowy z innymi facetami
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Najgorsze co możesz zrobić to zostać z tym sam.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>

              <Link
                href="/partners?tag=addiction"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Gdy ciągnie w używki</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Alkohol / ucieczki / autodestrukcja
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Bez moralizowania. Po prostu: jak nie polecieć w dół.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz wsparcie →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=broken"
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

          <p className="mt-6 text-xs text-zinc-500">
            Jeśli jesteś w zagrożeniu życia lub zdrowia — dzwoń 112.
          </p>
        </section>
      </div>
    </main>
  );
}