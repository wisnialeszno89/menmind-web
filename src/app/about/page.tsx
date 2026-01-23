export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">
        Po co istnieje Waypoint
      </h1>

      <section className="space-y-6 text-zinc-400 leading-relaxed">
        <p>
          Waypoint powstał z prostego powodu:
          wielu facetów trafia w moment, w którym
          stare sposoby przestają działać,
          a nowe jeszcze się nie pojawiły.
        </p>

        <p>
          To nie zawsze jest kryzys.
          Czasem to rozstanie.
          Czasem pustka.
          Czasem zmęczenie walką.
        </p>

        <p>
          W takich momentach internet zwykle oferuje
          dwie skrajności:  
          albo banalne motywacyjne hasła,
          albo etykietowanie i diagnozowanie.
        </p>

        <p className="text-zinc-200 font-medium">
          Waypoint nie robi żadnej z tych rzeczy.
        </p>

        <p>
          To nie jest terapia.
          To nie jest poradnik „jak żyć”.
          To nie jest miejsce, które mówi Ci,
          kim masz się stać.
        </p>

        <p>
          Waypoint to punkt orientacyjny.
          Miejsce, w którym możesz na chwilę
          zatrzymać się i zobaczyć,
          gdzie jesteś — bez ocen.
        </p>

        <p>
          Dalej decyzja zawsze należy do Ciebie:
          możesz pogadać,
          możesz się ruszyć,
          możesz po prostu wyjść.
        </p>

        <p className="text-zinc-200 font-medium">
          I to też jest w porządku.
        </p>
      </section>

      <section className="mt-12 border-t border-zinc-800 pt-8 text-sm text-zinc-500">
        <p>
          Bez kont.  
          Bez zapisywania rozmów.  
          Bez śledzenia.
        </p>

        <p className="mt-2">
          Waypoint szanuje prywatność,
          bo bez niej nie ma zaufania.
        </p>
      </section>
    </main>
  );
}