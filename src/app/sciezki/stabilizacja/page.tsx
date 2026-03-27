import Link from "next/link"
import PageHeader from "@/components/PageHeader"

export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <PageHeader
        title="Ścieżka stabilizacji"
        description="Uporządkuj podstawy i wróć do równowagi."
      />

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