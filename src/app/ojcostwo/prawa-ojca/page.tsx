import Link from "next/link";

export const metadata = {
  title: "Prawa ojca – podstawy po rozwodzie | MenMind",
  description:
    "Podstawowe prawa ojca po rozstaniu lub rozwodzie: kontakty, opieka naprzemienna, alimenty, mediacja.",
};

export default function PrawaOjcaPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Prawa ojca – podstawy
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Znajomość podstaw zmniejsza napięcie.
            Każda sytuacja jest inna – poniżej znajdziesz ogólne informacje,
            które pomagają zrozumieć swoje możliwości.
          </p>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Kontakty z dzieckiem
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Ojciec ma prawo do kontaktu z dzieckiem,
                nawet jeśli nie mieszka z nim na co dzień.
                Kontakty mogą być ustalone polubownie lub przez sąd.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Opieka naprzemienna
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Możliwa, jeśli oboje rodzice mają odpowiednie warunki
                i są w stanie współpracować.
                Sąd bierze pod uwagę dobro dziecka.
              </p>
            </section>
            <Link
  href="/ojcostwo/opieka-naprzemienna"
  className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
>
  Przeczytaj więcej o opiece naprzemiennej →
</Link>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Alimenty
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Alimenty są obowiązkiem wobec dziecka,
                nie wobec drugiego rodzica.
                Ich wysokość zależy od potrzeb dziecka i możliwości finansowych rodzica.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Mediacja
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Mediacja często pozwala szybciej i spokojniej
                ustalić warunki opieki niż postępowanie sądowe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Dokumentacja
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Warto dokumentować swoje zaangażowanie
                w życie dziecka – kontakty, wsparcie finansowe,
                obecność na wydarzeniach szkolnych.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10">

            <p className="text-zinc-400 mb-6">
              Jeśli sytuacja jest napięta lub niejasna,
              warto skonsultować ją z prawnikiem lub mediatorem.
            </p>

            <Link
              href="/propozycje/stabilizacja"
              className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Sprawdź dostępne wsparcie →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}