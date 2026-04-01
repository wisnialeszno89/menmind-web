import Link from "next/link"
import JobList from "@/components/jobs/JobList"

export const metadata = {
  title: "Praca dla mężczyzn | Dam pracę | Szukam pracy | MenMind",
  description:
    "Ogłoszenia pracy dla mężczyzn. Dam pracę, szukam pracy, praca fizyczna, dodatkowa i zmiana zawodu.",
  keywords: [
    "praca dla mężczyzn",
    "dam pracę",
    "szukam pracy",
    "praca fizyczna",
    "praca bez CV",
    "praca od zaraz",
    "zmiana pracy",
    "praca dodatkowa"
  ]
}

export default function Page() {

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-semibold mb-6">
        Praca dla mężczyzn
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Oferty pracy, ogłoszenia „dam pracę” i „szukam pracy”.
        Bez zbędnych formalności. Konkretne propozycje.
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

      {/* SEO BLOCK */}
      <section className="mt-20 border-t pt-12">

        <h2 className="text-2xl font-semibold mb-6">
          Praca dla mężczyzn – konkretne ogłoszenia
        </h2>

        <div className="space-y-4 text-gray-600 max-w-3xl">

          <p>
            Ta sekcja powstała dla mężczyzn, którzy chcą szybko znaleźć pracę
            albo zaoferować zatrudnienie. Bez CV, bez formalności.
          </p>

          <p>
            Znajdziesz tutaj pracę fizyczną, dodatkową, dorywczą,
            zmianę zawodu oraz ogłoszenia lokalne.
          </p>

          <p>
            Jeśli szukasz pracy po rozstaniu, kryzysie finansowym
            lub chcesz zwiększyć dochód — zacznij od aktualnych ogłoszeń.
        </p>

        <Link
            href="/praca/dodaj"
            className="inline-block mt-4 border border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
            Dodaj ogłoszenie pracy
        </Link>

        </div>
        
        </section>

        </main>
  )
}