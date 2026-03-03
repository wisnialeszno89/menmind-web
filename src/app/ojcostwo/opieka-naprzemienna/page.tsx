import Link from "next/link";

export const metadata = {
  title: "Opieka naprzemienna – warunki i zasady | MenMind",
  description:
    "Czym jest opieka naprzemienna, jakie są warunki jej przyznania i kiedy sąd ją rozważa.",
};

export default function OpiekaNaprzemiennaPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Opieka naprzemienna
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Opieka naprzemienna oznacza, że dziecko spędza
            porównywalny czas z obojgiem rodziców.
            Nie jest to automatyczne rozwiązanie – sąd ocenia,
            czy jest to zgodne z dobrem dziecka.
          </p>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Kiedy sąd bierze ją pod uwagę
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                • gdy oboje rodzice mają odpowiednie warunki mieszkaniowe  
                • gdy potrafią współpracować  
                • gdy odległość między miejscami zamieszkania na to pozwala  
                • gdy dziecko ma stabilne środowisko
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Co ma znaczenie
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Sąd analizuje przede wszystkim dobro dziecka,
                nie interes rodziców.
                Stabilność, relacje i dotychczasowe zaangażowanie
                są kluczowe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Czy potrzebna jest zgoda obojga rodziców?
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                W praktyce współpraca znacząco zwiększa szanse.
                Wysoki konflikt może utrudnić przyznanie
                opieki naprzemiennej.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10">

            <p className="text-zinc-400 mb-6">
              Każda sytuacja jest indywidualna.
              Warto skonsultować swoją sprawę z prawnikiem
              lub mediatorem rodzinnym.
            </p>

            <Link
              href="/propozycje/stabilizacja"
              className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Sprawdź wsparcie prawne →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}