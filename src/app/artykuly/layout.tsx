"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"

import ExploreTools from "@/components/ExploreTools"
import AIRecommendedTests from "@/components/AIRecommendedTests"
import RelatedArticles from "@/features/articles/RelatedArticles"
import NextSteps from "@/components/NextSteps"
import ArticleCTA from "@/features/articles/ArticleCTA"

export default function ArticlesLayout({
  children
}: {
  children: ReactNode
}) {
  const pathname = usePathname()

  const slug = pathname?.split("/").pop() || "article"
  const world = "kryzys"

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <article className="prose prose-lg max-w-none mb-16">
        {children}
      </article>

      <ExploreTools />

      <section className="mt-16">
        <AIRecommendedTests world={world} slug={slug} />
      </section>

      <section className="mt-16">
        <RelatedArticles world={world} slug={slug} />
      </section>

      <ArticleCTA world={world} slug={slug} />
      <NextSteps world={world} slug={slug} />

    </div>
  )
}