import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-borderSoft bg-midnight/70 backdrop-blur">

      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="font-semibold tracking-tight text-lg"
        >
          MenMind
        </Link>

        {/* NAV */}

        <nav className="flex items-center gap-6 text-sm text-textMuted">

          <Link
            href="/zacznij"
            className="font-medium hover:text-white transition"
          >
            Zacznij
          </Link>

          <Link
            href="/narzedzia"
            className="hover:text-white transition"
          >
            Narzędzia
          </Link>

          <Link
            href="/droga"
            className="hover:text-white transition"
          >
            Droga
          </Link>

          <Link
            href="/sciezki"
            className="hover:text-white transition"
          >
            Ścieżki
          </Link>

          <Link
            href="/wsparcie"
            className="hover:text-white transition"
          >
            Wsparcie
          </Link>
<Link
  href="/content"
  className="hover:text-white transition"
>
  Artykuły
</Link>
          <Link
            href="/dla-partnerow"
            className="hover:text-white transition"
          >
            Dla partnerów
          </Link>

        </nav>

      </div>

    </header>
  );
}