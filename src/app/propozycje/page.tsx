import ProposalsGrid from "@/components/ProposalsGrid"
import CitySearch from "@/components/suggestions/CitySearch"
import Link from "next/link"
import FeaturedPartners from "@/features/marketplace/FeaturedPartners"

export default function ProposalsPage() {

  return(

    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* 🔥 HERO */}
        <h1 className="text-4xl font-semibold mb-6">
          Znajdź rozwiązania i sprawdzone opcje działania
        </h1>

        <p className="text-gray-700 max-w-xl mb-12">
          Specjaliści, usługi i możliwości dopasowane do kryzysu, odbudowy i wzrostu.
          Wybierz obszar i działaj.
        </p>

        {/* 🔥 TEST (opcjonalny start) */}
        <div className="bg-gray-50 border rounded-xl p-6 mb-16">
          <h2 className="font-semibold mb-2">
            Nie wiesz od czego zacząć?
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Zrób szybki test i zobacz dopasowane opcje.
          </p>

          <Link
            href="/narzedzia/test-sytuacji"
            className="inline-block border border-black px-4 py-2 rounded-lg text-sm hover:bg-black hover:text-white transition"
          >
            Zrób szybki test
          </Link>
        </div>

        {/* 🔥 KATEGORIE */}
        <h2 className="text-2xl font-semibold mb-8">
          Wybierz obszar
        </h2>

        <ProposalsGrid />

        <div className="mt-24">

        <h2 className="text-2xl font-semibold mb-8">
        Popularne teraz
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

        <Link
        href="/propozycje/psycholog"
        className="border rounded-xl p-5 hover:shadow"
        >
        🧠 Psycholog
        </Link>

        <Link
        href="/propozycje/coaching"
        className="border rounded-xl p-5 hover:shadow"
        >
        🎯 Coaching
        </Link>

        <Link
        href="/propozycje/prawo"
        className="border rounded-xl p-5 hover:shadow"
        >
        ⚖️ Prawo
        </Link>

        </div>

        </div>
        {/* 🔥 MIASTA (opcjonalne) */}
        <div className="mt-24">

          <h2 className="text-2xl font-semibold mb-6">
            Lub znajdź w swoim mieście
          </h2>

          <CitySearch
         baseHref="/propozycje"
         placeholder="Wpisz miasto"
         tip="Znajdź lokalne usługi i wsparcie"
        />

        </div>

        <div className="mt-24">

        <h2 className="text-2xl font-semibold mb-8">
        Dostępne od razu online
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

        <Link href="/propozycje/psycholog" className="border p-5 rounded-xl">
        🌍 Psycholog online
        </Link>

        <Link href="/propozycje/coaching" className="border p-5 rounded-xl">
        🌍 Coaching online
        </Link>

        <Link href="/propozycje/mental" className="border p-5 rounded-xl">
        🌍 Mental online
        </Link>

    </div>

    </div>

        {/* 🔥 FEATURED */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold mb-8">
            Najczęściej wybierane
          </h2>

          <FeaturedPartners />
        </div>

      </div>

    </main>

  )

}