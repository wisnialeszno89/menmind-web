import Link from "next/link"

export default function HomeWorkHint(){

  return(
    <section className="py-6 border-t">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-sm text-gray-500">
          Potrzebujesz zmiany zawodowej?{" "}
          <Link
            href="/praca"
            className="underline hover:text-black"
          >
            Zobacz ogłoszenia pracy
          </Link>
        </p>

      </div>
    </section>
  )
}