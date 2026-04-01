import Link from "next/link"

export const metadata = {
  title: "Chcę się rozwijać, ale nie wiem od czego zacząć | MenMind",
  description: "Chcesz się rozwijać zawodowo? Zobacz pierwszy krok."
}

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 leading-relaxed">

      <h1 className="text-3xl font-semibold mb-6">
        Chcę się rozwijać, ale nie wiem od czego zacząć
      </h1>

      <p className="mb-4">
        To częsty moment.
      </p>

      <p className="mb-8">
        Czujesz, że możesz więcej.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Problem
      </h2>

      <p className="mb-4">
        Za dużo opcji.
      </p>

      <p className="mb-8">
        Brak kierunku.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Zacznij od rynku
      </h2>

      <p className="mb-4">
        Zobacz czego potrzebują pracodawcy.
      </p>

      <p className="mb-8">
        To daje realny kierunek.
      </p>

      <div className="border rounded-xl p-6 mb-10">

        <h3 className="font-semibold mb-2">
          Sprawdź wymagania rynku
        </h3>

        <Link
          href="/praca"
          className="inline-block border border-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Zobacz oferty pracy
        </Link>

      </div>

      <p>
        Rozwój bez kierunku
        to tylko chaos.
      </p>

    </article>
  )
}