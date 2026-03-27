"use client"

import Link from "next/link"
import { getUserState } from "@/lib/userState"

export default function NextActionBar(){

  const state = getUserState()

  if(!state) return null

  let href = "/narzedzia"
  let label = "Zrób kolejny krok"

  // jeśli zrobił test
  if(state.lastTest){
    href = "/sciezki/stabilizacja"
    label = "Przejdź do ścieżki działania"
  }

  // jeśli był na ścieżce
  if(state.lastPath){
    href = "/narzedzia/plan-72h"
    label = "Zrób konkretne działanie"
  }

  // jeśli użył narzędzia
  if(state.lastTool){
    href = "/propozycje"
    label = "Zobacz dostępne wsparcie"
  }

  return(
    <div className="fixed bottom-16 left-0 right-0 z-40">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-black text-white rounded-xl p-4 flex items-center justify-between shadow-lg">

          <p className="text-sm">
            Następny krok
          </p>

          <Link
            href={href}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
          >
            {label}
          </Link>

        </div>

      </div>
    </div>
  )
}