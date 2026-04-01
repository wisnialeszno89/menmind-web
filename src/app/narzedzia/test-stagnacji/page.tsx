"use client"

import { useState } from "react"
import Link from "next/link"
import TestResultFlow from "@/components/TestResultFlow"

const questions = [
  "Odkładam decyzje, które powinienem już podjąć",
  "Moje dni są bardzo podobne do siebie",
  "Mam mniej energii niż kiedyś",
  "Trudno mi zacząć nowe rzeczy",
  "Czuję że stoję w miejscu",
  "Rzadziej inicjuję rozmowy",
  "Więcej myślę niż działam"
]

export default function Page(){

  const [answers,setAnswers] = useState<number[]>([])
  const [result,setResult] = useState<number | null>(null)

  function answer(value:number){
    const updated = [...answers,value]
    setAnswers(updated)

    if(updated.length === questions.length){
      const sum = updated.reduce((a,b)=>a+b,0)
      const percent = Math.round((sum / (questions.length * 2)) * 100)
      setResult(percent)
    }
  }

  if(result !== null){
    return (
      <main className="max-w-3xl mx-auto px-6 py-16">
        <TestResultFlow percent={result} />
      </main>
    )
  }

  const current = questions[answers.length]

  return(
    <main className="max-w-2xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-6">
        Test stagnacji
      </h1>

      <p className="text-gray-600 mb-10">
        Sprawdź czy to chwilowe zmęczenie czy stoisz w miejscu.
      </p>

      <div className="border rounded-xl p-6">

        <p className="mb-6 font-medium">
          {current}
        </p>

        <div className="space-y-3">

          <button onClick={()=>answer(0)} className="w-full border rounded-lg p-3 text-left">
            Nie
          </button>

          <button onClick={()=>answer(1)} className="w-full border rounded-lg p-3 text-left">
            Czasami
          </button>

          <button onClick={()=>answer(2)} className="w-full border rounded-lg p-3 text-left">
            Często
          </button>

        </div>

      </div>

        <p className="text-sm text-gray-400 mt-4">
        {answers.length} / {questions.length}
        </p>

        <p className="text-sm text-gray-500 mt-6">
        Jeśli czujesz, że potrzebujesz zmiany, sprawdź też{" "}
        
        <Link href="/praca" className="underline">
        ogłoszenia pracy
        
        </Link>.
        
        </p>
      
    </main>
  )
}