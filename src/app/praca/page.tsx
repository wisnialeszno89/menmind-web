import Link from "next/link"
import JobList from "@/components/jobs/JobList"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Praca dla mężczyzn | Dam pracę | Szukam pracy | MenMind",
  description:
    "Ogłoszenia pracy dla mężczyzn. Dam pracę, szukam pracy, praca fizyczna, dodatkowa i zmiana zawodu.",
}

export default function Page() {

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-semibold mb-6">
        Praca dla mężczyzn
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Oferty pracy, ogłoszenia „dam pracę” i „szukam pracy”.
        Bez zbędnych formalności.
      </p>

      <div className="grid md:grid-cols-2 gap-12">

        <section>
          <h2 className="text-xl font-semibold mb-6">
            Dam pracę
          </h2>

          <JobList type="dam" />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">
            Szukam pracy
          </h2>

          <JobList type="szukam" />
        </section>

      </div>

      <section className="mt-20 border-t pt-12">

        <Link
          href="/praca/dodaj"
          className="inline-block mt-4 bg-neutral-800 text-white px-5 py-3 rounded-lg"
        >
          Dodaj ogłoszenie pracy
        </Link>

      </section>

    </main>
  )
}