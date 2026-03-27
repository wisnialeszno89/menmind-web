"use client"

import Link from "next/link"

export default function NextActionBar(){

  return(
    <div className="fixed bottom-16 left-0 right-0 z-40">
      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-black text-white rounded-xl p-4 flex items-center justify-between shadow-lg">

          <p className="text-sm">
            Następny krok
          </p>

          <Link
            href="/narzedzia/test-sytuacji"
            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
          >
            Zrób szybki test
          </Link>

        </div>

      </div>
    </div>
  )
}