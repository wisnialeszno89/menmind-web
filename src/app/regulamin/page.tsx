export default function TermsPL() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-black">
      <div className="mx-auto max-w-3xl">

        <p className="text-sm text-gray-500">
          MenMind · dokument
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Regulamin
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed">
          MenMind to narzędzie wspierające w porządkowaniu sytuacji życiowej.
          Korzystając z serwisu akceptujesz poniższe zasady.
        </p>

        <section className="mt-10 space-y-6 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-lg font-semibold text-black">
              1. Charakter serwisu
            </h2>
            <p className="mt-2">
              MenMind ma charakter informacyjny i edukacyjny.
              Serwis nie świadczy usług medycznych, psychologicznych,
              terapeutycznych ani prawnych.
            </p>
            <p className="mt-2">
              Treści nie stanowią diagnozy ani profesjonalnej porady.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              2. Brak gwarancji rezultatów
            </h2>
            <p className="mt-2">
              Korzystanie z narzędzi MenMind nie gwarantuje osiągnięcia
              określonych rezultatów. Każda decyzja użytkownika
              podejmowana jest samodzielnie i na własną odpowiedzialność.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              3. Odpowiedzialność użytkownika
            </h2>
            <p className="mt-2">
              Użytkownik korzysta z serwisu dobrowolnie i bierze
              pełną odpowiedzialność za swoje działania,
              decyzje i ich konsekwencje.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              4. Sytuacje kryzysowe
            </h2>
            <p className="mt-2">
              W przypadku zagrożenia życia lub zdrowia należy
              skontaktować się z numerem alarmowym 112
              lub odpowiednimi służbami.
            </p>
            <p className="mt-2">
              MenMind nie jest narzędziem interwencji kryzysowej.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              5. Narzędzia AI i automatyczne odpowiedzi
            </h2>
            <p className="mt-2">
              Niektóre funkcje serwisu mogą wykorzystywać
              automatyczne systemy generowania treści (AI).
              Odpowiedzi mają charakter pomocniczy
              i nie stanowią profesjonalnej porady.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              6. Linki zewnętrzne i partnerzy
            </h2>
            <p className="mt-2">
              Serwis może zawierać linki do usług zewnętrznych.
              MenMind nie odpowiada za treści, bezpieczeństwo
              ani jakość usług stron trzecich.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              7. Ograniczenie odpowiedzialności
            </h2>
            <p className="mt-2">
              W maksymalnym zakresie dozwolonym przez prawo
              MenMind nie ponosi odpowiedzialności za:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>decyzje podjęte przez użytkownika</li>
              <li>skutki wykorzystania treści</li>
              <li>brak dostępności serwisu</li>
              <li>błędy lub nieścisłości w treściach</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              8. Zmiany regulaminu
            </h2>
            <p className="mt-2">
              Regulamin może być aktualizowany.
              Najnowsza wersja jest publikowana na tej stronie.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-black">
              9. Prawo właściwe
            </h2>
            <p className="mt-2">
              Regulamin podlega prawu polskiemu.
            </p>
          </div>

        </section>

        <p className="mt-10 text-xs text-gray-500">
          Ostatnia aktualizacja: {new Date().toISOString().slice(0, 10)}
        </p>

      </div>
    </main>
  )
}