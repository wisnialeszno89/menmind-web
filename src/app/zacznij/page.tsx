"use client"

import { useRouter } from "next/navigation"

export default function ZacznijPage() {

  const router = useRouter()

  function go(world: string) {
    router.push(`/world/${world}`)
  }

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold text-black mb-6">
          Od czego chcesz zacząć?
        </h1>

        <p className="text-black max-w-xl mb-16">
          Wybierz sytuację która najlepiej opisuje moment,
          w którym jesteś teraz.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* KRYZYS */}

          <button
            onClick={() => go("kryzys")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold mb-2">
              Mam kryzys
            </h2>

            <p className="text-sm mb-4">
              Rozstanie, chaos, stres, trudne decyzje.
            </p>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>• zrozum co się dzieje</li>
              <li>• uspokój emocje</li>
              <li>• znajdź pierwszy krok</li>
            </ul>

          </button>


          {/* ODBUDOWA */}

          <button
            onClick={() => go("odbudowa")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold mb-2">
              Chcę się odbudować
            </h2>

            <p className="text-sm mb-4">
              Wracam do równowagi i chcę poukładać życie.
            </p>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>• odzyskaj energię</li>
              <li>• uporządkuj dzień</li>
              <li>• wróć do działania</li>
            </ul>

          </button>


          {/* WZROST */}

          <button
            onClick={() => go("wzrost")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold mb-2">
              Chcę się rozwijać
            </h2>

            <p className="text-sm mb-4">
              Buduję silniejsze życie i dyscyplinę.
            </p>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>• wyznacz kierunek</li>
              <li>• buduj dyscyplinę</li>
              <li>• rozwijaj potencjał</li>
            </ul>

          </button>


          {/* OJCOSTWO */}

          <button
            onClick={() => go("ojcostwo")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold mb-2">
              Chodzi o moje dziecko
            </h2>

            <p className="text-sm mb-4">
              Relacja z dzieckiem lub sprawy ojcostwa.
            </p>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>• popraw relację</li>
              <li>• zrozum sytuację prawną</li>
              <li>• odzyskaj kontakt</li>
            </ul>

          </button>

        </div>

      </div>

    </main>
  )
}