import ArticleLayout from "@/features/articles/ArticleLayout"

export const metadata = {
  title: "Presja po świętach | MenMind",
  description: "Po czasie refleksji pojawia się presja działania."
}

export default function Page() {
  return (
    <>
      <h1>Presja po świętach</h1>

      <p>
        Święta skłaniają do refleksji.
      </p>

      <p>
        Po nich pojawia się presja.
      </p>

      <h2>Najczęstsze myśli</h2>

      <ul>
        <li>muszę coś zmienić</li>
        <li>stoi w miejscu</li>
        <li>czas ucieka</li>
      </ul>

      <h2>Prawda</h2>

      <p>
        Presja rośnie,
        gdy brak konkretnego planu.
      </p>
    </>
  )
}