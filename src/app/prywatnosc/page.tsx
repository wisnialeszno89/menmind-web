export default function PrivacyPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · dokument</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Polityka prywatności
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          MenMind szanuje prywatność. Strona działa bez kont i bez wymogu podawania danych.
        </p>

        <section className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              1. Dane i logi techniczne
            </h2>
            <p className="mt-2">
              Serwis może przetwarzać podstawowe dane techniczne, takie jak adres IP,
              typ przeglądarki i informacje diagnostyczne (np. w celu poprawy działania).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              2. Treści zewnętrzne (np. czat)
            </h2>
            <p className="mt-2">
              Niektóre elementy (np. osadzony czat) mogą działać w ramach usług zewnętrznych.
              W takim przypadku przetwarzanie danych może podlegać politykom prywatności tych usług.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              3. Cookies
            </h2>
            <p className="mt-2">
              MenMind nie używa cookies do śledzenia w celach reklamowych.
              Jeśli w przyszłości pojawią się narzędzia analityczne, informacje zostaną tu zaktualizowane.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              4. Kontakt
            </h2>
            <p className="mt-2">
              Jeśli chcesz zgłosić problem lub zapytać o prywatność — skontaktuj się przez formularz/stronę kontaktową,
              jeśli jest dostępna w serwisie.
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