import Link from "next/link";

export const metadata = {
  title: "Kontakty z dzieckiem – jak je ustalić i utrzymać | MenMind",
  description:
    "Jak ustalić kontakty z dzieckiem po rozstaniu i jak utrzymać stabilną relację mimo konfliktu.",
};

export default function KontaktyZdzieckiemPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Kontakty z dzieckiem
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Po rozstaniu najważniejsze jest jedno:
            relacja z dzieckiem nie może stać się polem konfliktu.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Ustal jasny harmonogram
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Stałe dni i godziny budują poczucie bezpieczeństwa.
                Im mniej improwizacji, tym mniej napięcia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Nie mieszaj dziecka w konflikt
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Dziecko nie jest mediatorem ani stroną sporu.
                Chronienie go przed konfliktem to dojrzałość.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Bądź przewidywalny
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Punktualność, konsekwencja i dotrzymywanie słowa
                budują zaufanie szybciej niż deklaracje.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Dokumentuj, ale bez obsesji
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Warto zachować potwierdzenia kontaktów czy ustaleń.
                Spokój i konsekwencja są ważniejsze niż emocjonalne reakcje.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10 space-y-4">

            <Link
              href="/ojcostwo/prawa-ojca"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Sprawdź swoje prawa →
            </Link>

            <Link
              href="/propozycje/stabilizacja"
              className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
            >
              Skonsultuj sytuację →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}