"use client"

import Link from "next/link"

export default function StickyTestCTA(){

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Link
        href="/narzedzia/test-sytuacji"
        className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        Zrób test sytuacji
      </Link>
    </div>
  )
}