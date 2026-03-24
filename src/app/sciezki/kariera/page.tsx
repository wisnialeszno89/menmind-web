import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function KarieraPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Kariera
        </h1>

        <p className="text-gray-700 mb-10">
          Rozwój zawodowy zaczyna się od jasnego kierunku i małych kroków.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Określ co chcesz zmienić
          </div>

          <div className="border rounded-lg p-4">
            Sprawdź nowe możliwości
          </div>

          <div className="border rounded-lg p-4">
            Zrób pierwszy ruch
          </div>

        </div>

        <Link
          href="/narzedzia/brain-dump"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Określ kierunek
        </Link>

        <FindSupportCTA />

      </div>

    </main>
  )
}