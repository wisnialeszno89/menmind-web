import Link from "next/link"

export const metadata = {
  title: "Wypalenie zawodowe u mężczyzny | MenMind",
  description: "Jak rozpoznać i wyjść z wypalenia."
}

export default function Page(){
  return(
    <main className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Wypalenie zawodowe u mężczyzny
        </h1>

        <p className="mb-8">
          Wypalenie to sygnał, że potrzebujesz zmiany.
        </p>

        <Link href="/narzedzia/test-wypalenia" className="block border p-4 rounded-lg">
          👉 Zrób test wypalenia
        </Link>

      </div>
    </main>
  )
}