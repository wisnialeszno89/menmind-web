"use client"
import { useEffect, useState } from "react"

export default function RecentlyViewed() {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("recent")
    if (saved) setItems(JSON.parse(saved))
  }, [])

  if (!items.length) return null

  return (
    <section className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-sm text-neutral-500 mb-3">
          Ostatnio oglądane
        </h3>

        <div className="flex gap-3 flex-wrap">
          {items.map((i, idx) => (
            <span
              key={idx}
              className="text-sm border px-3 py-1 rounded"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}