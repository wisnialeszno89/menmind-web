import { notFound } from "next/navigation"
import ArticleLayout from "@/components/article/ArticleLayout"
import RelatedArticles from "@/components/RelatedArticles"

import { kryzys } from "@/content/kryzys"
import { ojcostwo } from "@/content/ojcostwo"
import { odbudowa } from "@/content/odbudowa"
import { wzrost } from "@/content/wzrost"

import { readingTime } from "@/lib/readingTime"

const worlds: Record<string, any[]> = {
  kryzys,
  ojcostwo,
  odbudowa,
  wzrost
}

export default async function Page({ params }: any) {

  const { world, slug } = await params

  const articles = worlds[world]

  if (!articles) return notFound()

  const article = articles.find((a) => a.slug === slug)

  if (!article) return notFound()

  const minutes = readingTime(article.content)

  return (

    <ArticleLayout
      title={article.title}
      description={article.description}
    >

      {/* META ARTYKUŁU */}

      <div className="text-sm text-gray-500 mb-10">

        <span className="mr-4">
          Świat: <strong>{world}</strong>
        </span>

        <span>
          Czas czytania: <strong>{minutes} min</strong>
        </span>

      </div>


      {/* TREŚĆ ARTYKUŁU */}

      {article.content.split("\n\n").map((paragraph: string, i: number) => {

        let formatted = paragraph
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/__(.*?)__/g, "<u>$1</u>")
          .replace(/• (.*?)(\n|$)/g, "<li>$1</li>")

        if (formatted.includes("<li>")) {
          return (
            <ul
              key={i}
              dangerouslySetInnerHTML={{ __html: formatted }}
              className="list-disc pl-6 space-y-2 mb-6"
            />
          )
        }

        return (
          <p
            key={i}
            dangerouslySetInnerHTML={{ __html: formatted }}
            className="text-lg leading-relaxed mb-6"
          />
        )

      })}


      {/* SEKCJA NARZĘDZI */}

      <div className="mt-16 p-8 bg-gray-50 rounded-xl">

        <h3 className="text-xl font-semibold mb-3">
          Co może Ci teraz pomóc
        </h3>

        <p className="text-gray-600 mb-4">
          Jeśli ten temat jest Ci bliski, możesz też skorzystać z narzędzi które pomagają uporządkować myśli i odzyskać kierunek.
        </p>

        <a
          href="/narzedzia"
          className="text-black font-medium underline"
        >
          Zobacz narzędzia
        </a>

      </div>


      {/* POLECANE ARTYKUŁY */}

      <div className="mt-20">

        <hr className="my-16 border-gray-200" />

<RelatedArticles
world={world}
slug={slug}
/>

      </div>


    </ArticleLayout>

  )

}