"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type Time = "15" | "60" | "weekend"
type Age = "3-6" | "7-12" | "13+"
type Goal = "wiez" | "rozmowa" | "ruch"

const plans = {
  "15": {
    "3-6": {
      wiez: "Rysujecie razem → pytasz: co było dziś najlepsze → przytulasz",
      rozmowa: "Zabawa + pytanie: co dziś było śmieszne",
      ruch: "Wyścig po mieszkaniu + high five"
    },
    "7-12": {
      wiez: "Krótka gra → pytanie o szkołę",
      rozmowa: "3 pytania: trudne / dobre / ciekawe",
      ruch: "Spacer lub piłka"
    },
    "13+": {
      wiez: "Luźna rozmowa bez presji",
      rozmowa: "Pytanie: co Cię ostatnio wkurza",
      ruch: "Krótki spacer"
    }
  },
  "60": {
    "3-6": {
      wiez: "Budowanie LEGO + rozmowa",
      rozmowa: "Czytanie + pytania",
      ruch: "Plac zabaw"
    },
    "7-12": {
      wiez: "Planszówka + rozmowa",
      rozmowa: "Spacer + 3 pytania",
      ruch: "Rowery"
    },
    "13+": {
      wiez: "Wspólne gotowanie",
      rozmowa: "Kawa / herbata",
      ruch: "Sport"
    }
  },
  "weekend": {
    "3-6": {
      wiez: "Wycieczka + zabawa",
      rozmowa: "Zoo / park",
      ruch: "Plac zabaw"
    },
    "7-12": {
      wiez: "Wyjazd + aktywność",
      rozmowa: "Wycieczka + rozmowa",
      ruch: "Sport"
    },
    "13+": {
      wiez: "Cały dzień razem",
      rozmowa: "Wyjazd",
      ruch: "Sport"
    }
  }
}

export default function PlanCzasuZDzieckiem() {

  const [time, setTime] = useState<Time | null>(null)
  const [age, setAge] = useState<Age | null>(null)
  const [goal, setGoal] = useState<Goal | null>(null)
  const [done,setDone] = useState(false)
  const [history,setHistory] = useState<string[]>([])

  useEffect(()=>{
    const saved = localStorage.getItem("father-history")
    if(saved){
      setHistory(JSON.parse(saved))
    }
  },[])

  function markDone(){

    const entry = `${new Date().toLocaleDateString()} - ${time} - ${goal}`

    const newHistory = [...history, entry]

    setHistory(newHistory)
    setDone(true)

    localStorage.setItem("father-history", JSON.stringify(newHistory))
    localStorage.setItem("mm_last_action","father-plan")
  }

  const reset = () => {
    setTime(null)
    setAge(null)
    setGoal(null)
    setDone(false)
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
            Ruch
          </button>
        </div>
      )}

      {time && age && goal && (
        <div className="border rounded-xl p-8">

          <h2 className="text-xl font-semibold mb-4">
            Twój plan
          </h2>

          <p className="text-lg mb-6">
            {plans[time][age][goal]}
          </p>

          {!done && (
            <button
              onClick={markDone}
              className="w-full bg-black text-white py-3 rounded-lg mb-3"
            >
              Zrobione
            </button>
          )}

          {done && (
            <div className="space-y-3">

              <p className="text-green-600">
                ✔ zapisano spotkanie
              </p>

              <Link
                href="/narzedzia/tracker-kontaktu-z-dzieckiem"
                className="block border rounded-lg p-3 text-center"
              >
                Zaznacz w trackerze
              </Link>

            </div>
          )}

          <button
            onClick={reset}
            className="mt-6 text-sm text-gray-500"
          >
            Nowy plan
          </button>

        </div>
      )}

      {history.length > 0 && (
        <div className="mt-12 border rounded-xl p-6">

          <h3 className="font-semibold mb-4">
            Historia spotkań
          </h3>

          <div className="space-y-2 text-sm">
            {history.slice(-5).map((h,i)=>(
              <div key={i}>{h}</div>
            ))}
          </div>

        </div>
      )}

    </main>
  )
}