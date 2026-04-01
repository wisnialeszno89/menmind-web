"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const steps = [
  {
    text: "Oddychaj powoli przez nos",
    duration: 30
  },
  {
    text: "Napnij ciało i rozluźnij",
    duration: 10
  },
  {
    text: "Powolny wdech i wydech",
    duration: 30
  }
]

export default function Reset90Page(){

  const [step,setStep]=useState(0)
  const [time,setTime]=useState(steps[0].duration)
  const [done,setDone]=useState(false)

  useEffect(()=>{

    if(done) return

    if(time === 0){
      if(step < steps.length - 1){
        setStep(step + 1)
        setTime(steps[step + 1].duration)
      } else {
        setDone(true)
        localStorage.setItem("reset90","done")
      }
      return
    }

    const interval = setInterval(()=>{
      setTime(t => t - 1)
    },1000)

    return ()=>clearInterval(interval)

  },[time,step,done])

  return(

    <main className="bg-white min-h-screen">

      <div className="max-w-xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold mb-6">
          Reset 90 sekund
        </h1>

        {!done && (
          <>
            <p className="text-gray-600 mb-6">
              Krok {step + 1} z {steps.length}
            </p>

            <div className="border rounded-xl p-8 text-center mb-6">

              <p className="text-lg mb-4">
                {steps[step].text}
              </p>

              <p className="text-3xl font-semibold">
                {time}s
              </p>

            </div>
          </>
        )}

        {done && (
          <div className="space-y-4">

            <div className="border rounded-lg p-6">
              ✔ ciało się uspokaja
            </div>

            <Link
              href="/narzedzia/brain-dump"
              className="block border rounded-lg p-3 text-center"
            >
              Wyrzuć myśli (Brain Dump)
            </Link>

            <Link
              href="/narzedzia/plan-72h"
              className="block bg-black text-white rounded-lg p-3 text-center"
            >
              Stabilizacja 72h
            </Link>

          </div>
        )}

      </div>

    </main>

  )

}