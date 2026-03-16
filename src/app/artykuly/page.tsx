import ArticleGrid from "@/components/ui/ArticleGrid"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

const articles = [
  ...kryzys,
  ...ojcostwo,
  ...odbudowa,
  ...wzrost
]

export default function Page() {

  return (

    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-semibold mb-12">
        Artykuły
      </h1>

      <ArticleGrid
        articles={articles}
        base="kryzys"
      />

    </main>

  )

}