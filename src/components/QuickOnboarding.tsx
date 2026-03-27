"use client"

import { useState } from "react"

export default function QuickOnboarding(){

  const [step,setStep] = useState(0)
  const [answers,setAnswers] = useState<string[]>([])
  const [done,setDone] = useState(false)

  const questions = [
    {
      q:"Co Cię najbardziej dotyczy?",
      a:["Chaos","Rozstanie","Stres","Brak kierunku"]
    },
    {
      q:"Czego teraz potrzebujesz?",
      a:["Plan","Spokój","Decyzja","Wsparcie"]
    },
    {
      q:"Ile masz energii?",
      a:["Mało","Średnio","Dużo"]
    }
  ]

  function choose(val:string){
    const next=[...answers,val]
    setAnswers(next)

    if(step === questions.length-1){
      localStorage.setItem("mm_profile", JSON.stringify(next))
      setDone(true)
    }else{
      setStep(step+1)
    }
  }

  if(done){
    return(
      <div className="border rounded-xl p-6">
        Profil zapisany. Dopasowuję stronę.
      </div>
    )
  }

  return(
    <div className="border rounded-xl p-6">

      <p className="text-sm text-gray-500 mb-2">
        Dopasuj MenMind
      </p>

      <h3 className="font-semibold mb-4">
        {questions[step].q}
      </h3>

      <div className="space-y-2">
        {questions[step].a.map(opt=>(
          <button
            key={opt}
            onClick={()=>choose(opt)}
            className="w-full border p-3 rounded-lg text-left"
          >
            {opt}
          </button>
        ))}
      </div>

    </div>
  )
}