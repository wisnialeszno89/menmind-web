import { notFound } from "next/navigation"
import ArticleLayout from "@/components/ArticleLayout"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

import { readingTime } from "@/lib/readingTime"

type Article = {
  slug: string
  title: string
  description: string
  content: string
}

type World = "kryzys" | "ojcostwo" | "odbudowa" | "wzrost"

const worlds: Record<World, Article[]> = {
  kryzys,
  ojcostwo,
  odbudowa,
  wzrost
}

export function generateStaticParams() {
  return Object.entries(worlds).flatMap(([world, articles]) =>
    articles.map((a) => ({
      world,
      slug: a.slug
    }))
  )
}

export default function Page({
  params
}: {
  params: { world: string; slug: string }
}) {

  const { world, slug } = params

  const articles = worlds[world as World]

  if (!articles) return notFound()

  const article = articles.find((a) => a.slug === slug)

  if (!article) return notFound()

  const minutes = readingTime(article.content)

  const paragraphs = article.content
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean)

  return (

    <ArticleLayout
      title={article.title}
      description={article.description}
      world={world}
    >

      <p className="text-sm text-gray-500 mb-8">
        {minutes} min czytania
      </p>

      {paragraphs.map((paragraph, i) => (
        <p
          key={i}
          className="text-lg leading-relaxed mb-6"
        >
          {paragraph}
        </p>
      ))}

    </ArticleLayout>

  )

}