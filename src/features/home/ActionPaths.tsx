import Link from "next/link"

export default function ActionPaths(){
  return (
    <section className="py-16 bg-gray-50 border-t border-b">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold text-black mb-2">
          Wybierz swoją sytuację
        </h2>

        <p className="text-gray-500 mb-8">
          Nie musisz wiedzieć od czego zacząć. Kliknij to co jest Ci najbliższe.
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          <Link 
            href="/kryzys"
            className="border rounded-xl p-5 hover:shadow transition bg-white"
          >
            <div className="font-semibold mb-1">
              Rozstanie / rozwód
            </div>
            <div className="text-sm text-gray-600">
              Pierwsze kroki gdy wszystko się sypie
            </div>
          </Link>

          <Link 
            href="/ojcostwo"
            className="border rounded-xl p-5 hover:shadow transition bg-white"
          >
            <div className="font-semibold mb-1">
              Walka o dziecko
            </div>
            <div className="text-sm text-gray-600">
              Kontakty, alienacja, opieka
            </div>
          </Link>

          <Link 
            href="/odbudowa"
            className="border rounded-xl p-5 hover:shadow transition bg-white"
          >
            <div className="font-semibold mb-1">
              Chcę się odbudować
            </div>
            <div className="text-sm text-gray-600">
              Powrót do równowagi i siły
            </div>
          </Link>

          <Link 
            href="/wzrost"
            className="border rounded-xl p-5 hover:shadow transition bg-white"
          >
            <div className="font-semibold mb-1">
              Chcę się rozwijać
            </div>
            <div className="text-sm text-gray-600">
              Mental, relacje, rozwój
            </div>
          </Link>

          <Link 
            href="/kryzys"
            className="border rounded-xl p-5 hover:shadow transition bg-white"
          >
            <div className="font-semibold mb-1">
              Problemy finansowe
            </div>
            <div className="text-sm text-gray-600">
              Gdy grunt się osuwa
            </div>
          </Link>

          <Link 
            href="https://navimind.app"
            className="border rounded-xl p-5 hover:shadow transition bg-black text-white"
          >
            <div className="font-semibold mb-1">
              Nie wiem co robić
            </div>
            <div className="text-sm opacity-80">
              Zapytaj AI Navimind
            </div>
          </Link>

        </div>

      </div>
    </section>
  )
}