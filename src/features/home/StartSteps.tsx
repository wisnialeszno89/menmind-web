import Link from "next/link"

export default function StartSteps(){
  return (
    <section className="py-16 border-b">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          Zacznij od 3 kroków
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link href="/narzedzia/test-sytuacji" className="border rounded-xl p-6 card-hover">
            <h3 className="font-semibold mb-2">1. Sprawdź sytuację</h3>
            <p className="text-sm text-neutral-600">
              Krótki test pokaże gdzie jesteś
            </p>
          </Link>

          <Link href="/narzedzia/plan-72h" className="border rounded-xl p-6 card-hover">
            <h3 className="font-semibold mb-2">2. Ustal plan</h3>
            <p className="text-sm text-neutral-600">
              Najbliższe 72 godziny
            </p>
          </Link>

          <Link href="/propozycje" className="border rounded-xl p-6 card-hover">
            <h3 className="font-semibold mb-2">3. Wybierz kierunek</h3>
            <p className="text-sm text-neutral-600">
              Zobacz możliwe opcje
            </p>
          </Link>

        </div>
      </div>
    </section>
  )
}