import Link from "next/link"

type Props = {
  title: string
  intro: string
}

export default function Hero({ title, intro }: Props) {
  return (
    <section className="py-28 bg-white border-b">

      <div className="container-mm text-center max-w-3xl">

        <h1 className="heading-xl mb-6">
          {title}
        </h1>

        <p className="text-lead mb-10">
          {intro}
        </p>

        {/* 🔥 GŁÓWNA AKCJA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/narzedzia/test-sytuacji"
            className="bg-gray-100 text-black rounded-xl px-8 py-4 text-lg font-medium hover:bg-gray-200 transition"          >
            Zacznij od testu
          </Link>

          {/* 🧠 BACKUP */}
          <Link
            href="/narzedzia"
            className="border rounded-xl px-8 py-4 hover:shadow"
          >
            Zobacz narzędzia
          </Link>

        </div>

      </div>

    </section>
  )
}