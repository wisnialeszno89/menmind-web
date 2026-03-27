"use client"
import { useEffect, useState } from "react"

export default function StatsCounter() {
  const [users, setUsers] = useState(1243)
  const [tests, setTests] = useState(3891)
  const [tools, setTools] = useState(18)

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((u) => u + Math.floor(Math.random() * 2))
      setTests((t) => t + Math.floor(Math.random() * 3))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-14 border-t">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-3 text-center gap-6">

          <div>
            <div className="text-2xl font-semibold">
              {users}
            </div>
            <div className="text-sm text-neutral-500">
              użytkowników
            </div>
          </div>

          <div>
            <div className="text-2xl font-semibold">
              {tests}
            </div>
            <div className="text-sm text-neutral-500">
              wykonanych testów
            </div>
          </div>

          <div>
            <div className="text-2xl font-semibold">
              {tools}
            </div>
            <div className="text-sm text-neutral-500">
              narzędzi
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}