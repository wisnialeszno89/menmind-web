import BreathingTool from "@/components/BreathingTool";
import EnergyGauge from "@/components/EnergyGauge";
import Link from "next/link";

export default function KryzysPage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-3xl">

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Kryzys
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-8">
            Najpierw regulacja. Potem decyzje.
            Nie musisz rozwiązywać wszystkiego dziś.
          </p>

        </div>
      </section>

      {/* REGULACJA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">
          <BreathingTool />
        </div>
      </section>

      {/* STABILIZACJA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <h2 className="text-2xl font-semibold mb-6">
            Sprawdź fundament
          </h2>

          <EnergyGauge />

        </div>
      </section>

      {/* MIKRO-KROKI */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-6">
              Pierwsze 24 godziny
            </h3>

            <ul className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <li>• Wypij wodę i zjedz coś prostego</li>
              <li>• Wyjdź na 10 minut na świeże powietrze</li>
              <li>• Nie podejmuj dziś dużych decyzji</li>
              <li>• Napisz do jednej zaufanej osoby</li>
            </ul>

            <div className="mt-6 text-xs text-zinc-500">
              Czasem stabilizacja to najważniejsza decyzja.
            </div>
          </div>

        </div>
      </section>

      {/* ROZMOWA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl grid md:grid-cols-2 gap-8">

          <a
            href="https://navimind.app"
            target="_blank"
            className="card-2026 p-8 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              Porozmawiaj z Navimind
            </h3>
            <p className="text-zinc-400 text-sm">
              Bez logowania. Bez presji.
            </p>
          </a>

          <Link
            href="/spec/psychologowie"
            className="card-2026 p-8 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              Wsparcie specjalisty
            </h3>
            <p className="text-zinc-400 text-sm">
              Jeśli potrzebujesz realnej pomocy.
            </p>
          </Link>

        </div>
      </section>

      {/* REALNE WSPARCIE */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-6">
              Nie musisz być sam
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
              <Link href="/spec/grupy">Grupy wsparcia</Link>
              <Link href="/spec/prawo">Prawo / mediacja</Link>
              <Link href="/spec/psychiatrzy">Pomoc medyczna</Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}