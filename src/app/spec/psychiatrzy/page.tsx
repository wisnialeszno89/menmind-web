import Link from "next/link";
import { Suspense } from "react";

function Content() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">Waypoint · wsparcie</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Psychiatrzy
          </h1>

          <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
            To kierunek, kiedy objawy są za duże, sen się sypie i organizm nie ciągnie.
            Leczenie to narzędzie. Nie etykieta.
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            Tryb: <span className="text-zinc-200 font-medium">Online</span>
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <h2 className="text-lg font-semibold text-zinc-100">
              Lista lekarzy (wkrótce)
            </h2>

            <p className="mt-2 text-base text-zinc-300 leading-relaxed">
              Jeszcze nie mamy gotowej listy. W kolejnych wersjach dodamy:
              online / profile / zasady weryfikacji.
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
                Zgłoś lekarza →
              </Link>
            </div>

            <p className="mt-5 text-sm text-zinc-500">
              Docelowo: selekcja + brak spamu + proste zasady.
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

export default function PsychiatrzyPage() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}