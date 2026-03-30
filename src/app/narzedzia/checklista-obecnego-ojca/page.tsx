"use client"

import { useState } from "react"

const checklist = [
  "Poświęciłem dziecku dziś 10 minut bez telefonu",
  "Zadałem przynajmniej jedno pytanie o jego dzień",
  "Powiedziałem coś wspierającego",
  "Byłem spokojny w trudnej sytuacji",
  "Zrobiliśmy coś razem (choćby małego)",
  "Okazałem fizyczną bliskość (przytulenie / gest)",
  "Nie krytykowałem bez wyjaśnienia",
  "Byłem naprawdę obecny"
]

export default function ChecklistaOjca() {

  const [checked, setChecked] = useState<number[]>([])

  const toggle = (i: number) => {
    setChecked(prev =>
      prev.includes(i)
        ? prev.filter(x => x !== i)
        : [...prev, i]
    )
  }

  const percent = Math.round((checked.length / checklist.length) * 100)

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Checklista obecnego ojca
      </h1>

      <p className="text-gray-600 mb-8">
        Nie chodzi o perfekcję. Chodzi o obecność.
      </p>

      <div className="space-y-3">

        {checklist.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`w-full text-left p-4 rounded-xl border transition
              ${checked.includes(i)
                ? "bg-black text-white border-black"
                : "hover:shadow"
              }`}
          >
            {item}
          </button>
        ))}

      </div>

      <div className="mt-10 border rounded-xl p-6">

        <p className="text-sm text-gray-500 mb-2">
          Dzisiejsza obecność
        </p>

        <p className="text-2xl font-semibold">
          {percent}%
        </p>

        {percent >= 70 && (
          <p className="text-green-600 mt-2 text-sm">
            Dobra robota. Jesteś obecny.
          </p>
        )}

      </div>

    </main>
  )
}