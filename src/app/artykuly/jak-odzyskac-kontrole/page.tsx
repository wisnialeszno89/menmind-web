import Link from "next/link"
import RelatedArticles from "@/components/RelatedArticles"

export const metadata = {
  title: "Jak odzyskać kontrolę nad życiem | MenMind",
  description: "Plan odzyskania kontroli krok po kroku."
}

export default function Page(){
  return(
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Jak odzyskać kontrolę nad życiem
        </h1>

        <p className="mb-8">
          Zacznij od małych kroków.
        </p>

        <Link href="/narzedzia/plan-72h" className="block border p-4 rounded-lg">
          👉 Ułóż plan 72h
        </Link>

        <RelatedArticles />

      </div>
    </main>
  )
}