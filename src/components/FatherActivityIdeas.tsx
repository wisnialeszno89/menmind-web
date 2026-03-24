"use client"

import { useState } from "react"

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

  const [idea,setIdea] = useState("Kliknij by wylosować pomysł")

  function generate(){
    const random = ideas[Math.floor(Math.random()*ideas.length)]
    setIdea(random)
  }

  return(

    <div className="border rounded-xl p-6 mt-12">

      <h3 className="text-xl font-semibold mb-4">
        Pomysł na czas z dzieckiem
      </h3>

      <p className="text-gray-700 mb-6">
        Nie wiesz co zrobić? Wylosuj prosty pomysł.
      </p>

      <div className="border rounded-lg p-6 text-center mb-4">
        {idea}
      </div>

      <button
        onClick={generate}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Wylosuj pomysł
      </button>

    </div>

  )
}