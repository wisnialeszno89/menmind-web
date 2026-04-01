import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="font-semibold tracking-tight text-lg"
        >
          MenMind
        </Link>

        <Navbar />

      </div>
    </header>
  )
}