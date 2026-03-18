import Link from "next/link"

export default function StartSection() {

  return (

    <section className="py-20">

      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Możesz zacząć od krótkiego sprawdzenia swojej sytuacji
        </h2>

        <p className="text-gray-600 mb-10">
          Kilka prostych pytań pomoże zobaczyć gdzie jesteś
          i co może być dobrym kolejnym krokiem.
        </p>

        {/* 🔥 GŁÓWNY CTA (już spokojniejszy) */}
        <Link
          href="/narzedzia/test-sytuacji"
          className="inline-block border rounded-xl px-8 py-4 hover:shadow transition"
        >
          Sprawdź swoją sytuację
        </Link>

        {/* 🔽 OPCJONALNE (jeszcze spokojniejsze) */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center text-sm text-gray-500">

          <Link
            href="/narzedzia"
            className="hover:underline"
          >
            lub zobacz dostępne narzędzia
          </Link>

          <Link
            href="/sciezki/kompas"
            className="hover:underline"
          >
            albo przejdź do kierunku działania
          </Link>

        </div>

      </div>

    </section>

  )

}