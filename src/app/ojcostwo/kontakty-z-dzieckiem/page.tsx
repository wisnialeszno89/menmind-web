import ArticleLayout from "@/components/article/ArticleLayout"

export default function Page() {
  return (
    <ArticleLayout
      title="Kontakty z dzieckiem po rozstaniu"
      intro="Rozstanie rodziców nie oznacza końca relacji ojciec–dziecko. Problem zaczyna się wtedy, gdy kontakt jest ograniczany."
      category="Ojcostwo"
    >

      <h2>Prawo do kontaktu</h2>

      <p>
        Każde dziecko ma prawo do relacji z obojgiem rodziców.
        Ograniczenie kontaktów powinno być wyjątkiem.
      </p>

      <h2>Najczęstsze problemy</h2>

      <ul>
        <li>utrudnianie spotkań</li>
        <li>zmiana terminów</li>
        <li>manipulowanie dzieckiem</li>
      </ul>

    </ArticleLayout>
  )
}