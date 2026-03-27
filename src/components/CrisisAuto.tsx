"use client"

import Link from "next/link"
import { getUserState } from "@/lib/userState"

export default function CrisisAuto(){

  const state = getUserState()

  // jeśli brak danych — nic nie pokazuj
  if(!state) return null

  // bardzo prosta logika (bez błędów typów)
  const show = JSON.stringify(state).includes("sytuacja")

  if(!show) return null

  return(
    <div className="fixed top-16 left-0 right-0 z-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-red-600 text-white rounded-xl p-4 flex items-center justify-between shadow-lg">

          <div>
            <p className="text-sm opacity-90">
              Możesz być w trudnym momencie
            </p>
            <p className="font-semibold">
              Zacznij stabilizację krok po kroku
            </p>
          </div>

          <Link
            href="/sciezki/stabilizacja"
            className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Zacznij
          </Link>

        </div>

      </div>
    </div>
  )
}