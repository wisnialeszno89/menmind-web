"use client"

import { useState } from "react"

type Mode =
  | "konflikt"
  | "dystans"
  | "brak-bliskosci"
  | "napiecie"
  | "rozmowa"

const scripts = {
  konflikt: [
    "Nie chcę się kłócić. Chcę zrozumieć co Cię wkurza.",
    "Zatrzymajmy się na chwilę. Co jest dla Ciebie najtrudniejsze w tej sytuacji?",
    "Powiedz mi, co czujesz — spróbuję naprawdę posłuchać."
  ],
  dystans: [
    "Mam wrażenie, że się oddaliliśmy. Też to czujesz?",
    "Brakuje mi naszej normalnej rozmowy.",
    "Chciałbym wrócić do większej bliskości."
  ],
  "brak-bliskosci": [
    "Brakuje mi naszej bliskości. Chciałbym to odbudować.",
    "Czuję, że jesteśmy bardziej współlokatorami niż partnerami.",
    "Chcę popracować nad nami."
  ],
  napiecie: [
    "Widzę napięcie między nami. Co się dzieje?",
    "Nie chcę zamiatać tego pod dywan.",
    "Powiedz mi wprost, co Ci siedzi w głowie."
  ],
  rozmowa: [
    "Jak się naprawdę czujesz ostatnio?",
    "Czy jest coś, czego ode mnie potrzebujesz?",
    "Co mogę zrobić lepiej jako partner?"
  ]
}

export default function GeneratorRozmowyZwiazek() {

  const [mode, setMode] = useState<Mode | null>(null)
  const [text, setText] = useState<string | null>(null)

  const generate = (m: Mode) => {
    const pool = scripts[m]
    const random = pool[Math.floor(Math.random() * pool.length)]
    setText(random)
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Generator rozmowy w związku
      </h1>

      <p className="text-gray-600 mb-10">
        Jedno zdanie, które pomaga zacząć normalną rozmowę.
      </p>

      {!mode && (
        <div className="space-y-3">

          <button
            onClick={() => setMode("konflikt")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            Jesteśmy w konflikcie
          </button>

          <button
            onClick={() => setMode("dystans")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            Czuję dystans
          </button>

          <button
            onClick={() => setMode("brak-bliskosci")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            Brak bliskości
          </button>

          <button
            onClick={() => setMode("napiecie")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            Jest napięcie
          </button>

          <button
            onClick={() => setMode("rozmowa")}
            className="border p-4 rounded-xl w-full text-left hover:shadow"
          >
            Chcę po prostu pogadać
          </button>

        </div>
      )}

      {mode && (
        <div className="border rounded-xl p-8 text-center">

          {!text && (
            <button
              onClick={() => generate(mode)}
              className="border px-6 py-3 rounded-lg hover:shadow"
            >
              Pokaż zdanie
            </button>
          )}

          {text && (
            <>
              <p className="text-xl mb-6">
                {text}
              </p>

              <button
                onClick={() => generate(mode)}
                className="border px-6 py-2 rounded-lg hover:shadow mr-3"
              >
                Inne
              </button>

              <button
                onClick={() => {
                  setMode(null)
                  setText(null)
                }}
                className="text-sm text-gray-500"
              >
                Zmień sytuację
              </button>
            </>
          )}

        </div>
      )}

    </main>
  )
}