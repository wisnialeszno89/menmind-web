import Link from "next/link"
import ArticleLayout from "@/features/articles/ArticleLayout"
export default function Page() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-6">

      <h1 className="text-3xl font-semibold mb-6">
        Brak motywacji do pracy u mężczyzny — kiedy przestaje się chcieć
      </h1>

      <p className="mb-4">
        Wstajesz rano i już czujesz opór. Praca, która kiedyś była
        normalna, zaczyna męczyć. Trudno się skupić, odkładasz zadania,
        robisz minimum. To częstsze, niż się wydaje.
      </p>

      <p className="mb-4">
        Brak motywacji do pracy nie zawsze oznacza, że powinieneś ją
        zmienić. Często problem leży gdzie indziej — w przeciążeniu,
        chaosie lub braku energii.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Najczęstsze objawy
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Odkładanie zadań</li>
        <li>Brak koncentracji</li>
        <li>Znużenie</li>
        <li>Robienie minimum</li>
        <li>Myśli o zmianie wszystkiego</li>
      </ul>

      <p className="mb-4">
        Wiele osób w tym momencie zaczyna szukać „motywacji”. Problem w
        tym, że motywacja jest niestabilna. Pojawia się i znika.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Co naprawdę się dzieje
      </h2>

      <p className="mb-4">
        Najczęściej to efekt przeciążenia. Za dużo decyzji, za dużo
        obowiązków, brak przerw. Mózg zaczyna się bronić i obniża
        zaangażowanie.
      </p>

      <p className="mb-4">
        Czasem to też brak poczucia wpływu. Robisz zadania, ale nie
        widzisz sensu. Wszystko wygląda jak powtarzalny schemat.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Największy błąd
      </h2>

      <p className="mb-4">
        Próba „zmobilizowania się” siłą. To działa chwilę, ale szybko
        wraca zmęczenie.
      </p>

      <p className="mb-4">
        Zamiast tego warto uporządkować podstawy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Co pomaga w praktyce
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Ograniczyć liczbę zadań</li>
        <li>Wprowadzić plan dnia</li>
        <li>Zacząć od jednego konkretu</li>
        <li>Zrobić krótkie przerwy</li>
        <li>Poprawić sen</li>
      </ol>

      <p className="mb-4">
        Motywacja często wraca dopiero po działaniu. Nie odwrotnie.
      </p>

      <p>
        Jeśli nie chce Ci się pracować — to nie znaczy, że jesteś leniwy.
        Często to sygnał, że coś wymaga uporządkowania.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Jeśli problem dotyczy pracy, możesz też{" "}
        <Link href="/praca" className="underline">
        sprawdzić aktualne ogłoszenia pracy
        </Link>.
      </p>

    </article>
  )
}