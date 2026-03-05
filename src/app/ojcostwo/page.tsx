import Link from "next/link";

export const metadata = {
  title: "Ojcostwo | MenMind",
  description:
    "Relacja z dzieckiem, odpowiedzialność i wsparcie w trudnych sytuacjach.",
};

export default function OjcostwoPage() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900">
          Ojcostwo
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 mb-16 max-w-2xl leading-8">
          Ojcostwo to relacja. Czasem stabilna,
          czasem napięta. Zawsze realna.
        </p>

        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Relacja
            </h2>

            <p className="text-gray-700 leading-8">
              Obecność jest ważniejsza niż perfekcja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Stabilność
            </h2>

            <p className="text-gray-700 leading-8">
              Dzieci potrzebują przewidywalności.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Odpowiedzialność
            </h2>

            <p className="text-gray-700 leading-8">
              Ojcostwo to decyzje które wpływają
              na przyszłość dziecka.
            </p>
          </section>

        </div>

        <section className="border-t border-gray-300 pt-16">

          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Sprawdź dostępne wsparcie
          </h2>

          <Link
            href="/propozycje"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Zobacz propozycje
          </Link>

        </section>

      </div>
    </main>
  );
}