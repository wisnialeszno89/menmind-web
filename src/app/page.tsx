import { notFound } from "next/navigation"
import ArticleLayout from "@/components/ArticleLayout"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

import { readingTime } from "@/lib/readingTime"
import { articleSchema } from "@/lib/articleSchema"

type Article = {
  slug: string
  title: string
  description: string
  content: string
}

type World =
  | "kryzys"
  | "ojcostwo"
  | "odbudowa"
  | "wzrost"

const worlds: Record<World, Article[]> = {
  kryzys,
  ojcostwo,
  odbudowa,
  wzrost
}

function isWorld(value: string): value is World {
  return [
    "kryzys",
    "ojcostwo",
    "odbudowa",
    "wzrost"
  ].includes(value)
}

export function generateStaticParams() {

  return Object.entries(worlds).flatMap(
    ([world, articles]) =>
      articles.map((a) => ({
        world,
        slug: a.slug
      }))
  )

}

export function generateMetadata({
  params
}: {
  params: { world: string; slug: string }
}) {

  const { world, slug } = params

  if (!isWorld(world)) return {}

  const article = worlds[world].find(
    (a) => a.slug === slug
  )

  if (!article) return {}

  return {

    title: `${article.title} | MenMind`,

    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://menmind.app/${world}/${slug}`,
      type: "article"
    }

  }

}

export default function Page({
  params
}: {
  params: { world: string; slug: string }
}) {

  const { world, slug } = params

  if (!isWorld(world)) return notFound()

  const articles = worlds[world]

  const article = articles.find(
    (a) => a.slug === slug
  )

  if (!article) return notFound()

  const minutes = readingTime(article.content)

  const paragraphs = article.content
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean)

  const schema = articleSchema({
    title: article.title,
    description: article.description,
    slug: `${world}/${slug}`
  })

  return (

    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />

      <ArticleLayout
        title={article.title}
        description={article.description}
        world={world}
        slug={slug}
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

    </>

  )

}