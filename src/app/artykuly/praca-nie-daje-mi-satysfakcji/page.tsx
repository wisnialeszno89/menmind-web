import Link from "next/link"

export const metadata = {
  title: "Praca nie daje mi satysfakcji – co dalej | MenMind",
  description: "Masz pracę, ale brak satysfakcji? Zobacz możliwe kierunki."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Praca nie daje mi satysfakcji
      </h1>

      <p className="mb-4">
        Nie chodzi o dramat.
      </p>

      <p className="mb-8">
        Po prostu nie czujesz,
        że to ma sens.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Częsty scenariusz
      </h2>

      <p className="mb-4">
        Stabilność jest.
        Pensja jest.
      </p>

      <p className="mb-8">
        Satysfakcji brak.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Co możesz zrobić
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Sprawdź inne opcje</li>
        <li>Zobacz nowe role</li>
        <li>Porównaj możliwości</li>
        <li>Zrób pierwszy krok</li>
      </ol>

      <div className="border rounded-xl p-6 mb-10">

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz inne oferty pracy
        </Link>

      </div>

      <p>
        Satysfakcja często pojawia się,
        gdy zmienia się kierunek.
      </p>

    </article>
  )
}