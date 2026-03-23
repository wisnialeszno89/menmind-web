import Link from "next/link"

export const metadata = {
  title: "Jak ogarnąć życie gdy wszystko się sypie | MenMind",
  description:
    "Prosty plan działania gdy masz chaos w życiu. Konkretne kroki dla mężczyzn."
}

export default function Page(){

  return(

    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Jak ogarnąć życie gdy wszystko się sypie
        </h1>

        <p className="text-gray-700 mb-8">
          Gdy wszystko zaczyna się sypać, pierwszą reakcją jest chaos.
          Najważniejsze to nie naprawiać wszystkiego naraz, tylko odzyskać kontrolę.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Zatrzymaj spiralę
        </h2>

        <p className="mb-8">
          Odetnij nadmiar bodźców. Mniej informacji = więcej jasności.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          2. Wróć do podstaw
        </h2>

        <p className="mb-8">
          Sen, jedzenie i ruch to fundament stabilności.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          3. Zaplanuj 72 godziny
        </h2>

        <p className="mb-8">
          Nie planuj roku. Zaplanuj najbliższe dni.
        </p>

        <Link
          href="/narzedzia/plan-72h"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Ułóż plan 72h
        </Link>

        <Link
          href="/sciezki/stabilnosc"
          className="block border p-4 rounded-lg"
        >
          👉 Zobacz ścieżkę stabilności
        </Link>

      </div>
    </main>

  )

}