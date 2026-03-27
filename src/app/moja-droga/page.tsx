"use client"

import { useSaved } from "@/hooks/useSaved"
import { articles } from "@/content/articles"
import Link from "next/link"
import { useEffect, useState } from "react"

import UserJourneyProgress from "@/components/UserJourneyProgress"
import DailyMission from "@/features/home/DailyMission"
import AIRecommendations from "@/components/AIRecommendations"

export default function MyPath() {

  const { items } = useSaved("saved_items")
  const [lastTest, setLastTest] = useState<string | null>(null)

  useEffect(() => {
    const last = localStorage.getItem("mm_last_test")
    if (last) setLastTest(last)
  }, [])

  const savedArticles = articles.filter((a) =>
    items.includes(a.slug)
  )

  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-10">
          Twoja droga
        </h1>
        {!lastTest && (
        <p className="text-gray-500 mb-6">
        Zacznij od testu, aby zobaczyć swoją drogę.
        </p>
      )}

        <UserJourneyProgress />

        {lastTest && (
          <div className="border rounded-xl p-6 my-6">
            <p className="text-sm text-gray-500 mb-2">
              Ostatni test
            </p>
            <p className="font-semibold">
              {lastTest}
            </p>
          </div>
        )}

        <DailyMission />

        <AIRecommendations />

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-6">
            Zapisane materiały
          </h2>

          {savedArticles.length === 0 && (
            <p className="text-gray-600">
              Nie zapisałeś jeszcze żadnych materiałów.
            </p>
          )}

          <div className="space-y-6">
            {savedArticles.map((article) => (
              <Link
                key={article.slug}
                href={"/artykuly/" + article.slug}
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

      </div>

    </main>
  )
}