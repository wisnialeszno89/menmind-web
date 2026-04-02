"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const tasks = [
  {
    title: "Sen: minimum 7h",
    hint: "Idź spać wcześniej. Sen stabilizuje emocje."
  },
  {
    title: "Ruch: 20 min",
    hint: "Wyjdź na 20 minut. Nie analizuj. Po prostu idź."
  },
  {
    title: "Kontakt: jedna rozmowa",
    hint: "Napisz do jednej osoby. Krótko wystarczy."
  },
  {
    title: "Porządek: ogarnij 1 rzecz",
    hint: "Ogarnij jedną rzecz. Reszta poczeka."
  }
]

export default function Plan72hPage() {

  const [day,setDay] = useState(1)
  const [checked,setChecked] = useState<string[]>([])
  const [justDone,setJustDone] = useState("")
  const [activeHint,setActiveHint] = useState("")

  useEffect(()=>{
    const saved = localStorage.getItem("plan72h")
    if(saved){
      const parsed = JSON.parse(saved)
      setDay(parsed.day)
      setChecked(parsed.checked)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("plan72h",
      JSON.stringify({day,checked})
    )
  },[day,checked])

  function toggle(taskKey:string, hint:string){
    setChecked(prev =>
      prev.includes(taskKey)
        ? prev.filter(t=>t!==taskKey)
        : [...prev,taskKey]
    )

    setJustDone("Dobry ruch. Stabilizacja zaczyna się od takich kroków.")
    setActiveHint(hint)

    setTimeout(()=>{
      setJustDone("")
    },2000)
  }

  const progress =
    Math.round((checked.length / (tasks.length * 3)) * 100)

  function nextDay(){
    setDay(prev => Math.min(prev + 1,3))
  }

  const completedToday =
    checked.filter(t => t.startsWith(`D${day}`)).length

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold mb-2">
          Plan 72h
        </h1>

        <p className="text-gray-600 mb-8">
          Małe kroki przez 3 dni pomagają odzyskać stabilność.
        </p>

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

        {/* NAJWAŻNIEJSZE ZADANIE */}
        <div className="mb-6 border rounded-xl p-4 bg-neutral-50">
          <p className="text-xs text-gray-500 mb-1">
            Najważniejsze na dziś
          </p>
          <p className="font-semibold">
            Zacznij od: {tasks[0].title}
          </p>
        </div>

        {/* DAY */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">
            Dzień {day} / 3
          </h2>

          <span className="text-sm text-gray-500">
            {completedToday} / {tasks.length}
          </span>
        </div>

        {/* TASKS */}
        <div className="space-y-3">

          {tasks.map(task => {

            const key = `D${day}-${task.title}`
            const isChecked = checked.includes(key)

            return (
              <div
                key={key}
                onClick={()=>toggle(key, task.hint)}
                className={`border rounded-lg p-4 cursor-pointer transition
                  ${isChecked ? "bg-neutral-50" : "hover:bg-neutral-50"}
                `}
              >

                <div className="flex justify-between mb-1">
                  <span className={isChecked ? "line-through text-gray-500" : ""}>
                    {task.title}
                  </span>

                  <span className="font-semibold">
                    {isChecked ? "✓" : ""}
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  {task.hint}
                </p>

              </div>
            )
          })}

        </div>

        {/* FEEDBACK */}
        {justDone && (
          <div className="mt-4 border rounded-lg p-3 bg-neutral-50">
            <p className="text-sm text-green-600">
              ✔ {justDone}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {activeHint}
            </p>
          </div>
        )}

        {/* WYSTARCZY 1 RZECZ */}
        <p className="text-xs text-gray-500 mt-4">
          Jeśli zrobisz dziś tylko jedną rzecz — to już postęp.
        </p>

        {/* FEEDBACK PO 2 */}
        {completedToday >= 2 && (
          <div className="mt-3 text-sm text-green-600">
            ✔ Wystarczająco na dziś. Reszta opcjonalna.
          </div>
        )}

        {/* NEXT DAY */}
        {completedToday === tasks.length && day < 3 && (
          <button
            onClick={nextDay}
            className="w-full mt-8 bg-black text-white py-3 rounded-lg"
          >
            Przejdź do dnia {day + 1}
          </button>
        )}

        {/* FINISH */}
        {progress === 100 && (
          <div className="mt-10 space-y-4">

            <div className="border rounded-xl p-6 bg-neutral-50">
              <p className="font-semibold mb-1">
                ✔ 72h zakończone
              </p>
              <p className="text-sm text-gray-600">
                Chaos spada. Teraz warto ustalić kierunek.
              </p>
            </div>

            <Link
              href="/narzedzia/kompas-decyzji"
              className="block bg-black text-white rounded-lg p-3 text-center"
            >
              Kolejny krok
            </Link>

            <Link
              href="/narzedzia/plan-72h"
              className="block border rounded-lg p-3 text-center"
            >
              Zacznij ponownie
            </Link>

          </div>
        )}

      </div>
    </main>
  )
}