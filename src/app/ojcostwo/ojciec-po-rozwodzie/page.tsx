import Link from "next/link";

export const metadata = {
  title: "Ojciec po rozwodzie – jak nie stracić relacji z dzieckiem | MenMind",
  description:
    "Rozwód nie musi oznaczać utraty relacji z dzieckiem. Sprawdź, co naprawdę ma znaczenie.",
};

export default function OjciecPoRozwodziePage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Ojciec po rozwodzie
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Rozwód zmienia strukturę rodziny.
            Nie musi jednak oznaczać utraty relacji z dzieckiem.
            To moment, w którym stabilność staje się ważniejsza niż emocje.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Największy błąd
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Reagowanie impulsem.
                Krytykowanie drugiego rodzica przy dziecku.
                Walka o rację zamiast walka o relację.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Co naprawdę ma znaczenie
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Regularność kontaktu.
                Spokój w komunikacji.
                Przewidywalność.
                Dziecko potrzebuje stabilności, nie perfekcji.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Gdy kontakt jest ograniczony
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Dokumentuj swoje zaangażowanie.
                Zachowuj spokój.
                Szukaj mediacji zamiast eskalacji.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10">

            <p className="text-zinc-400 mb-6">
              Jeśli sytuacja jest napięta,
              warto skonsultować ją z prawnikiem lub mediatorem.
            </p>

            <div className="space-y-4">

              <Link
                href="/ojcostwo/prawa-ojca"
                className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
              >
                Poznaj swoje prawa →
              </Link>

              <Link
                href="/propozycje/stabilizacja"
                className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
              >
                Sprawdź dostępne wsparcie →
              </Link>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}