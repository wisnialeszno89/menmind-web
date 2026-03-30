import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

export default function Header() {

  return (

    <header className="border-b border-neutral-200 bg-white">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="font-semibold text-lg tracking-tight"
        >
          MenMind
        </Link>

        <div className="flex items-center gap-6">

          <Navbar />

          {/* NOWY LINK */}
          <Link
            href="/artykuly"
            className="text-sm text-neutral-700 hover:text-black transition"
          >
            Artykuły
          </Link>

          <Link
            href="/propozycje"
            className="text-sm px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition"
          >
            Znajdź
          </Link>

          <Link
            href="/dla-partnerow"
            className="text-sm px-4 py-2 rounded-lg border hover:bg-black hover:text-white transition"
          >
            Dla partnerów
          </Link>

        </div>

      </div>

    </header>

  )

}