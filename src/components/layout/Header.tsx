import Link from "next/link";

export default function Header() {

  return (

    <header className="border-b border-zinc-200 bg-white">

      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="font-semibold tracking-tight text-lg"
        >
          MenMind
        </Link>


        {/* NAV */}

        <nav className="flex items-center gap-6 text-sm text-zinc-600">

          <Link
            href="/zacznij"
            className="hover:text-black transition"
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


          {/* NAVIMIND */}

          <Link
            href="/navimind"
            className="ml-2 px-4 py-2 rounded-full bg-black text-white font-medium hover:opacity-90 transition"
          >
            NaviMind
          </Link>

        </nav>

      </div>

    </header>

  );

}