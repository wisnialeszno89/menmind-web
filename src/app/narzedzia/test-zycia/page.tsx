"use client"

import { useState, useEffect } from "react"
import ProgressBar from "@/features/tools/ProgressBar"
import { saveTestResult } from "@/lib/userState"
import TestResultFlow from "@/components/TestResultFlow"

const questions = [
  "Masz ostatnio mało energii",
  "Czujesz chaos w życiu",
  "Masz trudności ze snem",
  "Czujesz że utknąłeś w miejscu",
  "Masz poczucie że wszystko jest na Twojej głowie",
  "Masz mało czasu dla siebie"
]

export default function LifeTestPage(){

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

  useEffect(() => {
    if(finished && !saved){
      saveTestResult({
        id:"zycie",
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