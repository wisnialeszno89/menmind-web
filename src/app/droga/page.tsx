import MenMindCompass from "@/components/MenMindCompass"
import NaviMindButton from "@/features/navimind/NaviMindButton"
import Link from "next/link"

export default function Page() {

  return (

    <main className="max-w-5xl mx-auto px-6 py-20">

      <header className="mb-16 text-center">

        <h1 className="text-4xl font-semibold mb-6">
          Twoja droga
        </h1>

        <p className="text-neutral-600 max-w-2xl mx-auto">
          Każdy mężczyzna przechodzi przez różne momenty w życiu.
          Kryzys, odbudowę, rozwój i ojcostwo.
          Ten kompas pomaga zrozumieć gdzie jesteś teraz
          i jaki może być kolejny krok.
        </p>

      </header>

      <MenMindCompass />

      <section className="mt-20 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          Nie wiesz od czego zacząć?
        </h2>

        <NaviMindButton />

        <div className="mt-10">

          <Link
            href="/narzedzia"
            className="text-sm text-neutral-600 underline"
          >
            zobacz narzędzia które pomogą Ci się ustabilizować
          </Link>

        </div>

      </section>

    </main>

  )

}