"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const linkStyle =
  "block py-3 text-neutral-700 hover:text-black transition"

  return (
    <div className="relative">

      {/* DESKTOP */}
      <nav className="hidden md:flex items-center gap-6">

        <Link href="/">Start</Link>
        <Link href="/kryzys">Kryzys</Link>
        <Link href="/odbudowa">Odbudowa</Link>
        <Link href="/wzrost">Wzrost</Link>
        <Link href="/ojcostwo">Ojcostwo</Link>
        <Link href="/narzedzia">Narzędzia</Link>

        <Link
          href="/propozycje"
          className="font-medium"
        >
          Znajdź
        </Link>

        <Link href="/navimind">
          NaviMind
        </Link>

      </nav>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-sm border px-3 py-1 rounded"
      >
        Menu
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute left-0 right-0 mt-3 mx-4 bg-white border rounded-xl shadow-lg p-5 md:hidden">

          <Link href="/" className={linkStyle}>Start</Link>
          <Link href="/kryzys" className={linkStyle}>Kryzys</Link>
          <Link href="/odbudowa" className={linkStyle}>Odbudowa</Link>
          <Link href="/wzrost" className={linkStyle}>Wzrost</Link>
          <Link href="/ojcostwo" className={linkStyle}>Ojcostwo</Link>
          <Link href="/narzedzia" className={linkStyle}>Narzędzia</Link>

          <Link
            href="/propozycje"
            className="block py-2 font-medium"
          >
            Znajdź
          </Link>

          <Link href="/navimind" className={linkStyle}>
            NaviMind
          </Link>

        </div>
      )}

    </div>
  )
}