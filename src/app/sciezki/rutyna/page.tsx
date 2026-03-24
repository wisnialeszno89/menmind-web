import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function RutynaPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Rutyna i dyscyplina
        </h1>

        <p className="text-gray-700 mb-10">
          Rutyna zmniejsza chaos i pozwala wrócić do działania.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Zacznij dzień o tej samej porze
          </div>

          <div className="border rounded-lg p-4">
            Ustal 3 priorytety
          </div>

          <div className="border rounded-lg p-4">
            Zamknij dzień krótkim podsumowaniem
          </div>

        </div>

        <Link
          href="/narzedzia/minimum"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zacznij małymi krokami
        </Link>

        <FindSupportCTA />

      </div>

    </main>
  )
}