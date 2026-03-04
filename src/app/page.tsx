import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-900">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl md:text-5xl font-semibold mb-10">
          MenMind
        </h1>

        <p className="text-lg text-gray-600 mb-16 max-w-xl">
          Mapa dla mężczyzn w kryzysie, odbudowie, wzroście
          i ojcostwie.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <Link href="/kryzys" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <h3 className="font-semibold mb-2">Kryzys</h3>
            <p className="text-sm text-gray-600">
              Gdy wszystko zaczyna się sypać.
            </p>
          </Link>

          <Link href="/odbudowa" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <h3 className="font-semibold mb-2">Odbudowa</h3>
            <p className="text-sm text-gray-600">
              Powrót do równowagi.
            </p>
          </Link>

          <Link href="/wzrost" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <h3 className="font-semibold mb-2">Wzrost</h3>
            <p className="text-sm text-gray-600">
              Nowy kierunek i rozwój.
            </p>
          </Link>

          <Link href="/ojcostwo" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
            <h3 className="font-semibold mb-2">Ojcostwo</h3>
            <p className="text-sm text-gray-600">
              Relacja z dzieckiem i odpowiedzialność.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}