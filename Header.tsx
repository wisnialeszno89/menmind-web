import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-borderSoft bg-midnight/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          MenMind
        </Link>

        <nav className="flex gap-6 text-sm text-textMuted">
          <Link href="/droga">Droga</Link>
          <Link href="/sciezki">Ścieżki</Link>
          <Link href="/wsparcie">Wsparcie</Link>
          <Link href="/dla-partnerow">Dla partnerów</Link>
        </nav>
      </div>
    </header>
  );
}