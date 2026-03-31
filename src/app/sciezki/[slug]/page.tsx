import { notFound } from "next/navigation"
import Link from "next/link"
import { paths } from "@/data/paths"
import FindSupportCTA from "@/components/FindSupportCTA"
import TrackPathClient from "@/components/TrackPathClient"

export const dynamic = "force-dynamic"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const path = paths.find(p => p.slug === slug)

  if (!path) return notFound()

  return (

    <main className="bg-white min-h-screen">

      {/* zapis wejścia w ścieżkę */}
      <TrackPathClient />

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          {path.title}
        </h1>

        <p className="text-gray-700 mb-10">
          {path.description}
        </p>

        <div className="space-y-4 mb-10">

          <div className="border rounded-lg p-4">
            Zatrzymaj chaos i oceń sytuację
          </div>

          <div className="border rounded-lg p-4">
            Wybierz jeden mały krok
          </div>

          <div className="border rounded-lg p-4">
            Wprowadź prostą strukturę dnia
          </div>

        </div>

        <Link
          href="/narzedzia/test-sytuacji"
          className="block border p-4 rounded-lg mb-4"
          onClick={() => localStorage.setItem("mm_last_action", "test-sytuacji")}
        >
          👉 Sprawdź swoją sytuację
        </Link>

        <FindSupportCTA />

        <Link
          href={`/navimind?state=${path.navimindState}`}
          className="block mt-6 text-sm underline"
          onClick={() => localStorage.setItem("mm_last_action", "navimind")}
        >
          Porozmawiaj w NaviMind
        </Link>

      </div>

    </main>

  )
}