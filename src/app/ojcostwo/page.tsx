import Link from "next/link";
import FatherPlanTool from "@/components/FatherPlanTool";
import FatherLawBasics from "@/components/FatherLawBasics";
import FatherPresenceChecklist from "@/components/FatherPresenceChecklist";

export default function OjcostwoPage() {
  return (
    <main className="section-2026 bg-[#F5F1EA] text-zinc-900">
      <div className="container-2026 max-w-4xl">

        <h1 className="text-5xl font-semibold tracking-tight mb-8">
          Ojcostwo
        </h1>

        <p className="text-lg text-zinc-600 mb-16 leading-relaxed max-w-2xl">
          Bycie ojcem to nie rola. To relacja.
          Czasem trudna. Czasem cicha.
          Zawsze ważna.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <Link href="/spec/prawo" className="card-2026 p-8 bg-white text-zinc-900">
            <h3 className="text-xl font-semibold mb-4">
              Konflikt / Rozstanie
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Mediacja, prawo rodzinne, ochrona relacji z dzieckiem.
            </p>
          </Link>

          <Link href="/spec/grupy" className="card-2026 p-8 bg-white text-zinc-900">
            <h3 className="text-xl font-semibold mb-4">
              Budowanie relacji
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Obecność, rozmowa, wspólny czas.
            </p>
          </Link>

          <Link href="/spec/psychologowie" className="card-2026 p-8 bg-white text-zinc-900">
            <h3 className="text-xl font-semibold mb-4">
              Wsparcie specjalisty
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Gdy potrzebujesz spojrzenia z zewnątrz.
            </p>
          </Link>

        </div>

        <div className="mt-24 max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">
            Pytania, które warto sobie zadać
          </h2>

          <ul className="space-y-4 text-zinc-700 leading-relaxed">
            <li>• Czy moje dziecko czuje się przy mnie bezpieczne?</li>
            <li>• Czy jestem obecny czy tylko fizycznie dostępny?</li>
            <li>• Czy moje reakcje budują czy burzą relację?</li>
            <li>• Czy dbam o siebie, żeby móc dbać o nie?</li>
          </ul>
        </div>
        <FatherPlanTool />
<FatherPresenceChecklist />
<FatherLawBasics />

      </div>
    </main>
  );
}