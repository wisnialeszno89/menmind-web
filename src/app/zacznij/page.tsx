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

        {/* TYTUŁ */}

        <h1 className="text-4xl font-semibold text-black mb-6">
          Od czego chcesz zacząć?
        </h1>

        <p className="text-black max-w-xl mb-16">
          Nie musisz wiedzieć dokładnie czego potrzebujesz.
          Wybierz sytuację która jest najbliższa temu,
          gdzie jesteś teraz.
        </p>

        {/* OPCJE */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* KRYZYS */}

          <button
            onClick={() => go("kryzys")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold text-black mb-2">
              Mam kryzys
            </h2>

            <p className="text-black text-sm">
              Rozstanie, chaos, stres, problemy w życiu.
            </p>

          </button>

          {/* ODBUDOWA */}

          <button
            onClick={() => go("odbudowa")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold text-black mb-2">
              Chcę się odbudować
            </h2>

            <p className="text-black text-sm">
              Potrzebuję odzyskać energię i stabilność.
            </p>

          </button>

          {/* WZROST */}

          <button
            onClick={() => go("wzrost")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold text-black mb-2">
              Chcę się rozwijać
            </h2>

            <p className="text-black text-sm">
              Dyscyplina, kierunek, rozwój życia.
            </p>

          </button>

          {/* OJCOSTWO */}

          <button
            onClick={() => go("ojcostwo")}
            className="border rounded-xl p-8 text-left hover:shadow"
          >

            <h2 className="text-xl font-semibold text-black mb-2">
              Chodzi o moje dziecko
            </h2>

            <p className="text-black text-sm">
              Relacja z dzieckiem, sprawy ojcostwa.
            </p>

          </button>

        </div>

      </div>

    </main>

  )
}