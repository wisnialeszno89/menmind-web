import ArticleLayout from "@/components/article/ArticleLayout"
import NextStep from "@/components/ui/NextStep"
import ToolsBox from "@/components/ui/ToolsBox"

export default function Page() {
  return (
    <ArticleLayout
      title="Relacja z nastolatkiem"
      intro="Relacja z nastolatkiem potrafi być jednym z największych wyzwań dla ojca. W tym wieku dzieci zaczynają szukać swojej niezależności."
    >

      <h2>Dlaczego nastolatki się oddalają</h2>

      <p>
        W okresie dojrzewania dzieci zaczynają budować własną
        tożsamość. Często oznacza to większy dystans wobec rodziców.
      </p>

      <h2>Największy błąd rodziców</h2>

      <p>
        Próba kontrolowania każdej decyzji dziecka.
        Nastolatki reagują na to buntem lub wycofaniem.
      </p>

      <h2>Co działa lepiej</h2>

      <ul>
        <li>słuchanie zamiast oceniania</li>
        <li>szacunek dla prywatności</li>
        <li>wspólne aktywności</li>
      </ul>

      <h2>Rola ojca</h2>

      <p>
        Ojciec często jest dla nastolatka wzorem stabilności
        i odpowiedzialności. To nie wymaga idealności,
        lecz autentyczności.
      </p>

      <ToolsBox />

      <NextStep
        items={[
          { title: "Kontakty z dzieckiem", href: "/ojcostwo/kontakty-z-dzieckiem" },
          { title: "Odbudowa relacji", href: "/ojcostwo/odbudowa-relacji" }
        ]}
      />

    </ArticleLayout>
  )
}