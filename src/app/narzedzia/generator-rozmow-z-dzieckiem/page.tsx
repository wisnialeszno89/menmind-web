"use client"

import { useState } from "react"

const questions = {
  "3-6": [
    "Co dziś było najfajniejsze?",
    "Z czego dziś się śmiałeś?",
    "Gdybyś był zwierzęciem dziś, to jakim?",
    "Co chcesz zrobić jutro razem?"
  ],
  "7-12": [
    "Co dziś było najtrudniejsze?",
    "Kto Cię dziś rozśmieszył?",
    "Czego się dziś nauczyłeś?",
    "Co byś zmienił w dzisiejszym dniu?"
  ],
  "13+": [
    "Co Cię ostatnio wkurza?",
    "Co teraz jest dla Ciebie ważne?",
    "Czego potrzebujesz ode mnie?",
    "Co u Ciebie naprawdę?"
  ]
}

export default function GeneratorRozmowZDzieckiem() {

  const [age, setAge] = useState<"3-6" | "7-12" | "13+" | null>(null)
  const [question, setQuestion] = useState<string | null>(null)

  const generate = (ageKey: "3-6" | "7-12" | "13+") => {
    const pool = questions[ageKey]
    const random = pool[Math.floor(Math.random() * pool.length)]
    setQuestion(random)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Generator rozmów z dzieckiem
      </h1>

      <p className="text-gray-600 mb-10">
        Jedno pytanie, które otwiera rozmowę.
      </p>

      {!age && (
        <div className="space-y-3">

          <button
            onClick={() => setAge("3-6")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            3–6 lat
          </button>

          <button
            onClick={() => setAge("7-12")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            7–12 lat
          </button>

          <button
            onClick={() => setAge("13+")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            13+ lat
          </button>

        </div>
      )}

      {age && (
        <div className="border rounded-xl p-8 text-center">

          {!question && (
            <button
              onClick={() => generate(age)}
              className="border px-6 py-3 rounded-xl hover:shadow"
            >
              Wylosuj pytanie
            </button>
          )}

          {question && (
            <>
              <p className="text-xl mb-6">
                {question}
              </p>

              <button
                onClick={() => generate(age)}
                className="border px-6 py-2 rounded-xl hover:shadow mr-3"
              >
                Inne pytanie
              </button>

              <button
                onClick={() => {
                  setAge(null)
                  setQuestion(null)
                }}
                className="text-sm text-gray-500"
              >
                Zmień wiek
              </button>
            </>
          )}

        </div>
      )}

    </main>
  )
}