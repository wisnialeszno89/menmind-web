"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ProgressBar from "@/features/tools/ProgressBar"
import StateScale from "@/features/tools/StateScale"
import { saveTestResult } from "@/lib/userState"
import { getPartnersByCategory } from "@/lib/getPartnersByCategory"
import { rankPartners } from "@/lib/rankPartners"
import PartnersList from "@/features/marketplace/PartnersList"
import LeadBox from "@/components/LeadBox"
import TestResultFlow from "@/components/TestResultFlow"

const questions = [
  "Czujesz zmęczenie mimo odpoczynku",
  "Praca przestała dawać sens",
  "Trudno Ci się zmotywować",
  "Czujesz frustrację",
  "Masz poczucie że wszystko Cię męczy"
]

export default function BurnoutTest(){

  const [step,setStep]=useState(0)
  const [score,setScore]=useState(0)
  const [saved,setSaved]=useState(false)

  function answer(val:boolean){
    if(val) setScore(prev => prev + 1)
    setStep(prev => prev + 1)
  }

  const finished = step >= questions.length

  const percent = finished
    ? Math.round((score/questions.length)*100)
    : 0

  // 🔥 zapis tylko raz
  useEffect(() => {
    if(finished && !saved){

      saveTestResult({
        id:"wypalenie",
        score,
        percent,
        date:Date.now()
      })

      setSaved(true)
    }
  }, [finished, saved, score, percent])

  if(finished){

    let label="stabilnie"
    let desc="Nie widać silnych objawów wypalenia."

    if(percent>=40){
      label="przeciążenie"
      desc="Twoja energia zaczyna spadać. Warto zrobić reset."
    }

    if(percent>=70){
      label="wypalenie"
      desc="Możliwe że jesteś w stanie wypalenia i potrzebujesz regeneracji."
    }

    let category = "coaching"
    if (percent >= 70) category = "psycholog"
    else if (percent >= 40) category = "coach"

    const partners = rankPartners(
      getPartnersByCategory(category)
    ).slice(0,4)

    return(

      <main className="min-h-screen bg-white">

        <div className="max-w-xl mx-auto px-6 py-24">

          <h1 className="text-3xl font-semibold mb-4">
            Poziom: {label}
          </h1>

          <p className="text-gray-700 mb-6">
            {desc}
          </p>

          <p className="text-sm text-gray-500 mb-10">
            Wynik: {percent}%
          </p>

          <StateScale value={percent}/>

          <h2 className="text-lg font-semibold mt-12 mb-4">
            Twój następny krok:
          </h2>

          <p className="text-gray-600 mb-6">
            Na podstawie Twojego wyniku, zacznij od tego:
          </p>

          <div className="space-y-4">

            <Link
              href="/narzedzia/reset"
              className="block border-2 border-black p-5 rounded-lg"
            >
              👉 Zacznij od resetu (90 sekund)
            </Link>

            <Link
              href="/narzedzia/plan-72h"
              className="block border p-4 rounded-lg"
            >
              Ułóż plan 72h
            </Link>

            <Link
              href="/propozycje"
              className="block border p-4 rounded-lg"
            >
              👉 Porozmawiaj z kimś dziś
            </Link>

          </div>

          <h3 className="mt-12 mb-4 font-semibold">
            Dopasowane wsparcie
          </h3>

          <PartnersList partners={partners} />

          <LeadBox />

        </div>

      </main>

    )

  }

  return(

  <main className="min-h-screen bg-white">

    <div className="max-w-xl mx-auto px-6 py-24">

      <TestResultFlow percent={percent} />

    </div>

  </main>

)

}