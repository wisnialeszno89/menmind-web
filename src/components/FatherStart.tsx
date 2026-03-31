"use client"

import Link from "next/link"

export default function FatherStart(){

  return(
    <section className="py-12 border-b">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-6">
          Od czego zacząć
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <Link
            href="/narzedzia/tracker-kontaktu-z-dzieckiem"
            className="border rounded-xl p-5 hover:bg-gray-50 transition"
          >
            Mam mało kontaktu
          </Link>

          <Link
            href="/narzedzia/plan-czasu-z-dzieckiem"
            className="border rounded-xl p-5 hover:bg-gray-50 transition"
          >
            Chcę więcej czasu
          </Link>

          <Link
            href="/narzedzia/plan-rozmowy-po-rozstaniu"
            className="border rounded-xl p-5 hover:bg-gray-50 transition"
          >
            Jestem po rozstaniu
          </Link>

        </div>

      </div>
    </section>
  )
}