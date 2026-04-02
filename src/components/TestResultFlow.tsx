"use client"

import { useEffect } from "react"
import Link from "next/link"
import { getPartnersByCategory } from "@/lib/getPartnersByCategory"
import { rankPartners } from "@/lib/rankPartners"
import PartnersList from "@/features/marketplace/PartnersList"
import LeadBox from "@/components/LeadBox"

type Props = {
  percent: number
}

export default function TestResultFlow({ percent }: Props){

  let category = "coaching"
  let label = "stabilnie"
  let desc = "Nie widać większych problemów."

  if(percent >= 40){
    category = "coach"
    label = "przeciążenie"
    desc = "Twoja energia spada. Warto to ogarnąć."
  }

  if(percent >= 70){
    category = "psycholog"
    label = "kryzys"
    desc = "Możliwe że jesteś w trudnym momencie."
  }

  useEffect(() => {

    localStorage.setItem("mm_last_action", "test")

    const tests = JSON.parse(localStorage.getItem("mm_tests") || "[]")
    if(!tests.includes(label)){
      tests.push(label)
      localStorage.setItem("mm_tests", JSON.stringify(tests))
    }

  },[label])

  const partners = rankPartners(
    getPartnersByCategory(category)
  ).slice(0,4)

  return(

    <>
      <h1 className="text-3xl font-semibold mb-4">
        Poziom: {label}
      </h1>

      <p className="text-gray-700 mb-6">
        {desc}
      </p>

      <p className="text-sm text-gray-500 mb-10">
        Wynik: {percent}%
      </p>

      {/* GŁÓWNE PROWADZENIE */}
      <div className="border rounded-xl p-6 mb-10 bg-neutral-50">

        <h2 className="font-semibold mb-3">
          Twój następny krok
        </h2>

        <Link
          href="/narzedzia/plan-72h"
          className="block bg-black text-white p-4 rounded-lg text-center mb-3"
          onClick={()=> localStorage.setItem("mm_last_action","plan")}
        >
          👉 Ułóż plan na 72h
        </Link>

        <div className="space-y-2 text-sm">

          <Link
            href="/narzedzia/reset"
            className="block border p-3 rounded-lg"
            onClick={()=> localStorage.setItem("mm_last_action","reset")}
          >
            ⚡ Szybki reset energii
          </Link>

          <Link
            href="/navimind"
            className="block border p-3 rounded-lg"
            onClick={()=> localStorage.setItem("mm_last_action","navimind")}
          >
            💬 Porozmawiaj w NaviMind
          </Link>

        </div>

        <p className="text-xs text-gray-500 mt-3">
          To zajmuje 2–3 minuty i daje pierwszy konkretny krok.
        </p>

      </div>

      {/* PARTNERZY */}
      <h3 className="mt-6 mb-2 font-semibold">
        Kto może Ci realnie pomóc teraz:
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Wybierz jedną osobę poniżej i zrób pierwszy kontakt teraz.
      </p>

      <PartnersList partners={partners} />

      {/* BLOK PRACA */}
      {percent >= 60 && (
        <div className="mt-10 border rounded-xl p-6 bg-neutral-50">

          <h3 className="font-semibold mb-2">
            Możliwa zmiana kierunku
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Często przeciążenie wynika z pracy.
            Sprawdź dostępne ogłoszenia.
          </p>

          <Link
            href="/praca"
            className="inline-block border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Zobacz ogłoszenia pracy
          </Link>

        </div>
      )}

      <LeadBox />

      <div className="mt-10 border rounded-lg p-4 text-sm text-gray-600">
        Wystarczy jeden krok. Wróć jutro — pokażemy kolejny.
      </div>

    </>
  )
}