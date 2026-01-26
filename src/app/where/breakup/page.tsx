import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereBreakupPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · stan</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem po rozstaniu
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Rozstanie potrafi wywrócić wszystko: sen, apetyt, poczucie sensu i
            tożsamość. To nie “przesada” — to normalna reakcja.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Dziś nie musisz wygrać. Dziś masz przetrwać.
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span> Nie podejmuj dużych decyzji
              w szczycie emocji.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Zrób jedną rzecz, która
              stabilizuje: jedzenie / spacer / porządek.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span> Nie izoluj się całkowicie.
              Jedna wiadomość do kogoś wystarczy.
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=breakup"
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
            Bez kont. Bez ocen. Bez zapisu rozmów.
          </p>
        </section>
      </div>
    </main>
  );
}