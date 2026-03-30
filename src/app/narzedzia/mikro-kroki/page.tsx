"use client"

import { useState } from "react"

export default function MikroKroki() {

  const [step, setStep] = useState(0)
  const [task, setTask] = useState("")

  const steps = [
    "Co chcesz ruszyć?",
    "Jaki jest najmniejszy możliwy krok?",
    "Ile to zajmie minut?",
    "Kiedy zrobisz to dziś?"
  ]

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1)
  }

  const reset = () => {
    setStep(0)
    setTask("")
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Plan mikro-kroków
      </h1>

      <p className="text-gray-600 mb-10">
        Gdy wiesz co robić, ale nie możesz ruszyć.
      </p>

      {step < steps.length && (
        <div className="border rounded-xl p-8">

          <p className="text-lg mb-6">
            {steps[step]}
          </p>

          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full border rounded-lg p-3 mb-6"
            placeholder="Wpisz..."
          />

          <button
            onClick={next}
            className="border px-6 py-3 rounded-lg hover:shadow"
          >
            Dalej
          </button>

        </div>
      )}

      {step === steps.length - 1 && task && (
        <div className="border rounded-xl p-8 mt-8">

          <h2 className="text-xl font-semibold mb-4">
            Twój pierwszy krok
          </h2>

          <p className="mb-6">
            Zrób to teraz: <strong>{task}</strong>
          </p>

          <p className="text-sm text-gray-500">
            Nie myśl. Zrób jeden krok.
          </p>

        </div>
      )}

      <button
        onClick={reset}
        className="mt-8 text-sm text-gray-500"
      >
        Zacznij od nowa
      </button>

    </main>
  )
}