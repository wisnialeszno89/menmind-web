import Link from "next/link";

export const metadata = {
  title: "Alimenty – fakty bez mitów | MenMind",
  description:
    "Czym są alimenty, jak są ustalane i od czego zależy ich wysokość. Spokojnie i bez mitów.",
};

export default function AlimentyPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Alimenty – fakty bez mitów
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Alimenty to obowiązek wobec dziecka.
            Nie są karą ani narzędziem odwetu.
            Ich celem jest zapewnienie dziecku stabilnych warunków życia.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Od czego zależy wysokość alimentów
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Sąd bierze pod uwagę:
                • potrzeby dziecka  
                • możliwości finansowe rodziców  
                • dotychczasowy poziom życia dziecka  
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Alimenty a opieka naprzemienna
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Nawet przy opiece naprzemiennej mogą zostać ustalone alimenty,
                jeśli sytuacja finansowa rodziców znacząco się różni.
              </p>

              <Link
                href="/ojcostwo/opieka-naprzemienna"
                className="inline-block mt-4 text-blue-500 underline underline-offset-4 hover:text-blue-400"
              >
                Sprawdź zasady opieki naprzemiennej →
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Czy alimenty można zmienić?
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Tak. Jeśli zmienia się sytuacja finansowa
                lub potrzeby dziecka, można wystąpić o zmianę wysokości świadczenia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Najczęstszy błąd
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Traktowanie alimentów jako walki z drugim rodzicem.
                To decyzja dotycząca dziecka.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10 space-y-4">

            <p className="text-zinc-400">
              Jeśli sytuacja jest napięta lub niejasna,
              warto skonsultować ją z prawnikiem lub mediatorem.
            </p>

            <Link
              href="/propozycje/stabilizacja"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Sprawdź dostępne wsparcie →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}