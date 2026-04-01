import Link from "next/link"

export const metadata = {
  title: "Jak znaleźć lepszą pracę – konkretne kroki | MenMind",
  description: "Chcesz znaleźć lepszą pracę? Zobacz od czego zacząć."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Jak znaleźć lepszą pracę
      </h1>

      <p className="mb-4">
        Większość mężczyzn nie szuka pracy,
        dopóki nie jest naprawdę źle.
      </p>

      <p className="mb-8">
        To błąd.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Lepsza praca zaczyna się od świadomości
      </h2>

      <p className="mb-4">
        Najpierw musisz wiedzieć,
        czego Ci brakuje.
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>lepszych zarobków</li>
        <li>mniej stresu</li>
        <li>bliżej domu</li>
        <li>rozwoju</li>
        <li>lepszej atmosfery</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Błąd który popełnia większość
      </h2>

      <p className="mb-4">
        Szukanie pracy „w ciemno”.
      </p>

      <p className="mb-8">
        Bez określenia kierunku.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        4 kroki
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Sprawdź rynek</li>
        <li>Porównaj zarobki</li>
        <li>Zobacz wymagania</li>
        <li>Zrób pierwszy kontakt</li>
      </ol>

      <div className="border rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Sprawdź aktualne oferty
        </h3>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz ogłoszenia pracy
        </Link>

      </div>

      <p>
        Czasem lepsza praca jest bliżej,
        niż myślisz.
      </p>

    </article>
  )
}