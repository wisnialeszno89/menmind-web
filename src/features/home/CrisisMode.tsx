import Link from "next/link"

export default function CrisisMode(){
  return (
    <section className="py-20 bg-neutral-50 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-4">
          Jeśli jesteś w kryzysie — zacznij tutaj
        </h2>

        <p className="text-neutral-600 mb-8">
          Bez czytania. Bez analizowania. Zrób pierwszy krok.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/narzedzia/test-sytuacji"
            className="border rounded-xl p-6 bg-white card-hover"
          >
            <h3 className="font-semibold mb-2">
              1. Sprawdź sytuację
            </h3>
            <p className="text-sm text-neutral-600">
              Test pokaże gdzie jesteś
            </p>
          </Link>

          <Link
            href="/narzedzia/reset-90"
            className="border rounded-xl p-6 bg-white card-hover"
          >
            <h3 className="font-semibold mb-2">
              2. Zatrzymaj chaos
            </h3>
            <p className="text-sm text-neutral-600">
              90 sekund resetu
            </p>
          </Link>

          <Link
            href="/narzedzia/plan-72h"
            className="border rounded-xl p-6 bg-white card-hover"
          >
            <h3 className="font-semibold mb-2">
              3. Ustal plan
            </h3>
            <p className="text-sm text-neutral-600">
              Najbliższe 72 godziny
            </p>
          </Link>

        </div>

      </div>
    </section>
  )
}