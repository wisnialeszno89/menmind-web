"use client"

import { useEffect, useState } from "react"

export default function ComeBackTomorrow(){

  const [hide, setHide] = useState(false)

  useEffect(()=>{
    const last = localStorage.getItem("mm_last_action")

    // jeśli user ma coś do kontynuacji → nie pokazuj
    if(last){
      setHide(true)
    }

    // zapis comeback (retencja)
    localStorage.setItem("mm_comeback","1")

  },[])

  if(hide) return null

  return(
    <div className="border rounded-lg p-4 text-sm text-gray-600">
      Wróć jutro — pokażemy kolejny krok.
    </div>
  )

}