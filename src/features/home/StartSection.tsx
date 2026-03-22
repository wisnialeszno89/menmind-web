import Link from "next/link"

export default function StartSection() {

  return (

    <section className="py-16">

      <div className="max-w-xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Jeśli wiesz czego potrzebujesz, możesz zacząć od razu
        </h2>

        <p className="text-gray-600 mb-8">
          Wybierz konkretny obszar i przejdź do działania.
        </p>

        <div className="space-y-4">

          <Link
            href="/narzedzia"
            className="block border border-black/20 rounded-xl py-4 hover:bg-black/5 transition"
          >
            Zobacz narzędzia
          </Link>

          <Link
            href="/sciezki/kompas"
            className="block border border-black/20 rounded-xl py-4 hover:bg-black/5 transition"
          >
            Przejdź do kierunku działania
          </Link>

          <Link
            href="/propozycje"
            className="block border border-black/20 rounded-xl py-4 hover:bg-black/5 transition"
          >
            Znajdź wsparcie
          </Link>

        </div>

      </div>

    </section>

  )

}