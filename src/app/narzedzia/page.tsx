"use client"

import Link from "next/link"
import { tools } from "@/content/tools"
import { useEffect, useState } from "react"
import ToolDoneBadge from "@/components/ToolDoneBadge"

export default function Page() {

  const [done,setDone] = useState<string[]>([])

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("mm_tools") || "[]")
    setDone(saved)
  },[])

  return (

    <main className="max-w-6xl mx-auto px-6 py-20">

      <header className="mb-16">

        <h1 className="text-4xl font-semibold mb-4">
          Narzędzia
        </h1>

        <p className="text-neutral-600">
          Proste narzędzia które pomagają odzyskać stabilność,
          zrozumieć swoją sytuację i zrobić kolejny krok.
        </p>

      </header>

      <div className="grid md:grid-cols-3 gap-6">

        {tools.map((tool) => {

          const isDone = done.includes(tool.slug)

          return (

            <Link
              key={tool.slug}
              href={`/narzedzia/${tool.slug}`}
              className="border rounded-xl p-6 card-hover bg-white"
            >

              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">
                  {tool.title}
                </h3>

                {isDone && <ToolDoneBadge />}
              </div>

              {tool.description && (
                <p className="text-sm text-neutral-500">
                  {tool.description}
                </p>
              )}

            </Link>

          )
        })}

      </div>

    </main>

  )

}