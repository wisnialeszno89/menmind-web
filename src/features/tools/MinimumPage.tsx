"use client"

import { useState } from "react"

export default function MinimumPage() {

  const [checked, setChecked] = useState<string[]>([])

  const tasks = [
    "7 godzin snu",
    "20 minut ruchu",
    "jedna trudna rzecz",
    "zero alkoholu"
  ]

  function toggle(task: string) {
    setChecked(prev =>
      prev.includes(task)
        ? prev.filter(t => t !== task)
        : [...prev, task]
    )
  }

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold mb-10">
          Minimum dnia
        </h1>

        <div className="space-y-4">

          {tasks.map(task => (
            <div
              key={task}
              onClick={() => toggle(task)}
              className="border rounded-lg p-4 cursor-pointer flex justify-between"
            >

              <span className={checked.includes(task) ? "line-through text-gray-500" : ""}>
                {task}
              </span>

              <span>
                {checked.includes(task) ? "✓" : ""}
              </span>

            </div>
          ))}

        </div>

      </div>
    </main>
  )
}
import Link from "next/link"
<div className="mt-12 space-y-4">

  <Link
    href="/narzedzia/reset-90"
    className="block border p-4 rounded-lg hover:shadow"
  >
    Zrób szybki reset
  </Link>

  <Link
    href="/sciezki"
    className="block border p-4 rounded-lg hover:shadow"
  >
    Zobacz ścieżki działania
  </Link>

</div>