import Link from "next/link";

export default function HomePage() {

  return (

    <main className="bg-gray-50 min-h-screen">

      {/* HERO */}

      <section className="py-28 border-b bg-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-5xl font-semibold text-gray-900 mb-6">
            MenMind
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Mapa wsparcia dla mężczyzn.  
            Narzędzia, wiedza i specjaliści pomagający przejść przez kryzys,
            odbudowę i rozwój.
          </p>

        </div>

      </section>

      {/* ŚWIATY */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/kryzys"
              className="border rounded-xl p-6 bg-white hover:shadow transition"
            >
              <h2 className="text-xl font-semibold mb-2">Kryzys</h2>
              <p className="text-gray-600 text-sm">
                Gdy wszystko się rozpada i trzeba znaleźć kierunek.
              </p>
            </Link>

            <Link
              href="/odbudowa"
              className="border rounded-xl p-6 bg-white hover:shadow transition"
            >
              <h2 className="text-xl font-semibold mb-2">Odbudowa</h2>
              <p className="text-gray-600 text-sm">
                Powrót do energii, struktury i stabilności.
              </p>
            </Link>

            <Link
              href="/wzrost"
              className="border rounded-xl p-6 bg-white hover:shadow transition"
            >
              <h2 className="text-xl font-semibold mb-2">Wzrost</h2>
              <p className="text-gray-600 text-sm">
                Rozwój życia, kariery i relacji.
              </p>
            </Link>

            <Link
              href="/ojcostwo"
              className="border rounded-xl p-6 bg-white hover:shadow transition"
            >
              <h2 className="text-xl font-semibold mb-2">Ojcostwo</h2>
              <p className="text-gray-600 text-sm">
                Relacja z dzieckiem, prawo rodzinne i odbudowa kontaktu.
              </p>
            </Link>

          </div>

        </div>

      </section>

    </main>

  );
}