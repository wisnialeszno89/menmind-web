import Link from "next/link"

export default function StartSection() {

  return (

    <section className="py-16">

      <div className="max-w-xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Możesz zacząć od krótkiego sprawdzenia swojej sytuacji
        </h2>

        <p className="text-gray-600 mb-8">
          Kilka prostych pytań pomoże zobaczyć gdzie jesteś
          i co może być dobrym kolejnym krokiem.
        </p>

        {/* 🔥 GŁÓWNY CTA — spokojny, ale czytelny */}
        <Link
          href="/narzedzia/test-sytuacji"
          className="block w-full border border-black/20 bg-black/5 rounded-xl py-4 hover:bg-black/10 transition"
        >
          Sprawdź swoją sytuację
        </Link>

        {/* 🔽 OPCJE — jako drugorzędne */}
        <div className="mt-6 space-y-2 text-sm text-gray-500">

          <Link
            href="/narzedzia"
            className="block hover:underline"
          >
            zobacz dostępne narzędzia
          </Link>

          <Link
            href="/sciezki/kompas"
            className="block hover:underline"
          >
            przejdź do kierunku działania
          </Link>

        </div>

      </div>

    </section>

  )

}