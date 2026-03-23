import Link from "next/link"

export const metadata = {
  title: "Brak energii – co robić | MenMind",
  description: "Jak odzyskać energię i wrócić do działania."
}

export default function Page(){
  return(
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Brak energii – co robić
        </h1>

        <p className="mb-8">
          Brak energii często wynika z przeciążenia i stresu.
        </p>

        <Link href="/sciezki/energia" className="block border p-4 rounded-lg mb-4">
          👉 Zobacz ścieżkę energii
        </Link>

        <Link href="/narzedzia/reset" className="block border p-4 rounded-lg">
          👉 Zrób szybki reset
        </Link>

      </div>
    </main>
  )
}