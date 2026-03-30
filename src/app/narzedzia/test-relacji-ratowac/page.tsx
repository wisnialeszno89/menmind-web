"use client"

import { useState } from "react"
import Link from "next/link"

export default function TestRelacjiRatowac() {

  const [checked, setChecked] = useState<number[]>([])
  const [result, setResult] = useState<string | null>(null)

  const questions = [
    "Nadal jest szacunek",
    "Potraficie rozmawiać spokojnie",
    "Oboje chcecie poprawy",
    "Nie ma przemocy (psychicznej / fizycznej)",
    "Są jeszcze dobre momenty",
    "Problem pojawił się niedawno",
    "Jest gotowość do pracy nad relacją",
    "Nie ma całkowitej obojętności"
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

    if (score >= 6) setResult("ratowac")
    else if (score >= 3) setResult("niepewne")
    else setResult("puscic")
  }

  return (
    <div className="max-w-2xl mx-auto py-10">

      <h1 className="text-2xl font-bold mb-4">
        Test relacji — czy warto ratować
      </h1>

      <div className="space-y-3">

        {questions.map((q, i) => (
          <label key={i} className="flex gap-2">

            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
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

      {result === "ratowac" && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-4">
            Relacja ma fundament. Warto spróbować odbudowy.
          </p>

          <Link
            href="/narzedzia/generator-rozmowy-w-zwiazku"
            className="underline"
          >
            Zacznij rozmowę
          </Link>
        </div>
      )}

      {result === "niepewne" && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-4">
            Sytuacja jest niejednoznaczna. Potrzebna spokojna rozmowa.
          </p>

          <Link
            href="/narzedzia/kompas-decyzji"
            className="underline"
          >
            Użyj kompasu decyzji
          </Link>
        </div>
      )}

      {result === "puscic" && (
        <div className="mt-6 border rounded p-4">
          <p className="mb-4">
            Relacja może być wyczerpana. Warto pomyśleć o odbudowie siebie.
          </p>

          <Link
            href="/narzedzia/plan-po-rozstaniu"
            className="underline"
          >
            Plan po rozstaniu
          </Link>
        </div>
      )}

    </div>
  )
}