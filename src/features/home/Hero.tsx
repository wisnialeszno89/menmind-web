import Link from "next/link"

type Props = {
  title: string
  intro: string
}

export default function Hero({ title, intro }: Props) {
  return (
    <section className="py-24 bg-white border-b">

      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-2xl mx-auto text-center">

          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            {title}
          </h1>

          <p className="text-base md:text-lg text-neutral-600 mb-10">
            {intro}
          </p>

          <Link
            href="/narzedzia/test-sytuacji"
            className="block w-full bg-neutral-800 text-white py-4 rounded-xl hover:bg-neutral-700 transition text-lg"
          >
            Zacznij od testu
          </Link>

          <p className="text-xs text-gray-400 mt-3 mb-6">
            zajmie mniej niż 2 minuty
          </p>

          <div className="mt-6 text-sm text-gray-500">
          lub <Link href="/narzedzia" className="underline">zobacz narzędzia</Link>
          </div>

          </div>

      </div>

    </section>
  )
}