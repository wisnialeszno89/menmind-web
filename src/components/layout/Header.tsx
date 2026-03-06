import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">

      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="font-semibold tracking-tight text-lg text-black"
        >
          MenMind
        </Link>

        {/* NAV */}

        <nav className="flex items-center gap-6 text-sm text-neutral-600">

          <Link
            href="/zacznij"
            className="font-medium hover:text-black transition"
          >
            Zacznij
          </Link>

          <Link
            href="/narzedzia"
            className="hover:text-black transition"
          >
            Narzędzia
          </Link>

          <Link
            href="/droga"
            className="hover:text-black transition"
          >
            Droga
          </Link>

          <Link
            href="/sciezki"
            className="hover:text-black transition"
          >
            Ścieżki
          </Link>

          <Link
            href="/wsparcie"
            className="hover:text-black transition"
          >
            Wsparcie
          </Link>

          <Link
            href="/dla-partnerow"
            className="hover:text-black transition"
          >
            Dla partnerów
          </Link>

          <Link
            href="/kontakt"
            className="hover:text-black transition"
          >
            Kontakt
          </Link>

        </nav>

      </div>

    </header>
  );
}