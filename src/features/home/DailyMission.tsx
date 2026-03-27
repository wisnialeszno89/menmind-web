"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function DailyMission(){

  const [mission,setMission] = useState<any>(null)

  useEffect(()=>{

    const profile = localStorage.getItem("mm_profile")
    if(!profile) return

    const p = JSON.parse(profile)

    const day = new Date().getDate() % 3

    if(p.includes("Chaos")){
      if(day === 0) setMission({
        title:"Zrób Brain Dump",
        href:"/narzedzia/brain-dump"
      })
      if(day === 1) setMission({
        title:"Ustal Plan 72h",
        href:"/narzedzia/plan-72h"
      })
      if(day === 2) setMission({
        title:"Reset 90 sekund",
        href:"/narzedzia/reset-90"
      })
    }

    if(p.includes("Stres")){
      setMission({
        title:"Reset napięcia",
        href:"/narzedzia/reset-90"
      })
    }

  },[])

  if(!mission) return null

  return(
    <section className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6 bg-neutral-50">

          <p className="text-sm text-gray-500 mb-2">
            Dzisiejszy krok
          </p>

          <h3 className="text-xl font-semibold mb-4">
            {mission.title}
          </h3>

          <Link
            href={mission.href}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Wykonaj teraz
          </Link>

        </div>

      </div>
    </section>
  )
}