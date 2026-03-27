"use client"

import { useState } from "react"
import TestNextSteps from "@/components/TestNextSteps"

type Question = {
  question: string
  answers: {
    text: string
    score: number
  }[]
}

type Props = {
  title: string
  questions: Question[]
  low: {
    text: string
    path: string
    tool: string
  }
  high: {
    text: string
    path: string
    tool: string
  }
}

export default function SimpleTest({
  title,
  questions,
  low,
  high
}: Props) {

  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)

  function answer(value: number){
    setScore(score + value)
    setStep(step + 1)
  }

  if(step >= questions.length){

    const result = score > questions.length * 1.5 ? high : low

    return (
      <div className="max-w-2xl mx-auto py-20 px-6">

        <h1 className="text-3xl font-semibold mb-6">
          {title} — wynik
        </h1>

        <p className="text-lg mb-8">
          {result.text}
        </p>

        <TestNextSteps
          pathHref={result.path}
          toolHref={result.tool}
        />

      </div>
    )
  }

  const q = questions[step]

  return (
    <div className="max-w-2xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-semibold mb-8">
        {title}
      </h1>

      <p className="text-lg mb-6">
        {q.question}
      </p>

      <div className="space-y-3">
        {q.answers.map((a,i)=>(
          <button
            key={i}
            onClick={()=>answer(a.score)}
            className="w-full border rounded-xl p-4 text-left hover:bg-neutral-50 transition"
          >
            {a.text}
          </button>
        ))}
      </div>

    </div>
  )
}