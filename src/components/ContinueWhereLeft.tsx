"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function ContinueWhereLeft(){

  const [link,setLink] = useState<string | null>(null)
  const [label,setLabel] = useState<string>("")

  useEffect(()=>{

    const last = localStorage.getItem("mm_last_action")

    if(!last) return

    if(last === "test"){
      setLink("/narzedzia/test-sytuacji")
      setLabel("Dokończ test")
    }

    if(last === "navimind"){
      setLink("/navimind")
      setLabel("Wróć do NaviMind")
    }

    if(last === "path"){
      setLink("/moja-droga")
      setLabel("Kontynuuj ścieżkę")
    }

    if(last === "reset"){
      setLink("/narzedzia/reset")
      setLabel("Kontynuuj reset")
    }

    if(last === "plan"){
      setLink("/narzedzia/plan-72h")
      setLabel("Wróć do planu 72h")
    }

  },[])

  if(!link) return null

  return(
    <section className="py-8 border-b">
      <div className="max-w-4xl mx-auto px-6">

        <Link
          href={link}
          className="block border rounded-xl p-4 bg-white hover:bg-gray-50 transition"
        >
          <p className="text-xs text-gray-500 mb-1">
            Kontynuuj gdzie skończyłeś
          </p>

          <p className="font-medium">
            👉 {label}
          </p>

        </Link>

      </div>
    </section>
  )
}