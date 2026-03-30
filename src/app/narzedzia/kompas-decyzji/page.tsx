"use client"

import { useState } from "react"
import Link from "next/link"

const questions = [
  "Czy ta decyzja jest naprawdę ważna?",
  "Czy odwlekanie pogarsza sytuację?",
  "Czy masz wystarczająco danych?",
  "Czy boisz się konsekwencji?",
  "Czy to zgodne z Twoimi wartościami?"
]

export default function DecisionCompass() {

  const [answers, setAnswers] = useState<number[]>([])
  const [result, setResult] = useState<string | null>(null)

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (newAnswers.length === questions.length) {
      const score = newAnswers.reduce((a, b) => a + b, 0)

      if (score >= 4) {
        setResult("dzialaj")
      } else if (score >= 2) {
        setResult("zbierz")
      } else {
        setResult("poczekaj")
      }
    }
  }

  const reset = () => {
    setAnswers([])
    setResult(null)
  }

  const current = answers.length

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Kompas decyzji
      </h1>

      <p className="text-gray-600 mb-10">
        Pomaga zdecydować: działać, poczekać czy zebrać więcej informacji.
      </p>

      {!result && (
        <div className="border rounded-xl p-8">

          <p className="text-lg mb-6">
            {questions[current]}
          </p>

          <div className="flex gap-4">

            <button
              onClick={() => handleAnswer(1)}
              className="border px-6 py-3 rounded-lg hover:shadow"
            >
              Tak
            </button>

            <button
              onClick={() => handleAnswer(0)}
              className="border px-6 py-3 rounded-lg hover:shadow"
            >
              Nie
            </button>

          </div>

        </div>
      )}

      {result === "dzialaj" && (
        <div className="border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">
            Czas działać
          </h2>
          <p className="mb-6">
            Masz wystarczająco sygnałów, aby podjąć decyzję.
          </p>

          <Link
            href="/narzedzia/plan-72h"
            className="border px-6 py-3 rounded-lg inline-block hover:shadow"
          >
            Zrób plan 72h
          </Link>
        </div>
      )}

      {result === "zbierz" && (
        <div className="border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">
            Zbierz więcej danych
          </h2>
          <p className="mb-6">
            Decyzja jest ważna — warto chwilę ją doprecyzować.
          </p>

          <Link
            href="/narzedzia/brain-dump"
            className="border px-6 py-3 rounded-lg inline-block hover:shadow"
          >
            Zrób brain dump
          </Link>
        </div>
      )}

      {result === "poczekaj" && (
        <div className="border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">
            Daj sobie chwilę
          </h2>
          <p className="mb-6">
            Ta decyzja może poczekać. Najpierw odzyskaj spokój.
          </p>

          <Link
            href="/narzedzia/reset"
            className="border px-6 py-3 rounded-lg inline-block hover:shadow"
          >
            Zrób szybki reset
          </Link>
        </div>
      )}

      {result && (
        <button
          onClick={reset}
          className="mt-8 text-sm text-gray-500"
        >
          Zacznij od nowa
        </button>
      )}

    </main>
  )
}