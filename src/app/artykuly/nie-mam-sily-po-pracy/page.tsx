import ArticleLayout from "@/features/articles/ArticleLayout"

export default function Page(){
  return (
    <ArticleLayout
        title="Nie mam siły po pracy na nic"
        description="..."
        world="kryzys"
         slug="nie-mam-sily-po-pracy"
        >

      <p>
        Wracasz do domu i masz wrażenie, że dzień się kończy.
        Nie dlatego, że wszystko zrobiłeś. Po prostu nie masz już siły.
      </p>

      <p>
        Otwierasz lodówkę, siadasz, scrollujesz.
        Myślisz, że zaraz coś ogarniesz.
        I nagle jest 22:30.
      </p>

      <p>
        To nie lenistwo.
        To sygnał, że coś zabiera Ci energię szybciej, niż ją odzyskujesz.
      </p>

      <h2>Najczęstsze powody</h2>

      <ul>
        <li>przeciążenie pracą</li>
        <li>brak ruchu w ciągu dnia</li>
        <li>ciągłe napięcie</li>
        <li>brak przerw</li>
        <li>monotonia</li>
      </ul>

      <p>
        Problem polega na tym, że ten stan się kumuluje.
        Z dnia na dzień robi się ciężej zacząć cokolwiek.
      </p>

      <h2>Nie chodzi o motywację</h2>

      <p>
        Kiedy jesteś zmęczony, motywacja nie działa.
        Najpierw trzeba odzyskać minimum energii.
      </p>

      <p>
        Dopiero potem można myśleć o zmianach.
      </p>

      <p>
        Dlatego zamiast zmuszać się, lepiej sprawdzić
        czy to chwilowe zmęczenie, czy już przeciążenie.
      </p>

    </ArticleLayout>
  )
}