import Link from "next/link";
import { sciezki } from "@/lib/sciezki";
import Card from "@/components/ui/Card";

export default function SciezkiPage() {
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
          Ścieżki rozwoju
        </h1>

        <p className="mt-6 text-textMuted max-w-2xl">
          Wybierz obszar, w którym jesteś. Nie musisz być gotowy na wszystko.
          Wystarczy jeden kierunek.
        </p>

        <div className="mt-16 space-y-20">
          {tryby.map((tryb) => {
            const filtered = sciezki.filter(
              (s) => s.tryb === tryb.key
            );

            if (filtered.length === 0) return null;

            return (
              <section key={tryb.key}>
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold">
                    {tryb.label}
                  </h2>
                  <p className="text-sm text-textMuted mt-2">
                    {tryb.opis}
                  </p>
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

                        <div className="mt-4 flex justify-between text-xs uppercase tracking-wide text-textMuted">
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