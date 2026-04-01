"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function PlanFinansowy() {

  const [checked, setChecked] = useState<number[]>([])

  const steps = [
    "Spisz wszystkie wydatki",
    "Spisz wszystkie długi",
    "Usuń subskrypcje",
    "Ustal minimalne koszty",
    "Priorytety płatności",
    "Plan 30 dni",
    "Dodatkowe źródło dochodu",
    "Ogranicz impulsywne wydatki"
  ]

  useEffect(()=>{
    const saved = localStorage.getItem("finance-plan")
    if(saved){
      setChecked(JSON.parse(saved))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("finance-plan", JSON.stringify(checked))
  },[checked])

  const toggle = (i: number) => {
    setChecked(prev =>
      prev.includes(i)
        ? prev.filter(x => x !== i)
        : [...prev, i]
    )
  }

  const percent = Math.round((checked.length / steps.length) * 100)

  let level = "chaos"
  if(percent >= 70) level = "stabilizacja"
  else if(percent >= 40) level = "kontrola"

  return (
    <div className="max-w-2xl mx-auto py-10 px-6">

      <h1 className="text-2xl font-bold mb-4">
        Plan wyjścia z chaosu finansowego
      </h1>

      <p className="text-gray-600 mb-6">
        Małe kroki odzyskują kontrolę.
      </p>

      <div className="space-y-3">

        {steps.map((step, i) => (
          <label key={i} className="flex gap-2 cursor-pointer">

            <input
              type="checkbox"
              checked={checked.includes(i)}
              onChange={() => toggle(i)}
            />

            {step}

          </label>
        ))}

      </div>

      <div className="mt-6 border rounded p-4">

        <p className="text-sm text-gray-500">
          Postęp
        </p>

        <p className="text-xl font-semibold">
          {percent}%
        </p>

        <p className="text-sm mt-2 capitalize">
          Poziom: {level}
        </p>

      </div>

      {percent >= 30 && (
        <div className="mt-6 border rounded p-4">

          <p className="font-medium mb-3">
            Kolejny krok
          </p>

          <Link
            href="/narzedzia/mikro-kroki"
            className="block underline mb-2"
          >
            Zrób pierwszy krok
          </Link>

          <Link
            href="/artykuly/jak-ogarnac-finanse-mezczyzna"
            className="block underline"
          >
            Przeczytaj jak ogarnąć finanse
          </Link>

        </div>
      )}

      {percent >= 50 && (
        <div className="mt-6 border rounded p-4">

          <p className="font-medium mb-3">
            Zwiększ dochód
          </p>

          <Link
            href="/artykuly/nie-lubie-swojej-pracy-ale-boje-sie-zmiany"
            className="block underline mb-2"
          >
            Zmiana pracy
          </Link>

          <Link
            href="/narzedzia/test-zmiany-pracy"
            className="block underline"
          >
            Test zmiany pracy
          </Link>

        </div>
      )}

      {percent >= 60 && (
        <div className="mt-6 border rounded p-4">

          <p className="font-medium mb-3">
            Szukaj pracy
          </p>

          <a
            href="https://www.pracuj.pl"
            target="_blank"
            className="block underline"
          >
            Pracuj.pl
          </a>

          <a
            href="https://www.olx.pl/praca/"
            target="_blank"
            className="block underline"
          >
            OLX praca
          </a>

          <a
            href="https://www.linkedin.com/jobs/"
            target="_blank"
            className="block underline"
          >
            LinkedIn Jobs
          </a>

        </div>
      )}

    </div>
  )
}