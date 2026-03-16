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

      <Link href="/ojcostwo" className={linkStyle}>
        Ojcostwo
      </Link>

      <Link href="/narzedzia" className={linkStyle}>
        Narzędzia
      </Link>

      <Link href="/droga" className={linkStyle}>
        Droga
      </Link>

      <Link href="/wsparcie" className={linkStyle}>
        Wsparcie
      </Link>

      <Link
        href="/navimind"
        className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:opacity-90"
      >
        NaviMind
      </Link>

    </nav>

  )

}