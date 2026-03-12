import ArticleLayout from "@/components/article/ArticleLayout"

export default function Page() {

  return (
    <ArticleLayout
      title="Pierwsze spotkanie z dzieckiem po rozstaniu"
      intro="Pierwsze spotkanie po rozstaniu bywa trudne zarówno dla ojca jak i dla dziecka."
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