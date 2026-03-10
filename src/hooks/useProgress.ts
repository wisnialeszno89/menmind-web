"use client"

import { useEffect, useState } from "react"

export function useProgress(key: string) {

  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(key)
    if (saved) setItems(JSON.parse(saved))
  }, [key])

  function toggle(id: string) {

    let updated: string[]

    if (items.includes(id)) {
      updated = items.filter((i) => i !== id)
    } else {
      updated = [...items, id]
    }

    setItems(updated)
    localStorage.setItem(key, JSON.stringify(updated))
  }

  return { items, toggle }

}