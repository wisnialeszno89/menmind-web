import ArticleLayout from "@/components/article/ArticleLayout"
import NextStep from "@/components/ui/NextStep"
import ToolsBox from "@/components/ui/ToolsBox"

export default function Page() {
  return (
    <ArticleLayout
      title="Odbudowa relacji z dzieckiem"
      intro="Relacja ojciec–dziecko potrafi zostać osłabiona przez konflikt dorosłych, rozstanie lub brak regularnych spotkań. Na szczęście relacje można odbudować."
    >

      <h2>Dlaczego relacja słabnie</h2>

      <p>
        Dzieci są bardzo wrażliwe na napięcie między rodzicami.
        Gdy pojawia się konflikt, dziecko może zacząć unikać
        kontaktu z jednym z nich, aby uniknąć emocjonalnego chaosu.
      </p>

      <h2>Najważniejsza zasada odbudowy</h2>

      <p>
        Relacje odbudowują się powoli. Nie przez jedną rozmowę,
        lecz przez serię małych momentów zaufania.
      </p>

      <h2>Małe rzeczy które działają</h2>

      <ul>
        <li>regularne spotkania</li>
        <li>wspólne rytuały</li>
        <li>rozmowa bez oceniania</li>
        <li>cierpliwość</li>
      </ul>

      <h2>Co dziecko naprawdę chce poczuć</h2>

      <p>
        Najważniejsze dla dziecka jest poczucie bezpieczeństwa.
        Gdy widzi stabilność emocjonalną u ojca,
        relacja zaczyna się odbudowywać.
      </p>

      <ToolsBox />

      <NextStep
        items={[
          { title: "Kontakty z dzieckiem", href: "/ojcostwo/kontakty-z-dzieckiem" },
          { title: "Jak rozmawiać z dzieckiem", href: "/ojcostwo/jak-rozmawiac-z-dzieckiem" },
          { title: "Relacja z nastolatkiem", href: "/ojcostwo/relacja-z-nastolatkiem" }
        ]}
      />

    </ArticleLayout>
  )
}