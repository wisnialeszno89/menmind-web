import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl fade-up">
        {/* LOGO / NAZWA */}
        <h1 className="text-5xl font-semibold tracking-tight">
          MenMind
        </h1>

        {/* PODTYTUŁ */}
        <p className="mt-6 text-lg text-textMuted leading-relaxed">
          Twój męski świat.
        </p>

        <p className="mt-3 text-textMuted">
          Wybierz, gdzie jesteś.
        </p>

        {/* GŁÓWNE WEJŚCIE */}
        <div className="mt-12">
          <Link
            href="/droga"
            className="btn-primary"
          >
            Wejdź →
          </Link>
        </div>

        {/* SUBTELNE LINKI */}
        <div className="mt-10 flex justify-center gap-8 text-sm text-textMuted">
          <Link href="/narzedzia" className="hover:text-textPrimary">
            Narzędzia
          </Link>

          <Link href="/wsparcie" className="hover:text-textPrimary">
            Wsparcie
          </Link>
        </div>
      </div>
    </main>
  );
}