import Link from "next/link";

export const metadata = {
  title: "Ojcostwo | MenMind",
  description:
    "Relacja z dzieckiem, odpowiedzialność i realne wyzwania współczesnego ojcostwa.",
};

export default function OjcostwoPage() {
  return (
    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-semibold mb-6 text-gray-900">
          Ojcostwo
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 mb-16 max-w-2xl leading-8">
          Ojcostwo to jedna z najważniejszych relacji w życiu mężczyzny.
          Czasem jest stabilna i naturalna.
          Czasem przechodzi przez konflikty, rozstanie lub dystans.
        </p>

        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Obecność
            </h2>

            <p className="text-gray-700 leading-8">
              Dzieci nie potrzebują perfekcyjnego ojca.
              Potrzebują obecności i przewidywalności.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Konflikty rodzinne
            </h2>

            <p className="text-gray-700 leading-8">
              Rozwody, konflikty o opiekę czy alimenty
              są jednymi z najtrudniejszych momentów
              dla ojców.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Relacja z dzieckiem
            </h2>

            <p className="text-gray-700 leading-8">
              Relacja zmienia się wraz z wiekiem dziecka.
              To naturalne że pojawiają się dystans,
              napięcie albo brak komunikacji.
            </p>
          </section>

        </div>

        <section className="border-t border-gray-300 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Możliwe wsparcie
          </h2>

          <div className="space-y-4">

            <Link href="/kategoria/prawo-rodzinne" className="text-blue-600 hover:underline">
              Prawo rodzinne
            </Link>

            <Link href="/kategoria/mediacje" className="block text-blue-600 hover:underline">
              Mediacje
            </Link>

            <Link href="/kategoria/psycholog" className="block text-blue-600 hover:underline">
              Psycholog rodzinny
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}