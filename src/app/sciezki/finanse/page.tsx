import Link from "next/link"

export default function FinansePage(){
  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Problemy finansowe
        </h1>

        <p className="text-gray-700 mb-10">
          Gdy finanse zaczynają się sypać, chaos szybko rośnie.
          Zacznij od odzyskania kontroli nad podstawami.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Sprawdź realne koszty
          </div>

          <div className="border rounded-lg p-4">
            Odetnij zbędne wydatki
          </div>

          <div className="border rounded-lg p-4">
            Ustal plan na 30 dni
          </div>

        </div>

        <Link
          href="/narzedzia/plan-72h"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zrób pierwszy krok
        </Link>

        <Link
        href="/propozycje"
        className="block border p-4 rounded-lg"
      >
         👉 Znajdź wsparcie
        </Link>

      </div>
    </main>
  )
}