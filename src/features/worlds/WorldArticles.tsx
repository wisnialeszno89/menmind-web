import ArticleGrid from "@/components/ui/ArticleGrid"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

const worlds = {
  kryzys,
  ojcostwo,
  odbudowa,
  wzrost
}

export default function WorldArticles({
  world
}: {
  world: keyof typeof worlds
}) {

  const articles = worlds[world]

  if (!articles?.length) return null

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