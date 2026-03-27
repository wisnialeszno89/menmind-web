"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function AIRecommendedTests(){

  const [test,setTest] = useState<any>(null)

  useEffect(()=>{

    const profile = localStorage.getItem("mm_profile")
    if(!profile) return

    const p = JSON.parse(profile)

    if(p.includes("Chaos")){
      setTest({
        title:"Test sytuacji",
        href:"/narzedzia/test-sytuacji"
      })
    }

    if(p.includes("Stres")){
      setTest({
        title:"Test stresu",
        href:"/narzedzia/test-stresu"
      })
    }

    if(p.includes("Brak kierunku")){
      setTest({
        title:"Test kierunku",
        href:"/narzedzia/test-kierunku"
      })
    }

  },[])

  if(!test) return null

  return(
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-2">
            Rekomendowany test
          </p>

          <h3 className="text-xl font-semibold mb-3">
            {test.title}
          </h3>

          <Link
            href={test.href}
            className="inline-block border px-6 py-3 rounded-lg"
          >
            Rozpocznij
          </Link>

        </div>

      </div>
    </section>
  )
}