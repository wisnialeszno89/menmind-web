import Link from "next/link";

export const metadata = {
  title: "Opieka naprzemienna – zasady | MenMind",
  description:
    "Czym jest opieka naprzemienna i kiedy sąd może ją przyznać.",
};

export default function OpiekaNaprzemiennaPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
            Opieka naprzemienna
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 max-w-2xl">
            Opieka naprzemienna oznacza, że dziecko spędza podobny czas
            z obojgiem rodziców.
          </p>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Kiedy sąd ją rozważa
              </h2>

              <p className="text-zinc-400">
                Jeśli rodzice potrafią współpracować i zapewnić stabilne warunki.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10">

            <Link
              href="/ojcostwo/prawa-ojca"
              className="text-blue-500 underline hover:text-blue-400"
            >
              Poznaj prawa ojca →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}