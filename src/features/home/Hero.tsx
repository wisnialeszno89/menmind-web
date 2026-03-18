import Link from "next/link"

type Props = {
  title: string
  intro: string
}

export default function Hero({ title, intro }: Props) {

  return (

    <section className="py-20 bg-white border-b">

      <div className="max-w-xl mx-auto px-6 text-center">

        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          {title}
        </h1>

        <p className="text-base md:text-lg text-neutral-600 mb-8">
          {intro}
        </p>

        {/* 🔥 GŁÓWNY CTA */}

        <Link
          href="/narzedzia/test-sytuacji"
          className="block w-full bg-black text-white py-4 rounded-xl hover:opacity-90 transition"
        >
          Zacznij od testu
        </Link>

        {/* 🔽 SUBTELNA OPCJA */}

        <Link
          href="/narzedzia"
          className="block mt-4 text-sm text-gray-500 hover:underline"
        >
          albo zobacz narzędzia
        </Link>

      </div>

    </section>

  )

}