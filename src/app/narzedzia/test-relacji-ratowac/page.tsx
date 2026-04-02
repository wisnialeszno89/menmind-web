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
        <div className="mt-6 border rounded-xl p-5 space-y-4">

          <p>
            Relacja ma fundament. Warto spróbować odbudowy.
          </p>

          <div className="space-y-2">

            <Link
              href="/narzedzia/generator-rozmowy-w-zwiazku"
              className="block border p-3 rounded-lg"
            >
              👉 Zacznij rozmowę
            </Link>

            <Link
              href="/relacje/jak-rozmawiac-w-zwiazku"
              className="block border p-3 rounded-lg"
            >
              Przeczytaj: jak rozmawiać w związku
            </Link>

            <Link
              href="/narzedzia/plan-rozmowy"
              className="block border p-3 rounded-lg"
            >
              Przygotuj plan rozmowy
            </Link>

          </div>

        </div>
      )}

      {result === "niepewne" && (
        <div className="mt-6 border rounded-xl p-5 space-y-4">

          <p>
            Sytuacja jest niejednoznaczna. Potrzebna spokojna decyzja.
          </p>

          <div className="space-y-2">

            <Link
              href="/narzedzia/kompas-decyzji"
              className="block border p-3 rounded-lg"
            >
              👉 Użyj kompasu decyzji
            </Link>

            <Link
              href="/relacje/kryzys-w-zwiazku"
              className="block border p-3 rounded-lg"
            >
              Przeczytaj: kryzys w związku
            </Link>

            <Link
              href="/navimind"
              className="block border p-3 rounded-lg"
            >
              Porozmawiaj w NaviMind
            </Link>

          </div>

        </div>
      )}

      {result === "puscic" && (
        <div className="mt-6 border rounded-xl p-5 space-y-4">

          <p>
            Relacja może być wyczerpana. Warto skupić się na odbudowie siebie.
          </p>

          <div className="space-y-2">

            <Link
              href="/narzedzia/plan-po-rozstaniu"
              className="block border p-3 rounded-lg"
            >
              👉 Plan po rozstaniu
            </Link>

            <Link
              href="/kryzys/po-rozstaniu-czuje-pustke"
              className="block border p-3 rounded-lg"
            >
              Przeczytaj: co po rozstaniu
            </Link>

            <Link
              href="/narzedzia/plan-72h"
              className="block border p-3 rounded-lg"
            >
              Zacznij stabilizację 72h
            </Link>

          </div>

        </div>
      )}

    </div>
  )
}