import Link from "next/link";

export default function OdbudowaPage() {
  return (
    <main className="bg-[#1F2937] text-zinc-100">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-3xl">

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Odbudowa
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            Nie zaczynasz od zera.
            Zaczynasz od fundamentu.
          </p>

        </div>
      </section>

      {/* 3 FILARY */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-3 gap-8">

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Ciało
            </h3>
            <p className="text-sm text-zinc-400">
              Sen. Ruch. Jedzenie.
              Stabilne ciało = stabilna głowa.
            </p>
          </div>

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Rytm
            </h3>
            <p className="text-sm text-zinc-400">
              Stałe godziny. Stałe działania.
              Małe, ale codzienne.
            </p>
          </div>

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Środowisko
            </h3>
            <p className="text-sm text-zinc-400">
              Ludzie i przestrzeń, które Cię wspierają.
            </p>
          </div>

        </div>
      </section>

      {/* 14 DNI RESETU */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-6">
              14 dni resetu
            </h3>

            <ul className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <li>• Stała pora snu przez 14 dni</li>
              <li>• 20 minut ruchu dziennie</li>
              <li>• 1 rozmowa tygodniowo z kimś zaufanym</li>
              <li>• Ograniczenie alkoholu / używek</li>
              <li>• 10 minut ciszy dziennie</li>
            </ul>

            <div className="mt-6 text-xs text-zinc-500">
              Odbudowa to proces stabilizacji, nie transformacji.
            </div>
          </div>

        </div>
      </section>

      {/* REALNE WSPARCIE */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-2 gap-8 max-w-3xl">

          <Link href="/spec/trening" className="card-2026 p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Trening
            </h3>
            <p className="text-sm text-zinc-400">
              Ruch jako fundament.
            </p>
          </Link>

          <Link href="/spec/psychologowie" className="card-2026 p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Wsparcie
            </h3>
            <p className="text-sm text-zinc-400">
              Jeśli potrzebujesz rozmowy.
            </p>
          </Link>

        </div>
      </section>

    </main>
  );
}