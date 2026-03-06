import ArticleCard from "@/components/ArticleCard"
import PrimaryButton from "@/components/ui/PrimaryButton"
import WorldPage from "@/components/layout/WorldPage"
import Hero from "@/components/layout/Hero"

<Hero
title="Kryzys"
intro="
Moment kiedy stare rozwiązania przestają działać.
Chaos, napięcie i brak kierunku.
"
/>

export default function KryzysPage() {

  return (

    <WorldPage
      title="Kryzys"
      intro="
      Moment kiedy stare rozwiązania przestają działać.
      Chaos, napięcie i brak kierunku.

      Kryzys nie musi być końcem.
      Często jest początkiem zmiany.
      "
    >

      {/* OBJAWY */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Co często się wtedy dzieje
        </h2>

        <ul className="space-y-2 text-gray-700">

          <li>• chaos decyzyjny</li>
          <li>• napięcie i brak snu</li>
          <li>• konflikty w relacjach</li>
          <li>• poczucie braku kierunku</li>
          <li>• spadek energii</li>

        </ul>

      </section>


      {/* PIERWSZE KROKI */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Pierwsze kroki
        </h2>

        <ul className="space-y-2 text-gray-700">

          <li>• ogranicz chaos informacji</li>
          <li>• zapisz fakty zamiast myśli</li>
          <li>• podejmij jedną decyzję</li>
          <li>• zadbaj o sen i ciało</li>

        </ul>

      </section>


      {/* ARTYKUŁY */}

      <section>

        <h2 className="text-xl font-semibold mb-6">
          Zrozum sytuację
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <ArticleCard
            title="Dlaczego mężczyźni zwlekają z decyzją"
            intro="Presja odpowiedzialności sprawia że wielu mężczyzn odkłada decyzje."
            href="/kryzys/dlaczego-mezczyzni-zwlekaja"
          />

          <ArticleCard
            title="Jak mężczyźni reagują na stres"
            intro="Trzy najczęstsze reakcje na stres i napięcie."
            href="/kryzys/jak-mezczyzni-reaguja-na-stres"
          />

        </div>

      </section>


      {/* WSPARCIE */}

      <section>

        <h2 className="text-xl font-semibold mb-4">
          Jeśli potrzebujesz wsparcia
        </h2>

        <PrimaryButton href="/propozycje">

          Sprawdź dostępne możliwości

        </PrimaryButton>

      </section>

    </WorldPage>

  )

}