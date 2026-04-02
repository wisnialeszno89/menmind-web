"use client"

import { useEffect, useState } from "react"

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("mm_cookie_ok")
    if (!consent) setShow(true)
  }, [])

  function accept() {
    localStorage.setItem("mm_cookie_ok", "1")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-4 items-center justify-between">

        <p className="text-sm text-gray-600">
          Używamy cookies do analizy ruchu i działania narzędzi.
        </p>

        <button
          onClick={accept}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          OK
        </button>

      </div>
    </div>
  )
}