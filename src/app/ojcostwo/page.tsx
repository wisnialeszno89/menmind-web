import Link from "next/link";
import FatherPlanTool from "@/components/FatherPlanTool";
import FatherLawBasics from "@/components/FatherLawBasics";
import FatherPresenceChecklist from "@/components/FatherPresenceChecklist";
import FatherActivityGenerator from "@/components/FatherActivityGenerator";

export default function OjcostwoPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
            Ojcostwo
          </h1>
          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Ojcostwo to nie teoria.  
            To obecność.  
            Czasem spokojna. Czasem trudna.  
            Zawsze realna.
          </p>

          {/* 3 OBSZARY */}
          <div className="grid md:grid-cols-3 gap-8">

            <Link href="/propozycje/stabilizacja" className="card-2026 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Konflikt / Rozstanie
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Mediacja, prawo rodzinne, ochrona relacji z dzieckiem.
              </p>
            </Link>

            <Link href="#relacja" className="card-2026 p-8">
              <h3 className="text-xl font-semibold mb-4">
                Budowanie relacji
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Obecność, rozmowa, wspólny czas.
              </p>
            </Link>

            <Link href="/propozycje/stabilizacja" className="card-2026 p-8">
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

      {/* WIEK + KONKRET */}
      <section id="relacja" className="section-compact">
        <div className="container-2026 max-w-4xl">

          <div className="card-2026 p-10 space-y-16">

            <div>
              <h2 className="text-2xl font-semibold mb-8">
                Jak spędzać czas – przykłady według wieku
              </h2>

              <div className="space-y-12 text-zinc-300 leading-relaxed">

                <div>
                  <h3 className="text-lg font-semibold mb-3">0–3 lata</h3>
                  <ul className="space-y-2">
                    <li>– stały spacer o tej samej porze</li>
                    <li>– czytanie tej samej książki przez tydzień</li>
                    <li>– kąpiel jako rytuał tylko Wasz</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">4–7 lat</h3>
                  <ul className="space-y-2">
                    <li>– wspólne gotowanie czegoś prostego</li>
                    <li>– budowanie / rysowanie wspólnego projektu</li>
                    <li>– wyjście tylko we dwoje</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">8–12 lat</h3>
                  <ul className="space-y-2">
                    <li>– sport lub aktywność w terenie</li>
                    <li>– planowanie krótkiej wycieczki razem</li>
                    <li>– rozmowa podczas spaceru</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">13+ lat</h3>
                  <ul className="space-y-2">
                    <li>– wspólny trening</li>
                    <li>– rozmowa bez wykładu</li>
                    <li>– realne wsparcie w decyzjach</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* PLAN 3H */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Prosty plan 3-godzinnego spotkania
              </h2>

              <ul className="space-y-3 text-zinc-300">
                <li>1. 30 min – ruch</li>
                <li>2. 60 min – wspólny projekt / zabawa</li>
                <li>3. 30 min – posiłek razem</li>
                <li>4. 30 min – rozmowa bez telefonu</li>
                <li>5. 30 min – spokojne zakończenie</li>
              </ul>

              <p className="text-zinc-500 mt-6">
                Nie chodzi o perfekcję.  
                Chodzi o regularność.
              </p>
            </div>

            {/* GENERATOR */}
            <FatherActivityGenerator />

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