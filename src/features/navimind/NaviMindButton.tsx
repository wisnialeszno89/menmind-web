"use client"

export default function NaviMindButton() {

  return (

    <a
      href="https://navimind.app"
      target="_blank"
      rel="noopener noreferrer"
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
      px-5
      py-3
      rounded-full
      shadow-lg
      backdrop-blur
      hover:scale-105
      hover:shadow-xl
      transition
      "
    >

      <span className="text-sm font-medium">
        Rozmowa
      </span>

      <span className="text-lg">
        💬
      </span>

    </a>

  )
}