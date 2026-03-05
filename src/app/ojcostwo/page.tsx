import Link from "next/link";
import WorldLayout from "@/components/layout/WorldLayout";

export const metadata = {
  title: "Ojcostwo | MenMind",
  description:
    "Relacja z dzieckiem, prawa ojca i odbudowa kontaktu po konflikcie.",
};

export default function OjcostwoPage() {
  return (
    <WorldLayout
      title="Ojcostwo"
      intro="Relacja z dzieckiem bywa jedną z najważniejszych
      i jednocześnie najtrudniejszych części życia mężczyzny.
      Czasem naturalna. Czasem wymaga walki, cierpliwości
      i wsparcia."
    >

      {/* szybkie wejścia */}

      <section className="grid md:grid-cols-2 gap-6">

        <Link
          href="/ojcostwo/ojciec-po-rozwodzie"
          className="bg-white border border-gray-300 rounded-lg p-6 hover:border-blue-600 transition"
        >
          <h3 className="font-semibold text-lg mb-2">
            Mam konflikt prawny
          </h3>

          <p className="text-gray-600 text-sm">
            Rozwód, alimenty, opieka nad dzieckiem.
          </p>
        </Link>

        <Link
          href="/ojcostwo/odbudowa-relacji"
          className="bg-white border border-gray-300 rounded-lg p-6 hover:border-blue-600 transition"
        >
          <h3 className="font-semibold text-lg mb-2">
            Chcę poprawić relację
          </h3>

          <p className="text-gray-600 text-sm">
            Dystans, brak kontaktu lub trudny etap.
          </p>
        </Link>

      </section>

      {/* PRAWO */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Sytuacja prawna ojca
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <Link href="/ojcostwo/prawa-ojca" className="card">
            Prawa ojca
          </Link>

          <Link href="/ojcostwo/opieka-naprzemienna" className="card">
            Opieka naprzemienna
          </Link>

          <Link href="/ojcostwo/alimenty" className="card">
            Alimenty
          </Link>

          <Link href="/ojcostwo/kontakty-z-dzieckiem" className="card">
            Kontakty z dzieckiem
          </Link>

        </div>

      </section>

      {/* RELACJA */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Relacja z dzieckiem
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <Link href="/ojcostwo/relacja-z-nastolatkiem" className="card">
            Relacja z nastolatkiem
          </Link>

          <Link href="/ojcostwo/gdy-dziecko-nie-chce-rozmawiac" className="card">
            Gdy dziecko nie chce rozmawiać
          </Link>

          <Link href="/ojcostwo/rytual-15-min" className="card">
            Rytuał 15 minut
          </Link>

          <Link href="/ojcostwo/zabawy" className="card">
            Zabawy z dzieckiem
          </Link>

        </div>

      </section>

      {/* STABILIZACJA */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Stabilizacja sytuacji
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <Link href="/ojcostwo/co-oddala-relacje" className="card">
            Co oddala relację
          </Link>

          <Link href="/ojcostwo/plan-awaryjny" className="card">
            Plan awaryjny
          </Link>

        </div>

      </section>

      {/* mini artykuł */}

      <section className="bg-white border border-gray-300 rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-3">
          Dlaczego relacja z ojcem jest ważna
        </h2>

        <p className="text-gray-700 mb-4">
          Badania pokazują że obecność ojca ma ogromny wpływ
          na poczucie bezpieczeństwa i rozwój emocjonalny dziecka.
          Problem polega na tym, że wielu ojców traci kontakt
          nie dlatego że nie chcą być ojcami,
          ale dlatego że nie wiedzą jak przejść przez konflikt.
        </p>

        <Link
          href="/ojcostwo/ojciec-po-rozwodzie"
          className="text-blue-600 hover:underline"
        >
          Czytaj dalej →
        </Link>

      </section>

      {/* pomoc */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Możliwe wsparcie
        </h2>

        <div className="space-y-2">

          <Link href="/kategoria/prawo-rodzinne" className="text-blue-600">
            Prawo rodzinne
          </Link>

          <Link href="/kategoria/mediacje" className="block text-blue-600">
            Mediacje
          </Link>

          <Link href="/kategoria/psycholog" className="block text-blue-600">
            Psycholog rodzinny
          </Link>
          <Link href="/ojcostwo/prawa-ojca">
Prawa ojca
</Link>

        </div>

      </section>

    </WorldLayout>
  );
}