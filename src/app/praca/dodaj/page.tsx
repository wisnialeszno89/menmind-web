import AddJobForm from "@/components/jobs/AddJobForm"
import Link from "next/link"

export const metadata = {
  title: "Dodaj ogłoszenie pracy | MenMind",
  description:
    "Dodaj ogłoszenie pracy. Szukasz pracownika lub pracy? Opublikuj ogłoszenie w MenMind.",
}

export default function Page(){

  return(
    <main className="max-w-2xl mx-auto px-6 py-20">

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">MenMind</Link>
        {" / "}
        <Link href="/praca">Praca</Link>
        {" / "}
        Dodaj ogłoszenie
      </nav>

      <h1 className="text-3xl font-semibold mb-4">
        Dodaj ogłoszenie pracy
      </h1>

      <p className="text-gray-600 mb-8">
        Dodaj krótkie ogłoszenie. Bez CV i formalności.
        Po publikacji pojawi się na liście.
      </p>

      <AddJobForm />

      <div className="mt-10 text-sm text-gray-500">
        Publikując ogłoszenie potwierdzasz, że treść jest zgodna z prawem
        i nie narusza regulaminu serwisu.
      </div>

    </main>
  )
}