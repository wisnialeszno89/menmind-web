import Link from "next/link"

export default function Footer() {

  return (

    <footer className="border-t bg-white mt-24">

      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-10 text-sm">

        <div>

          <div className="font-semibold text-lg mb-2">
            MenMind
          </div>

          <p className="text-gray-600">
            Platforma wsparcia dla mężczyzn.
          </p>

        </div>

        <div className="space-y-2">

          <p className="font-semibold mb-2">
            Platforma
          </p>

          <Link href="/kryzys" className="block text-gray-600 hover:text-black">
            Kryzys
          </Link>

          <Link href="/odbudowa" className="block text-gray-600 hover:text-black">
            Odbudowa
          </Link>

          <Link href="/wzrost" className="block text-gray-600 hover:text-black">
            Wzrost
          </Link>

          <Link href="/ojcostwo" className="block text-gray-600 hover:text-black">
            Ojcostwo
          </Link>

        </div>

        <div className="space-y-2">

          <p className="font-semibold mb-2">
            Kontakt
          </p>

          <Link href="/kontakt" className="block text-gray-600 hover:text-black">
            Formularz kontaktowy
          </Link>

          <Link href="/dla-partnerow" className="block text-gray-600 hover:text-black">
            Dla partnerów
          </Link>

        </div>

      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} MenMind
      </div>

    </footer>

  )

}