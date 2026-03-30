import ArticleLayout from "@/features/articles/ArticleLayout"
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-6">

      <h1 className="text-3xl font-semibold mb-6">
        Co zrobić po rozstaniu — pierwsze kroki dla mężczyzny
      </h1>

      <p className="mb-4">
        Rozstanie potrafi wywrócić wszystko. Relację, rutynę, plany,
        poczucie stabilności. Nagle zostajesz z ciszą i chaosem.
      </p>

      <p className="mb-4">
        W pierwszych dniach większość mężczyzn reaguje impulsywnie.
        Pisanie, analizowanie, próby naprawy wszystkiego od razu.
        To zwykle pogarsza sytuację.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Czego nie robić
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Nie błagaj o powrót</li>
        <li>Nie pisz codziennie</li>
        <li>Nie analizuj każdej rozmowy</li>
        <li>Nie podejmuj dużych decyzji</li>
      </ul>

      <p className="mb-4">
        Pierwszy etap to stabilizacja. Nie naprawa relacji.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Co zrobić najpierw
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Uspokoić emocje</li>
        <li>Ustalić rutynę dnia</li>
        <li>Zadbać o sen</li>
        <li>Ograniczyć kontakt na chwilę</li>
        <li>Skupić się na podstawach</li>
      </ol>

      <p className="mb-4">
        To nie jest ucieczka. To odzyskiwanie stabilności.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Co się dzieje później
      </h2>

      <p className="mb-4">
        Po kilku tygodniach zaczyna wracać spokój. Dopiero wtedy można
        myśleć o kolejnych krokach. Czy odbudowa relacji, czy zamknięcie
        tematu.
      </p>

      <p>
        Najważniejsze: po rozstaniu nie musisz wszystkiego rozumieć.
        Najpierw trzeba stanąć na nogi.
      </p>

    </article>
  )
}