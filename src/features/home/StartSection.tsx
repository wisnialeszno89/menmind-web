import Link from "next/link"

export default function StartSection() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Możesz też zacząć bez testu
        </h2>

        <p className="text-gray-600 mb-10">
          Wybierz jedną z dróg i przejdź od razu do działania.
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          <Link
            href="/narzedzia"
            className="border rounded-xl py-6 hover:shadow transition"
          >
            Narzędzia
          </Link>

          <Link
            href="/propozycje"
            className="border rounded-xl py-6 hover:shadow transition"
          >
            Znajdź wsparcie
          </Link>

          <Link
            href="/sciezki"
            className="border rounded-xl py-6 hover:shadow transition"
          >
            Ścieżki działania
          </Link>

        </div>

      </div>

    </section>

  )

}