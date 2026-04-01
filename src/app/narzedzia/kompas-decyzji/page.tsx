"use client"

import { useState, useEffect } from "react"
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

  const current = answers.length
  const progress = Math.round((current / questions.length) * 100)

  const handleAnswer = (value: number) => {

    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (newAnswers.length === questions.length) {

      const score = newAnswers.reduce((a, b) => a + b, 0)

      if (score >= 4) setResult("dzialaj")
      else if (score >= 2) setResult("zbierz")
      else setResult("poczekaj")

      localStorage.setItem("decisionCompass", score.toString())
    }
  }

  const reset = () => {
    setAnswers([])
    setResult(null)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Kompas decyzji
      </h1>

      <p className="text-gray-600 mb-6">
        Pomaga zdecydować: działać, poczekać czy zebrać dane.
      </p>

      {!result && (
        <>
          <div className="border rounded-lg p-3 mb-6">
            Postęp: {progress}%
          </div>

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
        </>
      )}

      {result === "dzialaj" && (
        <div className="border rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-4">
            Czas działać
          </h2>

          <p className="mb-6">
            Masz wystarczająco sygnałów. Wybierz jeden krok.
          </p>

          <Link
            href="/narzedzia/plan-72h"
            className="block border px-6 py-3 rounded-lg mb-3 text-center"
          >
            Plan 72h
          </Link>

          <Link
            href="/narzedzia/mikro-kroki"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            Mikro krok
          </Link>

        </div>
      )}

      {result === "zbierz" && (
        <div className="border rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-4">
            Zbierz dane
          </h2>

          <p className="mb-6">
            Doprecyzuj sytuację zanim ruszysz.
          </p>

          <Link
            href="/narzedzia/brain-dump"
            className="block border px-6 py-3 rounded-lg mb-3 text-center"
          >
            Brain dump
          </Link>

          <Link
            href="/narzedzia/test-sytuacji"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            Test sytuacji
          </Link>

        </div>
      )}

      {result === "poczekaj" && (
        <div className="border rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-4">
            Najpierw spokój
          </h2>

          <p className="mb-6">
            Decyzja może poczekać. Uspokój ciało.
          </p>

          <Link
            href="/narzedzia/reset"
            className="block border px-6 py-3 rounded-lg mb-3 text-center"
          >
            Reset 90
          </Link>

          <Link
            href="/narzedzia/plan-72h"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            Stabilizacja 72h
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