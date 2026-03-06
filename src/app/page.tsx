import Link from "next/link";

export default function HomePage() {

  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
          MenMind
        </h1>

        <p className="text-gray-600 mb-16 max-w-2xl">
          Mapa wsparcia dla mężczyzn.
          Narzędzia, wiedza i specjaliści pomagający przejść przez kryzys,
          odbudowę i rozwój.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <Link
            href="/kryzys"
            className="border rounded-xl p-6 bg-white hover:shadow"
          >
            Kryzys
          </Link>

          <Link
            href="/odbudowa"
            className="border rounded-xl p-6 bg-white hover:shadow"
          >
            Odbudowa
          </Link>

          <Link
            href="/wzrost"
            className="border rounded-xl p-6 bg-white hover:shadow"
          >
            Wzrost
          </Link>

          <Link
            href="/ojcostwo"
            className="border rounded-xl p-6 bg-white hover:shadow"
          >
            Ojcostwo
          </Link>

        </div>

      </div>

    </main>

  );
}
