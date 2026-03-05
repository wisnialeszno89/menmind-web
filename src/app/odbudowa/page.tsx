import Link from "next/link";

export const metadata = {
  title: "Odbudowa | MenMind",
  description:
    "Powrót do energii i sprawczości. Małe ruchy, które przywracają kontrolę.",
};

export default function OdbudowaPage() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900">
          Odbudowa
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 mb-16 max-w-2xl leading-8">
          Kryzys zatrzymuje. Odbudowa to pierwszy ruch.
          Nie chodzi o wielką zmianę.
          Chodzi o odzyskanie kontroli nad codziennością.
        </p>

        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Ciało
            </h2>

            <p className="text-gray-700 leading-8">
              Energia fizyczna jest fundamentem decyzji.
              Sen, ruch i regularność stabilizują system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Struktura
            </h2>

            <p className="text-gray-700 leading-8">
              Chaos w głowie często zaczyna się od chaosu
              w codzienności. Prosta struktura dnia pomaga
              odzyskać kontrolę.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Relacje
            </h2>

            <p className="text-gray-700 leading-8">
              Kontakt z ludźmi stabilizuje psychikę.
              Nie muszą to być wielkie rozmowy.
            </p>
          </section>

        </div>

        <section className="border-t border-gray-300 pt-16">

          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Sprawdź dostępne możliwości wsparcia
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