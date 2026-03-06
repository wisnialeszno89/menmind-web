import Link from "next/link"

export default function ZacznijPage() {

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24 text-center">

        {/* TITLE */}

        <h1 className="text-5xl font-semibold mb-6">

          MenMind

        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-16">

          Jeśli nie wiesz od czego zacząć,
          wybierz kierunek który najlepiej opisuje Twoją sytuację.

        </p>


        {/* KOMPAS */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* STABILIZACJA */}

          <Link
            href="/narzedzia/stabilizacja"
            className="border rounded-xl p-10 hover:shadow-md transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              Stabilizacja
            </h2>

            <p className="text-gray-600 text-sm">
              Uspokój napięcie i uporządkuj sytuację.
            </p>

          </Link>


          {/* ODBUDOWA */}

          <Link
            href="/odbudowa"
            className="border rounded-xl p-10 hover:shadow-md transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              Odbuduj energię
            </h2>

            <p className="text-gray-600 text-sm">
              Sen, ruch i odzyskanie równowagi.
            </p>

          </Link>


          {/* WSPARCIE */}

          <Link
            href="/propozycje"
            className="border rounded-xl p-10 hover:shadow-md transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              Znajdź wsparcie
            </h2>

            <p className="text-gray-600 text-sm">
              Psycholog, mediator lub specjalista.
            </p>

          </Link>


          {/* ROZWÓJ */}

          <Link
            href="/wzrost"
            className="border rounded-xl p-10 hover:shadow-md transition"
          >

            <h2 className="text-xl font-semibold mb-2">
              Rozwój
            </h2>

            <p className="text-gray-600 text-sm">
              Cele, dyscyplina i kierunek życia.
            </p>

          </Link>

        </div>

      </div>

    </main>

  )

}