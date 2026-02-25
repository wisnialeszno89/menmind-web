import Link from "next/link";
import { sciezki } from "@/lib/sciezki";

export default function WzrostPage() {
  const wzrostSciezki = sciezki.filter(
    (s) => s.tryb === "wzrost"
  );

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight">
            Wzrost
          </h1>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            Nie gasisz pożaru. Budujesz siłę.
          </p>

          <p className="mt-4 text-textMuted">
            Ciało. Mentalność. Charakter.
            Świadomy kierunek.
          </p>
        </div>

        {/* PIERWSZY RUCH */}
        <div className="mt-20 card-structural">
          <h2 className="text-2xl font-semibold">
            Zacznij od działania
          </h2>

          <p className="mt-4 text-textMuted">
            Zbuduj fundament fizyczny i mentalny.
          </p>

          <Link
            href="/sciezki/budowa-sily"
            className="btn-primary mt-8"
          >
            Budowa siły →
          </Link>
        </div>

        {/* ŚCIEŻKI */}
        <div className="mt-28 grid gap-10 md:grid-cols-2">
          {wzrostSciezki.map((sciezka) => (
            <Link
              key={sciezka.slug}
              href={`/sciezki/${sciezka.slug}`}
              className="card-structural"
            >
              <h3 className="text-xl font-semibold">
                {sciezka.title}
              </h3>

              <p className="mt-4 text-sm text-textMuted leading-relaxed">
                {sciezka.intro}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}