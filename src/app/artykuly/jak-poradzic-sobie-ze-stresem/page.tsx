import Link from "next/link"

export const metadata = {
  title: "Jak radzić sobie ze stresem | MenMind",
  description: "Prosty sposób na zmniejszenie stresu."
}

export default function Page(){
  return(
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Jak radzić sobie ze stresem
        </h1>

        <p className="mb-8">
          Stres można obniżyć małymi krokami.
        </p>

        <Link href="/sciezki/stres" className="block border p-4 rounded-lg mb-4">
          👉 Zobacz ścieżkę stresu
        </Link>

        <Link href="/narzedzia/reset" className="block border p-4 rounded-lg">
          👉 Reset 90 sekund
        </Link>

      </div>
    </main>
  )
}