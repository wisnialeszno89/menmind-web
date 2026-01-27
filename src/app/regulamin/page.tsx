export default function TermsPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · dokument</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Regulamin
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          MenMind to prosty punkt orientacyjny i zestaw narzędzi wspierających
          w trudnych momentach. Korzystając z serwisu akceptujesz poniższe zasady.
        </p>

        <section className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">1. Czym jest MenMind</h2>
            <p className="mt-2">
              MenMind nie jest usługą medyczną, psychologiczną ani terapeutyczną.
              Nie stawia diagnoz i nie zastępuje kontaktu ze specjalistą.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">2. Odpowiedzialność użytkownika</h2>
            <p className="mt-2">
              Korzystasz z MenMind dobrowolnie i na własną odpowiedzialność.
              Treści mają charakter informacyjny i wspierający.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">3. Sytuacje kryzysowe</h2>
            <p className="mt-2">
              Jeśli jesteś w sytuacji zagrożenia życia lub zdrowia (np. myśli samobójcze,
              przemoc, nagły stan psychiczny) — skontaktuj się z numerem alarmowym 112
              lub lokalną pomocą kryzysową. MenMind nie jest narzędziem interwencyjnym.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">4. Prywatność i rozmowy</h2>
            <p className="mt-2">
              MenMind nie wymaga konta. W zależności od konfiguracji i narzędzi zewnętrznych
              (np. wbudowany czat) niektóre elementy mogą działać w ramach usług partnerów.
              Szczegóły opisuje Polityka prywatności.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">5. Linki i partnerzy</h2>
            <p className="mt-2">
              MenMind może zawierać odnośniki do zewnętrznych ofert i zasobów.
              Nie odpowiadamy za treści, bezpieczeństwo ani jakość usług stron trzecich.
              Korzystasz z nich według własnej oceny.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">6. Zmiany</h2>
            <p className="mt-2">
              Regulamin może być aktualizowany. Najnowsza wersja jest zawsze dostępna na tej stronie.
            </p>
          </div>
        </section>

        <p className="mt-10 text-xs text-zinc-500">
          Ostatnia aktualizacja: {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    </main>
  );
}