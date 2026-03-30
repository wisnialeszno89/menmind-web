"use client"

import { useState, useEffect } from "react"

export default function TrackerKontaktuZDzieckiem() {

  const [days, setDays] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("father-tracker")
    if (saved) setDays(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("father-tracker", JSON.stringify(days))
  }, [days])

  const toggle = (day: number) => {
    setDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    )
  }

  const today = new Date().getDate()

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Tracker kontaktu z dzieckiem
      </h1>

      <p className="text-gray-600 mb-8">
        Zaznacz dni, w których miałeś kontakt.
      </p>

      <div className="grid grid-cols-7 gap-2">

        {Array.from({ length: 31 }).map((_, i) => {

          const day = i + 1
          const active = days.includes(day)

          return (
            <button
              key={day}
              onClick={() => toggle(day)}
              className={`
                aspect-square rounded-lg border text-sm
                ${active
                  ? "bg-black text-white border-black"
                  : "hover:shadow"
                }
                ${day === today ? "ring-2 ring-black" : ""}
              `}
            >
              {day}
            </button>
          )
        })}

      </div>

      <div className="mt-8 border rounded-xl p-6">

        <p className="text-sm text-gray-500">
          Dni kontaktu
        </p>

        <p className="text-2xl font-semibold">
          {days.length}
        </p>

        {days.length >= 8 && (
          <p className="text-green-600 text-sm mt-2">
            Utrzymujesz regularny kontakt
          </p>
        )}

      </div>

    </main>
  )
}