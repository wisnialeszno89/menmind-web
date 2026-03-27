"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function AICrisisDetector(){

  const [show,setShow] = useState(false)

  useEffect(()=>{

    const profile = localStorage.getItem("mm_profile")
    if(!profile) return

    const p = JSON.parse(profile)

    if(p.includes("Chaos") && p.includes("Mało")){
      setShow(true)
    }

  },[])

  if(!show) return null

  return(
    <section className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6 bg-red-50">

          <p className="text-sm text-red-600 mb-2">
            Tryb kryzys
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Zacznij od minimum
          </h3>

          <Link
            href="/narzedzia/minimum"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Minimum stabilizacji
          </Link>

        </div>

      </div>
    </section>
  )
}