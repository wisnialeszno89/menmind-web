import Link from "next/link"

export const metadata = {
  title: "Stoję w miejscu w pracy – co to naprawdę oznacza | MenMind",
  description: "Masz poczucie stagnacji zawodowej? Sprawdź skąd się bierze i co można zrobić."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Stoję w miejscu w pracy
      </h1>

      <p className="mb-4">
        Nie jest źle. Ale też nie jest dobrze.
      </p>

      <p className="mb-4">
        Robisz swoje. Masz rutynę.
        Wiesz co masz zrobić każdego dnia.
      </p>

      <p className="mb-8">
        Tylko że nic się nie zmienia.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Stagnacja nie zawsze wygląda jak kryzys
      </h2>

      <p className="mb-4">
        Często nie ma dramatu.
        Jest spokój, stabilność, przewidywalność.
      </p>

      <p className="mb-4">
        Problem pojawia się, gdy zaczynasz czuć,
        że dni są identyczne.
      </p>

      <p className="mb-8">
        I że za rok będziesz dokładnie w tym samym miejscu.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Typowe sygnały stagnacji
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>brak nowych wyzwań</li>
        <li>brak rozwoju</li>
        <li>ta sama pensja od lat</li>
        <li>brak motywacji</li>
        <li>brak pomysłów na zmianę</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Dlaczego to męczy
      </h2>

      <p className="mb-4">
        Człowiek potrzebuje ruchu.
        Nie tylko fizycznego, ale też życiowego.
      </p>

      <p className="mb-4">
        Kiedy nic się nie zmienia,
        zaczyna pojawiać się frustracja.
      </p>

      <p className="mb-8">
        Nawet jeśli nie potrafisz jej nazwać.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Co możesz zrobić
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Sprawdź swoje możliwości</li>
        <li>Porównaj oferty pracy</li>
        <li>Ustal czego Ci brakuje</li>
        <li>Zrób jeden mały krok</li>
      </ol>

      <div className="border rounded-xl p-6 mb-10">
        <h3 className="font-semibold mb-2">
          Sprawdź inne opcje
        </h3>

        <p className="text-gray-600 mb-4">
          Zobacz jakie możliwości masz na rynku.
        </p>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz ogłoszenia pracy
        </Link>
      </div>

      <p>
        Czasem nie musisz zmieniać wszystkiego.
        Wystarczy zobaczyć, że masz wybór.
      </p>

    </article>
  )
}