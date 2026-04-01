"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const tasks = [
  "Sen: minimum 7h",
  "Ruch: 20 min",
  "Kontakt: jedna rozmowa",
  "Porządek: ogarnij 1 rzecz"
]

export default function Plan72hPage() {

  const [day,setDay] = useState(1)
  const [checked,setChecked] = useState<string[]>([])

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

  function toggle(task:string){
    setChecked(prev =>
      prev.includes(task)
        ? prev.filter(t=>t!==task)
        : [...prev,task]
    )
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

        <p className="text-gray-600 mb-6">
          Stabilizacja w 3 dni
        </p>

        <div className="border rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-500">
            Postęp
          </p>
          <p className="text-xl font-semibold">
            {progress}%
          </p>
        </div>

        <h2 className="font-semibold mb-4">
          Dzień {day}
        </h2>

        <div className="space-y-4">

          {tasks.map(task => {

            const key = `D${day}-${task}`

            return (
              <div
                key={key}
                onClick={()=>toggle(key)}
                className="border rounded-lg p-4 cursor-pointer flex justify-between"
              >

                <span className={checked.includes(key) ? "line-through text-gray-500" : ""}>
                  {task}
                </span>

                <span>
                  {checked.includes(key) ? "✓" : ""}
                </span>

              </div>
            )
          })}

        </div>

        {completedToday === tasks.length && day < 3 && (
          <button
            onClick={nextDay}
            className="w-full mt-8 bg-black text-white py-3 rounded-lg"
          >
            Przejdź do dnia {day + 1}
          </button>
        )}

        {progress === 100 && (
          <div className="mt-10 space-y-4">

            <p className="text-green-600">
              ✔ 72h zakończone
            </p>

            <Link
              href="/narzedzia/plan-72h"
              className="block border rounded-lg p-3 text-center"
            >
              Zacznij ponownie
            </Link>

            <Link
              href="/narzedzia/kompas-decyzji"
              className="block bg-black text-white rounded-lg p-3 text-center"
            >
              Kolejny krok
            </Link>

          </div>
        )}

      </div>
    </main>
  )
}