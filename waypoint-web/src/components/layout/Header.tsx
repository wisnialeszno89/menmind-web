import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-zinc-100 font-medium tracking-wide hover:text-zinc-300 transition"
        >
          Waypoint
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-200 transition"
          >
            Zmień punkt
          </Link>

          <Link
            href="/navimind"
            className="text-zinc-400 hover:text-zinc-200 transition"
          >
            Navimind
          </Link>
        </nav>
      </div>
    </header>
  );
}
