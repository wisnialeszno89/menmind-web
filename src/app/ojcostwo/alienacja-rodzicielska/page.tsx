import ArticleLayout from "@/components/article/ArticleLayout"

export default function Page() {

  return (
    <ArticleLayout
      title="Alienacja rodzicielska"
      intro="Alienacja rodzicielska to sytuacja, w której dziecko zaczyna odrzucać jednego z rodziców pod wpływem konfliktu lub manipulacji."
    >

      <h2>Czym jest alienacja</h2>

      <p>
        Alienacja rodzicielska pojawia się wtedy, gdy relacja dziecka
        z jednym z rodziców zostaje stopniowo osłabiona lub zniszczona.
      </p>

      <h2>Objawy</h2>

      <ul>
        <li>dziecko nagle odrzuca jednego z rodziców</li>
        <li>powtarza negatywne opinie drugiego rodzica</li>
        <li>unika kontaktu</li>
      </ul>

      <h2>Jak reagować</h2>

      <p>
        Najważniejsze jest utrzymanie spokojnej relacji z dzieckiem
        i niepogłębianie konfliktu.
      </p>

      <h2>Co pomaga odbudować relację</h2>

      <ul>
        <li>regularne spotkania</li>
        <li>spokojna komunikacja</li>
        <li>cierpliwość</li>
      </ul>

    </ArticleLayout>
  )
}