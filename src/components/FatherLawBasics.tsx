import Link from "next/link";

export default function FatherLawBasics() {
  return (
    <div className="card-2026 p-8 mt-12">

      <h3 className="text-xl font-semibold mb-6">
        Prawo bez paniki
      </h3>

      <p className="text-zinc-400 text-sm leading-relaxed mb-8">
        Znajomość podstaw zmniejsza napięcie.
        Każda sytuacja jest inna – warto ją skonsultować.
      </p>

      <div className="space-y-8 text-sm leading-relaxed">

        <div>
          <h4 className="font-semibold mb-2 text-zinc-200">
            1. Kontakty z dzieckiem
          </h4>
          <p className="text-zinc-400">
            Masz prawo do relacji, nawet jeśli nie mieszkasz razem.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-zinc-200">
            2. Opieka naprzemienna
          </h4>
          <p className="text-zinc-400">
            Wymaga stabilnych warunków i współpracy rodziców.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-zinc-200">
            3. Alimenty
          </h4>
          <p className="text-zinc-400">
            To obowiązek wobec dziecka, nie wobec drugiego rodzica.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-zinc-200">
            4. Mediacja
          </h4>
          <p className="text-zinc-400">
            Często szybsza i mniej destrukcyjna niż spór sądowy.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-zinc-200">
            5. Dokumentacja
          </h4>
          <p className="text-zinc-400">
            Zachowuj dowody zaangażowania w życie dziecka.
          </p>
        </div>

      </div>

      <div className="mt-10">
        <Link
          href="/ojcostwo/prawa-ojca"
          className="text-blue-500 underline underline-offset-4 hover:text-blue-400 text-sm"
        >
          Sprawdź wsparcie prawne →
        </Link>
      </div>

    </div>
  );
}