"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function AIRecommendedPartners(){

  const [href,setHref] = useState<string | null>(null)

  useEffect(()=>{

    const profile = localStorage.getItem("mm_profile")
    if(!profile) return

    const p = JSON.parse(profile)

    if(p.includes("Chaos")) setHref("/propozycje/wsparcie")
    else if(p.includes("Stres")) setHref("/propozycje/zdrowie")
    else if(p.includes("Rozstanie")) setHref("/propozycje/prawo")
    else if(p.includes("Brak kierunku")) setHref("/propozycje/rozwoj")

  },[])

  if(!href) return null

  return(
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-2">
            Dopasowane wsparcie
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Specjaliści dopasowani do Twojej sytuacji
          </h3>

          <Link
            href={href}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Zobacz wsparcie
          </Link>

        </div>

      </div>
    </section>
  )
}