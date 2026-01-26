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
            Jeśli jesteś w tym stanie, to nie jest moment na “motywację”.
            To moment na minimalną stabilizację i pomoc, jeśli trzeba.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Dziś tylko baza
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Woda + jedzenie (cokolwiek prostego)
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Prysznic albo 5 minut ruchu
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedno małe domknięcie (żeby odzyskać ster)
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Propozycje
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/propozycje?state=broken&city=online"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">
                  Najprościej i najskuteczniej
                </p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Pomoc specjalistów (dobierz miasto)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Psychologowie i psychiatrzy — tylko to, co ma sens na tym etapie.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
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
        </section>
      </div>
    </main>
  );
}