"use client"

import { useState } from "react"

type Time = "15" | "60" | "weekend"
type Age = "3-6" | "7-12" | "13+"
type Goal = "wiez" | "rozmowa" | "ruch"

const plans = {
  "15": {
    "3-6": {
      wiez: "Rysujecie razem → pytasz: co było dziś najlepsze → przytulasz → koniec",
      rozmowa: "Zabawa + 1 pytanie: co dziś było śmieszne",
      ruch: "Wyścig po mieszkaniu + high five"
    },
    "7-12": {
      wiez: "Krótka gra → pytanie o szkołę → wspólny śmiech",
      rozmowa: "3 pytania: co było trudne / dobre / ciekawe",
      ruch: "Krótki spacer lub piłka"
    },
    "13+": {
      wiez: "Luźna rozmowa bez presji",
      rozmowa: "Pytanie: co Cię ostatnio wkurza",
      ruch: "Krótki spacer razem"
    }
  }
}

export default function PlanCzasuZDzieckiem() {

  const [time, setTime] = useState<Time | null>(null)
  const [age, setAge] = useState<Age | null>(null)
  const [goal, setGoal] = useState<Goal | null>(null)

  const reset = () => {
    setTime(null)
    setAge(null)
    setGoal(null)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-6">
        Plan czasu z dzieckiem
      </h1>

      {!time && (
        <div className="space-y-3">
          <button onClick={() => setTime("15")} className="border p-4 rounded-xl w-full text-left">
            Mam 15 minut
          </button>
          <button onClick={() => setTime("60")} className="border p-4 rounded-xl w-full text-left">
            Mam godzinę
          </button>
          <button onClick={() => setTime("weekend")} className="border p-4 rounded-xl w-full text-left">
            Mam weekend
          </button>
        </div>
      )}

      {time && !age && (
        <div className="space-y-3">
          <button onClick={() => setAge("3-6")} className="border p-4 rounded-xl w-full text-left">
            3–6 lat
          </button>
          <button onClick={() => setAge("7-12")} className="border p-4 rounded-xl w-full text-left">
            7–12 lat
          </button>
          <button onClick={() => setAge("13+")} className="border p-4 rounded-xl w-full text-left">
            13+ lat
          </button>
        </div>
      )}

      {time && age && !goal && (
        <div className="space-y-3">
          <button onClick={() => setGoal("wiez")} className="border p-4 rounded-xl w-full text-left">
            Budować więź
          </button>
          <button onClick={() => setGoal("rozmowa")} className="border p-4 rounded-xl w-full text-left">
            Porozmawiać
          </button>
          <button onClick={() => setGoal("ruch")} className="border p-4 rounded-xl w-full text-left">
            Ruch / energia
          </button>
        </div>
      )}

      {time && age && goal && (
        <div className="border rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-4">
            Twój plan
          </h2>

          <p className="text-lg">
            {plans[time][age][goal]}
          </p>

          <button
            onClick={reset}
            className="mt-8 text-sm text-gray-500"
          >
            Zacznij od nowa
          </button>

        </div>
      )}

    </main>
  )
}