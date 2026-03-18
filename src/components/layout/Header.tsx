import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

export default function Header() {

  return (

    <header className="border-b border-neutral-200 bg-white">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight"
        >
          MenMind
        </Link>

        {/* NAV + CTA */}
        <div className="flex items-center gap-6">

          <Navbar />

          {/* 🔥 CTA PARTNER */}
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