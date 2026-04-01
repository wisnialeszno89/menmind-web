"use client"

import { useState } from "react"
import Link from "next/link"
import TestResultFlow from "@/components/TestResultFlow"

const questions = [
  "Nie mam jasno określonego celu",
  "Czuję stagnację w pracy",
  "Myślę o zmianie kierunku życia",
  "Brakuje mi motywacji do działania",
  "Mam poczucie że stoję w miejscu",
]

export default function TestKierunkuZycia(){

  const [answers,setAnswers] = useState<number[]>([])
  const [done,setDone] = useState(false)

  function answer(value:number){
    setAnswers([...answers,value])

    if(answers.length + 1 === questions.length){
      setDone(true)
    }
  }

  const percent =
    answers.reduce((a,b)=>a+b,0) /
    (questions.length * 2) * 100

  if(done){
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">

      <TestResultFlow percent={percent} />

      <p className="text-sm text-gray-500 mt-6">
        Może potrzebujesz zmiany zawodowej?{" "}
        <Link href="/praca" className="underline">
          Zobacz ogłoszenia pracy
        </Link>
      </p>

    </div>
  )
}

  const current = questions[answers.length]

  return(
    <div className="max-w-2xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-8">
        Test kierunku życia
      </h1>

      <p className="text-gray-600 mb-8">
        Sprawdź czy to chwilowe wątpliwości czy brak kierunku.
      </p>

      <div className="border rounded-xl p-8">

        <p className="text-lg mb-6">
          {current}
        </p>

        <div className="space-y-3">

          <button
            onClick={()=>answer(0)}
            className="w-full border rounded-lg p-4 text-left"
          >
            Nie
          </button>

          <button
            onClick={()=>answer(1)}
            className="w-full border rounded-lg p-4 text-left"
          >
            Czasami
          </button>

          <button
            onClick={()=>answer(2)}
            className="w-full border rounded-lg p-4 text-left"
          >
            Tak
          </button>

        </div>

      </div>

      <p className="text-sm text-gray-400 mt-6">
        Pytanie {answers.length + 1} z {questions.length}
      </p>

    </div>
  )
}