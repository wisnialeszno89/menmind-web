import Link from "next/link";

export default function DrogaPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Droga Mężczyzny
        </h1>

        <p className="mt-8 text-textMuted leading-relaxed">
          Mężczyzna przechodzi przez etapy.
          Kryzys nie jest końcem.
          Odbudowa nie jest słabością.
          Wzrost nie jest przypadkiem.
        </p>

        <div className="mt-16 space-y-10 text-left">
          <div>
            <h2 className="text-xl font-semibold">Kryzys</h2>
            <p className="text-textMuted mt-2">
              Stabilizacja. Zatrzymanie chaosu. Powrót do minimum.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Odbudowa</h2>
            <p className="text-textMuted mt-2">
              Struktura. Dyscyplina. Fundament.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Wzrost</h2>
            <p className="text-textMuted mt-2">
              Siła. Kierunek. Przywództwo.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <Link
            href="/sciezki"
            className="inline-block px-8 py-4 rounded-xl bg-accent text-black font-medium"
          >
            Wejdź na mapę ścieżek
          </Link>
        </div>
      </div>
    </main>
  );
}