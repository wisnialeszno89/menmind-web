import Link from "next/link"

export default function Navbar() {

  return (

    <nav className="w-full border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">

        <Link href="/" className="font-semibold">
          MenMind
        </Link>

        <Link href="/kryzys">
          Kryzys
        </Link>

        <Link href="/ojcostwo">
          Ojcostwo
        </Link>

        <Link href="/odbudowa">
          Odbudowa
        </Link>

        <Link href="/wzrost">
          Wzrost
        </Link>

        <Link href="/narzedzia">
          Narzędzia
        </Link>

      </div>

    </nav>

  )

}