import Link from "next/link"

export default function TrendingToday(){

  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-6">
          Najczęściej wybierane dziś
        </h2>

        <Link
          href="/narzedzia/test-sytuacji"
          className="border rounded-xl p-6 block card-hover"
        >
          Test sytuacji życiowej
        </Link>

      </div>
    </section>
  )
}