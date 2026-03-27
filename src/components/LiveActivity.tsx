"use client"
import { useEffect, useState } from "react"

export default function LiveActivity() {
  const [users, setUsers] = useState(23)

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((u) => u + Math.floor(Math.random() * 2))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-sm text-neutral-500 text-center py-6 border-b">
      🔴 {users} mężczyzn korzysta teraz z MenMind
    </div>
  )
}