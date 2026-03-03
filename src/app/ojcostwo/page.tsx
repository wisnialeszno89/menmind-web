import Link from "next/link";

export const metadata = {
  title: "Ojcostwo – relacja, stabilność, odpowiedzialność | MenMind",
  description:
    "Ojcostwo to relacja. Znajdź wsparcie w sytuacji trudnej lub wzmocnij kontakt z dzieckiem.",
};

export default function OjcostwoPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-5xl">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
            Ojcostwo
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
            Ojcostwo to relacja. Czasem stabilna. Czasem napięta.
            Zawsze realna.
          </p>

          <p className="text-sm text-zinc-500 mb-20 max-w-2xl">
            Nie chodzi o bycie idealnym ojcem.
            Chodzi o bycie obecnym i odpowiedzialnym.
          </p>

          {/* 2 GŁÓWNE ŚCIEŻKI */}
          <div className="grid md:grid-cols-2 gap-12 mb-28">

            {/* SYTUACJA TRUDNA */}
            <div className="card-2026 p-10 space-y-6">
              <h2 className="text-2xl font-semibold">
                Jeśli sytuacja jest trudna
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Rozwód, konflikt, ograniczony kontakt,
                sprawy prawne lub alimenty.
              </p>

              <div className="space-y-3 text-sm">
                <Link href="/ojcostwo/ojciec-po-rozwodzie" className="block text-blue-500 underline underline-offset-4 hover:text-blue-400">
                  Ojciec po rozwodzie →
                </Link>

                <Link href="/ojcostwo/prawa-ojca" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Prawa ojca →
                </Link>

                <Link href="/ojcostwo/opieka-naprzemienna" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Opieka naprzemienna →
                </Link>

                <Link href="/ojcostwo/alimenty" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Alimenty →
                </Link>

                <Link href="/ojcostwo/kontakty-z-dzieckiem" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Kontakty z dzieckiem →
                </Link>
              </div>
            </div>

            {/* RELACJA */}
            <div className="card-2026 p-10 space-y-6">
              <h2 className="text-2xl font-semibold">
                Chcę wzmocnić relację z dzieckiem
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Dystans, milczenie, napięcie,
                trudny etap dojrzewania.
              </p>

              <div className="space-y-3 text-sm">
                <Link href="/ojcostwo/odbudowa-relacji" className="block text-blue-500 underline underline-offset-4 hover:text-blue-400">
                  Odbudowa relacji →
                </Link>

                <Link href="/ojcostwo/co-oddala-relacje" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Co oddala relację →
                </Link>

                <Link href="/ojcostwo/relacja-z-nastolatkiem" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Relacja z nastolatkiem →
                </Link>

                <Link href="/ojcostwo/gdy-dziecko-nie-chce-rozmawiac" className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200">
                  Gdy dziecko nie chce rozmawiać →
                </Link>
              </div>
            </div>
          </div>

          {/* MOST DO ODBUDOWY */}
          <div className="mb-20">
            <p className="text-sm text-zinc-500 mb-4">
              Jeśli oprócz relacji z dzieckiem czujesz, że potrzebujesz
              wzmocnić siebie — zobacz również świat Odbudowy.
            </p>

            <Link
              href="/odbudowa"
              className="text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Przejdź do Odbudowy →
            </Link>
          </div>

          {/* CTA */}
          <div className="border-t border-neutral-800 pt-12 text-center">
            <p className="text-zinc-400 mb-6">
              Jeśli sytuacja wymaga wsparcia specjalisty,
              możesz sprawdzić dostępne opcje.
            </p>

            <Link
              href="/propozycje/stabilizacja"
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