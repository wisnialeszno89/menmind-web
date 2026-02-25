import Link from "next/link";
import { sciezki } from "@/lib/sciezki";
import Card from "@/components/ui/Card";

export default function WszystkieSciezkiPage() {
  const tryby = [
    {
      key: "kryzys",
      label: "Kryzys",
      opis: "Stabilizacja i zatrzymanie chaosu.",
    },
    {
      key: "odbicie",
      label: "Odbudowa",
      opis: "Powrót do struktury i porządku.",
    },
    {
      key: "wzrost",
      label: "Wzrost",
      opis: "Budowa siły, charakteru i kierunku.",
    },
  ] as const;

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Mapa ścieżek
        </h1>

        <p className="mt-6 text-textMuted max-w-2xl">
          Każdy etap ma swój sens. Nie przeskakujesz poziomów.
          Przechodzisz je.
        </p>

        <div className="mt-16 space-y-16">
          {tryby.map((tryb) => {
            const filtered = sciezki.filter(
              (s) => s.tryb === tryb.key
            );

            if (filtered.length === 0) return null;

            return (
              <section key={tryb.key}>
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-semibold">
                      {tryb.label}
                    </h2>
                    <p className="text-sm text-textMuted mt-2">
                      {tryb.opis}
                    </p>
                  </div>

                  {/* NaviMind integration */}
                  <Link
                    href={`https://navimind.app/chat?from=menmind&tryb=${tryb.key}`}
                    target="_blank"
                    className="text-sm text-accent hover:underline"
                  >
                    Zaplanuj w NaviMind →
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {filtered.map((sciezka) => (
                    <Link
                      key={sciezka.slug}
                      href={`/sciezki/${sciezka.slug}`}
                    >
                      <Card>
                        <h3 className="text-lg font-medium">
                          {sciezka.title}
                        </h3>

                        <p className="mt-2 text-sm text-textMuted">
                          {sciezka.intro}
                        </p>

                        <div className="mt-4 flex justify-between text-xs text-textMuted uppercase tracking-wide">
                          <span>Poziom: {sciezka.level}</span>
                          <span>
                            {sciezka.etapy.length} etapy
                          </span>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}