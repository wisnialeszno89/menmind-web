import ArticleLayout from "@/components/article/ArticleLayout"
import NextStep from "@/components/ui/NextStep"
import ToolsBox from "@/components/ui/ToolsBox"

export default function Page() {
  return (
    <ArticleLayout
      title="Prawa ojca"
      intro="Ojciec ma takie same prawa rodzicielskie jak matka. W praktyce wielu mężczyzn nie zna jednak swoich możliwości działania ani zasad, które chronią relację z dzieckiem."
    >

      <h2>Równość praw rodzicielskich</h2>

      <p>
        Z punktu widzenia prawa oboje rodzice są równi. Oznacza to,
        że ojciec ma prawo uczestniczyć w wychowaniu dziecka,
        podejmować decyzje dotyczące jego życia oraz utrzymywać
        regularny kontakt.
      </p>

      <p>
        Problem pojawia się często dopiero w sytuacji konfliktu
        między rodzicami. Wtedy wiele spraw zaczyna być
        interpretowanych przez emocje zamiast przez fakty.
      </p>

      <h2>Najważniejsze prawa ojca</h2>

      <ul>
        <li>prawo do kontaktu z dzieckiem</li>
        <li>prawo do współdecydowania o wychowaniu</li>
        <li>prawo do informacji o zdrowiu i edukacji dziecka</li>
        <li>prawo do budowania relacji emocjonalnej</li>
      </ul>

      <h2>Dlaczego wielu ojców czuje się bezsilnych</h2>

      <p>
        Najczęściej nie wynika to z braku praw, lecz z braku wiedzy
        i wsparcia. Konflikt między rodzicami może powodować
        poczucie chaosu, a decyzje podejmowane w emocjach
        często pogarszają sytuację.
      </p>

      <h2>Co pomaga utrzymać relację</h2>

      <ul>
        <li>spokojna komunikacja</li>
        <li>konsekwencja w utrzymywaniu kontaktu</li>
        <li>unikanie konfliktów przy dziecku</li>
        <li>skupienie się na relacji, a nie sporze</li>
      </ul>

      <h2>Najczęstsze błędy</h2>

      <ul>
        <li>rezygnacja z kontaktu z powodu frustracji</li>
        <li>eskalowanie konfliktu</li>
        <li>próba wciągania dziecka w konflikt dorosłych</li>
      </ul>

      <ToolsBox />

      <NextStep
        items={[
          { title: "Kontakty z dzieckiem", href: "/ojcostwo/kontakty-z-dzieckiem" },
          { title: "Odbudowa relacji", href: "/ojcostwo/odbudowa-relacji" },
          { title: "Relacja z nastolatkiem", href: "/ojcostwo/relacja-z-nastolatkiem" }
        ]}
      />

    </ArticleLayout>
  )
}