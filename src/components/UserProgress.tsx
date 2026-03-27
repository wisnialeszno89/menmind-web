"use client"

import { useEffect, useState } from "react"

export default function UserProgress(){

  const [progress,setProgress] = useState(0)

  useEffect(()=>{
    const visited = localStorage.getItem("mm_progress")

    if(!visited){
      setProgress(20)
      localStorage.setItem("mm_progress","1")
    } else {
      setProgress(40)
    }
  },[])

  return (
    <div className="py-6 border-b">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-sm mb-2">
          Twój postęp
        </div>

        <div className="w-full bg-neutral-200 h-2 rounded">
          <div
            className="bg-black h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  )
}