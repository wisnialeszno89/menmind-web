import Link from "next/link";
import { Suspense } from "react";
import { CITIES_PL } from "../../../data/cities-pl";

function Content({ searchParams }: { searchParams?: { city?: string } }) {
  const city = searchParams?.city ?? "online";
  const cityLabel = CITIES_PL.find((c) => c.key === city)?.label ?? "Online";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · wsparcie</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Trening / ruch
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            To kierunek, kiedy głowa kręci pętle, a ciało potrzebuje resetu.
            Ruch stabilizuje układ nerwowy szybciej niż kolejne 50 analiz w nocy.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-sm text-zinc-400">
            Lokalizacja:{" "}
            <span className="text-zinc-200 font-medium">{cityLabel}</span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {CITIES_PL.map((c) => {
              const active = c.key === city;
              return (
                <Link
                  key={c.key}
                  href={`/spec/trening?city=${c.key}`}
                  className={[
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                      : "bg-zinc-950/30 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-900/50",
                  ].join(" ")}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <h2 className="text-lg font-semibold text-zinc-100">
              Treningi i miejsca (wkrótce)
            </h2>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Jeszcze nie mamy listy polecanych miejsc i trenerów.
              W kolejnych wersjach dodamy proste opcje: siłownie, sporty walki,
              trenerzy, grupy treningowe.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/navimind?state=pressure"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
              >
                Chcę pogadać →
              </Link>

              <Link
                href="/partnerstwo"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
              >
                Zgłoś partnera →
              </Link>
            </div>

            <p className="mt-5 text-xs text-zinc-500">
              Docelowo: filtrowanie wg miasta + online + rekomendacje.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href={`/propozycje?state=pressure&city=${city}`}
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

export default function TreningPage(props: { searchParams?: { city?: string } }) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}