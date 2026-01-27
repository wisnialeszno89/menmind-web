import Link from "next/link";
import { Suspense } from "react";

function Content() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · wsparcie</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Psychologowie
          </h1>

          <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
            To kierunek, kiedy chcesz pogadać, złapać klarowność i zacząć wracać do stabilności.
            Bez wstydu. Bez etykiet.
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            Tryb: <span className="text-zinc-200 font-medium">Online</span>
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <h2 className="text-lg font-semibold text-zinc-100">
              Lista specjalistów (wkrótce)
            </h2>

            <p className="mt-2 text-base text-zinc-300 leading-relaxed">
              Jeszcze nie mamy publicznej listy zweryfikowanych psychologów.
              Najpierw robimy jakość, dopiero potem ilość.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/navimind?state=broken"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
              >
                Chcę pogadać →
              </Link>

              <Link
                href="/partnerstwo"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
              >
                Zgłoś specjalistę →
              </Link>
            </div>

            <p className="mt-5 text-sm text-zinc-500">
              Docelowo: profile + weryfikacja + filtr miasta (gdy będzie miało sens).
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/propozycje?state=broken"
              className="text-sm text-cyan-200 hover:text-cyan-100 transition"
            >
              ← Wróć do Propozycji
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function PsychologowiePage() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}