export default function CookiesPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-semibold mb-6">
          Polityka cookies
        </h1>

        <p className="text-zinc-600">
          Serwis MenMind wykorzystuje pliki cookies.
        </p>

        <h2 className="font-semibold mt-8 mb-2">
          Jakie cookies wykorzystujemy
        </h2>

        <ul className="list-disc ml-6 text-zinc-600">
          <li>cookies techniczne</li>
          <li>cookies analityczne (Google Analytics)</li>
          <li>localStorage dla narzędzi</li>
        </ul>

        <h2 className="font-semibold mt-8 mb-2">
          Zarządzanie cookies
        </h2>

        <p className="text-zinc-600">
          Możesz wyłączyć cookies w ustawieniach przeglądarki.
        </p>

      </div>
    </main>
  )
}