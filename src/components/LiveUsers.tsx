"use client"

import { useEffect, useState } from "react"

export default function LiveUsers(){

  const [count,setCount] = useState(0)

  useEffect(()=>{
    const base = 18 + Math.floor(Math.random()*12)
    setCount(base)

    const interval = setInterval(()=>{
      setCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const next = prev + change
        if(next < 15) return 15
        if(next > 42) return 42
        return next
      })
    }, 5000)

    return ()=>clearInterval(interval)
  },[])

    return(
      <div className="text-sm text-red-600 font-medium">
       ● {count} mężczyzn teraz online · sprawdzają balans i testy
      </div>

  )
}