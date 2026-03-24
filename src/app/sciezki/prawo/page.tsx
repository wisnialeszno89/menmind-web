import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function PrawoPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Sprawy prawne
        </h1>

        <p className="text-gray-700 mb-10">
          Kontakty z dzieckiem, opieka i sprawy formalne wymagają spokoju
          i jasnych kroków.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Zbierz dokumenty
          </div>

          <div className="border rounded-lg p-4">
            Spisz aktualną sytuację
          </div>

          <div className="border rounded-lg p-4">
            Określ czego chcesz
          </div>

          <div className="border rounded-lg p-4">
            Skonsultuj możliwe opcje
          </div>

        </div>

        <Link
          href="/narzedzia/brain-dump"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Uporządkuj sytuację
        </Link>

        <FindSupportCTA />

      </div>

    </main>
  )
}