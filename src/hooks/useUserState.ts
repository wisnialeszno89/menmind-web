"use client"

import { useEffect, useState } from "react"
import { getUserState, UserState } from "@/lib/userState"

export function useUserState() {

  const [state, setState] = useState<UserState | null>(null)

  useEffect(() => {
    const s = getUserState()
    setState(s)
  }, [])

  return state
}