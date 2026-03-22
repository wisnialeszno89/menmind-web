import Link from "next/link"

export default function StresPage(){

  return(

    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Stres — jak odzyskać kontrolę
        </h1>

        <p className="text-gray-700 mb-10">
          Stres to nie wróg. To sygnał, że coś jest przeciążone.
          Problem zaczyna się wtedy, gdy trwa za długo.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Najpierw ciało
        </h2>

        <p className="text-gray-700 mb-6">
          Jeśli ciało jest napięte — głowa nie będzie działać dobrze.
          Zacznij od prostego resetu.
        </p>

        <Link
          href="/narzedzia/reset"
          className="block border p-4 rounded-lg mb-10"
        >
          👉 Reset 90 sekund
        </Link>

        <h2 className="text-2xl font-semibold mb-4">
          2. Odetnij chaos
        </h2>

        <p className="text-gray-700 mb-6">
          Za dużo bodźców = brak decyzji.
          Ogranicz to, co Cię zalewa.
        </p>

        <Link
          href="/narzedzia/minimum"
          className="block border p-4 rounded-lg mb-10"
        >
          👉 Uprość dzień
        </Link>

        <h2 className="text-2xl font-semibold mb-4">
          3. Znajdź wsparcie jeśli trzeba
        </h2>

        <Link
          href="/propozycje/coaching"
          className="block border p-4 rounded-lg"
        >
          👉 Zobacz dostępne opcje
        </Link>

      </div>

    </main>

  )

}