import Link from "next/link";
import WorldLayout from "@/components/layout/WorldLayout";

export const metadata = {
  title: "Ojcostwo | MenMind",
  description:
    "Relacja z dzieckiem, prawa ojca i odbudowa kontaktu.",
};

export default function OjcostwoPage() {
  return (
    <WorldLayout
      title="Ojcostwo"
      intro="Relacja z dzieckiem jest jedną z najważniejszych części życia mężczyzny. 
Czasem naturalna. Czasem wymaga cierpliwości i wsparcia."
    >

      <section className="grid md:grid-cols-2 gap-6">

        <Link href="/ojcostwo/ojciec-po-rozwodzie" className="card">
          <h3 className="font-semibold mb-2">
            Mam konflikt prawny
          </h3>

          <p className="text-gray-600 text-sm">
            Rozwód, alimenty, opieka nad dzieckiem.
          </p>
        </Link>

        <Link href="/ojcostwo/odbudowa-relacji" className="card">
          <h3 className="font-semibold mb-2">
            Chcę poprawić relację
          </h3>

          <p className="text-gray-600 text-sm">
            Dystans lub trudny etap.
          </p>
        </Link>

      </section>

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Prawo i sytuacja formalna
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

      <section className="card">

        <h2 className="text-xl font-semibold mb-3">
          Dlaczego relacja z ojcem jest ważna
        </h2>

        <p className="text-gray-700 mb-4">
          Obecność ojca wpływa na poczucie bezpieczeństwa i rozwój dziecka.
          Wielu ojców traci kontakt nie dlatego że nie chcą,
          ale dlatego że nie wiedzą jak przejść przez konflikt.
        </p>

        <Link
          href="/ojcostwo/ojciec-po-rozwodzie"
          className="text-black underline"
        >
          Czytaj dalej →
        </Link>

      </section>

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Możliwe wsparcie
        </h2>

        <div className="space-y-2">

          <Link href="/kategoria/prawo-rodzinne" className="link-subtle">
            Prawo rodzinne
          </Link>

          <Link href="/kategoria/mediacje" className="block link-subtle">
            Mediacje
          </Link>

          <Link href="/kategoria/psycholog" className="block link-subtle">
            Psycholog rodzinny
          </Link>

        </div>

      </section>

    </WorldLayout>
  );
}