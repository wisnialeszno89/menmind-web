import Link from "next/link"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

const worlds = [
  { name: "kryzys", articles: kryzys },
  { name: "ojcostwo", articles: ojcostwo },
  { name: "odbudowa", articles: odbudowa },
  { name: "wzrost", articles: wzrost },
]

export default function HomeArticles() {

  const list = worlds.flatMap(world =>
    world.articles.slice(0, 2).map(article => ({
      ...article,
      world: world.name
    }))
  )

  return (

    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-semibold mb-12">
        Najczęściej czytane
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {list.map(article => (

          <Link
            key={article.slug}
            href={`/${article.world}/${article.slug}`}
            className="group border rounded-xl p-6 hover:shadow-lg transition"
          >

            <div className="text-xs uppercase text-gray-500 mb-2">
              {article.world}
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:underline">
              {article.title}
            </h3>

            <p className="text-sm text-gray-600">
              {article.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )

}