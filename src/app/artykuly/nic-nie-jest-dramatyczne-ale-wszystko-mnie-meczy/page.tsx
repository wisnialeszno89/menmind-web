import Link from "next/link"

export const metadata = {
  title: "Nic się nie wali, ale wszystko mnie męczy",
  description:
    "Stan pomiędzy kryzysem a stagnacją. Kiedy nic nie jest dramatyczne, ale brakuje energii i kierunku.",
}

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <article className="prose prose-neutral max-w-none">

        <h1>Nic się nie wali, ale wszystko mnie męczy</h1>

        <p>
          Nie ma dramatu. Nie ma jednego problemu. Nikt nie odchodzi,
          praca jest, zdrowie w miarę też.
        </p>

        <p>
          A jednak coś jest nie tak. Rano wstajesz i od razu czujesz ciężar.
          Nie tragedię. Po prostu brak chęci.
        </p>

        <p>
          Wszystko działa, ale jakby na pół gwizdka.
        </p>

        <p>
          To nie jest kryzys. To nie jest depresja.
          To jest coś pomiędzy.
        </p>

        <p>
          Stan, w którym nic nie boli na tyle, żeby działać —
          ale wszystko męczy na tyle, żeby nie ruszyć dalej.
        </p>

        <h2>Jak to wygląda w praktyce</h2>

        <p>
          Nie robisz wielkich błędów. Po prostu odkładasz rzeczy.
        </p>

        <ul>
          <li>masz decyzje — odkładasz</li>
          <li>masz pomysł — nie zaczynasz</li>
          <li>masz energię — ale za mało, żeby ruszyć</li>
        </ul>

        <p>
          Dni zaczynają wyglądać podobnie.
          Praca → obowiązki → telefon → sen.
        </p>

        <p>
          Bez dramatów. Bez ekscytacji.
        </p>

        <h2>Najczęstsze sygnały stagnacji</h2>

        <ul>
          <li>odkładasz decyzje</li>
          <li>trudniej zacząć nowe rzeczy</li>
          <li>rzadziej inicjujesz rozmowy</li>
          <li>więcej scrollowania, mniej działania</li>
          <li>czujesz, że stoisz w miejscu</li>
        </ul>

        <p>
          To nie lenistwo. To przeciążenie, które nie wygląda jak przeciążenie.
        </p>

        <h2>Co się właściwie dzieje</h2>

        <p>
          Kiedy jest kryzys — reagujesz. Kiedy jest cel — działasz.
        </p>

        <p>
          Problem zaczyna się wtedy, kiedy nie ma ani jednego, ani drugiego.
        </p>

        <p>
          Brak presji = brak ruchu.  
          Brak kierunku = brak energii.
        </p>

        <p>
          Mózg oszczędza siły. Wybiera minimum.
        </p>

        <p>
          I tak wpadasz w stan „wszystko OK, ale stoję”.
        </p>

        <h2>To nie moment na wielkie zmiany</h2>

        <p>
          W stagnacji nie działa rewolucja.
          Działa mały ruch.
        </p>

        <p>
          Jedna decyzja. Jedna rozmowa. Jeden krok.
        </p>

        <p>
          Nie plan na rok. Nie przebudowa życia.
          Mały ruch, który przerywa bezruch.
        </p>

      </article>

      {/* CTA */}
      <section className="mt-12 border rounded-xl p-6 bg-gray-50">

        <h3 className="font-semibold mb-3">
          Sprawdź w którym miejscu jesteś
        </h3>

        <div className="space-y-3">

          <Link
            href="/narzedzia/test-stagnacji"
            className="block border rounded-lg p-4 bg-white"
          >
            👉 Zrób test stagnacji
          </Link>

          <Link
            href="/navimind"
            className="block border rounded-lg p-4 bg-white"
          >
            Porozmawiaj w NaviMind
          </Link>

          <Link
            href="/propozycje"
            className="block text-sm underline"
          >
            Zobacz dostępne wsparcie
          </Link>

        </div>

      </section>

    </main>
  )
}