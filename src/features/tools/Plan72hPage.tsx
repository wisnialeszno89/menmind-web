"use client"

import { useState } from "react"

export default function Plan72hPage() {

  const [checked, setChecked] = useState<string[]>([])

  const tasks = [
    "Sen: minimum 7h",
    "Ruch: 20 min",
    "Kontakt: jedna rozmowa",
    "Porządek: ogarnij 1 rzecz"
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

        <h1 className="text-3xl font-semibold mb-6">
          Plan 72h
        </h1>

        <p className="text-gray-600 mb-10">
          Skup się na podstawach przez najbliższe 3 dni.
        </p>

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
