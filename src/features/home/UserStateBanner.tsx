"use client"

import { useUserState } from "@/hooks/useUserState"
import Link from "next/link"

export default function UserStateBanner() {

  const state = useUserState()

  if (!state) return null

  const config = {
    kryzys: {
      label: "Trudniejszy moment",
      desc: "Zacznij spokojnie. Małe kroki wystarczą.",
      href: "/narzedzia/reset",
      cta: "Zacznij od resetu"
    },
    nisko: {
      label: "Przeciążenie",
      desc: "Warto uporządkować najbliższe dni.",
      href: "/narzedzia/plan-72h",
      cta: "Ułóż plan"
    },
    ok: {
      label: "Stabilnie",
      desc: "Możesz iść dalej i rozwijać kolejne obszary.",
      href: "/wzrost",
      cta: "Zobacz możliwości"
    }
  }[state]

  return (
    <section className="py-6">

      <div className="max-w-3xl mx-auto px-6">

        <div className="bg-gray-50 border rounded-xl px-6 py-5">

          <p className="text-sm text-gray-500 mb-2">
            Wracasz tutaj
          </p>

          <p className="font-semibold mb-1">
            {config.label}
          </p>

          <p className="text-sm text-gray-600 mb-4">
            {config.desc}
          </p>

          <Link
            href={config.href}
            className="text-sm font-medium underline hover:opacity-70"
          >
            {config.cta}
          </Link>

          <p className="text-xs text-gray-400 mt-2">
            na podstawie Twojego ostatniego testu
          </p>

        </div>

      </div>

    </section>
  )
}