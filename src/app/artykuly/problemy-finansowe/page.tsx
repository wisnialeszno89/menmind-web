import ArticleLayout from "@/features/articles/ArticleLayout"
import Link from "next/link"

export const metadata = {
  title: "Problemy finansowe – co robić | MenMind",
  description: "Jak ogarnąć finanse w trudnej sytuacji."
}

export default function Page(){
  return(
    <ArticleLayout title="Tytuł artykułu" description="Opis artykułu" world="kryzys" slug="slug-artykulu">
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

        
      </div>
    </ArticleLayout>
  )
}