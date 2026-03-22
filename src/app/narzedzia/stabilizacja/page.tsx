"use client"

import { useState } from "react"

export default function StabilizacjaPage(){

  const [done, setDone] = useState(false)

  return(

    <main className="bg-white min-h-screen">

      <div className="max-w-xl mx-auto px-6 py-24">

        <h1 className="text-3xl font-semibold mb-6">
          Stabilizacja — wróć do podstaw
        </h1>

        <p className="text-gray-700 mb-10">
          Jeśli wszystko się sypie — wracamy do podstaw.
          Nie naprawiasz życia. Stabilizujesz dzień.
        </p>

        <div className="space-y-4">

          <label className="block border p-4 rounded-lg">
            <input type="checkbox" className="mr-2" />
            Zjadłem normalny posiłek
          </label>

          <label className="block border p-4 rounded-lg">
            <input type="checkbox" className="mr-2" />
            Ruszałem się (spacer / trening)
          </label>

          <label className="block border p-4 rounded-lg">
            <input type="checkbox" className="mr-2" />
            Ograniczyłem chaos (telefon / social media)
          </label>

          <label className="block border p-4 rounded-lg">
            <input type="checkbox" className="mr-2" />
            Poszedłem spać o normalnej porze
          </label>

        </div>

        <button
          onClick={()=>setDone(true)}
          className="mt-8 w-full bg-black text-white py-4 rounded-xl"
        >
          Zrobione
        </button>

        {done && (
          <div className="mt-10 border p-6 rounded-xl">

            <p className="mb-4">
              Dobra robota. Teraz możesz iść krok dalej.
            </p>

            <a
              href="/propozycje"
              className="underline"
            >
              👉 Znajdź kolejne kroki
            </a>

          </div>
        )}

      </div>

    </main>

  )

}