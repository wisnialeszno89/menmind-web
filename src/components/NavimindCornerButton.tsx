"use client"

import Link from "next/link"

export default function NavimindCornerButton() {

  return (

    <Link
      href="/navimind"
      className="
      fixed
      bottom-6
      right-6
      w-14
      h-14
      rounded-full
      bg-black
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-105
      transition
      z-50
      "
      aria-label="Rozmowa NaviMind"
    >

      💬

    </Link>

  )

}