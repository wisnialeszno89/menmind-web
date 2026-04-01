import Link from "next/link"

export const metadata = {
  title: "Stagnacja w pracy u mężczyzny – co dalej | MenMind",
  description: "Masz poczucie stagnacji zawodowej? Zobacz co możesz zrobić."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Stagnacja w pracy
      </h1>

      <p className="mb-4">
        Nie rozwijasz się.
        Nie cofasz się.
      </p>

      <p className="mb-8">
        Po prostu stoisz.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Dlaczego to problem
      </h2>

      <p className="mb-4">
        Stagnacja nie boli od razu.
      </p>

      <p className="mb-4">
        Ale po czasie zaczyna odbierać energię.
      </p>

      <p className="mb-8">
        Pojawia się poczucie marnowania czasu.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Co ją powoduje
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>rutyna</li>
        <li>brak awansu</li>
        <li>brak podwyżek</li>
        <li>powtarzalność</li>
        <li>brak nowych wyzwań</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Pierwszy krok
      </h2>

      <p className="mb-4">
        Sprawdź rynek.
      </p>

      <p className="mb-8">
        Nie po to, żeby od razu zmieniać pracę.
        Tylko żeby zobaczyć gdzie jesteś.
      </p>

      <div className="border rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Zobacz możliwości
        </h3>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Sprawdź oferty pracy
        </Link>

      </div>

    </article>
  )
}