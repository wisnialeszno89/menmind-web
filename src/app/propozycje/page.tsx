import ProposalsGrid from "@/components/ProposalsGrid"
import CitySearch from "@/components/CitySearch"

export default function ProposalsPage() {

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Propozycje
        </h1>

        <p className="text-gray-700 max-w-xl mb-10">
          Znajdź aktywności, wydarzenia i miejsca które pomagają rozwijać życie,
          poznawać ludzi i zdobywać nowe doświadczenia.
        </p>

        <ProposalsGrid />
        <CitySearch />

      </div>

    </main>

  )

}