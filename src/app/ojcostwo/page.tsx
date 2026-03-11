import Link from "next/link"

export const metadata = {
  title: "Ojcostwo | MenMind",
  description:
    "Wsparcie dla ojców: prawa ojca, relacja z dzieckiem, rozwód, opieka naprzemienna i odbudowa relacji.",
}

export default function OjcostwoPage() {

  return (

    <main className="bg-[#111827] text-zinc-100 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* HERO */}

        <h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
          Ojcostwo
        </h1>

        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Bycie ojcem nie kończy się po rozstaniu.
          Relacja z dzieckiem może się zmieniać,
          ale nadal można ją budować.
        </p>

        {/* PRAWO */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Prawo i formalności
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/ojcostwo/prawa-ojca"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Prawa ojca
              </h3>

              <p className="text-zinc-400 text-sm">
                Podstawowe prawa ojca po rozstaniu lub rozwodzie.
              </p>
            </Link>

            <Link
              href="/ojcostwo/opieka-naprzemienna"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Opieka naprzemienna
              </h3>

              <p className="text-zinc-400 text-sm">
                Kiedy sąd może ją przyznać i jakie są warunki.
              </p>
            </Link>

            <Link
              href="/ojcostwo/alimenty"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Alimenty
              </h3>

              <p className="text-zinc-400 text-sm">
                Fakty, które warto znać.
              </p>
            </Link>

            <Link
              href="/ojcostwo/kontakty-z-dzieckiem"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Kontakty z dzieckiem
              </h3>

              <p className="text-zinc-400 text-sm">
                Jak je ustalić i utrzymać.
              </p>
            </Link>

          </div>

        </section>

        {/* RELACJA */}

        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Relacja z dzieckiem
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/ojcostwo/ojciec-po-rozwodzie"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Ojciec po rozwodzie
              </h3>

              <p className="text-zinc-400 text-sm">
                Jak nie stracić relacji z dzieckiem.
              </p>
            </Link>

            <Link
              href="/ojcostwo/odbudowa-relacji"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Odbudowa relacji
              </h3>

              <p className="text-zinc-400 text-sm">
                Jak spokojnie odbudować kontakt.
              </p>
            </Link>

            <Link
              href="/ojcostwo/relacja-z-nastolatkiem"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Relacja z nastolatkiem
              </h3>

              <p className="text-zinc-400 text-sm">
                Jak budować zaufanie.
              </p>
            </Link>

            <Link
              href="/ojcostwo/co-oddala-relacje"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Co oddala relację
              </h3>

              <p className="text-zinc-400 text-sm">
                Zachowania które niszczą kontakt.
              </p>
            </Link>

          </div>

        </section>

        {/* NARZĘDZIA */}

        <section>

          <h2 className="text-2xl font-semibold mb-6">
            Narzędzia dla ojców
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Link
              href="/ojcostwo/rytual"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Rytuał 15 minut
              </h3>

              <p className="text-zinc-400 text-sm">
                Prosty sposób na budowanie relacji.
              </p>
            </Link>

            <Link
              href="/ojcostwo/zabawy"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Generator zabaw
              </h3>

              <p className="text-zinc-400 text-sm">
                Pomysły na wspólny czas.
              </p>
            </Link>

            <Link
              href="/ojcostwo/plan"
              className="border border-neutral-800 rounded-xl p-6 hover:shadow transition"
            >
              <h3 className="font-semibold mb-2">
                Plan 3h z dzieckiem
              </h3>

              <p className="text-zinc-400 text-sm">
                Prosty plan wspólnego dnia.
              </p>
            </Link>
<Link
href="/ojcostwo/faq"
className="border border-neutral-800 rounded-xl p-6 hover:shadow"
>

<h3 className="font-semibold mb-2">
Najczęstsze pytania ojców
</h3>

<p className="text-zinc-400 text-sm">
Odpowiedzi na pytania które pojawiają się najczęściej.
</p>

</Link>
          </div>

        </section>

      </div>

    </main>

  )

}