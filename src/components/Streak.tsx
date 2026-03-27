"use client"

import { useEffect, useState } from "react"

export default function Streak(){

  const [days,setDays] = useState(1)

  useEffect(()=>{
    const stored = localStorage.getItem("mm_streak")
    if(stored){
      setDays(Number(stored))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("mm_streak", String(days))
  },[days])

  return(
    <div className="border rounded-xl p-4 text-sm">
      🔥 Twój ciąg działania: {days} dzień
    </div>
  )
}