"use client"

import { useEffect, useState } from "react"
import ProgressChecklist from "@/components/ProgressChecklist"

export default function UserJourneyProgress(){

  const [progress,setProgress] = useState(0)

  useEffect(()=>{

    let score = 0

    const tests = JSON.parse(localStorage.getItem("mm_tests") || "[]")
    const path = localStorage.getItem("mm_path")
    const action = localStorage.getItem("mm_last_action")
    const comeback = localStorage.getItem("mm_comeback")

    if(tests.length > 0) score += 25
    if(path) score += 25
    if(action) score += 25
    if(comeback) score += 25

    setProgress(score)

  },[])

  if(progress === 0) return null

  return(
    <section className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-1">
            Twoja droga
          </p>

          <p className="text-xs text-gray-400 mb-2">
            Zrób 1 mały krok dziennie
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div
              className="bg-black h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <ProgressChecklist />

          <p className="text-sm text-gray-600">
            {progress < 100 
              ? "Robisz postęp. Jeszcze jeden krok." 
              : "Masz plan działania."
            }
          </p>

        </div>

      </div>
    </section>
  )
}