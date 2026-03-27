"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function AIRecommendations(){

  const [recommendation,setRecommendation] = useState<{
    title:string
    href:string
    desc:string
  } | null>(null)

  useEffect(()=>{

    const profile = localStorage.getItem("mm_profile")

    if(!profile) return

    const p = JSON.parse(profile)

    // AI-like decision tree
    if(p.includes("Chaos")){
      setRecommendation({
        title:"Ścieżka stabilizacji",
        href:"/sciezki/stabilizacja",
        desc:"Uporządkuj podstawy i wróć do równowagi"
      })
      return
    }

    if(p.includes("Brak kierunku")){
      setRecommendation({
        title:"Ścieżka wzrostu",
        href:"/sciezki/wzrost",
        desc:"Znajdź kierunek i kolejny krok"
      })
      return
    }

    if(p.includes("Stres")){
      setRecommendation({
        title:"Odbudowa energii",
        href:"/sciezki/energia",
        desc:"Zmniejsz przeciążenie"
      })
      return
    }

    if(p.includes("Rozstanie")){
      setRecommendation({
        title:"Ścieżka rozstania",
        href:"/sciezki/rozstanie",
        desc:"Poukladaj emocje i decyzje"
      })
      return
    }

  },[])

  if(!recommendation) return null

  return(
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6 bg-neutral-50">

          <p className="text-sm text-gray-500 mb-2">
            Rekomendacja dla Ciebie
          </p>

          <h3 className="text-xl font-semibold mb-2">
            {recommendation.title}
          </h3>

          <p className="text-neutral-600 mb-4">
            {recommendation.desc}
          </p>

          <Link
            href={recommendation.href}
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Przejdź
          </Link>

        </div>

      </div>
    </section>
  )
}