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
    <main className="max-w-2xl mx-auto px-5 py-16">

      <h1 className="text-3xl font-semibold mb-3">
        Kompas decyzji
      </h1>

      <p className="text-gray-600 mb-8">
        Pomaga zdecydować: działać, poczekać czy zebrać dane.
      </p>

      {!result && (
        <>
          {/* PROGRESS BAR */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Postęp</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="border rounded-xl p-6">

            <p className="text-lg mb-8">
              {questions[current]}
            </p>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => handleAnswer(1)}
                className="w-full border py-4 rounded-lg text-lg active:scale-[0.98]"
              >
                Tak
              </button>

              <button
                onClick={() => handleAnswer(0)}
                className="w-full border py-4 rounded-lg text-lg active:scale-[0.98]"
              >
                Nie
              </button>

            </div>

            <p className="text-xs text-gray-500 mt-4">
              Nie musisz być pewny. Wystarczy pierwsza intuicja.
            </p>

          </div>
        </>
      )}

      {result === "dzialaj" && (
        <div className="border rounded-xl p-6 space-y-4">

          <h2 className="text-xl font-semibold">
            Czas działać
          </h2>

          <p>
            Masz wystarczająco sygnałów. Wybierz jeden krok.
          </p>

          <Link
            href="/narzedzia/plan-72h"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            👉 Zrób pierwszy krok (Plan 72h)
          </Link>

          <Link
            href="/wzrost/jak-podjac-decyzje"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Przeczytaj: jak podjąć decyzję
          </Link>

        </div>
      )}

      {result === "zbierz" && (
        <div className="border rounded-xl p-6 space-y-4">

          <h2 className="text-xl font-semibold">
            Zbierz dane
          </h2>

          <p>
            Doprecyzuj sytuację zanim ruszysz.
          </p>

          <Link
            href="/narzedzia/brain-dump"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            👉 Zrób brain dump
          </Link>

          <Link
            href="/kryzys/nie-wiem-co-robic-ze-swoim-zyciem"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Przeczytaj: brak kierunku
          </Link>

        </div>
      )}

      {result === "poczekaj" && (
        <div className="border rounded-xl p-6 space-y-4">

          <h2 className="text-xl font-semibold">
            Najpierw spokój
          </h2>

          <p>
            Decyzja może poczekać. Uspokój ciało.
          </p>

          <Link
            href="/narzedzia/reset"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            👉 Reset 90 sekund
          </Link>

          <Link
            href="/narzedzia/plan-72h"
            className="block border px-6 py-3 rounded-lg text-center"
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