import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

export default function Header() {

  return (

    <header className="border-b border-neutral-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="font-semibold text-lg tracking-tight"
        >
          MenMind
        </Link>

        <Navbar />

      </div>

    </header>

  )

}