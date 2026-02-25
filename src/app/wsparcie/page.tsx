import Link from "next/link";
import { cities } from "@/lib/cities";

export default function WsparciePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Wsparcie
        </h1>

        <p className="mt-6 text-textMuted max-w-2xl">
          Wybierz miasto i znajdź specjalistów, trenerów oraz grupy wsparcia.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/wsparcie/${city.slug}`}
              className="rounded-xl border border-borderSoft p-6 hover:bg-midnight/40 transition"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}