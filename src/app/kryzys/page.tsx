import Link from "next/link";
import { sciezki } from "@/lib/sciezki";

export default function KryzysPage() {
  const kryzysSciezki = sciezki.filter(
    (s) => s.tryb === "kryzys"
  );

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight">
            Kryzys
          </h1>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            Jeśli czujesz chaos, napięcie, bezsenność,
            złość albo pustkę — to nie znaczy,
            że jesteś słaby.
          </p>

          <p className="mt-4 text-textMuted">
            To znaczy, że coś się rozpadło.
            Najpierw stabilizacja. Potem decyzje.
          </p>
        </div>

        {/* PIERWSZY RUCH */}
        <div className="mt-20 card-structural">
          <h2 className="text-2xl font-semibold">
            Zacznij od tego
          </h2>

          <p className="mt-4 text-textMuted">
            Zanim zaczniesz analizować życie —
            uspokój układ nerwowy.
          </p>

          <Link
            href="/narzedzia/reset"
            className="btn-primary mt-8"
          >
            Reset 5 minut →
          </Link>
        </div>

        {/* ŚCIEŻKI */}
        <div className="mt-28">
          <h2 className="text-2xl font-semibold">
            Wybierz swoją sytuację
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {kryzysSciezki.map((sciezka) => (
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

        {/* WSPARCIE */}
        <div className="mt-28 text-center">
          <p className="text-textMuted">
            Jeśli sytuacja wymaga pomocy z zewnątrz —
          </p>

          <Link
            href="/wsparcie"
            className="inline-block mt-6 text-accent font-medium"
          >
            Zobacz wsparcie w Twoim mieście →
          </Link>
        </div>
      </div>
    </main>
  );
}