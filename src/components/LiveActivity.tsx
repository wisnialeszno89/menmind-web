"use client"
import { useEffect, useState } from "react"

export default function LiveActivity() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(48 + Math.floor(Math.random()*12))
  }, [])

  if(!count) return null

  return (
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="text-xs text-neutral-400">
          Ostatnio aktywnych: {count}
        </div>

      </div>
    </section>
  )
}