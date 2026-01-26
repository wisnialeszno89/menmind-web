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
            Jeśli jesteś “rozbity”, to nie znaczy, że jesteś słaby.
            To znaczy, że długo cisnąłeś bez przerwy.
            Teraz Twoje ciało i głowa mówią: stop.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 rzeczy na dziś (minimum wersja)
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">1)</span> Jedzenie + woda.
              Brzmi banalnie — ale bez paliwa wszystko wygląda gorzej.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">2)</span> 10 minut ruchu.
              Spacer, prysznic, cokolwiek co zmienia stan w ciele.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">3)</span> Jedna rzecz do domknięcia.
              Jedna. Nie “ogarnąć życie”, tylko mały klocek.
            </li>
          </ul>

          <Reset60 lang="pl" />

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
            Bez kont. Bez zapisu rozmów. Bez ocen.
          </p>
        </section>
      </div>
    </main>
  );
}