import Link from "next/link";

export const metadata = {
  title: "Alimenty – fakty bez mitów | MenMind",
  description:
    "Czym są alimenty, jak są ustalane i od czego zależy ich wysokość.",
};

export default function AlimentyPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
            Alimenty – fakty bez mitów
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 max-w-2xl">
            Alimenty to obowiązek wobec dziecka. Ich celem jest zapewnienie mu
            stabilnych warunków życia.
          </p>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Od czego zależy wysokość alimentów
              </h2>

              <p className="text-zinc-400">
                Sąd bierze pod uwagę potrzeby dziecka oraz możliwości finansowe rodziców.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10">

            <Link
              href="/ojcostwo/prawa-ojca"
              className="text-blue-500 underline hover:text-blue-400"
            >
              Sprawdź prawa ojca →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}