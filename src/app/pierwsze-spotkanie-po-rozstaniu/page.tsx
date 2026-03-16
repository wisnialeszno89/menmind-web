import ArticleLayout from "@/features/articles/ArticleLayout"

export default function Page() {

  return (
    <ArticleLayout
title="Pierwsze spotkanie po rozstaniu"
description="..."
world="ojcostwo"
>

      <h2>Dlaczego to spotkanie jest ważne</h2>

      <p>
        Dla dziecka to moment sprawdzenia,
        czy relacja z ojcem nadal jest bezpieczna.
      </p>

      <h2>Jak się przygotować</h2>

      <ul>
        <li>zachować spokój</li>
        <li>unikać rozmów o konflikcie</li>
        <li>skupić się na czasie razem</li>
      </ul>

      <h2>Najczęstsze błędy</h2>

      <ul>
        <li>rozmowa o konflikcie dorosłych</li>
        <li>wywieranie presji</li>
        <li>zbyt duże oczekiwania</li>
      </ul>

    </ArticleLayout>
  )
}