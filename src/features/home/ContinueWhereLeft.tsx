"use client"

import Link from "next/link"
import { getUserState } from "@/lib/userState"

export default function ContinueWhereLeft(){

  const state = getUserState()

  if(!state) return null

  return(
    <section className="py-12 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6 bg-neutral-50">

          <p className="text-sm text-gray-500 mb-2">
            Ostatnio zacząłeś pracę nad sobą
          </p>

          <h3 className="font-semibold mb-4">
            Kontynuuj gdzie skończyłeś
          </h3>

          <Link
            href="/narzedzia"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Kontynuuj
          </Link>

        </div>

      </div>
    </section>
  )
}