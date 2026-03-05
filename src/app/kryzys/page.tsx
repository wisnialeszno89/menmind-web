import Link from "next/link";

export const metadata = {
  title: "Kryzys | MenMind",
  description:
    "Kryzys to moment kiedy stare rozwiązania przestają działać. Zobacz jak uporządkować sytuację i jakie masz opcje.",
};

export default function KryzysPage() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Nagłówek */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-gray-900">
          Kryzys
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 mb-16 max-w-2xl leading-8">
          Kryzys to moment kiedy stare rozwiązania przestają działać.
          Może dotyczyć relacji, pracy, zdrowia albo poczucia sensu.
          Nie oznacza końca. Oznacza moment zatrzymania i decyzji.
        </p>

        {/* Sekcje */}
        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Chaos
            </h2>

            <p className="text-gray-700 leading-8">
              W kryzysie pojawia się chaos decyzyjny. Myśli krążą
              w kółko, a każda decyzja wydaje się ryzykowna.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Napięcie
            </h2>

            <p className="text-gray-700 leading-8">
              Bezsenność, napięcie w ciele i poczucie presji
              to naturalna reakcja na przeciążenie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Decyzja
            </h2>

            <p className="text-gray-700 leading-8">
              Kryzys często wymusza decyzję, której wcześniej
              odkładałeś. To moment kiedy zaczyna się zmiana.
            </p>
          </section>

        </div>

        {/* Co możesz zrobić */}
        <section className="mb-24">

          <h2 className="text-2xl font-semibold mb-8 text-gray-900">
            Co możesz zrobić teraz
          </h2>

          <ul className="space-y-4 text-gray-700 leading-8">
            <li>– zatrzymaj się i uporządkuj fakty</li>
            <li>– ogranicz chaos informacyjny</li>
            <li>– porozmawiaj z kimś z zewnątrz</li>
            <li>– skup się na jednej decyzji</li>
          </ul>

        </section>

        {/* CTA */}
        <section className="border-t border-gray-300 pt-16">

          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Zobacz dostępne możliwości wsparcia
          </h2>

          <Link
            href="/propozycje"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Zobacz propozycje
          </Link>

        </section>

      </div>
    </main>
  );
}