import Link from "next/link"

export default function QuickTests(){
  return (
    <section className="py-16 border-t">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-3 text-center">
          Zacznij od testu
        </h2>

        <p className="text-sm text-gray-500 text-center mb-8">
          Zajmie 2 minuty i pokaże kolejny krok
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          <Link 
            href="/narzedzia/test-sytuacji" 
            className="border rounded-xl p-5 hover:bg-gray-50 transition"
          >
            Test sytuacji
          </Link>

          <Link 
            href="/narzedzia/test-stagnacji" 
            className="border rounded-xl p-5 hover:bg-gray-50 transition"
          >
            Test stagnacji
          </Link>

          <Link 
            href="/narzedzia/test-zmiany-pracy" 
            className="border rounded-xl p-5 hover:bg-gray-50 transition"
          >
            Czy zmieniać pracę
          </Link>

        </div>

      </div>
    </section>
  )
}