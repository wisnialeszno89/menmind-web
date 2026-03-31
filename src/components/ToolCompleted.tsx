"use client"

import { useEffect } from "react"

export default function ToolCompleted({ slug }: { slug: string }) {

  useEffect(() => {

    localStorage.setItem("mm_last_action", `tool-${slug}`)

    const tools = JSON.parse(localStorage.getItem("mm_tools") || "[]")

    if (!tools.includes(slug)) {
      tools.push(slug)
      localStorage.setItem("mm_tools", JSON.stringify(tools))
    }

  }, [slug])

  return null
}