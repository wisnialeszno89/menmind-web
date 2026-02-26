import Link from "next/link";

export default function WzrostPage() {
  return (
    <main className="bg-[#F8F8F6] text-zinc-900">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-3xl">

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Wzrost
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Rozwój nie musi być głośny.
            Czasem to po prostu konsekwencja.
          </p>

        </div>
      </section>

      {/* 3 FILARY */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-3 gap-8">

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Kierunek
            </h3>
            <p className="text-sm text-zinc-600">
              Czy wiesz, dokąd zmierzasz w pracy i życiu?
              Jeśli nie — to pierwszy krok.
            </p>
          </div>

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Relacje
            </h3>
            <p className="text-sm text-zinc-600">
              Otoczenie kształtuje decyzje.
              Z kim budujesz przyszłość?
            </p>
          </div>

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Dyscyplina
            </h3>
            <p className="text-sm text-zinc-600">
              Małe działania codziennie.
              Bez presji, bez wymówek.
            </p>
          </div>

        </div>
      </section>

      {/* PLAN 30 DNI */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <div className="card-2026 p-8 bg-white text-zinc-900">
            <h3 className="text-xl font-semibold mb-6">
              30 dni kierunku
            </h3>

            <ul className="space-y-4 text-sm text-zinc-700 leading-relaxed">
              <li>• Określ jeden główny cel</li>
              <li>• Ustal 3 działania tygodniowo</li>
              <li>• Ogranicz 1 rzecz, która Cię rozprasza</li>
              <li>• Raz w tygodniu podsumuj postęp</li>
            </ul>

            <div className="mt-6 text-xs text-zinc-500">
              Wzrost to proces. Nie sprint.
            </div>
          </div>

        </div>
      </section>

      {/* REALNE WSPARCIE */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-2 gap-8 max-w-3xl">

          <Link href="/spec/trening" className="card-2026 p-8 bg-white text-center">
            <h3 className="text-xl font-semibold mb-4">
              Trening
            </h3>
            <p className="text-sm text-zinc-600">
              Ciało buduje głowę.
            </p>
          </Link>

          <Link href="/spec/wyjazdy" className="card-2026 p-8 bg-white text-center">
            <h3 className="text-xl font-semibold mb-4">
              Reset
            </h3>
            <p className="text-sm text-zinc-600">
              Czasem trzeba zmienić przestrzeń.
            </p>
          </Link>

        </div>
      </section>

    </main>
  );
}