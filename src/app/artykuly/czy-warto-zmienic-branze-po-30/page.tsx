import Link from "next/link"

export const metadata = {
  title: "Czy warto zmienić branżę po 30 | MenMind",
  description: "Zmiana branży po 30 jest możliwa. Zobacz kiedy ma sens."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Czy warto zmienić branżę po 30
      </h1>

      <p className="mb-4">
        To moment, w którym wielu mężczyzn zaczyna się zastanawiać.
      </p>

      <p className="mb-8">
        Czy to już za późno?
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Największy mit
      </h2>

      <p className="mb-4">
        Po 30 nie jest za późno.
      </p>

      <p className="mb-8">
        To często najlepszy moment.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Kiedy warto
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>gdy praca Cię męczy</li>
        <li>gdy nie ma rozwoju</li>
        <li>gdy zarobki stoją</li>
        <li>gdy czujesz stagnację</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Co zrobić najpierw
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Sprawdź inne branże</li>
        <li>Porównaj wymagania</li>
        <li>Zobacz oferty pracy</li>
        <li>Ustal plan</li>
      </ol>

      <div className="border rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Sprawdź dostępne kierunki
        </h3>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz oferty pracy
        </Link>

      </div>

    </article>
  )
}