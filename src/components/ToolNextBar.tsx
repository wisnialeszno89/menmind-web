"use client"

import Link from "next/link"

export default function ToolNextBar(){

  return(
    <div className="border rounded-xl p-5 bg-gray-50 mt-10">

      <p className="text-sm text-gray-500 mb-2">
        Zrobiłeś pierwszy krok
      </p>

      <p className="font-medium mb-4">
        Co chcesz zrobić dalej?
      </p>

      <div className="space-y-2">

        <Link
          href="/sciezki/stabilizacja"
          className="block border rounded-lg p-3 bg-white"
          onClick={()=> localStorage.setItem("mm_path","1")}
        >
          👉 Kontynuuj ścieżkę
        </Link>

        <Link
          href="/propozycje"
          className="block border rounded-lg p-3 bg-white"
          onClick={()=> localStorage.setItem("mm_last_action","support")}
        >
          Zobacz wsparcie
        </Link>

        <Link
          href="/navimind"
          className="block text-sm underline"
          onClick={()=> localStorage.setItem("mm_last_action","navimind")}
        >
          Porozmawiaj w NaviMind
        </Link>

      </div>

    </div>
  )
}