import Link from "next/link"

export const metadata = {
  title: "Chcę zmienić życie zawodowe – od czego zacząć | MenMind",
  description: "Myślisz o zmianie życia zawodowego? Zobacz pierwszy krok bez chaosu."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Chcę zmienić życie zawodowe
      </h1>

      <p className="mb-4">
        To moment, kiedy zaczynasz czuć,
        że obecna praca przestała pasować.
      </p>

      <p className="mb-8">
        Nie chodzi o kryzys.
        Bardziej o poczucie, że możesz więcej.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Największy błąd
      </h2>

      <p className="mb-4">
        Próba zmiany wszystkiego naraz.
      </p>

      <p className="mb-8">
        To kończy się frustracją i powrotem do punktu wyjścia.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Lepsze podejście
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Zobacz jakie masz opcje</li>
        <li>Porównaj wymagania</li>
        <li>Sprawdź zarobki</li>
        <li>Zrób jeden ruch</li>
      </ol>

      <div className="border rounded-xl p-6 mb-10">
        <h3 className="font-semibold mb-2">
          Sprawdź dostępne kierunki
        </h3>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz ogłoszenia pracy
        </Link>
      </div>

      <p>
        Zmiana nie zaczyna się od decyzji.
        Zaczyna się od sprawdzenia możliwości.
      </p>

    </article>
  )
}