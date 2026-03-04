import Link from "next/link";

export default function KryzysPage() {

  return (
    <main className="bg-gray-100 min-h-screen">

      <section className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-6">
          Kryzys
        </h1>

        <p className="text-gray-700 mb-10">
          Kryzys to moment kiedy stare rozwiązania przestają działać.
          Może dotyczyć relacji, pracy, zdrowia lub poczucia sensu.
        </p>

        <h2 className="text-xl font-semibold mb-4">
          Co często się wtedy dzieje
        </h2>

        <ul className="space-y-2 text-gray-700 mb-12">
          <li>• chaos decyzyjny</li>
          <li>• napięcie i brak snu</li>
          <li>• problemy w relacjach</li>
          <li>• poczucie braku kierunku</li>
        </ul>

        <Link
          href="/propozycje"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Zobacz dostępne propozycje
        </Link>

      </section>

    </main>
  );
}