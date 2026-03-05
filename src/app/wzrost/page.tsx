import Link from "next/link";

export const metadata = {
  title: "Wzrost | MenMind",
  description:
    "Świadome rozszerzanie wpływu, kierunku i odpowiedzialności.",
};

export default function WzrostPage() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900">
          Wzrost
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 mb-16 max-w-2xl leading-8">
          Gdy sytuacja jest stabilna, pojawia się pytanie:
          co dalej? Wzrost to świadome budowanie kierunku.
        </p>

        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Kierunek
            </h2>

            <p className="text-gray-700 leading-8">
              Wzrost zaczyna się od jasności celu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Odpowiedzialność
            </h2>

            <p className="text-gray-700 leading-8">
              Odpowiedzialność daje sprawczość.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Wpływ
            </h2>

            <p className="text-gray-700 leading-8">
              Decyzje zaczynają mieć realny wpływ
              na Twoje życie i otoczenie.
            </p>
          </section>

        </div>

        <section className="border-t border-gray-300 pt-16">

          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Zobacz dostępne możliwości rozwoju
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