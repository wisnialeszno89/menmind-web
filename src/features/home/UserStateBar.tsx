"use client"

import { useEffect, useState } from "react"
import { getResults, getWorldFromPercent } from "@/lib/userState"
import Link from "next/link"

export default function UserStateBar(){

  const [avg,setAvg] = useState<number | null>(null)
  const [world,setWorld] = useState<string | null>(null)

  useEffect(()=>{

    const results = getResults()
    if(results.length === 0) return

    const value =
      results.reduce((a,b)=>a + b.percent,0) / results.length

    const rounded = Math.round(value)

    setAvg(rounded)
    setWorld(getWorldFromPercent(rounded))

  },[])

  if(avg === null || !world) return null

  return(

    <div className="bg-black text-white py-3">

      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        <p>
          Twoje miejsce teraz: <strong className="capitalize">{world}</strong>
        </p>

        <Link
          href={`/${world}`}
          className="underline"
        >
          Przejdź dalej
        </Link>

      </div>

    </div>

  )

}