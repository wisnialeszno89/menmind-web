import Link from "next/link";
import WorldPage from "../../components/layout/WorldPage"

export default function KryzysPage() {
  return (
    <WorldPage
      title="Kryzys"
      intro="Moment kiedy stare rozwiązania przestają działać.
      Kryzys nie jest końcem. Jest sygnałem że coś trzeba zmienić."
    >

      <section>

        <h2 className="text-xl font-semibold mb-3">
          Co często się wtedy dzieje
        </h2>

        <ul className="space-y-2">
          <li>– chaos decyzyjny</li>
          <li>– napięcie i brak snu</li>
          <li>– konflikty w relacjach</li>
          <li>– poczucie braku kierunku</li>
        </ul>

      </section>

      <section>

        <h2 className="text-xl font-semibold mb-3">
          Co możesz zrobić teraz
        </h2>

        <ul className="space-y-2">
          <li>– ogranicz chaos informacji</li>
          <li>– zapisz fakty zamiast myśli</li>
          <li>– podejmij jedną decyzję</li>
        </ul>

      </section>

      {/* artykuły */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Jeśli chcesz zrozumieć więcej
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <Link href="/kryzys/dlaczego-mezczyzni-zwlekaja" className="card">
            Dlaczego mężczyźni zwlekają z decyzją
          </Link>

          <Link href="/kryzys/jak-mezczyzni-reaguja-na-stres" className="card">
            Jak mężczyźni reagują na stres
          </Link>

        </div>

      </section>

      {/* pomoc */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Możliwe wsparcie
        </h2>

        <div className="space-y-2">

          <Link href="/kategoria/psycholog" className="text-blue-600">
            Psycholog
          </Link>

          <Link href="/kategoria/mediacje" className="block text-blue-600">
            Mediacje
          </Link>

          <Link href="/kategoria/prawo-rodzinne" className="block text-blue-600">
            Prawo rodzinne
          </Link>

        </div>

      </section>

    </WorldPage>
  );
}