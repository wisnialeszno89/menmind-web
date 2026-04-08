"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const linkStyle =
    "block py-3 text-neutral-700 hover:text-black transition"

  function close() {
    setOpen(false)
  }

  return (
    <div className="relative">

      {/* DESKTOP */}
      <nav className="hidden md:flex items-center gap-6">

      <Link href="/">Zacznij</Link>

      <Link href="/narzedzia">
        Narzędzia
      </Link>

      <Link href="/narzedzia">
        Balans
      </Link>

      <Link href="/artykuly">
        Artykuły
      </Link>

      <Link href="/praca">
        Praca
      </Link>

      <Link href="/dla-partnerow">
        dla Partnerów
      </Link>

      <Link href="/propozycje">
        Znajdź
      </Link>

      <Link href="/navimind">
       NaviMind
      </Link>

      </nav>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-sm border px-3 py-2 rounded-lg"
      >
        Menu
      </button>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={close}
        />
      )}

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-16 left-4 right-4 z-50 bg-white border rounded-xl shadow-xl p-5 md:hidden">

          <Link href="/" className={linkStyle} onClick={close}>
            Zacznij
          </Link>

          <Link href="/narzedzia" className={linkStyle} onClick={close}>
            Narzędzia
          </Link>

          <Link href="/artykuly" className={linkStyle} onClick={close}>
            Artykuły
          </Link>

          <Link href="/praca" className={linkStyle} onClick={close}>
            Praca
          </Link>
          
          <Link href="/dla-partnerow" className={linkStyle} onClick={close}>
            Dla partnera
          </Link>
          
          <Link
            href="/propozycje"
            className={linkStyle}
            onClick={close}
          >
            Znajdź
          </Link>

          <Link href="/navimind" className={linkStyle} onClick={close}>
            NaviMind
          </Link>

        </div>
      )}

    </div>
  )
}