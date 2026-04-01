import Link from "next/link"

export const metadata = {
  title: "Chcę robić coś więcej niż tylko pracować | MenMind",
  description: "Czujesz, że praca to za mało? Zobacz co dalej."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Chcę robić coś więcej niż tylko pracować
      </h1>

      <p className="mb-4">
        Praca. Dom. Sen.
      </p>

      <p className="mb-8">
        I tak w kółko.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        To częsty moment
      </h2>

      <p className="mb-4">
        Pojawia się poczucie,
        że życie to coś więcej.
      </p>

      <p className="mb-8">
        Ale nie wiadomo od czego zacząć.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Pierwszy krok
      </h2>

      <p className="mb-4">
        Sprawdź czy obecna praca
        nie blokuje Twojej energii.
      </p>

      <p className="mb-8">
        Czasem zmiana daje przestrzeń na więcej.
      </p>

      <div className="border rounded-xl p-6 mb-10">

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Sprawdź inne możliwości pracy
        </Link>

      </div>

      <p>
        Więcej energii w pracy
        to więcej energii w życiu.
      </p>

    </article>
  )
}