"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

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
  const [history,setHistory] = useState<string[]>([])
  const [done,setDone] = useState(false)

  useEffect(()=>{
    const saved = localStorage.getItem("father-talks")
    if(saved){
      setHistory(JSON.parse(saved))
    }
  },[])

  function generate(ageKey: "3-6" | "7-12" | "13+") {
    const pool = questions[ageKey]
    const random = pool[Math.floor(Math.random() * pool.length)]
    setQuestion(random)
    setDone(false)
  }

  function markDone(){

    const entry = `${new Date().toLocaleDateString()} - ${question}`

    const updated = [...history, entry]

    setHistory(updated)
    setDone(true)

    localStorage.setItem("father-talks", JSON.stringify(updated))
    localStorage.setItem("mm_last_action","father-talk")
  }

  const streak = history.length

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Generator rozmów z dzieckiem
      </h1>

      <p className="text-gray-600 mb-10">
        Jedno pytanie dziennie buduje relację.
      </p>

      {!age && (
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

      {age && (
        <div className="border rounded-xl p-8 text-center">

          {!question && (
            <button
              onClick={() => generate(age)}
              className="border px-6 py-3 rounded-xl"
            >
              Wylosuj pytanie
            </button>
          )}

          {question && (
            <>
              <p className="text-xl mb-6">
                {question}
              </p>

              {!done && (
                <button
                  onClick={markDone}
                  className="bg-black text-white px-6 py-3 rounded-lg mb-4"
                >
                  Zadałem to pytanie
                </button>
              )}

              {done && (
                <p className="text-green-600 mb-4">
                  ✔ zapisano rozmowę
                </p>
              )}

              <div className="flex gap-3 justify-center">

                <button
                  onClick={() => generate(age)}
                  className="border px-6 py-2 rounded-xl"
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

              </div>

            </>
          )}

        </div>
      )}

      {history.length > 0 && (
        <div className="mt-10 border rounded-xl p-6">

          <p className="text-sm text-gray-500">
            Rozmowy
          </p>

          <p className="text-xl font-semibold">
            {streak}
          </p>

        </div>
      )}

      {done && (
        <div className="mt-6 space-y-3">

          <Link
            href="/narzedzia/plan-czasu-z-dzieckiem"
            className="block border rounded-lg p-3 text-center"
          >
            Zaplanuj czas razem
          </Link>

          <Link
            href="/narzedzia/checklista-obecnego-ojca"
            className="block bg-black text-white rounded-lg p-3 text-center"
          >
            Checklista ojca
          </Link>

        </div>
      )}

    </main>
  )
}