import Link from "next/link"

export default function Navbar() {

  const linkStyle =
    "text-sm text-neutral-700 hover:text-black transition shrink-0"

  return (

    <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap md:overflow-visible">

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

      <Link
        href="/propozycje"
        className="text-sm font-medium text-black shrink-0"
      >
        Znajdź
      </Link>

      <Link
        href="/navimind"
        className="text-sm text-neutral-500 hover:text-black shrink-0"
      >
        NaviMind
      </Link>

    </nav>

  )

}