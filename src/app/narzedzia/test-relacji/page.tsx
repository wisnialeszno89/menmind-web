"use client"

import { useState, useEffect } from "react"
import ProgressBar from "@/features/tools/ProgressBar"
import { saveTestResult } from "@/lib/userState"
import TestResultFlow from "@/components/TestResultFlow"
import TestNextSteps from "@/components/TestNextSteps"
import RecommendedPath from "@/components/RecommendedPath"

const questions = [
  "Czuję napięcie w relacji",
  "Często się kłócimy",
  "Unikam rozmów",
  "Czuję dystans",
  "Nie wiem co dalej z relacją"
]

export default function RelationTest(){

  const [step,setStep]=useState(0)
  const [score,setScore]=useState(0)
  const [saved,setSaved]=useState(false)

  function answer(val:boolean){
    if(val) setScore(prev => prev + 1)
    setStep(prev => prev + 1)
  }

  const finished = step >= questions.length
  const percent = finished ? Math.round((score/questions.length)*100) : 0

  useEffect(() => {
    if(finished && !saved){
      saveTestResult({
        id:"relacje",
        score,
        percent,
        date:Date.now()
      })
      setSaved(true)
    }
  }, [finished, saved, score, percent])

  if(finished){
    return(
      <main className="min-h-screen bg-white">
        <div className="max-w-xl mx-auto px-6 py-24">

          <TestResultFlow percent={percent} />

          <RecommendedPath
            title="Ścieżka relacji"
            description="Uporządkuj komunikację i emocje."
            href="/sciezki/relacja"
          />

          <TestNextSteps
            pathHref="/sciezki/relacja"
            toolHref="/narzedzia/brain-dump"
          />

        </div>
      </main>
    )
  }

  return(
    <main className="min-h-screen bg-white">
      <div className="max-w-xl mx-auto px-6 py-24">

        <ProgressBar step={step+1} total={questions.length}/>

        <h1 className="text-xl mb-8">
          {questions[step]}
        </h1>

        <div className="space-y-4">
          <button onClick={()=>answer(true)} className="w-full border p-4 rounded-lg">Tak</button>
          <button onClick={()=>answer(false)} className="w-full border p-4 rounded-lg">Nie</button>
        </div>

      </div>
    </main>
  )
}