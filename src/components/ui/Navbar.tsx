import Link from "next/link"

export default function Navbar() {

  const linkStyle =
    "text-sm text-neutral-700 hover:text-black transition"

  return (

    <nav className="flex items-center gap-6">

      <Link href="/" className={linkStyle}>
        Start
      </Link>

      <Link href="/kryzys" className={linkStyle}>
        Kryzys
      </Link>

      <Link href="/odbudowa" className={linkStyle}>
        Odbudowa
      </Link>

      <Link href="/wzrost" className={linkStyle}>
        Wzrost
      </Link>

      {/* 🔥 MARKETPLACE */}
      <Link
        href="/propozycje"
        className="text-sm font-semibold px-3 py-1 rounded-lg bg-black text-white"
      >
        Znajdź
      </Link>

      <Link href="/narzedzia" className={linkStyle}>
        Narzędzia
      </Link>

      <Link href="/ojcostwo" className={linkStyle}>
        Ojcostwo
      </Link>

      <Link
        href="/navimind"
        className="text-sm text-neutral-500 hover:text-black"
      >
        NaviMind
      </Link>

    </nav>

  )

}