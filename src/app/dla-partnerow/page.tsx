import Link from "next/link"

export const metadata = {
  title: "Dla partnerów | MenMind",
  description:
    "Dołącz do platformy wsparcia dla mężczyzn i pokaż swoją ofertę tysiącom użytkowników.",
}

export default function PartnerzyPage() {

  return (

    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* HEADER */}

        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
  Docieraj do mężczyzn, którzy realnie szukają pomocy
</h1>

<div className="h-px w-16 bg-blue-600 mb-10" />

<p className="text-gray-700 mb-10 max-w-2xl">
  MenMind łączy użytkowników z konkretnymi specjalistami i miejscami.
  Nie budujemy zasięgu — kierujemy ludzi gotowych do działania.
</p>

<p className="text-gray-700 mb-16 max-w-2xl">
  Jeśli prowadzisz terapię, mediacje, treningi lub rozwój —
  możesz być dokładnie tam, gdzie ktoś właśnie szuka rozwiązania.
</p>


        {/* STATYSTYKI PLATFORMY */}

        <div className="grid md:grid-cols-3 gap-10 mb-20">

          <div>

            <p className="text-3xl font-semibold text-black">
              12 000+
            </p>

            <p className="text-gray-500 text-sm">
              użytkowników miesięcznie
            </p>

          </div>

          <div>

            <p className="text-3xl font-semibold text-black">
              850+
            </p>

            <p className="text-gray-500 text-sm">
              artykułów czytanych dziennie
            </p>

          </div>

          <div>

            <p className="text-3xl font-semibold text-black">
              300+
            </p>

            <p className="text-gray-500 text-sm">
              kliknięć partnerów miesięcznie
            </p>

          </div>

        </div>


        {/* CTA */}

        <div className="flex flex-wrap gap-4 mb-20">

          <Link
            href="/dla-partnerow/pakiety"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg"
          >
            Zobacz pakiety współpracy
          </Link>

          <Link
            href="/dla-partnerow/zgloszenie"
            className="border border-gray-300 px-8 py-4 rounded-lg"
          >
            Zgłoś swoją działalność
          </Link>

        </div>


        {/* PARTNER PREMIUM */}

        <section>

          <h2 className="text-2xl font-semibold mb-6">
            Partner Premium
          </h2>

          <ul className="space-y-3 text-gray-700 mb-10">

            <li>– wyższa pozycja w wynikach wyszukiwania</li>
            <li>– wyróżniona karta partnera</li>
            <li>– oznaczenie „Polecany przez MenMind”</li>
            <li>– większa widoczność w momentach kryzysowych użytkowników</li>
            <li>– statystyki odwiedzin i kliknięć</li>

          </ul>

          <Link
            href="/dla-partnerow/pakiety"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg"
          >
            Sprawdź pakiety
          </Link>

        </section>
<Link
href="/dla-partnerow/popyt"
className="text-blue-600 underline"
>
Zobacz gdzie firmy są najbardziej poszukiwane
</Link>
<section className="mt-20 border-t pt-12">

  <h3 className="text-xl font-semibold mb-4">
    Liczba miejsc jest ograniczona
  </h3>

  <p className="text-gray-600 mb-6 max-w-xl">
    W każdej kategorii i mieście pokazujemy ograniczoną liczbę partnerów.
    Decyduje kolejność zgłoszeń i dopasowanie do użytkowników.
  </p>

  <Link
    href="/dla-partnerow/zgloszenie"
    className="inline-block bg-black text-white px-6 py-3 rounded-lg"
  >
    Dołącz teraz
  </Link>

</section>
      </div>

    </main>

  )

}