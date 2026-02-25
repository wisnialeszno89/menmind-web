import Link from "next/link";
import { sciezki } from "@/lib/sciezki";

export default function OdbiciePage() {
  const odbicieSciezki = sciezki.filter(
    (s) => s.tryb === "odbicie"
  );

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight">
            Odbudowa
          </h1>

          <p className="mt-6 text-lg text-textMuted leading-relaxed">
            Chaos opadł. Emocje nie rządzą już wszystkim.
          </p>

          <p className="mt-4 text-textMuted">
            Teraz budujesz strukturę. Małe decyzje.
            Powtarzalność. Fundament.
          </p>
        </div>

        {/* PIERWSZY RUCH */}
        <div className="mt-20 card-structural">
          <h2 className="text-2xl font-semibold">
            Zacznij od struktury
          </h2>

          <p className="mt-4 text-textMuted">
            Nie zmieniaj życia. Zrób minimum dnia.
          </p>

          <Link
            href="/narzedzia/minimum"
            className="btn-primary mt-8"
          >
            Minimum dnia →
          </Link>
        </div>

        {/* ŚCIEŻKI */}
        <div className="mt-28 grid gap-10 md:grid-cols-2">
          {odbicieSciezki.map((sciezka) => (
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