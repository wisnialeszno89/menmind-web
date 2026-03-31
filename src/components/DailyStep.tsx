"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Step = {
  label: string
  href: string
  action: string
}

const steps: Step[] = [
  {
    label: "Sprawdź czy stoisz w miejscu",
    href: "/narzedzia/test-stagnacji",
    action: "daily-stagnation"
  },
  {
    label: "Zrób szybki test (2 min)",
    href: "/narzedzia/test-sytuacji",
    action: "daily-test"
  },
  {
    label: "Wybierz ścieżkę działania",
    href: "/sciezki/stabilizacja",
    action: "daily-path"
  },
  {
    label: "Zrób pierwszy mikro-krok",
    href: "/narzedzia/reset",
    action: "daily-reset"
  },
  {
    label: "Zobacz dostępne wsparcie",
    href: "/propozycje",
    action: "daily-support"
  }
]

export default function DailyStep(){

  const [step,setStep] = useState<Step | null>(null)

  useEffect(()=>{

    const today = new Date().toDateString()
    const savedDay = localStorage.getItem("mm_daily_date")

    let index = 0

    if(savedDay === today){
      const savedIndex = localStorage.getItem("mm_daily_index")
      index = savedIndex ? parseInt(savedIndex) : 0
    } else {
      index = Math.floor(Math.random() * steps.length)
      localStorage.setItem("mm_daily_date", today)
      localStorage.setItem("mm_daily_index", index.toString())
    }

    setStep(steps[index])

  },[])

  if(!step) return null

  return(
    <section className="py-8 border-b bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <Link
          href={step.href}
          onClick={()=>{
            localStorage.setItem("mm_last_action", step.action)
          }}
          className="block border rounded-xl p-5 bg-white hover:bg-gray-50 transition"
        >
          <p className="text-xs text-gray-500 mb-1">
            Dziś Twój krok
          </p>

          <p className="font-medium">
            👉 {step.label}
          </p>

          <p className="text-xs text-gray-400 mt-2">
            Zajmie około 2 minuty
          </p>
        </Link>

      </div>
    </section>
  )
}