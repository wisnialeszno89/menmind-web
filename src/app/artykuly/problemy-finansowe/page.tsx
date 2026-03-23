import Link from "next/link"
import RelatedArticles from "@/components/RelatedArticles"

export const metadata = {
  title: "Problemy finansowe – co robić | MenMind",
  description: "Jak ogarnąć finanse w trudnej sytuacji."
}

export default function Page(){
  return(
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Problemy finansowe – co robić
        </h1>

        <p className="mb-8">
          Zacznij od uporządkowania wydatków.
        </p>

        <Link href="/sciezki/finanse" className="block border p-4 rounded-lg">
          👉 Zobacz ścieżkę finansową
        </Link>

        <RelatedArticles />
        
      </div>
    </main>
  )
}