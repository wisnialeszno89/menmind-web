"use client"

import { useState } from "react"
import Link from "next/link"

export default function PlanPoRozstaniu() {

  const [checked, setChecked] = useState<number[]>([])

  const steps = [
    "Uporządkuj sen",
    "Zadbaj o jedzenie",
    "Ogranicz kontakt z byłą na minimum",
    "Wyjdź z domu (spacer / ruch)",
    "Porozmawiaj z jedną zaufaną osobą",
    "Zrób porządek w finansach",
    "Ustal plan dnia",
    "Zacznij małe działanie"
  ]

  const toggle = (i: number) => {
    setChecked(prev =>
      prev.includes(i)
        ? prev.filter(x => x !== i)
        : [...prev, i]
    )
  }

  const percent = Math.round((checked.length / steps.length) * 100)

  return (
    <div className="max-w-2xl mx-auto py-10">

      <h1 className="text-2xl font-bold mb-4">
        Plan odbudowy po rozstaniu
      </h1>

      <p className="text-gray-600 mb-6">
        Zaznacz co już robisz. Skup się na podstawach.
      </p>

      <div className="space-y-3">

        {steps.map((step, i) => (
          <label key={i} className="flex gap-2">

            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
            />

            {step}

          </label>
        ))}

      </div>

      <div className="mt-6 border rounded p-4">

        <p className="text-sm text-gray-500">
          Postęp odbudowy
        </p>

        <p className="text-xl font-semibold">
          {percent}%
        </p>

      </div>

      {percent >= 50 && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-3">
            Dobrze. Stabilizacja wraca.
          </p>

          <Link
            href="/narzedzia/test-kierunku"
            className="underline"
          >
            Sprawdź nowy kierunek
          </Link>
        </div>
      )}

    </div>
  )
}