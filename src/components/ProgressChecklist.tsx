"use client"

import { useEffect, useState } from "react"

type Item = {
  label: string
  done: boolean
}

export default function ProgressChecklist(){

  const [items,setItems] = useState<Item[]>([])

  useEffect(()=>{

    const tests = JSON.parse(localStorage.getItem("mm_tests") || "[]")
    const path = localStorage.getItem("mm_path")
    const action = localStorage.getItem("mm_last_action")
    const comeback = localStorage.getItem("mm_comeback")

    setItems([
      {
        label: "Zrób pierwszy test",
        done: tests.length > 0
      },
      {
        label: "Wybierz ścieżkę",
        done: !!path
      },
      {
        label: "Wykonaj pierwszy krok",
        done: !!action
      },
      {
        label: "Wróć następnego dnia",
        done: !!comeback
      }
    ])

  },[])

  if(items.length === 0) return null

  return(
    <div className="mt-4 space-y-2">
      {items.map((item,i)=>(
        <div 
          key={i}
          className="flex items-center gap-2 text-sm"
        >
          <span className={item.done ? "text-green-600" : "text-gray-400"}>
            {item.done ? "✔" : "○"}
          </span>

          <span className={item.done ? "text-gray-900" : "text-gray-500"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )

}