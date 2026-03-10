import { notFound } from "next/navigation"
import { worlds } from "@/data/worlds"
import { getPathArticles } from "@/lib/getPathArticles"
import { getToolsByWorld } from "@/lib/getToolsByCategory"
import Link from "next/link"

export async function generateStaticParams() {
  return worlds.map((world) => ({
    slug: world.slug
  }))
}

export default function WorldPage({ params }: { params: { slug: string } }) {

  const world = worlds.find((w) => w.slug === params.slug)

  if (!world) return notFound()

  const articles = getPathArticles(world.slug)
  const tools = getToolsByWorld(world.slug)

  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* HERO */}

        <h1 className="text-4xl font-semibold text-black mb-6">
          {world.name}
        </h1>

        <p className="text-black max-w-xl mb-16">
          {world.description}
        </p>

        {/* ARTYKUŁY */}

        {articles.length > 0 && (

          <section className="mb-20">

            <h2 className="text-2xl font-semibold text-black mb-6">
              Zrozum sytuację
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {articles.map((article) => (

                <Link
                  key={article.slug}
                  href={`/content/${article.slug}`}
                  className="border rounded-xl p-6 hover:shadow"
                >
                  <h3 className="font-semibold text-black mb-2">
                    {article.title}
                  </h3>

                  <p className="text-black text-sm">
                    {article.intro}
                  </p>

                </Link>

              ))}

            </div>

          </section>

        )}

        {/* NARZĘDZIA */}

        {tools.length > 0 && (

          <section className="mb-20">

            <h2 className="text-2xl font-semibold text-black mb-6">
              Narzędzia które mogą pomóc
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {tools.slice(0,4).map((tool) => (

                <Link
                  key={tool.slug}
                  href={`/narzedzia/${tool.slug}`}
                  className="border rounded-xl p-6 hover:shadow"
                >

                  <h3 className="font-semibold text-black mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-black text-sm">
                    {tool.description}
                  </p>

                </Link>

              ))}

            </div>

          </section>

        )}

        {/* NAVIMIND */}

        <section className="border rounded-xl p-8">

          <h2 className="text-xl font-semibold text-black mb-4">
            Nie jesteś pewien co zrobić?
          </h2>

          <p className="text-black mb-6">
            Możesz zacząć od rozmowy i uporządkowania sytuacji.
          </p>

          <Link
            href={`/navimind?state=${world.slug}`}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Porozmawiaj w NaviMind
          </Link>

        </section>

      </div>

    </main>
  )
}