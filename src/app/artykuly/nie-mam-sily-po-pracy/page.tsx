import Link from "next/link"

export const metadata = {
  title: "Nie mam siły po pracy – co to naprawdę oznacza | MenMind",
  description: "Wracasz z pracy bez energii? Zobacz skąd to się bierze i co można zrobić."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Nie mam siły po pracy
      </h1>

      <p className="mb-4">
        Coraz więcej mężczyzn mówi to samo.
        Wracam z pracy i nie mam siły na nic.
      </p>

      <p className="mb-4">
        Nie na sport. Nie na rozmowę.
        Nie na dziecko. Nie na partnerkę.
        Nawet nie na odpoczynek.
      </p>

      <p className="mb-8">
        To nie jest lenistwo.
        To przeciążenie.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Problem nie zawsze leży w pracy
      </h2>

      <p className="mb-4">
        Często to nie sama praca jest problemem,
        ale to jak długo jesteś w trybie napięcia.
      </p>

      <p className="mb-4">
        Decyzje. Presja. Odpowiedzialność.
        Dojazdy. Brak ruchu.
        Ciągłe myślenie o pieniądzach.
      </p>

      <p className="mb-8">
        Organizm w końcu zaczyna się bronić.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Typowe objawy
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>brak energii po pracy</li>
        <li>irytacja</li>
        <li>niechęć do ludzi</li>
        <li>odkładanie decyzji</li>
        <li>spadek motywacji</li>
        <li>ciągłe zmęczenie</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Najczęstsze przyczyny
      </h2>

      <p className="mb-4">
        Monotonia. Brak sensu.
        Brak wpływu.
        Niskie wynagrodzenie.
      </p>

      <p className="mb-4">
        Albo odwrotnie — zbyt duża odpowiedzialność
        i brak przestrzeni na odpoczynek.
      </p>

      <p className="mb-8">
        W obu przypadkach efekt jest ten sam:
        wyczerpanie.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Co możesz zrobić teraz
      </h2>

      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>Sprawdź ile masz realnie energii</li>
        <li>Ogranicz jedną rzecz dziennie</li>
        <li>Wprowadź 20 min ruchu</li>
        <li>Zrób krótką przerwę mentalną</li>
        <li>Zastanów się czy praca Cię nie wypala</li>
      </ol>

      <p className="mb-8">
        Czasem problemem nie jest zmęczenie.
        Tylko to, że jesteś w złym miejscu.
      </p>

      <div className="border rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Sprawdź dostępne opcje
        </h3>

        <p className="text-gray-600 mb-4">
          Zobacz czy zmiana pracy nie poprawi Twojej sytuacji.
        </p>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz ogłoszenia pracy
        </Link>

      </div>

      <p className="mb-4">
        Nie chodzi o to, żeby rzucać wszystko.
      </p>

      <p className="mb-4">
        Chodzi o to, żeby sprawdzić
        czy masz inne możliwości.
      </p>

      <p>
        Czasem sama świadomość,
        że możesz zmienić kierunek,
        daje więcej energii niż wolny weekend.
      </p>

    </article>
  )
}