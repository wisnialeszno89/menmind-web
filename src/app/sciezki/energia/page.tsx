import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function EnergiaPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Powrót do energii
        </h1>

        <p className="text-gray-700 mb-10">
          Energia wraca gdy uporządkujesz podstawy: sen, ruch i chaos mentalny.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Ustal stałą godzinę snu
          </div>

          <div className="border rounded-lg p-4">
            Dodaj 20 minut ruchu
          </div>

          <div className="border rounded-lg p-4">
            Ogranicz chaos informacyjny
          </div>

        </div>

        <Link
          href="/narzedzia/reset"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zacznij od resetu
        </Link>

        <FindSupportCTA />

      </div>

    </main>
  )
}