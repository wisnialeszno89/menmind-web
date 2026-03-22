"use client"

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

  const partners = rankPartners(
    getPartnersByCategory(category)
  ).slice(0,4)

  return(

    <>

      {/* 🔥 WYNIK */}
      <h1 className="text-3xl font-semibold mb-4">
        Poziom: {label}
      </h1>

      <p className="text-gray-700 mb-6">
        {desc}
      </p>

      <p className="text-sm text-gray-500 mb-10">
        Wynik: {percent}%
      </p>

      {/* 🔥 GŁÓWNY CTA DO MARKETPLACE */}
      <Link
        href={`/propozycje/${category}`}
        className="block border-2 border-black p-5 rounded-lg mb-10 text-center font-medium"
      >
        👉 Porozmawiaj z kimś dziś
      </Link>

      {/* 🔥 PARTNERZY */}
      <h3 className="mt-6 mb-2 font-semibold">
        Kto może Ci realnie pomóc teraz:
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Wybierz jedną osobę poniżej i zrób pierwszy kontakt teraz (to zajmuje 2–3 minuty).
      </p>

      <p className="text-xs text-gray-400 mb-4">
        Osoby w podobnej sytuacji najczęściej zaczynają od krótkiej rozmowy.
      </p>

      <PartnersList partners={partners} />

      {/* 🔽 ALTERNATYWA */}
      <h2 className="text-lg font-semibold mt-12 mb-4">
        Jeśli wolisz zacząć sam:
      </h2>

      <div className="space-y-4">

        <Link
          href="/narzedzia/reset"
          className="block border-2 border-black p-5 rounded-lg"
        >
          👉 Zacznij od resetu
        </Link>

        <Link
          href="/narzedzia/plan-72h"
          className="block border p-4 rounded-lg"
        >
          Ułóż plan 72h
        </Link>

      </div>

      {/* 🔥 LEAD */}
      <LeadBox />

    </>

  )

}