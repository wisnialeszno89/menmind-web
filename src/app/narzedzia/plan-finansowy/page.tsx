"use client"

import { useState } from "react"
import Link from "next/link"

export default function PlanFinansowy() {

  const [checked, setChecked] = useState<number[]>([])

  const steps = [
    "Spisz wszystkie wydatki",
    "Spisz wszystkie długi",
    "Usuń niepotrzebne subskrypcje",
    "Ustal minimalne koszty życia",
    "Ustal priorytety płatności",
    "Zrób plan na najbliższe 30 dni",
    "Poszukaj dodatkowego źródła dochodu",
    "Ogranicz impulsywne wydatki"
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
        Plan wyjścia z chaosu finansowego
      </h1>

      <p className="text-gray-600 mb-6">
        Zacznij od podstaw. Małe kroki odzyskują kontrolę.
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
          Postęp
        </p>

        <p className="text-xl font-semibold">
          {percent}%
        </p>

      </div>

      {percent >= 50 && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-3">
            Zaczynasz odzyskiwać kontrolę.
          </p>

          <Link
            href="/narzedzia/mikro-kroki"
            className="underline"
          >
            Zrób pierwszy krok
          </Link>
        </div>
      )}

    </div>
  )
}