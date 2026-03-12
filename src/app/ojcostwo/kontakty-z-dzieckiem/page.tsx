import ArticleLayout from "@/components/article/ArticleLayout"
import NextStep from "@/components/ui/NextStep"
import ToolsBox from "@/components/ui/ToolsBox"

export default function Page() {

  return (
    <ArticleLayout
      title="Kontakty z dzieckiem po rozstaniu"
      intro="Rozstanie rodziców nie musi oznaczać końca relacji ojciec–dziecko. W praktyce jednak wielu ojców doświadcza utrudniania kontaktu lub stopniowego oddalania się dziecka."
    >

      <h2>Dlaczego kontakt z dzieckiem zaczyna się psuć</h2>

      <p>
        Po rozstaniu między dorosłymi często pojawia się napięcie,
        które zaczyna wpływać na relację z dzieckiem. 
        Dziecko znajduje się pomiędzy dwoma światami i często
        próbuje dostosować się do silniejszej strony konfliktu.
      </p>

      <p>
        Czasami utrudnianie kontaktu nie jest nawet świadome.
        Wynika z emocji, lęku lub potrzeby kontroli sytuacji.
        W innych przypadkach jest to już świadome działanie.
      </p>

      <h2>Najczęstsze problemy</h2>

      <ul>
        <li>zmienianie terminów spotkań</li>
        <li>utrudnianie rozmów telefonicznych</li>
        <li>manipulowanie emocjami dziecka</li>
        <li>przekazywanie negatywnych informacji o drugim rodzicu</li>
      </ul>

      <h2>Jak reaguje dziecko</h2>

      <p>
        Dzieci często reagują na konflikt lojalnością wobec jednego
        z rodziców. Może pojawić się wycofanie, chłód emocjonalny
        lub niechęć do rozmowy.
      </p>

      <p>
        Nie zawsze oznacza to, że dziecko nie chce kontaktu.
        Często jest to mechanizm obronny.
      </p>

      <h2>Co może zrobić ojciec</h2>

      <p>
        Najważniejsze jest utrzymanie stabilnej postawy.
        Dziecko potrzebuje poczucia bezpieczeństwa,
        a nie kolejnego konfliktu.
      </p>

      <ul>
        <li>utrzymuj spokojną komunikację</li>
        <li>nie krytykuj drugiego rodzica przy dziecku</li>
        <li>buduj regularność kontaktów</li>
        <li>twórz małe rytuały spotkań</li>
      </ul>

      <h2>Błędy które pogarszają sytuację</h2>

      <ul>
        <li>eskalowanie konfliktu przy dziecku</li>
        <li>próby przekonywania dziecka przeciwko drugiemu rodzicowi</li>
        <li>rezygnacja z kontaktu z powodu frustracji</li>
      </ul>

      <h2>Małe rzeczy które budują relację</h2>

      <p>
        Relacja z dzieckiem rzadko odbudowuje się jednym wielkim
        gestem. Najczęściej powstaje z małych powtarzalnych momentów.
      </p>

      <ul>
        <li>wspólne jedzenie</li>
        <li>rozmowa przed snem</li>
        <li>krótki spacer</li>
        <li>wspólna aktywność</li>
      </ul>

      <ToolsBox />

      <NextStep
        items={[
          {
            title: "Prawa ojca",
            href: "/ojcostwo/prawa-ojca"
          },
          {
            title: "Jak odbudować relację z dzieckiem",
            href: "/ojcostwo/odbudowa-relacji"
          },
          {
            title: "Relacja z nastolatkiem",
            href: "/ojcostwo/relacja-z-nastolatkiem"
          }
        ]}
      />

    </ArticleLayout>
  )
}