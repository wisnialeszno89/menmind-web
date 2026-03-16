import { ReactNode } from "react"
import Link from "next/link"

import NavimindEmbed from "@/features/navimind/NavimindEmbed"
import ExploreTools from "@/components/ExploreTools"
import RelatedArticles from "@/features/articles/RelatedArticles"
import ArticlePartners from "@/features/articles/ArticlePartners"
import NextSteps from "@/components/NextSteps"

import { navimindLink } from "@/lib/navimind"
import StateScale from "@/features/tools/StateScale"

type Props = {
  title: string
  description: string
  world: string
  slug?: string
  children: ReactNode
}

export default function ArticleLayout({
  title,
  description,
  world,
  slug,
  children
}: Props) {

  const navimind = navimindLink({
    state: world,
    article: slug || "article"
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: "MenMind"
    },
    publisher: {
      "@type": "Organization",
      name: "MenMind"
    }
  }

  return (

    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* SEO SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />

      {/* BREADCRUMB */}

      <div className="text-sm text-gray-500 mb-6">

        <Link href="/" className="hover:underline">
          MenMind
        </Link>

        {" / "}

        <Link
          href={`/${world}`}
          className="hover:underline capitalize"
        >
          {world}
        </Link>

      </div>


      {/* HEADER */}

      <header className="mb-12">

        <h1 className="text-4xl font-semibold mb-4">
          {title}
        </h1>

        <p className="text-xl text-gray-600">
          {description}
        </p>

      </header>


      {/* CONTENT */}

      <div className="prose prose-lg max-w-none mb-16">

        {children}

      </div>


      {/* NARZĘDZIA */}

      <ExploreTools />


      {/* NAVIMIND */}

      <section className="mt-20 border-t pt-12">

        <h3 className="text-xl font-semibold mb-4">
          Potrzebujesz rozmowy lub wskazówki?
        </h3>

        <p className="text-neutral-600 mb-6">
          Jeśli trudno Ci o tym z kimś porozmawiać,
          możesz zapytać NaviMind.
          To asystent AI stworzony,
          aby pomóc przejść przez trudne momenty.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">

          <a
            href={navimind}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white rounded-lg px-6 py-3 hover:opacity-90"
          >
            Porozmawiaj z NaviMind
          </a>

          <Link
            href="/navimind"
            className="border rounded-lg px-6 py-3 hover:shadow"
          >
            Zobacz czym jest NaviMind
          </Link>

        </div>

        <NavimindEmbed state={world} />

      </section>


      {/* PARTNERZY */}

      <ArticlePartners world={world} />


      {/* POWIĄZANE ARTYKUŁY */}

      {slug && (
        <section className="mt-20">
          <RelatedArticles world={world} slug={slug} />
        </section>
      )}


      {/* NEXT STEPS */}

      <NextSteps world={world} />
      <StateScale value={5} />


    </article>

  )

}