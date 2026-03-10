"use client"

import { useSaved } from "@/hooks/useSaved"
import { articles } from "@/content/articles"
import Link from "next/link"

export default function MyPath() {

  const { items } = useSaved("saved_items")

  const savedArticles = articles.filter((a) =>
    items.includes(a.slug)
  )

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-10">
          Moja droga
        </h1>

        {savedArticles.length === 0 && (
          <p className="text-gray-600">
            Nie zapisałeś jeszcze żadnych materiałów.
          </p>
        )}

        <div className="space-y-6">

          {savedArticles.map((article) => (

            <Link
              key={article.slug}
              href={`/content/${article.slug}`}
              className="border rounded-lg p-4 hover:shadow block"
            >

              <h3 className="font-semibold">
                {article.title}
              </h3>

              <p className="text-sm text-gray-600">
                {article.intro}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </main>

  )

}