"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type Age = "3-6" | "7-12" | "13+"

const scripts = {
  "3-6": {
    start: "Chcę z Tobą chwilę porozmawiać. Mama i tata będą mieszkać osobno.",
    reassure: "To nie jest Twoja wina. Oboje bardzo Cię kochamy.",
    end: "Zawsze będę Twoim tatą i będziemy spędzać razem czas."
  },
  "7-12": {
    start: "Chcę powiedzieć Ci coś ważnego. Z mamą podjęliśmy decyzję o rozstaniu.",
    reassure: "To sprawa między dorosłymi. Ty nic złego nie zrobiłeś.",
    end: "Nadal będziemy się widzieć i jestem dla Ciebie zawsze."
  },
  "13+": {
    start: "Chcę z Tobą porozmawiać szczerze. Z mamą się rozstajemy.",
    reassure: "Rozumiem, że możesz mieć różne emocje. To normalne.",
    end: "Jestem dostępny, jeśli będziesz chciał pogadać."
  }
}

const dontSay = [
  "To wina mamy",
  "Musisz wybrać z kim chcesz mieszkać",
  "Nie mów nikomu",
  "Wszystko będzie idealnie",
  "Nic się nie zmieni"
]

export default function PlanRozmowyPoRozstaniu() {

  const [age, setAge] = useState<Age | null>(null)
  const [done,setDone] = useState(false)
  const [history,setHistory] = useState<string[]>([])

  useEffect(()=>{
    const saved = localStorage.getItem("father-breakup-talk")
    if(saved){
      setHistory(JSON.parse(saved))
    }
  },[])

  function markDone(){

    const entry = `${new Date().toLocaleDateString()} - rozmowa (${age})`
    const updated = [...history, entry]

    setHistory(updated)
    setDone(true)

    localStorage.setItem("father-breakup-talk", JSON.stringify(updated))
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-4">
        Plan rozmowy z dzieckiem po rozstaniu
      </h1>

      <p className="text-gray-600 mb-10">
        Spokojna rozmowa buduje poczucie bezpieczeństwa.
      </p>

      {!age && (
        <div className="space-y-3">

          <button onClick={() => setAge("3-6")} className="border p-4 rounded-xl w-full text-left">
            3–6 lat
          </button>

          <button onClick={() => setAge("7-12")} className="border p-4 rounded-xl w-full text-left">
            7–12 lat
          </button>

          <button onClick={() => setAge("13+")} className="border p-4 rounded-xl w-full text-left">
            13+ lat
          </button>

        </div>
      )}

      {age && (
        <div className="space-y-6">

          <div className="border rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">
              1. Zacznij spokojnie
            </p>
            <p>{scripts[age].start}</p>
          </div>

          <div className="border rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">
              2. Uspokój dziecko
            </p>
            <p>{scripts[age].reassure}</p>
          </div>

          <div className="border rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">
              3. Zamknij rozmowę
            </p>
            <p>{scripts[age].end}</p>
          </div>

          <div className="border rounded-xl p-6">
            <p className="text-sm text-gray-500 mb-2">
              Nie mów
            </p>

            <ul className="text-sm space-y-1">
              {dontSay.map((item,i)=>(
                <li key={i}>• {item}</li>
              ))}
            </ul>

          </div>

          {!done && (
            <button
              onClick={markDone}
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Odbyłem rozmowę
            </button>
          )}

          {done && (
            <div className="space-y-3">

              <p className="text-green-600">
                ✔ zapisano rozmowę
              </p>

              <Link
                href="/narzedzia/plan-czasu-z-dzieckiem"
                className="block border rounded-lg p-3 text-center"
              >
                Zaplanuj pierwszy czas razem
              </Link>

              <Link
                href="/narzedzia/tracker-kontaktu-z-dzieckiem"
                className="block bg-black text-white rounded-lg p-3 text-center"
              >
                Zaznacz kontakt
              </Link>

            </div>
          )}

          <button
            onClick={() => setAge(null)}
            className="text-sm text-gray-500"
          >
            Zmień wiek
          </button>

        </div>
      )}

      {history.length > 0 && (
        <div className="mt-10 border rounded-xl p-6">

          <h3 className="font-semibold mb-4">
            Historia rozmów
          </h3>

          <div className="space-y-1 text-sm">
            {history.map((h,i)=>(
              <div key={i}>{h}</div>
            ))}
          </div>

        </div>
      )}

    </main>
  )
}