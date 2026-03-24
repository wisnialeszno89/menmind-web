import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function DyscyplinaPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Dyscyplina
        </h1>

        <p className="text-gray-700 mb-10">
          Dyscyplina to system małych powtarzalnych działań.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Ustal jeden nawyk
          </div>

          <div className="border rounded-lg p-4">
            Wybierz stałą porę
          </div>

          <div className="border rounded-lg p-4">
            Powtarzaj bez negocjacji
          </div>

        </div>

        <Link
          href="/narzedzia/minimum"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zacznij od minimum
        </Link>

        <FindSupportCTA />

      </div>

    </main>
  )
}