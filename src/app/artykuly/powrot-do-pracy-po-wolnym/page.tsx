import ArticleLayout from "@/features/articles/ArticleLayout"

export const metadata = {
  title: "Powrót do pracy po wolnym | MenMind",
  description: "Powrót do obowiązków bywa trudny."
}

export default function Page() {
  return (
    <>
      <h1>Powrót do pracy po wolnym</h1>

      <p>
        Po dłuższym wolnym
        powrót do pracy jest trudny.
      </p>

      <h2>Najczęstsze odczucia</h2>

      <ul>
        <li>brak energii</li>
        <li>opór</li>
        <li>rozkojarzenie</li>
      </ul>

      <h2>Prawda</h2>

      <p>
        Pierwszy dzień jest najtrudniejszy.
        Potem wraca rytm.
      </p>
    </>
  )
}