import Link from "next/link"

export default function CTA() {

  return (

    <section className="bg-black text-white py-20 mt-20">

      <div className="container-mm text-center">

        <h2 className="text-3xl font-semibold mb-6">

          Znajdź wsparcie dla swojej sytuacji

        </h2>

        <p className="mb-8 opacity-80">

          Psycholog, mediator lub specjalista.

        </p>

        <Link
          href="/propozycje"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >

          Sprawdź dostępne możliwości

        </Link>

      </div>

    </section>

  )

}