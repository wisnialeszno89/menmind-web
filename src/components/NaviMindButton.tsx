"use client"

import Link from "next/link"

export default function NaviMindButton() {

  return (

    <Link
      href="https://navimind.app"
      target="_blank"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      items-center
      gap-3
      bg-black
      text-white
      px-4
      py-3
      rounded-full
      shadow-lg
      hover:scale-105
      transition
      "
    >

      <span className="text-sm font-medium">
        Rozmowa
      </span>

      <span className="text-lg">
        💬
      </span>

    </Link>

  )

}