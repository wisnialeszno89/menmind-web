import { ReactNode } from "react"
import Link from "next/link"

import ExploreTools from "@/components/ExploreTools"
import RelatedArticles from "@/components/RelatedArticles"
import ArticlePartners from "@/features/articles/ArticlePartners"
import NextSteps from "@/components/NextSteps"
import ArticleCTA from "@/features/articles/ArticleCTA"

import AIRecommendedTests from "@/components/AIRecommendedTests"
import StickyTestCTA from "@/components/StickyTestCTA"

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

  return (

    <article className="max-w-3xl mx-auto px-6 py-16">

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


      {/* AI TEST */}
      <AIRecommendedTests />


      {/* PARTNER CTA */}
      <ArticleCTA world={world} />


      {/* PARTNERZY */}
      <ArticlePartners world={world} />


      {/* POWIĄZANE ARTYKUŁY */}
      {slug && (
        <RelatedArticles
          world={world}
          slug={slug}
        />
      )}


      {/* NEXT STEPS */}
      <NextSteps world={world} />


      {/* STICKY TEST */}
      <StickyTestCTA />

    </article>

  )

}