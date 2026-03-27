"use client"

import Link from "next/link"
import { getUserState } from "@/lib/userState"

export default function UserProgress(){

  const state = getUserState()

  if(!state) return null

  return(
    <section className="py-20 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-6">
          Twój postęp
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">
              Masz już rozpoczętą pracę nad sobą
            </p>
            <p className="font-medium">
              Kontynuuj kolejny krok
            </p>
          </div>

          <Link
            href="/narzedzia"
            className="block border rounded-xl p-6 card-hover"
          >
            Kontynuuj pracę nad sobą
          </Link>

        </div>

      </div>
    </section>
  )
}