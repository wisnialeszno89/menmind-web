import Link from "next/link"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

type Props = {
  world: string
  slug: string
}

type World = "kryzys" | "ojcostwo" | "odbudowa" | "wzrost"

const worlds: Record<World, any[]> = {
  kryzys,
  ojcostwo,
  odbudowa,
  wzrost
}

const worldLabels: Record<World,string> = {
  kryzys:"Kryzys",
  ojcostwo:"Ojcostwo",
  odbudowa:"Odbudowa",
  wzrost:"Wzrost"
}

function isWorld(value:string): value is World {
  return ["kryzys","ojcostwo","odbudowa","wzrost"].includes(value)
}

export default function RelatedArticles({ world, slug }: Props) {

  if(!isWorld(world)) return null

  const articles = worlds[world] || []

  const related = articles
    .filter(a => a.slug !== slug)
    .slice(0,3)

  if (related.length === 0) return null

  return (

    <div>

      <h3 className="text-2xl font-semibold mb-8">
        Możesz też przeczytać
      </h3>

      <div className="grid md:grid-cols-3 gap-6">

        {related.map(article => (

          <Link
            key={article.slug}
            href={`/${world}/${article.slug}`}
            className="group border rounded-xl p-6 hover:shadow-lg transition bg-white"
          >

            <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide">
              {worldLabels[world]}
            </div>

            <h4 className="font-semibold text-lg mb-2 group-hover:underline">
              {article.title}
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              {article.description}
            </p>

          </Link>

        ))}

      </div>

    </div>

  )

}