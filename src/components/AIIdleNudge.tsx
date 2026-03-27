"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function AIIdleNudge(){

  const [show,setShow] = useState(false)

  useEffect(()=>{

    const last = localStorage.getItem("mm_last_action")

    if(!last){
      setShow(true)
      return
    }

    const diff = Date.now() - Number(last)

    if(diff > 1000*60*60*24){
      setShow(true)
    }

  },[])

  if(!show) return null

  return(
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-2">
            Wróć do działania
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Minął dzień. Zrób mały krok.
          </h3>

          <Link
            href="/narzedzia/test-sytuacji"
            className="underline"
          >
            Zacznij od testu →
          </Link>

        </div>

      </div>
    </section>
  )
}