import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function StabilnoscPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Nowa stabilność
        </h1>

        <p className="text-gray-700 mb-10">
          Stabilność zaczyna się od powtarzalnych fundamentów dnia.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Stała pobudka
          </div>

          <div className="border rounded-lg p-4">
            Plan dnia
          </div>

          <div className="border rounded-lg p-4">
            Wieczorne zamknięcie
          </div>

        </div>

        <Link
          href="/narzedzia/stabilizacja"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zbuduj stabilizację
        </Link>

        <FindSupportCTA />

      </div>

    </main>
  )
}