import Link from "next/link";

export const metadata = {
  title: "Odbudowa | MenMind",
  description:
    "Powrót do energii i sprawczości. Małe ruchy, które przywracają kontrolę.",
};

export default function OdbudowaPage() {
  return (
    <div className="text-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Nagłówek */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Odbudowa
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-16 max-w-2xl leading-8">
          Kryzys to zatrzymanie.  
          Odbudowa to pierwszy ruch.  
          Nie musisz zmieniać wszystkiego.  
          Wystarczy zacząć.
        </p>

        {/* 3 filary */}
        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Ciało
            </h2>
            <p className="text-neutral-300 leading-8">
              Bez energii fizycznej trudno podejmować decyzje.
              Sen, ruch i regularność to fundament.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Struktura
            </h2>
            <p className="text-neutral-300 leading-8">
              Chaos w głowie często zaczyna się od chaosu w dniu.
              Trzy konkretne rzeczy dziennie wystarczą na początek.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Kontakt
            </h2>
            <p className="text-neutral-300 leading-8">
              Nie wielkie rozmowy.  
              Normalny kontakt.  
              Ktoś, kto widzi Cię poza problemem.
            </p>
          </section>

        </div>

        {/* 7 pierwszych ruchów */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-8">
            Od czego zacząć w tym tygodniu
          </h2>

          <ul className="space-y-4 text-neutral-300 leading-8">
            <li>– uporządkuj jedno miejsce wokół siebie</li>
            <li>– 30 minut ruchu</li>
            <li>– wyłącz jedną rzecz, która Cię drenuje</li>
            <li>– zadzwoń do kogoś normalnego</li>
            <li>– połóż się spać wcześniej</li>
            <li>– zapisz 3 rzeczy na jutro</li>
            <li>– podejmij jedną małą decyzję</li>
          </ul>
        </section>

        {/* Przejścia */}
        <section className="border-t border-neutral-800 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Dalej możesz:
          </h2>

          <div className="space-y-4 text-lg">

            <Link
              href="/propozycje/energia"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Przejść do pracy z ciałem →
            </Link>

            <Link
              href="/narzedzia"
              className="block text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
            >
              Skorzystać z narzędzi →
            </Link>

            <Link
              href="/propozycje"
              className="block text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
            >
              Sprawdzić dostępne propozycje →
            </Link>

          </div>

        </section>

      </div>
    </div>
  );
}