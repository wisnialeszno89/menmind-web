import Link from "next/link"
import RelatedArticles from "@/components/RelatedArticles"

export const metadata = {
  title: "Chaos w życiu – jak to poukładać | MenMind",
  description:
    "Jak uporządkować chaos w życiu krok po kroku."
}

export default function Page(){

  return(

    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Chaos w życiu – jak to poukładać
        </h1>

        <p className="text-gray-700 mb-8">
          Chaos pojawia się, gdy wszystko naraz wymaga uwagi.
          Kluczem jest ograniczenie i struktura.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Wyrzuć wszystko z głowy
        </h2>

        <p className="mb-8">
          Spisz wszystko co Cię obciąża.
        </p>

        <Link
          href="/narzedzia/brain-dump"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Wyrzuć z głowy
        </Link>

        <h2 className="text-2xl font-semibold mb-4">
          2. Ustal priorytet
        </h2>

        <p className="mb-8">
          Wybierz jedną rzecz.
        </p>

        <Link
          href="/sciezki/stabilnosc"
          className="block border p-4 rounded-lg"
        >
          👉 Zobacz ścieżkę stabilności
        </Link>

        <RelatedArticles />

      </div>
    </main>

  )

}