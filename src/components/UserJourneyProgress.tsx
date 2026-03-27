"use client"

import { useEffect, useState } from "react"

export default function UserJourneyProgress(){

  const [progress,setProgress] = useState(0)

  useEffect(()=>{

    let score = 0

    const profile = localStorage.getItem("mm_profile")
    const last = localStorage.getItem("mm_last_action")
    const streak = localStorage.getItem("mm_streak")

    if(profile) score += 30
    if(last) score += 30
    if(streak) score += 40

    setProgress(score)

  },[])

  if(progress === 0) return null

  return(
    <section className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-2">
            Twoja droga
          </p>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
            <div
              className="bg-black h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-sm text-gray-600">
            Postęp: {progress}%
          </p>

        </div>

      </div>
    </section>
  )
}