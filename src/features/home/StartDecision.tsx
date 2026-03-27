import Link from "next/link"

export default function StartDecision(){
  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-6">
          Nie wiesz od czego zacząć?
        </h2>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/narzedzia/test-sytuacji"
            className="border px-4 py-2 rounded-lg card-hover"
          >
            Mam chaos
          </Link>

          <Link
            href="/narzedzia/test-relacji"
            className="border px-4 py-2 rounded-lg card-hover"
          >
            Problemy w relacji
          </Link>

          <Link
            href="/narzedzia/test-stresu"
            className="border px-4 py-2 rounded-lg card-hover"
          >
            Stres
          </Link>

          <Link
            href="/narzedzia/test-kierunku"
            className="border px-4 py-2 rounded-lg card-hover"
          >
            Brak kierunku
          </Link>

        </div>

      </div>
    </section>
  )
}