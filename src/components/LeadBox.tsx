"use client"

import { useState } from "react"

export default function LeadBox(){

  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState("")

  async function handleSubmit(){

    if(!email) return

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
        email,
        state: localStorage.getItem("user_state")
        })
      })  

      setSent(true)

    } catch {}
  }

  if(sent){

    return(
      <div className="mt-12 border rounded-xl p-6 text-center">
        <p className="font-semibold mb-2">
          Dzięki 👍
        </p>
        <p className="text-sm text-gray-600">
        Sprawdź powyżej — dobraliśmy dla Ciebie dopasowane opcje.
        </p>
        <p className="text-xs text-gray-400 mb-3">
       Opcje masz już powyżej — jeśli chcesz, zapisz je sobie na później.
        </p>
      </div>
    )

  }

  return(

    <div className="mt-12 border rounded-xl p-6">

      <h3 className="font-semibold mb-2">
        Nie wiesz kogo wybrać?
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Podaj maila — podeślemy Ci 1–2 najlepiej dopasowane opcje.
      </p>

      <input
        type="email"
        placeholder="Twój email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-3"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        Dobierz mi wsparcie
      </button>

    </div>

  )

}