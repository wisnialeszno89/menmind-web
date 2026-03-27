"use client"

import { useEffect, useState } from "react"

export default function LiveUsersCounter(){

  const [count, setCount] = useState(0)

  useEffect(() => {
    function randomize(){
      const base = 18
      const variation = Math.floor(Math.random() * 12)
      setCount(base + variation)
    }

    randomize()

    const interval = setInterval(randomize, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-sm text-neutral-600">
          🔴 {count} mężczyzn korzysta teraz z MenMind
        </div>
      </div>
    </div>
  )
}