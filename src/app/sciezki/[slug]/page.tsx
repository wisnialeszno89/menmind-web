import { notFound } from "next/navigation"
import PathSteps from "@/components/PathSteps"

export default function PathPage({ params }: { params: { slug: string } }) {

  if (!params.slug) return notFound()

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Ścieżka
        </h1>

        <p className="text-black mb-12">
          Zobacz kolejne kroki które pomogą przejść przez tę sytuację.
        </p>

        <PathSteps slug={params.slug} />

      </div>

    </main>

  )

}