"use client"
import { useEffect, useState } from "react"

export default function LiveActivity() {

  const [count, setCount] = useState(38)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random()*2))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-6 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl text-sm text-neutral-500">
          🔴 {count} mężczyzn korzysta teraz z MenMind
        </div>

      </div>
    </section>
  )
}