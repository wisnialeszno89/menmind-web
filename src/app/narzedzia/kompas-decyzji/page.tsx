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
          {/* PROGRESS */}
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
            Decyzja nie musi być idealna. Wybierz pierwszy krok.
          </p>

          <Link
            href="/navimind"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            👉 Przegadaj decyzję w NaviMind
          </Link>

          <Link
            href="/artykuly"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Przeczytaj artykuły
          </Link>

          <Link
            href="/praca"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Sprawdź możliwości pracy
          </Link>

        </div>
      )}

      {result === "zbierz" && (
        <div className="border rounded-xl p-6 space-y-4">

          <h2 className="text-xl font-semibold">
            Zbierz więcej danych
          </h2>

          <p>
            Warto doprecyzować sytuację zanim ruszysz.
          </p>

          <Link
            href="/navimind"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            👉 Przeanalizuj w NaviMind
          </Link>

          <Link
            href="/artykuly"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Zobacz artykuły
          </Link>

          <Link
            href="/praca"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Sprawdź kierunki pracy
          </Link>

        </div>
      )}

      {result === "poczekaj" && (
        <div className="border rounded-xl p-6 space-y-4">

          <h2 className="text-xl font-semibold">
            Najpierw stabilizacja
          </h2>

          <p>
            Decyzja może poczekać. Najpierw uspokój sytuację.
          </p>

          <Link
            href="/navimind"
            className="block bg-black text-white px-6 py-3 rounded-lg text-center"
          >
            👉 Porozmawiaj w NaviMind
          </Link>

          <Link
            href="/artykuly"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Przeczytaj artykuły
          </Link>

          <Link
            href="/praca"
            className="block border px-6 py-3 rounded-lg text-center"
          >
            Sprawdź pracę
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