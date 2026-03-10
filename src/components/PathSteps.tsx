"use client"

import Link from "next/link"
import { pathSteps } from "@/data/pathSteps"
import { useProgress } from "@/hooks/useProgress"

export default function PathSteps({ slug }: { slug: string }) {

  const steps = pathSteps[slug] || []

  const { items, toggle } = useProgress(`path-${slug}`)

  if (steps.length === 0) return null

  return (

    <section className="mt-16">

      <h2 className="text-2xl font-semibold mb-6">
        Krok po kroku
      </h2>

      <div className="space-y-6">

        {steps.map((step, index) => {

          const id = `${slug}-${index}`
          const done = items.includes(id)

          return (

            <div
              key={index}
              className="border rounded-xl p-6"
            >

              <div className="flex items-center gap-3 mb-2">

                <button
                  onClick={() => toggle(id)}
                  className={`w-6 h-6 border rounded flex items-center justify-center ${
                    done ? "bg-black text-white" : ""
                  }`}
                >
                  {done ? "✓" : ""}
                </button>

                <div className="text-sm text-gray-500">
                  krok {index + 1}
                </div>

              </div>

              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-700 mb-3">
                {step.description}
              </p>

              {step.link && (
                <Link
                  href={step.link}
                  className="text-sm underline"
                >
                  zobacz
                </Link>
              )}

            </div>

          )

        })}

      </div>

    </section>

  )

}