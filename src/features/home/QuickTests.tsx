import Link from "next/link"

export default function QuickTests(){
  return (
    <section className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-8">
          Szybkie testy
        </h2>

        <div className="grid md:grid-cols-5 gap-4">

          <Link href="/narzedzia/test-sytuacji" className="border rounded-xl p-5 card-hover">
            Test sytuacji
          </Link>

          <Link href="/narzedzia/test-stresu" className="border rounded-xl p-5 card-hover">
            Test stresu
          </Link>

          <Link href="/narzedzia/test-relacji" className="border rounded-xl p-5 card-hover">
            Test relacji
          </Link>

          <Link href="/narzedzia/test-kierunku" className="border rounded-xl p-5 card-hover">
            Test kierunku
          </Link>

          <Link href="/narzedzia/test-stagnacji" className="border rounded-xl p-5 card-hover">
            Test stagnacji
          </Link>

          <Link href="/narzedzia/test-zmiany-pracy" className="border rounded-xl p-5 card-hover">
          Czy zmieniać pracę?
          </Link>

        </div>

      </div>
    </section>
  )
}