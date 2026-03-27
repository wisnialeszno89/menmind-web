"use client"

import Link from "next/link"

export default function DailyAction(){

  return(
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6 bg-neutral-50">

          <p className="text-sm text-gray-500 mb-2">
            Dziś zrób tylko to
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Ustal plan 72h
          </h3>

          <Link
            href="/narzedzia/plan-72h"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Zacznij
          </Link>

        </div>

      </div>
    </section>
  )
}