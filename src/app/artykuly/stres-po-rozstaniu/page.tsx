import ArticleLayout from "@/features/articles/ArticleLayout"
export const metadata = {
  title: "Stres po rozstaniu | MenMind",
  description: "Rozstanie to duża zmiana, która powoduje napięcie."
}

export default function Page() {
  return (
    <>
      <h1>Stres po rozstaniu</h1>

      <p>
        Rozstanie to jedna z większych
        zmian życiowych.
      </p>

      <p>
        Pojawia się niepewność,
        reorganizacja życia
        i silne emocje.
      </p>

      <h2>Najczęstsze objawy</h2>
      <ul>
        <li>napięcie</li>
        <li>bezsenność</li>
        <li>niepokój</li>
        <li>problemy z koncentracją</li>
      </ul>

      <p>
        To naturalna reakcja
        na dużą zmianę.
      </p>
    </>
  )
}