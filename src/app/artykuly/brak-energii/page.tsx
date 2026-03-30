import ArticleLayout from "@/features/articles/ArticleLayout"

export const metadata = {
  title: "Brak energii | MenMind",
  description: "Co zrobić gdy brakuje energii do działania."
}

export default function Page() {
  return (

    <ArticleLayout
      title="Brak energii"
      description="Co zrobić gdy brakuje energii do działania."
      world="kryzys"
      slug="brak-energii"
    >

      <p>
        Brak energii często pojawia się stopniowo.
        Najpierw trudniej się skupić.
      </p>

      <p>
        Potem odkładasz kolejne rzeczy.
        W końcu pojawia się zmęczenie.
      </p>

      <h2>Najczęstsze przyczyny</h2>

      <ul>
        <li>przeciążenie</li>
        <li>brak snu</li>
        <li>stres</li>
      </ul>

      <p>
        To sygnał, że potrzebujesz odzyskać równowagę.
      </p>

    </ArticleLayout>

  )
}