"use client"

import { useState } from "react"
import TestResultFlow from "@/components/TestResultFlow"

const questions = [
  "Czuję brak sensu w swojej pracy",
  "Myślę o zmianie pracy częściej niż raz w tygodniu",
  "Po pracy jestem psychicznie wyczerpany",
  "Nie widzę możliwości rozwoju",
  "Zostaję tylko dla bezpieczeństwa finansowego",
]

export default function TestZmianyPracy(){

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
      </div>
    )
  }

  const current = questions[answers.length]

  return(
    <div className="max-w-2xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-8">
        Czy zmieniać pracę?
      </h1>

      <p className="text-gray-600 mb-8">
        Szybkie sprawdzenie czy to chwilowe zmęczenie czy sygnał do zmiany.
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