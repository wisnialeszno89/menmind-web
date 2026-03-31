"use client"

import { useState, useEffect } from "react"

export default function FatherContactPlan(){

  const [plan,setPlan] = useState({
    date:"",
    place:"",
    idea:""
  })

  useEffect(()=>{
    const saved = localStorage.getItem("father-plan")
    if(saved) setPlan(JSON.parse(saved))
  },[])

  useEffect(()=>{
    localStorage.setItem("father-plan", JSON.stringify(plan))
  },[plan])

  return(

    <div className="border rounded-xl p-6 mt-12">

      <h3 className="text-xl font-semibold mb-4">
        Zaplanuj spotkanie z dzieckiem
      </h3>

      <div className="space-y-4">

        <input
          placeholder="Data"
          className="w-full border p-3 rounded-lg"
          value={plan.date}
          onChange={(e)=>setPlan({...plan,date:e.target.value})}
        />

        <input
          placeholder="Miejsce"
          className="w-full border p-3 rounded-lg"
          value={plan.place}
          onChange={(e)=>setPlan({...plan,place:e.target.value})}
        />

        <input
          placeholder="Pomysł"
          className="w-full border p-3 rounded-lg"
          value={plan.idea}
          onChange={(e)=>setPlan({...plan,idea:e.target.value})}
        />

      </div>

      <div className="border rounded-lg p-4 mt-6">
        <p>📅 {plan.date || "—"}</p>
        <p>📍 {plan.place || "—"}</p>
        <p>🎯 {plan.idea || "—"}</p>
      </div>

    </div>

  )
}