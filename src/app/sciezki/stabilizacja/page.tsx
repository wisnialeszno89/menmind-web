import Link from "next/link"

export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-6">
        Ścieżka stabilizacji
      </h1>

      <p className="text-neutral-600 mb-10">
        Jeśli masz chaos, brak kierunku lub trudny moment —
        zacznij od uporządkowania podstaw.
      </p>

      <div className="space-y-4">

        <Link
          href="/narzedzia/plan-72h"
          className="block border rounded-xl p-6 card-hover"
        >
          1. Ustal plan 72h
        </Link>

        <Link
          href="/narzedzia/reset-90"
          className="block border rounded-xl p-6 card-hover"
        >
          2. Zatrzymaj chaos
        </Link>

        <Link
          href="/narzedzia/brain-dump"
          className="block border rounded-xl p-6 card-hover"
        >
          3. Wyrzuć myśli z głowy
        </Link>

        <Link
          href="/propozycje"
          className="block border rounded-xl p-6 card-hover"
        >
          4. Zobacz dostępne wsparcie
        </Link>

      </div>

    </main>
  )
}