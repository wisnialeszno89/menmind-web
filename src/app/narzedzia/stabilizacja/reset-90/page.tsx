"use client";

import { useState } from "react";
import Link from "next/link";

export default function Reset90Page() {

  const [step,setStep] = useState(0);

  const steps = [
    "Oddychaj powoli przez nos przez 30 sekund.",
    "Napnij całe ciało na 10 sekund i rozluźnij.",
    "Zrób powolny wdech i wydech przez 30 sekund."
  ];

  const next = () => {
    setStep(step+1)
  }

  return (

    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-xl">

        <h1 className="text-3xl font-semibold mb-8">
          Reset 90 sekund
        </h1>

        {step < steps.length ? (

          <div className="space-y-6">

            <p className="text-lg">
              {steps[step]}
            </p>

            <button
              onClick={next}
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Dalej
            </button>

          </div>

        ) : (

          <div className="space-y-6">

            <p className="text-lg">
              Dobrze. Ciało się uspokaja.
            </p>

            <Link
              href="/propozycje"
              className="text-blue-600 underline"
            >
              Jeśli potrzebujesz więcej wsparcia →
            </Link>

          </div>

        )}

      </div>

    </main>

  )
}