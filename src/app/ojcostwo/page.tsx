import Link from "next/link"

export default function Page() {

  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-10">
          Ojcostwo
        </h1>

        <p className="text-neutral-700 max-w-2xl mb-16">
          Przewodnik dla ojców którzy chcą zachować relację z dzieckiem
          mimo rozstania lub konfliktu.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <Link href="/ojcostwo/kontakty-z-dzieckiem" className="border p-6 hover:border-black">
            <h2 className="text-xl font-medium mb-2">
              Kontakty z dzieckiem
            </h2>
            <p className="text-sm text-neutral-600">
              Co zrobić gdy drugi rodzic utrudnia spotkania.
            </p>
          </Link>

          <Link href="/ojcostwo/prawa-ojca" className="border p-6 hover:border-black">
            <h2 className="text-xl font-medium mb-2">
              Prawa ojca
            </h2>
            <p className="text-sm text-neutral-600">
              Podstawy prawne i obowiązki rodzica.
            </p>
          </Link>

        </div>

      </div>
    </main>
  )
}