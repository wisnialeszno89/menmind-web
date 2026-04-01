"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function TrackerKontaktuZDzieckiem() {

  const [days, setDays] = useState<number[]>([])

  const now = new Date()
  const monthKey = `father-tracker-${now.getMonth()}-${now.getFullYear()}`
  const today = now.getDate()

  useEffect(() => {
    const saved = localStorage.getItem(monthKey)
    if (saved) setDays(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem(monthKey, JSON.stringify(days))
  }, [days])

  const toggle = (day: number) => {

    const updated =
      days.includes(day)
        ? days.filter(d => d !== day)
        : [...days, day]

    setDays(updated)
    localStorage.setItem("mm_last_action","father-tracker")
  }

  // streak
  const sorted = [...days].sort((a,b)=>a-b)
  let streak = 0
  for(let i = sorted.length - 1; i >= 0; i--){
    if(i === sorted.length - 1){
      streak = 1
    } else if(sorted[i+1] - sorted[i] === 1){
      streak++
    } else {
      break
    }
  }

  // dni bez kontaktu
  const last = sorted[sorted.length - 1]
  const daysWithout = last ? today - last : today

  // poziom relacji
  let level = "niski"
  if(days.length >= 12) level = "wysoki"
  else if(days.length >= 6) level = "średni"

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

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">
            Dni kontaktu
          </p>
          <p className="text-2xl font-semibold">
            {days.length}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">
            Seria
          </p>
          <p className="text-2xl font-semibold">
            {streak}
          </p>
        </div>

      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">

        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">
            Dni bez kontaktu
          </p>
          <p className="text-2xl font-semibold">
            {daysWithout}
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">
            Poziom relacji
          </p>
          <p className="text-2xl font-semibold capitalize">
            {level}
          </p>
        </div>

      </div>

      {daysWithout >= 4 && (
        <div className="mt-6 border rounded-xl p-6 bg-red-50">

          <p className="text-red-600 mb-3">
            Minęło kilka dni bez kontaktu
          </p>

          <Link
            href="/narzedzia/plan-czasu-z-dzieckiem"
            className="block bg-black text-white text-center py-3 rounded-lg"
          >
            Zaplanuj kontakt
          </Link>

        </div>
      )}

      {daysWithout < 4 && (
        <div className="mt-6 space-y-3">

          <Link
            href="/narzedzia/generator-rozmow-z-dzieckiem"
            className="block border rounded-lg p-3 text-center"
          >
            Pytanie do rozmowy
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