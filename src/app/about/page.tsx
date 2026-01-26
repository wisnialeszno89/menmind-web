export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">Waypoint · o projekcie</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Po co istnieje <span className="text-cyan-300">Waypoint</span>
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Dla momentów, w których stare sposoby przestają działać,
            a nowe jeszcze się nie pojawiły.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p>
              Waypoint powstał z prostego powodu: wielu facetów trafia w moment,
              w którym stare sposoby przestają działać, a nowe jeszcze się nie
              pojawiły.
            </p>

            <p>
              To nie zawsze jest kryzys. Czasem to rozstanie. Czasem pustka.
              Czasem zmęczenie walką.
            </p>

            <p>
              W takich momentach internet zwykle oferuje dwie skrajności: albo
              banalne motywacyjne hasła, albo etykietowanie i diagnozowanie.
            </p>

            <p className="text-zinc-100 font-medium">
              Waypoint nie robi żadnej z tych rzeczy.
            </p>

            <p>
              To nie jest terapia. To nie jest poradnik „jak żyć”. To nie jest
              miejsce, które mówi Ci, kim masz się stać.
            </p>

            <p>
              Waypoint to punkt orientacyjny. Miejsce, w którym możesz na chwilę
              zatrzymać się i zobaczyć, gdzie jesteś — bez ocen.
            </p>

            <p>
              Dalej decyzja zawsze należy do Ciebie: możesz pogadać, możesz się
              ruszyć, możesz po prostu wyjść.
            </p>

            <p className="text-zinc-100 font-medium">I to też jest w porządku.</p>
          </div>

          <div className="mt-10 border-t border-zinc-800/70 pt-6">
            <p className="text-sm text-zinc-400">
              Bez kont. Bez zapisywania rozmów. Bez śledzenia.
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Waypoint szanuje prywatność, bo bez niej nie ma zaufania.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}