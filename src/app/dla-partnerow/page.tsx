import Link from "next/link"

export const metadata = {
  title: "Dla partnerów | MenMind",
  description:
    "Dołącz do platformy wsparcia dla mężczyzn i pokaż swoją ofertę tysiącom użytkowników.",
}

export default function PartnerzyPage() {

  return (

    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
          Dla partnerów
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-10" />

        <p className="text-gray-700 mb-10 max-w-2xl">
          MenMind to mapa wsparcia dla mężczyzn w Polsce.
          Łączymy użytkowników z psychologami, prawnikami,
          trenerami, mediatorami i specjalistami.
        </p>

        <p className="text-gray-700 mb-16 max-w-2xl">
          Jeśli Twoja działalność pomaga mężczyznom
          rozwiązywać realne problemy lub rozwijać życie —
          możesz zostać partnerem platformy.
        </p>

        <Link
          href="/dla-partnerow/zgloszenie"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg mb-20"
        >
          Zgłoś swoją działalność
        </Link>


        {/* PARTNER PREMIUM */}

        <section>

          <h2 className="text-2xl font-semibold mb-6">
            Partner Premium
          </h2>

          <ul className="space-y-3 text-gray-700">

            <li>– wyższa pozycja w wynikach wyszukiwania</li>
            <li>– wyróżniona karta partnera</li>
            <li>– oznaczenie „Polecany przez MenMind”</li>
            <li>– większa widoczność w momentach kryzysowych użytkowników</li>

          </ul>

        </section>

      </div>

    </main>

  )

}