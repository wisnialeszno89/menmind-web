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
            Rozstanie potrafi rozbić dzień na kawałki: myśli, ciało, sen,
            poczucie wartości. To normalne. I to minie, jeśli przestaniesz
            walczyć na ślepo.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Na dziś: mniej kontaktu z bólem, więcej stabilności
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Nie rób dziś “wielkich decyzji” — rób małe ruchy.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jak Cię ciągnie do pisania / sprawdzania: odczekaj 20 minut.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedna rzecz dla ciała: spacer, prysznic, jedzenie.
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
                href="/tools/sleep-reset"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Wieczór / noc</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Reset snu
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Żeby jutro nie zaczynało się od rozjechania.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz narzędzie →</p>
              </Link>

              <Link
                href="/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Ludzie</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Zamknięte grupy / rozmowy
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Czasem wystarczy przestać być z tym sam.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>

              <Link
                href="/partners?tag=mental"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Jeśli Cię zalewa</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psycholog / psychiatra (wsparcie)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Gdy emocje są za duże — to nie wstyd sięgnąć po pomoc.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>
            </div>
          </div>

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
            Zasada: dziś stabilność. Jutro kierunek.
          </p>
        </section>
      </div>
    </main>
  );
}