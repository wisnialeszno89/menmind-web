import ArticleGrid from "@/components/ui/ArticleGrid"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

import { Article } from "@/types/article"

const worlds: Record<string, Article[]> = {
  kryzys,
  ojcostwo,
  odbudowa,
  wzrost
}

type Props = {
  world: keyof typeof worlds
}

export default function WorldArticles({ world }: Props) {

  const articles = worlds[world] ?? []

  if (!articles.length) return null

  return (

    <section className="mt-16">

      <h2 className="text-2xl font-semibold mb-8">
        Artykuły
      </h2>

      <ArticleGrid
        articles={articles}
        base={world}
      />

    </section>

  )

}