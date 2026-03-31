"use client"

import { useState, useEffect } from "react"

const ideas = [
  "Wyjście na rower",
  "Budowanie z LEGO",
  "Wspólne gotowanie",
  "Spacer i lody",
  "Gra planszowa",
  "Kino domowe",
  "Basen",
  "Plac zabaw",
  "Rysowanie razem",
  "Wspólne zakupy"
]

export default function FatherActivityIdeas(){

  const [idea,setIdea] = useState("")
  const [done,setDone] = useState(false)

  useEffect(()=>{
    const saved = localStorage.getItem("father-idea")
    if(saved) setIdea(saved)
  },[])

  function generate(){
    const random = ideas[Math.floor(Math.random()*ideas.length)]
    setIdea(random)
    setDone(false)
    localStorage.setItem("father-idea", random)
  }

  function markDone(){
    setDone(true)
    localStorage.setItem("mm_last_action","father-activity")
  }

  return(

    <div className="border rounded-xl p-6 mt-12">

      <h3 className="text-xl font-semibold mb-4">
        Pomysł na czas z dzieckiem
      </h3>

      <div className="border rounded-lg p-6 text-center mb-4">
        {idea || "Kliknij by wylosować pomysł"}
      </div>

      <button
        onClick={generate}
        className="w-full border py-3 rounded-lg mb-3"
      >
        Wylosuj pomysł
      </button>

      {idea && !done && (
        <button
          onClick={markDone}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Zrobione
        </button>
      )}

      {done && (
        <p className="text-sm text-green-600 mt-3">
          ✔ Zaznaczono
        </p>
      )}

    </div>

  )
}