import Link from "next/link";

export const metadata = {
  title: "Ojciec po rozwodzie – co zrobić krok po kroku | MenMind",
  description:
    "Przewodnik dla ojców po rozstaniu: prawa ojca, opieka nad dzieckiem, kontakty i odbudowa relacji.",
};

export default function KompasOjcaPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto">

          {/* Tytuł */}

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
            Kompas ojca po rozwodzie
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 max-w-2xl">
            Rozstanie zmienia wiele rzeczy w życiu ojca.
            Najważniejsze jednak pozostaje jedno — relacja z dzieckiem.
            Ten przewodnik pomoże Ci zorientować się w sytuacji
            i znaleźć następny krok.
          </p>

          {/* Sekcje */}

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/ojcostwo/prawa-ojca"
              className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                Prawa ojca
              </h2>

              <p className="text-zinc-400 text-sm">
                Sprawdź jakie prawa przysługują ojcu
                po rozstaniu lub rozwodzie.
              </p>
            </Link>

            <Link
              href="/ojcostwo/opieka-naprzemienna"
              className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                Opieka naprzemienna
              </h2>

              <p className="text-zinc-400 text-sm">
                Kiedy sąd może przyznać opiekę naprzemienną
                i jakie są warunki.
              </p>
            </Link>

            <Link
              href="/ojcostwo/kontakty-z-dzieckiem"
              className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                Kontakty z dzieckiem
              </h2>

              <p className="text-zinc-400 text-sm">
                Jak ustalić harmonogram spotkań
                i utrzymać stabilny kontakt z dzieckiem.
              </p>
            </Link>

            <Link
              href="/ojcostwo/alimenty"
              className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                Alimenty
              </h2>

              <p className="text-zinc-400 text-sm">
                Jak ustalane są alimenty
                i od czego zależy ich wysokość.
              </p>
            </Link>

            <Link
              href="/ojcostwo/ojciec-po-rozwodzie"
              className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                Ojciec po rozwodzie
              </h2>

              <p className="text-zinc-400 text-sm">
                Najczęstsze błędy ojców
                i jak ich uniknąć.
              </p>
            </Link>

            <Link
              href="/ojcostwo/odbudowa-relacji"
              className="border border-neutral-800 rounded-xl p-6 hover:bg-neutral-900 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                Odbudowa relacji
              </h2>

              <p className="text-zinc-400 text-sm">
                Jak odbudować kontakt z dzieckiem
                po trudnym okresie.
              </p>
            </Link>

          </div>

          {/* Wsparcie */}

          <div className="mt-20 border-t border-neutral-800 pt-10">

            <p className="text-zinc-400 mb-6">
              Jeśli Twoja sytuacja jest trudna,
              warto porozmawiać z prawnikiem,
              mediatorem lub specjalistą pracującym z rodzinami.
            </p>

            <Link
              href="/propozycje"
              className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Sprawdź dostępne wsparcie →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}