"use client"

import { useState } from "react"
import ArticleGrid from "@/components/ui/ArticleGrid"
import { allArticles } from "@/content"

const filters = [
  { key: "all", label: "Wszystko" },
  { key: "kryzys", label: "Kryzys" },
  { key: "odbudowa", label: "Odbudowa" },
  { key: "wzrost", label: "Wzrost" },
  { key: "ojcostwo", label: "Ojcostwo" }
]

export default function Page() {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all"
      ? allArticles
      : allArticles.filter(a => a.world === active)

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-semibold mb-6">
        Artykuły
      </h1>

      <p className="text-gray-600 mb-10">
        Artykuły pomagające mężczyznom poukładać kryzys,
        relacje, finanse i kierunek życia.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={
              "px-4 py-2 rounded-lg border text-sm " +
              (active === f.key
                ? "bg-black text-white"
                : "hover:bg-neutral-100")
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <ArticleGrid articles={filtered} />

    </main>
  )
}