import Link from "next/link";
import FatherPlanTool from "@/components/FatherPlanTool";
import FatherLawBasics from "@/components/FatherLawBasics";
import FatherPresenceChecklist from "@/components/FatherPresenceChecklist";

export default function OjcostwoPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">

      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Ojcostwo
          </h1>

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Bycie ojcem to relacja.
            Czasem trudna. Czasem cicha.
            Zawsze ważna.
          </p>

          {/* 3 GŁÓWNE OBSZARY */}
          <div className="grid md:grid-cols-3 gap-8">

            <Link href="/spec/prawo" className="card-2026 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Konflikt / Rozstanie
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Mediacja, prawo rodzinne, ochrona relacji z dzieckiem.
              </p>
            </Link>

            <Link href="/spec/grupy" className="card-2026 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Budowanie relacji
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Obecność, rozmowa, wspólny czas.
              </p>
            </Link>

            <Link href="/spec/psychologowie" className="card-2026 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Wsparcie specjalisty
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Gdy potrzebujesz spojrzenia z zewnątrz.
              </p>
            </Link>

          </div>

        </div>
      </section>

      {/* REFLEKSJA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <div className="card-2026 p-10">
            <h2 className="text-2xl font-semibold mb-6">
              Pytania, które warto sobie zadać
            </h2>

            <ul className="space-y-4 text-zinc-300 leading-relaxed">
              <li>• Czy moje dziecko czuje się przy mnie bezpieczne?</li>
              <li>• Czy jestem obecny czy tylko fizycznie dostępny?</li>
              <li>• Czy moje reakcje budują czy burzą relację?</li>
              <li>• Czy dbam o siebie, żeby móc dbać o nie?</li>
            </ul>
          </div>

        </div>
      </section>

      {/* NARZĘDZIA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl space-y-16">

          <FatherPlanTool />
          <FatherPresenceChecklist />
          <FatherLawBasics />

        </div>
      </section>

    </main>
  );
}