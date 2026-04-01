"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const checklist = [
  "10 minut bez telefonu",
  "Pytanie o dzień",
  "Coś wspierającego",
  "Spokój w trudnej sytuacji",
  "Zrobiliśmy coś razem",
  "Gest bliskości",
  "Bez krytyki",
  "Byłem obecny"
]

export default function ChecklistaOjca() {

  const [checked, setChecked] = useState<number[]>([])
  const [history,setHistory] = useState<Record<string, number[]>>({})

  const today = new Date().toDateString()

  useEffect(()=>{
    const saved = localStorage.getItem("father-checklist")
    if(saved){
      const parsed = JSON.parse(saved)
      setHistory(parsed)

      if(parsed[today]){
        setChecked(parsed[today])
      }
    }
  },[])

  useEffect(()=>{
    const updated = {
      ...history,
      [today]: checked
    }

    setHistory(updated)
    localStorage.setItem("father-checklist", JSON.stringify(updated))

  },[checked])

  const toggle = (i: number) => {
    setChecked(prev =>
      prev.includes(i)
        ? prev.filter(x => x !== i)
        : [...prev, i]
    )
  }

  const percent = Math.round((checked.length / checklist.length) * 100)

  const days = Object.keys(history).slice(-7)

  const streak = days.reduce((acc,day)=>{
    return (history[day]?.length || 0) > 3 ? acc + 1 : acc
  },0)

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Checklista obecnego ojca
      </h1>

      <p className="text-gray-600 mb-8">
        Małe rzeczy budują relację.
      </p>

      <div className="space-y-3">

        {checklist.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`w-full text-left p-4 rounded-xl border transition
              ${checked.includes(i)
                ? "bg-black text-white border-black"
                : "hover:shadow"
              }`}
          >
            {item}
          </button>
        ))}

      </div>

      <div className="mt-10 border rounded-xl p-6">

        <p className="text-sm text-gray-500">
          Dzisiejsza obecność
        </p>

        <p className="text-2xl font-semibold">
          {percent}%
        </p>

        {percent >= 70 && (
          <p className="text-green-600 mt-2 text-sm">
            Jesteś obecny
          </p>
        )}

      </div>

      <div className="mt-6 border rounded-xl p-6">

        <p className="text-sm text-gray-500">
          Streak
        </p>

        <p className="text-xl font-semibold">
          {streak} dni
        </p>

      </div>

      {percent >= 60 && (
        <div className="mt-6 space-y-3">

          <Link
            href="/narzedzia/plan-czasu-z-dzieckiem"
            className="block border rounded-lg p-3 text-center"
          >
            Zaplanuj czas z dzieckiem
          </Link>

          <Link
            href="/narzedzia/tracker-kontaktu-z-dzieckiem"
            className="block bg-black text-white rounded-lg p-3 text-center"
          >
            Zaznacz kontakt
          </Link>

        </div>
      )}

      {days.length > 0 && (
        <div className="mt-10 border rounded-xl p-6">

          <h3 className="font-semibold mb-4">
            Ostatnie dni
          </h3>

          <div className="space-y-1 text-sm">
            {days.map(day=>(
              <div key={day}>
                {day} — {(history[day]?.length || 0)}/8
              </div>
            ))}
          </div>

        </div>
      )}

    </main>
  )
}