import Link from "next/link";

export default function FatherhoodRitualsPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · ojcostwo</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Rytuały i zabawy z dzieckiem
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Facet często nie ma “pomysłu”. Spoko. Tu masz gotowce: prosto,
            powtarzalnie i bez presji. Najważniejsze: 10–20 minut i zero telefonu.
          </p>
        </header>

        {/* WIEK 1–3 */}
        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">1–3 lata</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Tu wygrywa obecność + głos taty + powtarzalność.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Pomysł</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Tor przeszkód z poduszek
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Kanapa + koc + poduszki = mini-olimpiada. 5 minut i dziecko jest
                szczęśliwe.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Rytuał</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “3 minuty 100% tata”
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Odkładasz telefon. 3 minuty tylko dziecko. Bez poprawiania, bez
                nauczania. Tylko kontakt.
              </p>
            </div>
          </div>
        </section>

        {/* WIEK 3–6 */}
        <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">3–6 lat</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Tu wygrywa zabawa w role + śmiech + proste zasady.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Pomysł</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Sklep / restauracja
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Ty jesteś klientem. Dziecko sprzedawcą. Ustalacie 3 produkty.
                Działa zawsze.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Rytuał</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “Misja dnia” (10 minut)
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Jedna misja: pomocnik taty, kucharz, strażak, super-sprzątanie.
                Na końcu piątka i “dobra robota”.
              </p>
            </div>
          </div>
        </section>

        {/* WIEK 7–12 */}
        <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">7–12 lat</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Tu wygrywają: projekty, rywalizacja i wspólne “robienie czegoś”.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Pomysł</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Mini-projekt taty (30–60 min)
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Rower, mycie auta, gotowanie, skręcanie czegoś prostego. Dziecko
                czuje sprawczość — i że jest ważne.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Rytuał</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “Godzina taty” raz w tygodniu
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Stały termin. To ma być pewniak: sport / planszówka / wyjście.
                Bez odwoływania “bo praca”.
              </p>
            </div>
          </div>
        </section>

        {/* WIEK 13–15 */}
        <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">13–15 lat</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Tu wygrywa szacunek, luz i obecność bez przesłuchania.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Pomysł</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Spacer / auto / kawa
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Rozmowy wychodzą naturalnie, gdy idziecie obok siebie. Jedno
                pytanie. Reszta sama wypłynie.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
              <p className="text-sm text-zinc-400">Rytuał</p>
              <p className="mt-1 font-semibold text-zinc-100">
                “Jeden temat i spokój”
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Zero wykładów. Zero dociskania. Jeden temat na raz i komunikat:
                “jestem obok”.
              </p>
            </div>
          </div>
        </section>

        {/* LINK DO AWARYJNEJ */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/spec/ojcostwo-awaryjna"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Lista awaryjna 10 pomysłów →
          </Link>

          <Link
            href="/where/father"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Wróć (ojcostwo)
          </Link>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          Najlepszy rytuał to stała pora + 10 minut + zero telefonu.
        </p>
      </div>
    </main>
  );
}