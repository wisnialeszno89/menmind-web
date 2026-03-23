import Link from "next/link"

export const metadata = {
  title: "Samotność u mężczyzny – co robić | MenMind",
  description: "Jak poradzić sobie z samotnością i wrócić do ludzi."
}

export default function Page(){
  return(
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Samotność u mężczyzny – co robić
        </h1>

        <p className="mb-8">
          Samotność to sygnał, że potrzebujesz relacji i kontaktu.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Zacznij od jednej osoby
        </h2>

        <p className="mb-8">
          Nie potrzebujesz grupy. Wystarczy jedna rozmowa.
        </p>

        <Link href="/sciezki/samotnosc" className="block border p-4 rounded-lg mb-4">
          👉 Zobacz ścieżkę samotności
        </Link>

        <Link href="/propozycje" className="block border p-4 rounded-lg">
          👉 Znajdź społeczność
        </Link>

      </div>
    </main>
  )
}