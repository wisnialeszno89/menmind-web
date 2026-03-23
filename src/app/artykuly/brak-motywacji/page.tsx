import Link from "next/link"
import RelatedArticles from "@/components/RelatedArticles"

export const metadata = {
  title: "Brak motywacji – co robić | MenMind",
  description:
    "Jak wrócić do działania gdy nie masz motywacji. Konkretne kroki."
}

export default function Page(){

  return(

    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Brak motywacji – co robić
        </h1>

        <p className="text-gray-700 mb-8">
          Brak motywacji często nie oznacza lenistwa,
          tylko przeciążenie i chaos.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Zmniejsz presję
        </h2>

        <p className="mb-8">
          Zamiast wielkich celów — małe kroki.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          2. Zacznij od minimum
        </h2>

        <p className="mb-8">
          Jedna rzecz dziennie wystarczy.
        </p>

        <Link
          href="/narzedzia/minimum"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zacznij od minimum
        </Link>

        <Link
          href="/sciezki/dyscyplina"
          className="block border p-4 rounded-lg"
        >
          👉 Zobacz ścieżkę dyscypliny
        </Link>

        <RelatedArticles />
        
      </div>
    </main>

  )

}