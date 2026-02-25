import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          MenMind
        </h1>

        <p className="mt-8 text-textMuted leading-relaxed">
          Mapa rozwoju mężczyzny.
          Od kryzysu do przywództwa.
        </p>

        <div className="mt-16">
          <Link
            href="/droga"
            className="inline-block px-8 py-4 rounded-xl bg-accent text-black font-medium"
          >
            Wejdź na drogę
          </Link>
        </div>
      </div>
    </main>
  );
}