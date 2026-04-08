import Link from "next/link"

export default function QuickTests(){
  return (
    <section className="py-10 border-t">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-sm text-gray-500 mb-4">
          Najczęściej wybierane na start
        </div>

        <div className="grid md:grid-cols-3 gap-3">

          <Link 
            href="/narzedzia/test-stresu" 
            className="border rounded-xl p-4 text-sm hover:bg-gray-50 transition"
          >
            Test stresu
          </Link>

          <Link 
            href="/narzedzia/test-wypalenia" 
            className="border rounded-xl p-4 text-sm hover:bg-gray-50 transition"
          >
            Test wypalenia
          </Link>

          <Link 
            href="/narzedzia/test-relacji" 
            className="border rounded-xl p-4 text-sm hover:bg-gray-50 transition"
          >
            Test relacji
          </Link>

        </div>

      </div>
    </section>
  )
}