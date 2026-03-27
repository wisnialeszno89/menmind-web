"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function PersonalizedStart(){

  const [profile,setProfile]=useState<string[]|null>(null)

  useEffect(()=>{
    const stored = localStorage.getItem("mm_profile")
    if(stored){
      setProfile(JSON.parse(stored))
    }
  },[])

  if(!profile) return null

  let href="/narzedzia/test-sytuacji"
  let label="Zacznij od testu"

  if(profile.includes("Chaos")){
    href="/sciezki/stabilizacja"
    label="Zacznij stabilizację"
  }

  if(profile.includes("Brak kierunku")){
    href="/sciezki/wzrost"
    label="Znajdź kierunek"
  }

  if(profile.includes("Stres")){
    href="/sciezki/energia"
    label="Odzyskaj energię"
  }

  return(
  <section className="py-12 border-t">
    <div className="max-w-xl mx-auto px-6">

      <div className="border rounded-xl p-6 text-center">
        <p className="text-sm text-gray-500 mb-2">
          Dopasowany start
        </p>

        <a
          href={href}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          {label}
        </a>
      </div>

    </div>
  </section>
)
}