import Link from "next/link"

export const metadata = {
  title: "Praca bez rozwoju – co dalej | MenMind",
  description: "Masz pracę, ale brak rozwoju? Zobacz co możesz zrobić."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Praca bez rozwoju – co dalej
      </h1>

      <p className="mb-4">
        Pensja jest.
        Stabilność jest.
      </p>

      <p className="mb-8">
        Rozwoju brak.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Dlaczego to problem
      </h2>

      <p className="mb-4">
        Brak rozwoju to powolna stagnacja.
      </p>

      <p className="mb-8">
        Z czasem tracisz motywację.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Objawy
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>rutyna</li>
        <li>brak wyzwań</li>
        <li>spadek energii</li>
        <li>brak satysfakcji</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Co możesz zrobić
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Sprawdź inne firmy</li>
        <li>Porównaj stanowiska</li>
        <li>Zobacz wymagania</li>
        <li>Zrób pierwszy krok</li>
      </ol>

      <div className="border rounded-xl p-6 mb-10">

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz możliwości pracy
        </Link>

      </div>

    </article>
  )
}