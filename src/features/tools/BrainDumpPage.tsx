"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function BrainDumpPage(){

  const [text,setText]=useState("")
  const [focus,setFocus]=useState("")
  const [saved,setSaved]=useState(false)

  useEffect(()=>{
    const savedData = localStorage.getItem("brainDump")
    if(savedData){
      const parsed = JSON.parse(savedData)
      setText(parsed.text)
      setFocus(parsed.focus)
    }
  },[])

  function save(){
    localStorage.setItem("brainDump",
      JSON.stringify({text,focus})
    )
    setSaved(true)
  }

  const lines =
    text.split("\n").filter(l => l.trim() !== "").length

  return(

    <main className="bg-white min-h-screen">

      <div className="max-w-2xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold mb-4">
          Brain Dump
        </h1>

        <p className="text-gray-600 mb-6">
          Wyrzuć wszystko z głowy. Bez filtrów.
        </p>

        <textarea
          className="w-full border rounded-lg p-4 mb-4"
          rows={8}
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Napisz co Cię wkurza, martwi, przytłacza..."
        />

        <div className="text-xs text-gray-400 mb-8">
          Myśli: {lines}
        </div>

        <label className="block text-sm text-gray-600 mb-2">
          Jedna rzecz którą ruszysz teraz
        </label>

        <input
          className="w-full border rounded-lg p-4 mb-6"
          value={focus}
          onChange={(e)=>setFocus(e.target.value)}
          placeholder="np. zadzwonię / ogarnę jedną rzecz"
        />

        <button
          onClick={save}
          className="w-full bg-black text-white py-3 rounded-lg mb-6"
        >
          Zapisz i zamknij w głowie
        </button>

        {saved && (
          <div className="space-y-4">

            <div className="border rounded-lg p-4">
              ✔ zapisane
            </div>

            <Link
              href="/narzedzia/plan-72h"
              className="block border rounded-lg p-3 text-center"
            >
              Przejdź do stabilizacji 72h
            </Link>

            <Link
              href="/navimind"
              className="block bg-black text-white rounded-lg p-3 text-center"
            >
              Przegadaj to w NaviMind
            </Link>

          </div>
        )}

      </div>

    </main>

  )

}