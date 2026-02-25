import Link from "next/link";
import { cities } from "@/lib/cities";
import { partners } from "@/lib/partners";

export default function WsparciePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Wsparcie
        </h1>

        <p className="mt-6 text-textMuted max-w-2xl">
          Wybierz miasto i znajdź sprawdzone wsparcie:
          psychologiczne, prawne, sportowe i rozwojowe.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cities.map((city) => {
            const count = partners.filter(
              (p) => p.city === city.slug
            ).length;

            return (
              <Link
                key={city.slug}
                href={`/wsparcie/${city.slug}`}
                className="rounded-2xl border border-borderSoft p-6 hover:bg-navySoft transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {city.name}
                  </span>

                  <span className="text-sm text-textMuted">
                    {count}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ONLINE */}
        <div className="mt-20 rounded-2xl border border-accent p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Wsparcie online
          </h2>

          <p className="mt-4 text-textMuted">
            Jeśli nie ma Twojego miasta — sprawdź oferty online.
          </p>

          <Link
            href="/wsparcie/online"
            className="inline-block mt-6 rounded-xl bg-accent px-6 py-3 text-black font-medium"
          >
            Zobacz online →
          </Link>
        </div>
      </div>
    </main>
  );
}