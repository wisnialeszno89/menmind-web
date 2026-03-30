"use client"

import { useState } from "react"
import Link from "next/link"

export default function TestPrzeciazenia() {

  const [checked, setChecked] = useState<number[]>([])
  const [result, setResult] = useState<string | null>(null)

  const questions = [
    "Ciągłe napięcie",
    "Problemy ze snem",
    "Brak koncentracji",
    "Rozdrażnienie",
    "Brak energii",
    "Unikanie ludzi",
    "Przeciążenie obowiązkami",
    "Poczucie przytłoczenia"
  ]

  const toggle = (i: number) => {
    setChecked(prev =>
      prev.includes(i)
        ? prev.filter(x => x !== i)
        : [...prev, i]
    )
  }

  const calculate = () => {
    const score = checked.length

    if (score >= 6) setResult("wysokie")
    else if (score >= 3) setResult("srednie")
    else setResult("niskie")
  }

  return (
    <div className="max-w-2xl mx-auto py-10">

      <h1 className="text-2xl font-bold mb-4">
        Test przeciążenia psychicznego
      </h1>

      <div className="space-y-3">

        {questions.map((q, i) => (
          <label key={i} className="flex gap-2">

            <input
              type="checkbox"
              onChange={() => toggle(i)}
              checked={checked.includes(i)}
            />

            {q}

          </label>
        ))}

      </div>

      {!result && (
        <button
          onClick={calculate}
          className="mt-6 px-4 py-2 bg-black text-white rounded"
        >
          Oblicz
        </button>
      )}

      {result === "wysokie" && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-4">
            Wysokie przeciążenie. Zwolnij i odzyskaj stabilność.
          </p>

          <Link
            href="/narzedzia/minimum-stabilizacji"
            className="underline"
          >
            Minimum stabilizacji
          </Link>
        </div>
      )}

      {result === "srednie" && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-4">
            Średnie przeciążenie. Warto zrobić reset.
          </p>

          <Link
            href="/narzedzia/reset"
            className="underline"
          >
            Reset 90 sekund
          </Link>
        </div>
      )}

      {result === "niskie" && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-4">
            Trzymasz poziom. Możesz działać dalej.
          </p>

          <Link
            href="/narzedzia/test-kierunku"
            className="underline"
          >
            Test kierunku życia
          </Link>
        </div>
      )}

    </div>
  )
}