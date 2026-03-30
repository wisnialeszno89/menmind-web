import ArticleLayout from "@/features/articles/ArticleLayout"
export const metadata = {
  title: "Chaos finansowy | MenMind",
  description: "Gdy finanse są nieuporządkowane, pojawia się napięcie."
}

export default function Page() {
  return (
    <>
      <h1>Chaos finansowy</h1>

      <p>
        Chaos finansowy nie zawsze oznacza
        brak pieniędzy. Często chodzi
        o brak jasności.
      </p>

      <p>
        Wydatki, zobowiązania, brak planu
        tworzą napięcie, które wpływa
        na codzienne decyzje.
      </p>

      <h2>Sygnały</h2>
      <ul>
        <li>brak kontroli nad wydatkami</li>
        <li>unikanie sprawdzania konta</li>
        <li>niepewność</li>
        <li>ciągły stres</li>
      </ul>

      <p>
        Uporządkowanie to pierwszy krok
        do odzyskania spokoju.
      </p>
    </>
  )
}