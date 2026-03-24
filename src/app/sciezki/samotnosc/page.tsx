import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function SamotnoscPage(){
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Samotność
        </h1>

        <p className="text-gray-700 mb-10">
          Samotność pogłębia chaos i stres.
          Pierwszym krokiem jest wyjście z izolacji.
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Odezwij się do jednej osoby
          </div>

          <div className="border rounded-lg p-4">
            Wyjdź z domu
          </div>

          <div className="border rounded-lg p-4">
            Znajdź społeczność
          </div>

        </div>

        <Link
          href="/narzedzia/minimum"
          className="block border p-4 rounded-lg mb-4"
        >
          👉 Zrób pierwszy krok
        </Link>

        <FindSupportCTA />

      </div>

      {/* 🔥 CTA marketplace */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="border rounded-xl p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Nie musisz wychodzić z tego sam
          </h2>

          <p className="text-gray-600 mb-6">
            Rozmowa, grupa wsparcia lub społeczność
            mogą pomóc szybciej wrócić do ludzi.
          </p>

          <FindSupportCTA
            label="Zobacz dostępne wsparcie"
            className="inline-block border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          />

        </div>
      </section>

    </main>
  )
}