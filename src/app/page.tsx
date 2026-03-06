import Link from "next/link"
<section className="section-compact bg-gray-50">
  <div className="container-2026">

    <h2 className="text-2xl font-semibold mb-10 text-center">
      Od czego chcesz zacząć
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <Link
        href="/zacznij"
        className="card text-center p-8"
      >
        <h3 className="font-semibold mb-2">
          Znajdź kierunek
        </h3>

        <p className="text-gray-600 text-sm">
          Kompas MenMind pomaga wybrać pierwszy krok.
        </p>
      </Link>

      <Link
        href="/narzedzia"
        className="card text-center p-8"
      >
        <h3 className="font-semibold mb-2">
          Zrób szybkie narzędzie
        </h3>

        <p className="text-gray-600 text-sm">
          Kilka minut może pomóc uporządkować sytuację.
        </p>
      </Link>

      <Link
        href="/propozycje"
        className="card text-center p-8"
      >
        <h3 className="font-semibold mb-2">
          Znajdź wsparcie
        </h3>

        <p className="text-gray-600 text-sm">
          Sprawdź dostępne możliwości pomocy.
        </p>
      </Link>

    </div>

  </div>
</section>