"use client"

import { useEffect, useState } from "react"

export default function Streak(){

  const [days,setDays] = useState(0)

  useEffect(()=>{

    const saved = localStorage.getItem("mm_streak")

    if(saved){
      setDays(Number(saved))
    }else{
      localStorage.setItem("mm_streak","1")
      setDays(1)
    }

  },[])

  if(!days) return null

  return(
    <div className="border rounded-xl p-4 text-center">
      🔥 {days} dzień działania
    </div>
  )
}