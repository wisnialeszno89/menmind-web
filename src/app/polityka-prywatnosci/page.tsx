export default function PrivacyPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-semibold mb-6">
          Polityka prywatności
        </h1>

        <p className="text-zinc-600 mb-6">
          Serwis MenMind szanuje prywatność użytkowników.
        </p>

        <h2 className="font-semibold mt-8 mb-2">1. Administrator danych</h2>
        <p className="text-zinc-600">
          Administratorem danych jest właściciel serwisu MenMind.
        </p>

        <h2 className="font-semibold mt-8 mb-2">2. Jakie dane zbieramy</h2>
        <ul className="list-disc ml-6 text-zinc-600">
          <li>dane techniczne (cookies, analytics)</li>
          <li>anonimowe wyniki testów</li>
          <li>dane wpisane dobrowolnie przez użytkownika</li>
        </ul>

        <h2 className="font-semibold mt-8 mb-2">3. Cel przetwarzania</h2>
        <p className="text-zinc-600">
          Dane wykorzystywane są do:
          poprawy działania serwisu,
          analizy ruchu,
          ulepszania narzędzi.
        </p>

        <h2 className="font-semibold mt-8 mb-2">4. Google Analytics</h2>
        <p className="text-zinc-600">
          Serwis korzysta z Google Analytics do analizy ruchu.
        </p>

        <h2 className="font-semibold mt-8 mb-2">5. Przechowywanie danych</h2>
        <p className="text-zinc-600">
          Część danych przechowywana jest lokalnie w przeglądarce użytkownika.
        </p>

        <h2 className="font-semibold mt-8 mb-2">6. Prawa użytkownika</h2>
        <p className="text-zinc-600">
          Użytkownik może usunąć dane poprzez wyczyszczenie cookies.
        </p>

      </div>
    </main>
  )
}