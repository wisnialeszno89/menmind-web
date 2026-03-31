"use client"

import Link from "next/link"

export default function FatherSituations(){

  return(
    <section className="py-12 border-b">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-6">
          Najczęstsze sytuacje ojców
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <Link
            href="/artykuly/nie-mam-kontaktu-z-dzieckiem"
            className="border rounded-xl p-5 hover:bg-gray-50"
          >
            Nie mam kontaktu z dzieckiem
          </Link>

          <Link
            href="/artykuly/dziecko-nie-chce-sie-ze-mna-spotykac"
            className="border rounded-xl p-5 hover:bg-gray-50"
          >
            Dziecko nie chce się spotykać
          </Link>

          <Link
            href="/artykuly/ojciec-po-rozstaniu-jak-odbudowac-relacje"
            className="border rounded-xl p-5 hover:bg-gray-50"
          >
            Odbudować relację
          </Link>

        </div>

      </div>
    </section>
  )
}